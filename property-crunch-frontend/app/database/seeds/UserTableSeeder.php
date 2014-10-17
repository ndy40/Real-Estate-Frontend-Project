<?php
 
class UserTableSeeder extends Seeder {
 
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    DB::table('users')->delete();
 
        User::create(array(s
 
            'email'    			=> 	'arslan@pixelative.co',
			'permissions'		=>	'all',
			'activated'             => 	1,
			'activation_code' 	=> 	1234567890,
			'first_name'		=> 	'Arslan',
            'last_name'    		=> 	'Akram',
            'password'      	=> 	Hash::make('password'), //hashes our password nicely for us
        ));
 
    }
 
}
