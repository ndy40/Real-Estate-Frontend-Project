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
    public function login($username, $password, $remember) {
        
    }

    public function create(array $user, $groupName = "basic") 
    {
        try {
            $user = Sentry::createUser($user);
            //
            $group = Sentry::findGroupByName(strtolower($groupName));
            
        } catch (GroupNotFoundException $ex) {
            Log::warning("Group not found " . $ex->getMessage());
        } catch (\Exception $ex) {
            
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
