<?php

spl_autoload_register(function($class) {
	require "Object/" . $class . ".class.php";
});

class ReviewT extends AbstractT {

	protected $review_id,
				$review_score,
				$review_comment,
				$review_book_id,
				$review_user_id;
}
