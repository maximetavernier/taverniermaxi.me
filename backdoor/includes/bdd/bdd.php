<?php
	include_once('bdd_exception.php');

    function XSSCheck($str) {
        if (gettype($str) === 'string' && !preg_match("#^[\w\s]*(<script>[\w\W]*</script>[\w\s]*)+$#", $str))
            return false;
        return true;
    }

    function BasicSQLInjectionCheck($str) {
        if (gettype($str) === 'string' && !preg_match("#^[\w\s]*(OR 1=1'){1}$#", $str))
            return false;
        return true;
    }

	class bdd
	{
		private $conn;
		private $dsn;
		private $user;
		private $password;

		public function __construct()
		{
			$this->dsn = 'mysql:host=taverniegjtatav.mysql.db;dbname=taverniegjtatav';
			$this->user = 'taverniegjtatav';
			$this->password = '0610245227Mt';
			$this->conn = new PDO($this->dsn, $this->user, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
		
		public function __destruct()
		{
		
		}

        public function login($login, $pwd)
        {
            try {
                $select = $this->conn->prepare('SELECT userId FROM privateroom_login WHERE login=:login');
                $select->execute(array('login' => $login));

                if ($select->rowCount() > 0) {
                    $uid = $select->fetch()[0];
                    if ($this->check_pwd($login, $uid, $pwd)) {
                        session_start();
                        $_SESSION['uid'] = $uid;
                        $_SESSION['login'] = $login;
                        return true;
                    }
                }
            } catch (Exception $ex) {
                echo $ex;
            }
            return false;
        }

        private function check_pwd($login, $uid, $pwd)
        {
            $salt = md5($uid);
            $hash = hash("sha1", $login.$salt.$pwd, false);
            $select = $this->conn->prepare('SELECT * FROM privateroom_shadow_passwd WHERE userId=:uid');
            $select->execute(array('uid' => $uid));
            if ($select->rowCount() > 0) {
                $obj = $select->fetch(PDO::FETCH_OBJ);
                if ($obj->hash === substr($hash, 0, 40))
                    return true;
            }
            return false;
        }
	}
?>