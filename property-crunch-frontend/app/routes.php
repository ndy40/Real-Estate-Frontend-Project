<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', "HomeController@index");

/* Generate New Pages - Letting AngularJS Handle it*/
App::missing(function($exception) {
 	return View::make('index');
});

/* create prefixed group for login and logout */
Route::group(array('prefix'=>'/api'),function(){
	Route::controller("auth", "controllers\\services\\AuthController");
});

