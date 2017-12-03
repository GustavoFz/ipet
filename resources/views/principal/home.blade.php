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
        <a href="#" data-activates="nav-mobile"
           class="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
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
<main>
    <div class="section" style="padding-right: 10px; padding-left: 10px">
        <div class="row">
            <!-- Barra de Carregamento -->
            <div id="loader" class="progress" style="display: none; z-index: inherit">
                <div class="indeterminate"></div>
            </div>
            <!-- /Barra de Carregamento -->
            <div id="conteudo-home" class="col s12">

                sasasasasasasas
            </div>
        </div>
    </div>
</main>

<!-- Estrutura dos Modais -->
<!-- Modal Animal -->
<div id="modal-animal" class="modal">
    <div class="modal-content">
        <div id="login" class="col s12">
            <h4 class="center-align">Adicione um Pet</h4>
            <form action="{{route('animal.save')}}" method="post">
                {{ csrf_field() }}
                <div class="row">
                    <div class="input-field col s6">
                        <i class="material-icons prefix">person</i>
                        <input id="nome" name="nome" type="text" class="validate">
                        <label for="nome">Nome</label>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">person</i>
                        <select name="especie">
                            <option value="" disabled selected>Especie</option>
                            <option value="cachorro">Cachoroo</option>
                            <option value="gato">Gato</option>
                        </select>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">person</i>
                        <input id="idade" name="idade" type="number" class="validate">
                        <label for="idade">Idade</label>
                    </div>

                        <input id="id_user" name="id_user" type="hidden" value="1">
                        {{--Deixar assim depois da autenticação <input id="id_user" name="id_user" type="hidden" value="{{user->id}}"> --}}
                </div>
                <div class="row">
                    <div class="col s12">
                        <button class="btn waves-effect waves-light right black yellow-text" type="submit"
                                name="action">
                            Adicionar
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /Modal Animal -->

<!-- Modal Serviço -->
<div id="modal-servico" class="modal">
    <div class="modal-content">
        <div id="login" class="col s12">
            <h4 class="center-align">Escolha um ou mais serviços:</h4>
            <form class="" action="" method="post">
                {{ csrf_field() }}
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
