<?php
namespace controllers\services;

use BaseController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Mail;



class AuthController extends BaseController
{
    protected  $accountLogic;

    public function __construct()
    {
        $this->accountLogic = App::make("AccountsLogic");
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        $user = $this->accountLogic->currentUser();
        if ($user) {
            return Response::json($user->toArray(), 200);
        }

        return Response::json(array("flash" => "User not loggged in"), 401);
    }

    /**
     * Used to login user. Parameters in post is email and password.
     */
    public function postIndex()
    {
        $data = null;
        try {
            $email = Input::get("email");
            $password = Input::get("password");
            $remember = Input::has("remember") 
                ? Input::get("remember") : false;

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
            $data = array ("flash" => $ex->getMessage());
        } 
        
        return Response::json($data, 401);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function getLogout()
    {
        $isLoggedOut = $this->accountLogic->logout();
        return Response::json($isLoggedOut, 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function postRegister()
    {
        try {
            $data = Input::get();
            $group = array_key_exists("group", $data) ? $data["group"] : "basic";
            $activate = array_key_exists("activate", $data) ? $data["activate"] : true;
            unset($data["group"]);
            unset($data["activate"]);
            $credentials = $data;
            $output = $this->accountLogic->registerUser($credentials, $group, $activate);
            try {
                // Add logic for Sending registration Email.
                Mail::send('emails.account.welcome', $data, function($message) use ($data)
                {
                    $message->to(
                        $data["email"],
                        $data["first_name"] . " " . $data["last_name"]
                    )
                        ->subject('Welcome to nello');
                });
            } catch (\Exception $ex) {
                Log::error($ex->getMessage());
            }


            return Response::json($output, 200);
            //Trigger event for pushing account creation email to client. Make this a model event maybe.
        }
        catch (\Exception $ex) {
            return Response::json(array("flash" => $ex->getMessage()), 401);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function postUpdate($id)
    {
            //
    }
        
}
