<?php

abstract class AbstractT {

    public function setProperty( $property, $value ) {
        $this->$property = $value;
    }
    
    public function getProperty( $property ) {
        return $this->$property;
    }
    
    public function getAllValues() {
        return get_object_vars( $this );
    }
}
