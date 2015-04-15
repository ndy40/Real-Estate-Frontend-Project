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

class AccountsLogic extends BusinessLogicAbstract {

    /**
     * @var BaseRepositoryInterface
     */
    protected $userRepository;

    /**
     * @param BaseRepositoryInterface $repo
     */
    public function __construct(BaseRepositoryInterface $repo) {
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
    public function registerUser($credentials, $group = 'basic', $activate = true) {
        $valid = ValidationRules::validate($credentials, ValidationRules::$VALIDATE_USER);

        if ($valid !== ValidationRules::$VALIDATION_PASS) {
            $messages = array();
            foreach ($valid->all() as $message) {
                $messages[] = $message;
            }
            throw new ValidationException(implode(",", $messages));
        }

        unset($credentials["password_confirmation"]);

        $success = $this->userRepository->create($credentials, $group, $activate);
        return $success;
    }

    public function login($email, $password, $remember) {
        return $this->userRepository->login($email, $password, $remember);
    }

    public function currentUser() {
        return $this->userRepository->currentUser();
    }

    public function logout() {
        $this->userRepository->logout();
        $currentUser = $this->currentUser();
        if ($currentUser === null) {
            return true;
        } else {
            throw new Exception("Failed to logout");
        }
    }

    /**
     * randomValue method
     * This action is used for create a radom token which is used in email verification for signup
     * 
     * @return reset the profile details
     * 
     */
    public function randomValue() {
        return $randstring = substr(md5(uniqid() . rand()), 0, 30);
    }

    public function checkUserViaCode($activation_code) {
        return $this->userRepository->checkUserViaCode($activation_code);
    }

    public function getActiveUserList($i, $recordCount) {
        return $this->userRepository->getActiveUserList($i, $recordCount);
    }

    public function getActiveUserCount() {
        return $this->userRepository->getActiveUserCount();
    }

}

