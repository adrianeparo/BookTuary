<?php

spl_autoload_register(function($class) {
	
	if (file_exists("../Model/" . $class . ".class.php")) {
		require_once "../Model/" . $class . ".class.php";
	}
	
	if (file_exists("../Object/" . $class . ".class.php")) {
		require_once "../Object/" . $class . ".class.php";
	}
});

class Postar {

	private $controller, 
					$model;

	public function __construct() {

		$this->controller = new ReviewT();
		$this->model = new Model( 'reviews' );

	}
	
	public function execute() {
		
		try {
			
			$this->controller->setProperty( "review_score"	, intval($_POST["review_score"]) );
			$this->controller->setProperty( "review_comment", $_POST["review_comment"] );
			
			print_r($this->controller);
			die();
			
			$this->model->setColumns($this->controller);
			$this->model->insertRegister();
			
		} catch (Exception $e) {
			
			echo $e->getMessage();
		}
	}
	
}

$instance = new Postar();
	$instance->execute();