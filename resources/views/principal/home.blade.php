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
    <div class="container">
        <a href="#" data-activates="nav-mobile" class="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
            <i class="material-icons">menu</i>
        </a>
    </div>
    <!-- Barra Principal -->
    <!--
    <nav class="top-nav red darken-2">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">IPet</a>
            </div>
        </div>
    </nav>
    <!-- /Barra Principal -->

    <!-- Barra Lateral -->
    <ul id="nav-mobile" class="side-nav fixed">
        <!-- Perfil -->
        <li class="red darken-2">
            <div class="row">
                <div class="col s4 m4 l4" style="padding-top: 15px">
                    <img src="img/perfil.svg" class="circle cyan">
                </div>
                <div class="col s8 m8 l8" style="padding-top: 30px">
                    <a class="btn-flat dropdown-button waves-effect waves-light black-text white" href="#"
                       data-activates="profile-dropdown-nav">
                        Andrhé
                        <i class="material-icons right">keyboard_arrow_down</i>
                    </a>
                    <ul id="profile-dropdown-nav" class="dropdown-content"
                        style="white-space: nowrap; position: absolute; top: 59.8px; left: 100.5px; display: none; opacity: 1;">
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">face</i>Perfil
                            </a>
                        </li>
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">settings</i>Opções
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
                <li class="bold">
                    <a class="collapsible-header waves-effect waves-cyan active">
                        <i class="material-icons">star</i>
                        <span class="nav-text">Serviços</span>
                    </a>
                    <div class="collapsible-body">
                        <ul>
                            <li>
                                <a href="#" class="btn_carrega_conteudo" id="cadastro">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Banho</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="btn_carrega_conteudo" id="cadastro">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Vacinação</span>
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
                            <li>
                                <a href="#" class="btn_carrega_conteudo" id="cadastro">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Sparkline Charts</span>
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
<main>
    <div class="section" style="padding-right: 10px; padding-left: 10px">
        <div class="row">
            <div id="conteudo-home" class="col s12">
                <!-- Barra de Carregamento -->
                <div id="loader" class="progress" style="display: none">
                    <div class="indeterminate"></div>
                </div>
                <!-- /Barra de Carregamento -->
sasasasasasasas
            </div>
        </div>
    </div>
</main>

<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/materialize.js"></script>
<!-- Custom Script -->
<script src="js/init.js"></script>

</body>
</html>
