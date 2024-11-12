<?php

spl_autoload_register(function($class) {
	
	if (file_exists("../Model/" . $class . ".class.php")) {
		require "../Model/" . $class . ".class.php";
	}
	
	if (file_exists("../Object/" . $class . ".class.php")) {
		require "../Object/" . $class . ".class.php";
	}
});


class Livros {
	
	private $controller,
					$model;
	
	public function __construct() {
		$this->model = new Model( 'books' );
	}
	
	public function execute() {
		
		$book_list = BookT::generateBookList();
		
		foreach ($book_list as $current) {
			
			$book = new BookT();
				$book->setProperty('book_title', $current['book_title']);
				$book->setProperty('book_synopsis', $current['book_synopsis']);
				$book->setProperty('book_number_pages', $current['book_number_pages']);
				$book->setProperty('book_genre', $current['book_genre']);
				$book->setProperty('book_author', $current['book_author']);
				
			$this->model->setColumns($book);
			$this->model->insertRegister();
			
			echo $book->getProperty('book_title') . ' cadastrado com sucesso.<br>';
		}
	}
}


$instance = new Livros();
$instance->execute();