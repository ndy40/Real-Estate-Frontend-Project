<?php

class AuthController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Authentication Controller
	|--------------------------------------------------------------------------
	|
	| This is used for Login and Logout
	|
	*/

	public function Login() {
		if (Auth::attempt(Input::only('email','password'))) {
			return Auth::user();
			return 'Success';
		} else {
			return 'invalid username/pass combo';
		}
	}
	
	public function Logout() {
		Auth::logout();
		return 'logged out';
	}
}

