<pre>
<?php

include_once "../Object/UserT.class.php";

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

class Model {

    protected $conn,
                $table, 
                $columns;

    public function __construct( $table ) {
        
        $this->table = $table;
        $this->columns = array();
    }
    
    /**
     * Recupera os campos preenchidos de uma tabela e preenchem o array $columns do Model
     * @param Table $table
     */
    public function setColumns( AbstractT $table ) {
        
        foreach ( $table->getAllValues() as $key => $value ) {
			
			$this->columns[$key] = $value;
        }
    }
	
	public function addColumns( $columns ) {
		
		if ( is_array( $columns ) ) {
			
			foreach ( $columns as $current ) {
				$this->columns[$current] = '';
			}
		}
		
		else {
			$this->columns[$columns] = '';
		}
		
	}
	
	public function getColumns() {
		return $this->columns;
	}
	
	
	public function insertRegister() {
		
		$sql = new TSqlInsert( $this->table );
		
		foreach ( $this->columns as $column => $value ) {
			
			if (!$value) {
				continue;
			}
			
			if (is_string($value)) {
				$sql->setRowData( $column, "'$value'" );
			}
			else {
				$sql->setRowData( $column, $value );
			}
			
		}
		
		$this->openConn();
		$this->conn->exec($sql->getInstruction());
		$this->closeConn();
	}
	
	public function updateRegister( $criteria = null ) {
		
		$sql = new TSqlUpdate( $this->table );
		
		if ( $criteria ) {
			$sql->setCriteria( $criteria );
		}
		
		foreach ( $this->columns as $column => $value ) {
			$sql->setRowData($column, $value);
		}
		
		$this->openConn();
		$this->conn->exec($sql->getInstruction());
		$this->closeConn();
		
	}
	
	public function selectRegister( $columns, $criteria = null ) {
		
		if ( !is_array($columns) ) {
			throw new Exception('Pârametro $columns precisa ser array!');
		}
		
		$sql = new TSqlSelect( $this->table );
		
		if ( $criteria ) {
			$sql->setCriteria( $criteria );
		}
		
		foreach ( $columns as $current ) {
			
			$sql->addColumn( $current );
		}
		
		$this->openConn();
		$stmt = $this->conn->query($sql->getInstruction());
		$this->closeConn();
		
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	
	public function deleteRegister( $criteria = null ) {
		
		$sql = new TSqlDelete( $this->table );
		
		if ( $criteria ) {
			$sql->setCriteria( $criteria );
		}
		
		$this->openConn();
		$this->conn->exec($sql->getInstruction());
		$this->closeConn();
	}
    
    /**
     * Abre conexão com o banco de dados. Usa 'booktuary' como o BD padrão
     * @throws Exception
     */
    private function openConn() {
        
        try {
            
            $this->conn = new PDO('mysql:hostname=localhost;dbname=booktuary', 
                                   'root', 
                                   null, 
                                   array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            
            if (!$this->conn) {
                throw new Exception( 'Conexão falhou.' );
            }
            
        } catch (Exception $e) {
            echo $e->getMessage();
        }
        
    }
    
    /**
     * Fecha a conexão com o banco de dados
     */
    private function closeConn() {
        
        $this->conn = null;
        
    }
    
}

/* FUNCIONAMENTO DOS MÉTODOS DE QUERY
$controller = new UserT();
	$controller->setProperty('user_name'		, 'Lucas Marion');
	$controller->setProperty('user_nickname'	, 'ghuma04');
	$controller->setProperty('user_email'		, 'lucasribeiromarion@gmail.com');
	$controller->setProperty('user_password,'	, 'senhafoda2');
	$controller->setProperty('user_birthdate'	, '2003-06-25');
	
$criteria = new TCriteria();
	$criteria->add( new TFilter( 'user_id', '=', 3 ) );
	
$model = new Model('users');
	$model->setColumns($controller);
	$model->deleteRegister( $criteria );
 * 
 */