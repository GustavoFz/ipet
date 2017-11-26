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
        <ul class="right hide-on-med-and-down">
            <li>
                <a class="white-text modal-trigger" href="#modal-servico">Solicitar Serviços</a>
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
    <div class="container">

        <div class="col m12 s12">
            <h2>Banho e Tosa</h2>
        </div>

    </div>
    <div class="section blue"
         style="width:100%; background: url(img/logo-branca.svg) no-repeat; background-size: 350px">
        foto
        <div class="container">
            <div class="row">
                <div class="col m8 push-m4">
                    <div class="m12 white-text" style="margin-bottom: 10px">
                        <h3>Contrate nosso serviço que iremos até a sua casa buscar seu pet!</h3>
                    </div>
                    <div class="m12">
                        <div class="center">
                            <a class="waves-effect waves-light btn black white-text modal-trigger"
                               href="#modal-servico">Solicitar</a>
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
<!-- /Modal Login -->

<!-- Modal Serviço -->
<div id="modal-servico" class="modal">
    <div class="modal-content">
        <div id="login" class="col s12">
            <h4 class="center-align">Escolha um ou mais serviços:</h4>
            <div class="row">
                <p>
                    <input type="checkbox" id="opcao1"/>
                    <label for="opcao1">Banho</label>
                </p>
                <p>
                    <input type="checkbox" id="opcao2"/>
                    <label for="opcao2">Tosa</label>
                </p>
                <p>
                    <input type="checkbox" id="opcao3"/>
                    <label for="opcao3">Vacina</label>
                </p>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Escreva uma Observação</label>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <button class="btn waves-effect waves-light right black yellow-text " type="submit" name="action">
                        Escolhi!
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Modal Serviço -->

<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/materialize.js"></script>
<!-- Custom Script -->
<script src="js/init.js"></script>

</body>
</html>
