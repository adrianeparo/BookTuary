<?php

spl_autoload_register(function($class) {
	
	if (file_exists("../Model/" . $class . ".class.php")) {
		require "../Model/" . $class . ".class.php";
	}
	
	if (file_exists("../Object/" . $class . ".class.php")) {
		require "../Object/" . $class . ".class.php";
	}
	
	if (file_exists("../Utils/" . $class . ".class.php")) {
		require "../Utils/" . $class . ".class.php";
	}
});


class Cadastro {

	private $controller, 
					$model;

	public function __construct() {
		
		// NO CONSTRUCT, INICIA-SE O CONTROLLER DA TABELA QUE VAI SER ALTERADA
		$this->controller = new UserT();
		// É DEFINIDO O MODEL PARA FAZER AS OPERAÇÕES NESSA TABELA
		$this->model = new Model( 'users' );

	}

	public function execute() {

		try {

			if ( $this->validatePostNullFields() == false ) {
				throw new Exception( 'Há campos obrigatórios em branco' );
			}
			
			if ( !EmailVerification::validateEmailFormat( $_POST['user_email'] ) ) {
				throw new Exception( 'Formato de e-mail inválido.' );
			}

			foreach ( $_POST as $key => $value) {

				$this->controller->setProperty($key, $value);
			}
			
			$this->model->setColumns( $this->controller );
			
			if ($this->model->selectRegister( array( 'user_email' ) , new TFilter('user_email', '=', $_POST['user_email']))) {
				throw new Exception( 'Já existe um usuário com esse e-mail' );
			}
			
			$this->model->insertRegister();
			
			// DIRECIONAR PARA O SISTEMA
			echo 'Cadastrado com sucesso';
			

		} catch ( Exception $e ) {

			echo $e->getMessage();
		}
	}


	private function validatePostNullFields() {

		foreach ( $_POST as $current ) {

			if (empty($current)) {
				return false;
			}
			
		}

		return true;
	}

}

$instance = new Cadastro();
	$instance->execute();