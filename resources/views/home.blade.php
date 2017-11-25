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

<body class="blue lighten-5" style="overflow: hidden">

<header style="padding-left: 300px;">
    <nav class="top-nav blue">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">IPet</a>
            </div>
        </div>
    </nav>
    <ul id="slide-out" class="side-nav fixed leftside-navigation ps-container ps-active-y"
        style="transform: translateX(0px);">
        <li class="user-details cyan darken-2">
            <div class="row">
                <div class="col col s4 m4 l4">
                    <img src="../../images/avatar/avatar-7.png" alt=""
                         class="circle responsive-img valign profile-image cyan">
                </div>
                <div class="col col s8 m8 l8">

                    <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#"
                       data-activates="profile-dropdown-nav">John Doe<i
                                class="mdi-navigation-arrow-drop-down right"></i></a>
                    <ul id="profile-dropdown-nav" class="dropdown-content"
                        style="white-space: nowrap; position: absolute; top: 59.8px; left: 100.5px; display: none; opacity: 1;">
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">face</i> Profile</a>
                        </li>
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">settings</i> Settings</a>
                        </li>
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">live_help</i> Help</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">lock_outline</i> Lock</a>
                        </li>
                        <li>
                            <a href="#" class="grey-text text-darken-1">
                                <i class="material-icons">keyboard_tab</i> Logout</a>
                        </li>
                    </ul>
                    <p class="user-roal">Administrator</p>
                </div>
            </div>
        </li>
        <li class="no-padding">
            <ul class="collapsible" data-collapsible="accordion">
                <li class="bold active">
                    <a class="collapsible-header waves-effect waves-cyan active">
                        <i class="material-icons">dashboard</i>
                        <span class="nav-text">Dashboard</span>
                    </a>
                    <div class="collapsible-body" style="display: block;">
                        <ul>
                            <li>
                                <a href="dashboard-ecommerce.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>eCommerce</span>
                                </a>
                            </li>
                            <li class="active">
                                <a href="index.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Analytics</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="bold">
                    <a class="collapsible-header waves-effect waves-cyan">
                        <i class="material-icons">pie_chart_outlined</i>
                        <span class="nav-text">Charts</span>
                    </a>
                    <div class="collapsible-body">
                        <ul>
                            <li>
                                <a href="charts-chartjs.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Chart JS</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-chartist.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Chartist</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-morris.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Morris Charts</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-xcharts.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>xCharts</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-flotcharts.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Flot Charts</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-sparklines.html">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Sparkline Charts</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </li>
        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;">
            <div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div>
        </div>
        <div class="ps-scrollbar-y-rail" style="top: 0px; height: 712px; right: 3px;">
            <div class="ps-scrollbar-y" style="top: 0px; height: 367px;"></div>
        </div>
    </ul>
</header>
<main style="padding-left: 300px;">
    <div class="section">
        <div class="row">
            <div class="col 12"
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
