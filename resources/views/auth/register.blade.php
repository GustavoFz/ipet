<!DOCTYPE html>
<html lang="pt-br" style="overflow-y: auto">
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

<body>

<header>

    <!-- Barra Principal -->

    <nav class="top-nav red darken-2">
        <!--
        <div class="container">
            <a href="#" data-activates="nav-mobile" class="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
                <i class="material-icons">menu</i>
            </a>
        </div>
        -->
        <div class="fixed-action-btn horizontal">
            <a href="#" data-activates="nav-mobile" class="btn-floating btn-large red button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
                <i class="material-icons">menu</i>
            </a>
        </div>
        <div class="container">
            <div class="nav-wrapper">
                <a id="logo-container" href="/home" class="brand-logo">
                    <img src="img/logo-branca.svg" style="height:55px">
                </a>
            </div>
        </div>
    </nav>
    <!-- /Barra Principal -->

    <!-- Barra Lateral -->
    <ul id="nav-mobile" class="side-nav fixed">
        <!-- Perfil -->
        <li class="black">
            <div class="row">
                <div class="col s4 m4 l4" style="padding-top: 15px">
                    <img src="img/perfil.svg" class="circle cyan">
                </div>
                <div class="col s8 m8 l8" style="padding-top: 30px">
                    <a class="btn-flat dropdown-button waves-effect waves-light grey-text white" href="#"
                       data-activates="profile-dropdown-nav">
                        Andrhé
                        <i class="material-icons right">keyboard_arrow_down</i>
                    </a>
                    <ul id="profile-dropdown-nav" class="dropdown-content"
                        style="white-space: nowrap; position: absolute; top: 59.8px; left: 100.5px; display: none; opacity: 1;">
                        <li>
                            <a href="#" id="perfil" class="btn_carrega_conteudo grey-text text-darken-1">
                                <i class="material-icons">face</i>Perfil
                            </a>
                        </li>
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">keyboard_tab</i>Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <!-- /Perfil -->

        <!-- Menu Opções -->
        <li class="no-padding">
            <ul class="collapsible" data-collapsible="accordion">
                <li>
                    <a class="collapsible-header waves-effect waves-light btn grey white-text modal-trigger"
                       href="#modal-servico">Solicitar Serviço</a>
                </li>

                <li class="bold">
                    <a class="collapsible-header waves-effect waves-cyan active">
                        <i class="material-icons">star</i>
                        <span class="nav-text">Serviços</span>
                    </a>
                    <div class="collapsible-body">
                        <ul>
                            <li>
                                <a href="#" class="btn_carrega_conteudo" id="servicos">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Meus Serviços</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="bold">
                    <a class="collapsible-header waves-effect waves-cyan">
                        <i class="material-icons">pets</i>
                        <span class="nav-text">Animais</span>
                    </a>
                    <div class="collapsible-body">
                        <ul>
                            <li>
                                <a href="#" class="btn_carrega_conteudo" id="animals">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Meu Animais</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </li>
        <!-- /Menu Opções -->
    </ul>
    <!-- /Barra Lateral -->
</header>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading" style="text-align: center;"><h3>Cadastro de usuário</h3></div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">Nome</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Senha</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password-confirm" class="col-md-4 control-label">Confirmar senha</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </form>
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
