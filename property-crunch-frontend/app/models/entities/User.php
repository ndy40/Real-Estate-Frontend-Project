<?php
namespace models\entities;

use Cartalyst\Sentry\Users\Eloquent\User;

class User extends User {
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
        
        public function addFavorite($id)
        {
            if (!is_array($this->favourites)) {
                $this->favourites = array();
            }
        
            if (!in_array($id, $this->favourites)) {
                $this->favourites[] = $id;
            }
        }
        
        public function removeFavourite($id) 
        {
            if (in_array($id, $this->favourites)) {
                $index = array_search($id, $this->favourites);
                unset($this->favourites[$index]);
            }
        }

}
