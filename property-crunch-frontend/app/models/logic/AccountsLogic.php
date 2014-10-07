<?php
/**
 * Created by PhpStorm.
 * User: ndy40
 * Date: 28/09/2014
 * Time: 18:11
 */

namespace models\logic;


use models\abstracts\BusinessLogicAbstract;
use models\exceptions\ValidationException;
use models\interfaces\BaseRepositoryInterface;
use models\utility\ValidationRules;

class AccountsLogic extends BusinessLogicAbstract
{
    /**
     * @var BaseRepositoryInterface
     */
    protected $userRepository;

    /**
     * @param BaseRepositoryInterface $repo
     */
    public function __construct(BaseRepositoryInterface $repo)
    {
        if (!($repo instanceof BaseRepositoryInterface)) {
            throw new \Exception("Invalid instance of BaseRepositoryInterface passed as parameter.");
        }
        //instantiate repository
        $this->userRepository = $repo;
    }

    /**
     * Method for registering users.
     *
     * @param array $credentials - Holds the registration credentials of the user (first_name, last_name, password etc).
     * @param string $group - The name of the group to assign the user to.
     * @param bool $activate - This flag is use to set if the newly created user account should be activated right away.
     * @return mixed - Returns false if something goes wrong or an instance of User class.
     * @throws \models\exceptions\ValidationException
     */
    public function registerUser($credentials, $group = 'basic', $activate = true)
    {
        $valid = ValidationRules::validate($credentials, ValidationRules::$VALIDATE_USER);

        if ($valid !== ValidationRules::$VALIDATION_PASS) {
            $messages = implode(",", $valid);
            throw new ValidationException($messages);
        }

        $success = $this->userRepository->create($credentials, $group, $activate);
        if ($success) {
            return true;
        }

        return $success;
    }
    
    public function login($email, $password, $remember)
    {
        return $this->userRepository->login($email, $password, $remember);
    }
    
    public function currentUser()
    {
        return $this->userRepository->currentUser();
    }
} 
