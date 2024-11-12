<?php

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

class TSqlDelete extends TSqlInstruction {	
	
	public function getInstruction() {
		
		$this->sql = 'DELETE FROM ' . $this->entity;
		
		if ( $this->criteria ) {
			$this->sql .= ' WHERE ' . $this->criteria->dump();
		}
		
		echo $this->sql;
	}
}