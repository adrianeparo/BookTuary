<?php

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

class TSqlUpdate extends TSqlInstruction {
	
	public function getInstruction() {
		
		if ( empty( $this->column_values ) ) {
			throw new Exception( 'Colunas e valores não definidos. Impossível montar uma query.' );
		}
		
		$query_fields = array();
		
		foreach ($this->column_values as $column => $value) {
			$query_fields[] = "$column = $value";
		}
		
		$this->sql = 'UPDATE ' . $this->entity;
		$this->sql .= ' SET ' . implode(', ', $query_fields);
		
		if ( $this->criteria ) {
			$this->sql .= ' WHERE ' . $this->criteria->dump();
		}
		
		return $this->sql;
	}
}