<?php

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

class TSqlSelect extends TSqlInstruction {
	
	private $columns_return = array();
	
	public function addColumn( $column ) {
		
		if ( is_array($column) ) {
			$this->columns_return += $column;
		}
		else {
			$this->columns_return[] = $column;
		}
	}
	
	public function getInstruction() {
		
		$this->sql = 'SELECT ' ;
		
		$this->sql .= ( empty($this->columns_return) ? '*' : implode(', ', $this->columns_return) );
		
		if ($this->sql[strlen($this->sql) - 2] == ',') {
			$this->sql = substr_replace($this->sql, '', -1);
		}
		
		$this->sql .= ' FROM ' . $this->entity;
		
		if ($this->criteria) {
			$this->sql .= ' WHERE ' . $this->criteria->dump();
		}
		
		
		return $this->sql;
	}
}