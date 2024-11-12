<?php

spl_autoload_register(function($class) {
	require "./" . $class . ".class.php";
});

//include_once "./TFilter.class.php";
//include_once "./TExpression.class.php";

class TCriteria extends TExpression {
    
    private $expressions, 
                $operators, 
                $properties;

    /**
     * Método que vai adicionar um filtro ou critério para a TCriteria
     * O filtro é personalizável, mas recebe AND como padrão
     * @param TExpression $expression
     * @param string $operator
     */
    public function add( TExpression $expression, $operator = TExpression::AND_OPERATOR ) {
        
        if (empty( $this->expressions )) {
            $operator = '';
        }
        
        $this->expressions[] = $expression;
        $this->operator[] = $operator;
    }
    
    public function dump() {
        
        $result = '';
        
        
        foreach ( $this->expressions as $i => $expression ) {
            
            $operator = $this->operator[$i];
            $result .= $operator . ' ' . $expression->dump() . ' ';
        }
        
        $result = trim($result);
        return "($result)";
    }
    
    public function setProperty( $property, $value ) {
        $this->properties[$property] = $value;
    }
    
    public function getProperty( $property ) {
        return $this->properties[$property];
    }
}