<?php
namespace models\repositories;

use models\interfaces\UserRepositoryInterface;
use models\entities\User;
use Cartalyst\Sentry\Facades\Native\Sentry;
use Cartalyst\Sentry\Groups\GroupNotFoundException;
use Illuminate\Support\Facades\Log;



/**
 * Description of UserRepository
 *
 * @author ndy40
 */
class UserRepository implements UserRepositoryInterface
{
    /**
     * Validation rules.
     * 
     * @var array 
     */
    protected $USER_VALIDATION_RULES = array (
        "email"      => "required|email",
        "first_name" => "required|alpha-dash|size:40",
        "last_name"  => "required|alpha-dash|size:40"
    );
    
    public function login($username, $password, $remember) {
        
    }
    
    /**
     * Create a new user. 
     * 
     * @param array $user - An associative array of users data (first_name, email etc).
     * @param type $groupName - The group the user should be assigned to.
     * @return boolean
     */
    public function create(array $user, $groupName = "basic") 
    {
        
        $newUser = Sentry::createUser($user);
        //
        $group = Sentry::findGroupByName(strtolower($groupName));
        $newUser->addGroup($group);
        
        if ($newUser) {
            return $newUser;
        }
        
        return false;
    }

    public function currentUser() {
        return Sentry::getUser();
    }

    public function isLoggedIn($id, $deactivate) {
        return Sentry::check();
    }

    public function update($user) {
        
    }
    
    public function logout() 
    {
        Sentry::logout();
    }

}
