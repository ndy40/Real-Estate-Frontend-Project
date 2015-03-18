<?php

/*
 * Repository for Property stuff.
 */

namespace models\repositories;

use models\entities\User;
use models\interfaces\BaseRepositoryInterface;


/**
 * Description of PropertyRepository
 *
 * @author ndy40
 */
class PropertyRepository implements  BaseRepositoryInterface {

    /**
     * Add a property to the User's favourite.
     *
     * @param int $userId
     * @param int $propertyId
     */
    public function addFavourite($userId, $propertyId)
    {
        $user = User::find($userId);
        $temp = array();

        if ($user->favourites !== null) {
            $temp = explode(",", $user->favourites);
        }

        if (!array_search($propertyId, $temp)) {
            $temp[] = $propertyId;
        }

        $user->favourites = implode(",", $temp);

        return $user->update();
    }

    /**
     * Remove a favourite property.
     *
     * @param int $userid
     * @param int $propertyId
     * @return bool|int
     */
    public function removeFavourite($userid, $propertyId)
    {
        $user = User::find($userid);
        $temp = array();

        if ($user->favourites == null) {
            return false;
        } else {
            $temp = explode(",", $user->favourites);
            $index = array_search($propertyId, $temp);
            unset($temp[$index]);
            if (empty($temp)) {
                $user->favourites = null;
            } else {
                $user->favourites = implode(",", $temp);
            }

        }

        return $user->update();
    }
}
