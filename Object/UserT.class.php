<?php

require_once 'AbstractT.class.php';

class UserT extends AbstractT {
    
    protected $user_id,
				$user_name,
                $user_nickname,
                $user_email,
                $user_password, 
                $user_birthdate;
}

