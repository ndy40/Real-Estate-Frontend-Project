<?php

/*
 * This is a Property controller for perfomring property based stuff.
 * E.g Saving favourite. This could be refactored in future.
 */
namespace controllers\services;

use BaseController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Response;
use models\logic\PropertyLogic;

/**
 * Description of PropertyController
 *
 * @author ndy40
 */
class PropertyController extends BaseController
{
    /**
     * @var PropertyLogic
     */
    protected $propertyLogic;

    public function __construct()
    {
        $this->propertyLogic = App::make("PropertyLogic");
    }

    /**
     * Add a property to favourite.
     *
     * @param int $userId
     * @param int $propertyId
     */
    public function getAddFavourite($userId, $propertyId)
    {
        if (is_numeric($userId) && is_numeric($propertyId)) {
            $saved = $this->propertyLogic->addFavourite($userId, $propertyId);
            if ($saved) {
                $message = "Saved";
            } else {
                $message = "Failed to save.";
            }

            return Response::json($message, 200);
        }

        return Response::json("bad request", 400);
    }

    public function getRemoveFavourite($userId, $propertyId)
    {
        if (is_numeric($userId) && is_numeric($propertyId)) {
            $saved = $this->propertyLogic->removeFavourite($userId, $propertyId);
            if ($saved) {
                $message = "Saved";
            } else {
                $message = "Failed to save.";
            }

            return Response::json($message, 200);
        }

        return Response::json("bad request", 400);
    }

}
