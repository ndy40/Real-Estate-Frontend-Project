<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
 
class CreateUsersTable extends Migration {
 
 /**
 * Run the migrations.
 *
 * @return void
 */
 public function up()
 {
 Schema::create('users', function(Blueprint $table)
 {
 $table->increments('id');
 
 $table->string('email')->unique();
 $table->string('password'); 
 $table->text('permissions');
 $table->boolean('activated');
 $table->string('activation_code');
 $table->timestamp('last_login');
 $table->string('first_name');
 $table->string('last_name');
 $table->string('remember_token')->nullable(); //required as of 4.1.28 upgrade for remember me
 
 $table->timestamps();//creates timestamps for created and udpated at
 });
 }
 
 /**
 * Reverse the migrations.
 *
 * @return void
 */
 public function down()
 {
 Schema::drop('users');
 }
 
}