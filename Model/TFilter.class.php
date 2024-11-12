<?php

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

class TFilter extends TExpression {
    
    private $variable, 
                $operator, 
                $value;

    public function __construct( $variable, $operator, $value ) {
        
        $this->variable = $variable;
        $this->operator = $operator;
        $this->value    = $this->transform( $value );
    }
    
    /**
     * Método que recebe o valor do TFilter e o converte para o formato correto para compor a query
     * @param any $value
     * @return string
     */
    private function transform( $value ) {
        
        if (is_array( $value )) {
            
            $value_set = array();
            
            foreach ( $value as $current ) {
                
                if (is_integer( $current )) {
                    $value_set[] = $current;
                }
                elseif (is_string( $current )) {
                    $value_set[] = "'$current'";
                }
                elseif (is_bool( $current )) {
                    $value_set[] = ($current ? 'TRUE' : 'FALSE');
                }
                else {
                    $value_set[] = $current;
                }
            }
            
            $result = "( " .implode(', ', $value_set). " )";
        }
        elseif (is_string( $value )) {
            $result = "'$value'";
        }
        elseif (is_null( $value )) {
            $result = 'NULL';
        }
        elseif (is_bool( $value )) {
            $result = ( $value ? 'TRUE' : 'FALSE' );
        }
        else {
            $result = $value;
        }
        
        return $result;
        
    }
    
    /**
     * Método que retorna o filtro em forma de string
     * @return string
     */
    public function dump() {
        
        return "{$this->variable} {$this->operator} {$this->value}";
    }
}