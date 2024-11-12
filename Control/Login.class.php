<?php

spl_autoload_register(function($class) {
	
	if (file_exists("../Model/" . $class . ".class.php")) {
		require "../Model/" . $class . ".class.php";
	}
	
	if (file_exists("../Object/" . $class . ".class.php")) {
		require "../Object/" . $class . ".class.php";
	}
});

class Login {

    private $controller, 
                    $model;

    public function __construct() {
        
        $this->controller = new UserT();
        $this->model = new Model( 'users' );
        
    }
    
    public function execute() {
        
        try {
            
            if ( $this->validatePostNullFields() == false) {
                
                throw new Exception('Há campos obrigatórios em branco');
            }
			
			$criteria = new TCriteria();
				$criteria->add( new TFilter( 'user_nickname', '=', $_POST['user_nickname'] ) );
				$criteria->add( new TFilter( 'user_password', '=', $_POST['user_password'] ) );
            
            $user = $this->model->selectRegister( array('user_id', 'user_nickname', 'user_password'), $criteria );
			$user = $user[0];
			
			if (!$user) {
				throw new Exception('Não foi possível efetuar login! Confira seus dados e tente novamente.');
			}
			
			session_start();
			$_SESSION['user_id'] = $user['user_id'];
			
			include '../View/postar.html';
			
            
        } catch (Exception $e) {

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

$instance = new Login();
    $instance->execute();