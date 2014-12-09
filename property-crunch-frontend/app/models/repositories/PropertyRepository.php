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

        if ($user->favourite !== null) {
            $temp = explode(",", $user->favourite);
        }

        if (!array_search($propertyId, $temp)) {
            $temp[] = $propertyId;
        }

        $user->favourite = implode(",", $temp);

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

        if ($user->favourite == null) {
            return false;
        } else {
            $temp = explode(",", $user->favourite);
            $index = array_search($propertyId, $temp);
            unset($temp[$index]);
            if (empty($temp)) {
                $user->favourite = null;
            } else {
                $user->favourite = implode(",", $temp);
            }

        }

        return $user->update();
    }
}
