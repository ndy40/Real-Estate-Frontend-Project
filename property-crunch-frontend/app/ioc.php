<?php
/**
 * Created by PhpStorm.
 * User: ndy40
 * Date: 28/09/2014
 * Time: 19:39
 */
App::bind("AccountsLogic", function ($app) {
    return new \models\logic\AccountsLogic(
        new \models\repositories\UserRepository()
    );
});

App::bind("PropertyLogic", function ($app) {
    return new \models\logic\PropertyLogic(
        new \models\repositories\PropertyRepository()
    );
});
