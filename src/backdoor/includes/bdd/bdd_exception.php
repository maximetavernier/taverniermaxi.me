<?php
	class bdd_exception extends Exception
	{
		public function __construct(Exception $ex)
		{
			$this->message = 'An error has occured in bdd class (' . $ex->getMessage() . ')';
		}
	}
?>