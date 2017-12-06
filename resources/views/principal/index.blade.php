<!DOCTYPE html>
<html lang="pt-br" style="overflow-y:auto" class="">
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

<body class="grey lighten-4">
<nav class="nav-extended black custon-nav" role="navigation">
    <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo">
            <img src="img/logo-branca.svg" style="height:55px">
        </a>
        <ul class="right hide-on-med-and-down">
            <li>
                <a class="white-text modal-trigger" href="#modal-servico">Solicitar Serviços</a>
            </li>
            <li>
                @if(Auth::guest())
                <a class="waves-effect waves-light btn modal-trigger white grey-text" href="#modal-login">Entrar</a>
                @else
                <a class="waves-effect waves-light btn modal-trigger white grey-text" href="#modal-login">{{Auth::user()->name}}</a>
                @endif
            </li>
        </ul>

        <ul id="nav-mobile" class="side-nav black">
            <li>
                <a class="waves-effect waves-light btn modal-trigger white grey-text" href="#modal-login">Login</a>
            </li>
            <li>
                <a class="white-text modal-trigger" href="#modal-servico">Solicitar Serviços</a>
            </li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse  ">
            <i class="material-icons white-text">menu
            </i>
        </a>
    </div>
</nav>

<div class="parallax-container">
    <div class="parallax">
        <img src="img/banho.jpg">
    </div>
</div>
<div class="section black">
    <div class="row container">
        <div class="col m5">
            <h2 class="header white-text left-align">Delivery-Banho</h2>
        </div>
        <div class="col m7">
            <div class="12">
                <p class="grey-text text-darken-3 lighten-3 right-align">
                    Parallax is an effect where the background content or image in this
                    case, is moved at a different speed than the foreground content while scrolling.
                </p>
            </div>
            <div class="col m12 center">

                <a class="waves-effect waves-light btn white black-text modal-trigger"
                   href="#modal-servico">Solicitar</a>

            </div>
        </div>

    </div>
</div>

<div class="parallax-container">
    <div class="parallax"><img src="img/tosa.jpg"></div>
</div>
<div class="section black">
    <div class="row container">

        <div class="col m8">
            <div class="12">
                <p class="grey-text text-darken-3 lighten-3 left-align">
                    Nos dias quentes, nada melhor que não se preoculpar se seu pet está passnado calor devido ao pelo
                    grande.
                </p>
            </div>
            <div class="col m12 center">

                <a class="waves-effect waves-light btn white black-text modal-trigger"
                   href="#modal-servico">Solicitar</a>

            </div>
        </div>

        <div class="col m4">
            <h2 class="header white-text right-align">Delivery-Tosa</h2>
        </div>

    </div>
</div>

<div class="parallax-container">
    <div class="parallax">
        <img src="img/sport-pet.jpg">
    </div>
</div>
<div class="section black">
    <div class="row container">
        <div class="col m4">
            <h2 class="header white-text">Sport Pet</h2>
        </div>
        <div class="col m8">
            <div class="12">
                <p class="white-text lighten-3">
                    Seu Pet se exercitando sem você precisar sair de casa, uma tarde de diverão para seu Pet.
                </p>
            </div>
            <div class="col m12 center">

                <a class="waves-effect waves-light btn white black-text modal-trigger"
                   href="#modal-servico">Solicitar</a>

            </div>
        </div>

    </div>
</div>

<!-- Estrutura dos Modais -->
<!-- Modal Login -->
<div id="modal-login" class="modal" style="overflow-y: hidden">
    <div class="modal-content">
        <div id="login" class="col s12">
            <h4 class="center-align">Login</h4>
            <form action="{{ route('login') }}" method="post">
                {{ csrf_field() }}
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
                        <a class="btn waves-effect waves-light yellow black-text" href="/register">Registrar</a>
                    </div>

                    <div class="col s6">
                        <button class="btn waves-effect waves-light right black yellow-text" type="submit"
                                name="action">
                            Entrar
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /Modal Login -->

<!-- Modal Serviço -->
<div id="modal-servico" class="modal" style="overflow-y: hidden">
    <div class="modal-content">
        <div id="login" class="col s12">
            <h4 class="center-align">Escolha o serviço desejado</h4>
            <form class="" action="" method="post">
                {{ csrf_field() }}

                <div class="row">
                    <div class="input-field col s12">
                        <select>
                            <option value="" disabled selected>--</option>
                            <option value="1">Banho</option>
                            <option value="2">Tosa</option>
                            <option value="3">Sport-Pet</option>
                        </select>
                        <label>Escolha um Serviço</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                        <label for="textarea1">Escreva uma Observação</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <button class="btn waves-effect waves-light right black yellow-text " type="submit"
                                name="action">
                            Escolhi!
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
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
