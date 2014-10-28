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
    public function authenticate($email, $password, $remember = false) 
    {
        $credentials = array (
            'email' => $email,
            'password' => $password
        );
        $user = Sentry::authenticate($credentials, $remember);
        
        return $user;
    }
    
    
    /**
     * Create a new user. 
     * 
     * @param array $user - An associative array of users data (first_name, email etc).
     * @param type $groupName - The group the user should be assigned to.
     * @return boolean
     */
    public function create(array $user, $groupName = "basic", $activated = true)
    {
        if (!array_key_exists("activated", $user)) {
            $user["activated"] = true;
        }
        
        $newUser = Sentry::createUser($user); 
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

    public function login($email, $password, $remember = false) 
    {
        $user = $this->authenticate($email, $password, $remember);
        if ($user) {
            Sentry::login($user, $remember);
            return true;
        }
        
        return false;
    }

}
