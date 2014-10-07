<?php

/**
 * This is a central class for holding all validation rules that will 
 * be shared across the system. Especially between controllers and models.
 * This provides a single place to update all validation rules.
 *
 * @author ndy40
 */

namespace models\utility;

use Illuminate\Support\Facades\Validator;

class ValidationRules 
{
    
    public static $VALIDATE_USER = "USER_VALIDATION_RULES";
    
    public static $VALIDATION_PASS = true;
  
    /**
     * Validation rules.
     * 
     * @var array 
     */
    protected static $USER_VALIDATION_RULES = array (
        "email"      => "required|email",
        "first_name" => "required|alpha-dash",
        "last_name"  => "required|alpha-dash",
        "password"   => "required|min:8"
    );
    
    /**
     * function to validate passed in data.
     * 
     * @param mixed[] $data
     * @param type $validationtype
     * @return true|MessageBag Returns true if validation passes or MessageBag
     * with error messages outlines.
     */
    public static function validate($data, $validationtype) 
    {
        $validator = Validator::make($data, self::$$validationtype);
        if ($validator->fails()) {
            $messages = $validator->messages();
            return $messages;

        }
        
        return self::$VALIDATION_PASS;

    }
    
    

}
