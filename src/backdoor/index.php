<?php
    session_start();

    if (isset($_POST['logout']) || !isset($_SESSION['uid'])) {
        unset($_SESSION);
        session_destroy();
    }

    include_once('includes/header.php');
?>

    <body>

<?php
    if (isset($_SESSION['uid']) || (isset($_POST['login']) && isset($_POST['pwd']))) {
        if (isset($_SESSION['uid'])) {
            echo "<div id=\"react-loader\" class=\"react-loader\"></div>\n<div id=\"react-body\" class=\"react-body\"></div>";
        } else { //isset($_POST['login']) && isset($_POST['pwd'])
            include_once('includes/bdd/bdd.php');

            $login = $_POST['login'];
            $pwd = $_POST['pwd'];

            if (XSSCheck($login) || BasicSQLInjectionCheck($login)/* || !preg_match("#^\w+$#", $login)*/) {
                echo "<style>.login-error{display:inline-block;}</style>\n<div id=\"react-login\" class=\"react-login\"></div>";
            } else if (XSSCheck($pwd) || BasicSQLInjectionCheck($pwd)/* || !preg_match("#[\w\s]+#", $pwd)*/) {
                echo "<style>.passwd-error{display:inline-block;}</style>\n<div id=\"react-login\" class=\"react-login\"></div>";
            } else {
                echo '<div>'.$login.' '.$pwd.'</div>';
                $bdd = new bdd();

                echo $bdd->login($login, $pwd) ? "<div id=\"react-loader\" class=\"react-loader\"></div>\n<div id=\"react-body\" class=\"react-body\"></div>" : "<div id=\"react-login\" class=\"react-login\"></div>";
            };
        }
    } else {
        echo "<div id=\"react-login\" class=\"react-login\"></div>";
    }
?>

        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.color.js"></script>
        <script src="js/jquery.tablesorter.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/modernizr.min.js"></script>
        <script src="js/classie.js"></script>
        <script src="js/uiMorphingButton.js"></script>
        <script src="dist/bundle.js"></script>
    </body>
</html>