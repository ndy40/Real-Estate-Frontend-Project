<?php
namespace models\interfaces;

use models\interfaces\BaseRepositoryInterface;

/**
 *
 * @author ndy40
 */
interface UserRepositoryInterface extends BaseRepositoryInterface {
	public function login($username, $password, $remember);
    
    public function update($user);
    
    public function create($user, $permission = "basic");
    
    /**
     * Method to check if a user is currently logged in
     * @param type $id
     * @param type $deactivate
     */
    public function isLoggedIn($id, $deactivate);
    
    public function logout();
    
    /**
     * Get the Current User Logged in
     */
    public function currentUser();
    
    
    

}
