<?php
/* 
 * This file contains a list of Property Crunch Exceptions
 * @author Ndifreke Ekott <ndy40.ekott@gmail.com>
 * 
 */

App::error(function (\Cartalyst\Sentry\Groups\GroupNotFoundException $ex, $code) {
    Log::error($ex);
});

App::error(function (\models\exceptions\ValidationException $ex, $code) {
    Log::error($ex);
});

App::error(function (Cartalyst\Sentry\Users\UserNotFoundException $ex) {
    if (Request::ajax()) {
        return Response::json(array("flash" => $ex->getMessage()), 401);
    }
});



