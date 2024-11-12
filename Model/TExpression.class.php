<?php

abstract class TExpression {

    const OR_OPERATOR = 'OR';
    const AND_OPERATOR = 'AND';
    
    /**
     * Expressão que todas as classes herdeiras vão herdar para criar suas strings para compor uma query
     */
    abstract public function dump();
}