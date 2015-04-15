<?php

namespace controllers\services;

use BaseController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Mail;

class AuthController extends BaseController {

    protected $accountLogic;

    public function __construct() {
        $this->accountLogic = App::make("AccountsLogic");
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex() {
        $user = $this->accountLogic->currentUser();
        if ($user) {
            return Response::json($user->toArray(), 200);
        }

        return Response::json(array("flash" => "User not loggged in"), 401);
    }

    /**
     * Used to login user. Parameters in post is email and password.
     */
    public function postIndex() {
        $data = null;
        try {
            $email = Input::get("email");
            $password = Input::get("password");
            $remember = Input::has("remember") ? Input::get("remember") : false;

            $isLoggedIn = $this->accountLogic->login($email, $password, $remember);

            if ($isLoggedIn) {
                return Response::json($isLoggedIn, 200);
            }
        } catch (\Cartalyst\Sentry\Users\WrongPasswordException $ex) {
            $data = array("flash" => "Wrong password");
        } catch (\Cartalyst\Sentry\Users\LoginRequiredException $ex) {
            $data = array("flash" => "Login details required.");
        } catch (\Cartalyst\Sentry\Users\UserNotFoundException $ex) {
            $data = array("flash" => "User not found");
        } catch (\Cartalyst\Sentry\Throttling\UserSuspendedException $ex) {
            $data = array("flash" => $ex->getMessage());
        }

        return Response::json($data, 401);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function getLogout() {
        $isLoggedOut = $this->accountLogic->logout();
        return Response::json($isLoggedOut, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function postRegister() {
        try {
            $data = Input::get();
            $group = array_key_exists("group", $data) ? $data["group"] : "basic";
            $activate = array_key_exists("activate", $data) ? $data["activate"] : true;
            unset($data["group"]);
            unset($data["activate"]);

            $data["activated"] = FALSE;
            $credentials = $data;
            $userObj = $this->accountLogic->registerUser($credentials, $group, $activate);
            
            $output = array();
            if (count($userObj) > 0) {
                $activation_code = $this->accountLogic->randomValue();
                $data["activation_code"] = $activation_code;
                $userObj->activation_code = $activation_code;
                $userObj->save();
                unset($data["password"]);
                unset($data["password_confirmation"]);
                $output = array_merge($data, array('id' => $userObj->id));
                try {
                    // Add logic for Sending registration Email.
                    Mail::send('emails.account.welcome', $data, function($message) use ($data) {
                                $message->to($data["email"], $data["first_name"] . " " . $data["last_name"])
                                        ->subject('Welcome to nello');
                            });
                } catch (\Exception $ex) {
                    Log::error($ex->getMessage());
                }
            }

            return Response::json($output, 200);
            //Trigger event for pushing account creation email to client. Make this a model event maybe.
        } catch (\Exception $ex) {
            return Response::json(array("flash" => $ex->getMessage()), 401);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function postUpdate($id) {
        //
    }

    /**
     * postConfirmAccount method
     * activate user account using activation code..
     * 
     * @param string $activation_code
     * @return json
     */
    public function postConfirmAccount($activation_code) {
        if ($activation_code != '') {
            $user = $this->accountLogic->checkUserViaCode($activation_code);
            if (count($user) > 0) {
                $user->activation_code = '';
                $user->activated = TRUE;
                $user->activated_at = date('Y-m-d H:i:s');
                $user->save();
                return Response::json(array("data" => 'success', 'user' => $user), 200);
            } else {
                return Response::json(array("data" => 'Invalid url'), 401);
            }
        } else {
            return Response::json(array("data" => 'Invalid url'), 401);
        }
    }

}
