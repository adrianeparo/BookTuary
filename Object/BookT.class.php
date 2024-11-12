<?php

//spl_autoload_register(function($class) {
//	require_once "Object/" . $class . ".class.php";
//});
require_once 'AbstractT.class.php';

class BookT extends AbstractT {

	protected $book_id, 
				$book_title, 
				$book_synopsis,
				$book_num_pages;
	
}