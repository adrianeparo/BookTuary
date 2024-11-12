<?php

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

abstract class TSqlInstruction {

    protected $sql, 
                $criteria,
                $entity,
				$column_values;
    
	public function __construct( $entity = '' ) {
		$this->entity = $entity;
	}
	
    public function setEntity( $entity ) {
        $this->entity = $entity;
    }
    
    public function getEntity() {
        return $this->entity;
    }
    
    public function setCriteria( $criteria ) {
        $this->criteria = $criteria;
    }
    
    public abstract function getInstruction();
	
	public function setRowData( $column, $value ) {
		
		if ( is_string( $value ) ) {
			$this->column_values[$column] = "$value";
		}
		elseif (is_bool( $value ) ) {
			$this->column_values[$column] = ( $value ? 'TRUE' : 'FALSE' );
		}
		elseif ( isset( $value ) ) {
			$this->column_values[$column] = $value;
		}
		else {
			$this->column_values[$column] = 'NULL';
		}
	}
    
}
