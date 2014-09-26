<?php
/* 
 * This file contains a list of Property Crunch Exceptions
 * @author Ndifreke Ekott <ndy40.ekott@gmail.com>
 * 
 */

App::error(function (\Cartalyst\Sentry\Groups\GroupNotFoundException $ex, $code) {
    Log::error($ex);
});