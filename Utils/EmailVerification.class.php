<?php

class EmailVerification {
	
	public static function validateEmailFormat( $email ) {
		
		if (preg_match('/[\w\d.-_+%@-]+@[\w\d.-_+%@-]+\.[a-zA-Z]{2,}/', $email)) {
			return true;
		}
		
		return false;
	}
}
