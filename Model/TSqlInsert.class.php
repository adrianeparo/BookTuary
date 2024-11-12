<?php

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

final class TSqlInsert extends TSqlInstruction {
	
	protected $column_values = array();
	
	public function setCriteria( $criteria ) {
		throw new Exception('Operações INSERT não aceitam critérios.');
	}
    
    
    public function getInstruction() {
		
		$columns = implode( ', ', array_keys( $this->column_values ) );
		$values	 = implode( ', ', $this->column_values );
		
		$this->sql = 'INSERT INTO ' . $this->entity;
		$this->sql .= " ($columns)";
		$this->sql .= " VALUES ($values) "; 
		return $this->sql;
    }
}