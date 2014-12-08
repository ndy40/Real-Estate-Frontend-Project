<?php
namespace models\entities;


/**
 * Class User
 * @package models\entities
 *
 * @property string first_name
 * @property string last_name
 * @property string email
 * @property string password
 * @property string id
 * @property date last_login
 * @property string activated
 * @property string favourite
 */
class User extends \Cartalyst\Sentry\Users\Eloquent\User {
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

}
