<?php
namespace models\interfaces;

use models\interfaces\BaseRepositoryInterface;

/**
 *
 * @author ndy40
 */
interface UserRepositoryInterface extends BaseRepositoryInterface {
    public function authUser($username, $password);
}
