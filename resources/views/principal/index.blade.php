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
<nav class="nav-extended red custon-nav" role="navigation">
    <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">IPet</a>
        <i
        <ul class="right hide-on-med-and-down">
            <li>
                <a class="white-text" href="#">Solicitar Serviço</a>
            </li>
            <li>
                <a class="waves-effect waves-light btn modal-trigger white red-text" href="#modal-login">Entrar</a>
            </li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
            <li>
                <a class="waves-effect waves-light btn modal-trigger black yellow-text" href="#modal-login">Login</a>
            </li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse  "><i class="material-icons white-text">menu</i></a>
    </div>
</nav>

<div>
    <div class="container yellow lighten-1">

        <div class="col m12 s12">
            <h2>Banho e Tosa</h2>
        </div>

    </div>
    <div class="section blue"
         style="width:100%; background: url(componentes/img/capa/capa-servico1.jpg) no-repeat; height: 350px">
        foto
        <div class="container">
            <div class="row">
                <div class="col m8 push-m4">
                    <div class="m12 black white-text" style="margin-bottom: 10px">
                        <h3>Contrate nosso serviço que iremos até a sua casa buscar seu pet!</h3>
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


<!-- Estrutura dos Modais -->
    <!-- Modal Login -->
<div id="modal-login" class="modal">
    <div class="modal-content">
        <div id="login" class="col s12">
            <h4 class="center-align">Login</h4>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">person</i>
                    <input id="email" name="email" type="email" class="validate">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input id="password" name="password" type="password" class="validate">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row">
                <div class="col s6">
                    <a class="btn waves-effect waves-light yellow black-text" href="/registro">Registrar</a>
                </div>

                <div class="col s6">
                    <button class="btn waves-effect waves-light right black yellow-text" type="submit" name="action">
                        Entrar
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/materialize.js"></script>
<!-- Custom Script -->
<script src="js/init.js"></script>

</body>
</html>
