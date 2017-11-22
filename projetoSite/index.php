<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <title>Starter Template - Materialize</title>

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <!-- Custom CSS -->
    <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>

<body class="white">
<nav class="nav-extended red custon-nav" role="navigation"><!-- nav-extend -> nav-content -->
    <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">IPet</a>
        <ul class="right hide-on-med-and-down">
            <li><a class="waves-effect waves-light btn modal-trigger white red-text" href="#modal1">Login</a></li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
            <li><a class="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse  "><i class="material-icons white-text">menu</i></a>
    </div>
</nav>

<!-- Modal Structure -->
<div id="modal1" class="modal modal-custom-login">
    <div class="modal-content">
        <h4>Login</h4>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">person</i>
                        <input id="email" type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock</i>
                        <input id="password" type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="col s12">
                    <button class="btn waves-effect waves-light right btn-flat red-text " type="submit" name="action">
                        Entrar
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<div>
    <div class="container yellow lighten-1">

        <div class="col m12 s12">
            <h2>Serviço 1</h2>
        </div>

    </div>
    <div class="section blue"
         style="width:100%; background: url(componentes/img/capa/capa-servico1.jpg) no-repeat; height: 350px">
        foto
        <div class="container">
            <div class="row">
                <div class="col m8 push-m4">
                    <div class="m12 black white-text" style="margin-bottom: 10px">
                        <h3>jdsjdjhhshdjshjh</h3>

                        sdsdsad
                    </div>
                    <div class="m12">
                        <div class="center">
                            <a class="waves-effect waves-light btn black white-text" href="">Solicitar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/materialize.min.js"></script>
<!-- Custom Script -->
<script src="js/init.js"></script>

</body>
</html>
