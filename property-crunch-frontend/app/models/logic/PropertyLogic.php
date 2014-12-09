<?php
/**
 * Created by PhpStorm.
 * User: ndy40
 * Date: 02/12/14
 * Time: 06:37
 */

namespace models\logic;

use models\interfaces\BaseRepositoryInterface;
use models\repositories\PropertyRepository;


use models\interfaces\BusinessLogicInterface;

class PropertyLogic implements BusinessLogicInterface
{
    /**
     * @var PropertyRepository
     */
    private $propertyRepo;

    public function __construct(BaseRepositoryInterface $repo) {
        $this->propertyRepo = $repo;
    }

    /**
     * Add Property to user favourite.
     *
     * @param int $userId
     * @param int $propertyId
     * @return bool|int
     */
    public function addFavourite($userId, $propertyId)
    {
        return $this->propertyRepo->addFavourite($userId, $propertyId);
    }

    /**
     * Remove Property from users favourites.
     *
     * @param int $userId
     * @param int $propertyId
     * @return bool|int
     */
    public function removeFavourite($userId, $propertyId)
    {
        return $this->propertyRepo->removeFavourite($userId, $propertyId);
    }
}
