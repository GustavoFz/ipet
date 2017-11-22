<!DOCTYPE html>
<html>
<head lang="pt-br">
    <meta charset="UTF-8">

    <title>IPet - Serviços Online</title>
    <meta name="description" content="IPet: Sistema de Vendas Online para PetShops"/>
    <link type="text/css" rel="stylesheet" href="styles.css" media="screen,projection"/>

    <link type="text/css" rel="stylesheet" href="myStyle.css"/>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Roboterwelt.de">

    <meta http-equiv="imagetoolbar" content="no"/>
    <meta name="language" content="de-DE"/>
    <link rel="icon" href="http://www.roboterwelt.de/favicon.ico" type="image/x-icon">
</head>
<body>


<nav>
    <div class="container">
        <div class="nav-wrapper">

            <a href="teste.php" class="brand-logo left">
                <span class="img-logo">IPet</span>
            </a>

            <ul id="nav-mobile" class="right side-nav">
                <li class="active"><a href="">Entrar</a></li>
                <li><a href="">Carrinho de Compras</a></li>
            </ul>
            <a class="button-collapse" href="#" data-activates="nav-mobile"><i class="mdi-navigation-menu"></i></a>
        </div>
    </div>
</nav>

<form class="filter" method="get" action="/suche/filter">
    <div class="section white">
        <div class="container">
            <div class="row">
                <div class="col m3 s12">
                    <h1 class="saugroboter-h1">Saugroboter <span>(100)</span></h1>
                    <div class="filter-elements">
                        <a class="btn waves-effect waves-light blue" href="/roboter/saugroboter/vergleich/">Saugroboter-Vergleich</a>
                        <a class="btn waves-effect waves-light orange" href="/roboter/saugroboter/gebraucht/">Gebrauchte
                            Saugroboter</a>
                        <div class="filter-container">
                            <strong class="big-font">Filtern nach</strong>
                            <input type="hidden" value="1" name="filter">
                            <input type="hidden" value="" name="term">
                            <input type="hidden" value="" name="used">

                            <ul class="collapsible" data-collapsible="expandable">
                                <li>
                                    <div class="collapsible-header"><i class="fa fa-dollar"></i>Preço</div>
                                    <div class="collapsible-body">
                                        <div class="input-field col l4 m12">
                                            <input class="validate" type="text" name="minp" id="minp" value="">
                                            <label for="minp">de</label>
                                        </div>
                                        <div class="input-field col l5 m12">
                                            <input class="validate" type="text" name="maxp" id="maxp" value="">
                                            <label for="maxp">até</label>
                                        </div>
                                        <div class="input-field col l3 m12 small-btn-container">
                                            <input type="submit" class="btn green small-btn" value="Los">
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div class="collapsible-header"><i class="fa fa-paw"></i>Geeignet für</div>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox" name="allergic"
                                                       id="allergic" value="1">
                                                <label for="allergic">Allergiker (63)</label>
                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox" name="pet" id="pet"
                                                       value="1">
                                                <label for="pet">Tierbesitzer (74)</label>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="collapsible-header"><i class="fa fa-barcode"></i>Hersteller</div>
                                    <div class="collapsible-body">
                                        <ul>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Dirt Devil" value="4">
                                                <label for="Dirt Devil">Dirt Devil (3)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Ecovacs" value="2">
                                                <label for="Ecovacs">Ecovacs (10)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Hoover" value="11">
                                                <label for="Hoover">Hoover (7)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Infinuvo" value="14">
                                                <label for="Infinuvo">Infinuvo (2)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="iRobot" value="1">
                                                <label for="iRobot">iRobot (29)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Klarstein" value="8">
                                                <label for="Klarstein">Klarstein (5)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Kärcher" value="5">
                                                <label for="Kärcher">Kärcher (2)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="LG" value="15">
                                                <label for="LG">LG (4)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Moneual" value="9">
                                                <label for="Moneual">Moneual (4)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Neato Robotics" value="7">
                                                <label for="Neato Robotics">Neato Robotics (8)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Philips" value="10">
                                                <label for="Philips">Philips (2)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Samsung" value="16">
                                                <label for="Samsung">Samsung (12)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Sichler" value="3">
                                                <label for="Sichler">Sichler (7)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Vileda" value="12">
                                                <label for="Vileda">Vileda (3)</label>
                                            </li>

                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="manufacturer[]" id="Vorwerk" value="6">
                                                <label for="Vorwerk">Vorwerk (2)</label>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <ul class="collapsible" data-collapsible="expandable">
                                <li>
                                    <div class="collapsible-header"><i class="fa fa-square"></i>Fläche</div>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <input onclick="this.form.submit()" type="radio" name="area"
                                                       id="area_60" value="60">
                                                <label for="area_60">bis 60 m² (82)</label>
                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="radio" name="area"
                                                       id="area_80" value="80">
                                                <label for="area_80">bis 80 m² (9)</label>

                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="radio" name="area"
                                                       id="area_100" value="100">
                                                <label for="area_100">bis 100 m² (3)</label>

                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="radio" name="area"
                                                       id="area_101" value="101">
                                                <label for="area_101">über 100m² (6)</label>

                                            </li>
                                            <li>
                                                <input class="with-gap" onclick="this.form.submit()" type="radio"
                                                       name="area" id="area_0" value="0">
                                                <label for="area_0">Alle anzeigen</label>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="collapsible-header"><i class="fa fa-cogs"></i>Ausstattung</div>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox" name="programming"
                                                       id="programming" value="1">
                                                <label for="programming">Programmierfunktion (87)</label>
                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox" name="remote"
                                                       id="remote" value="1">
                                                <label for="remote">Fernbedienung (65)</label>
                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox" name="virtual_wall"
                                                       id="virtual_wall" value="1">
                                                <label for="virtual_wall">Virtuelle Wände (64)</label>
                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="checkbox"
                                                       name="fall_protection" id="fall_protection" value="1">
                                                <label for="fall_protection">Absturzsicherung (84)</label>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="collapsible-header"><i class="fa fa-bullhorn"></i>Lautstärke</div>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <input onclick="this.form.submit()" type="radio" name="noise"
                                                       id="noise_60" value="60">
                                                <label for="noise_60">bis 60 dB (55)</label>
                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="radio" name="noise"
                                                       id="noise_70" value="70">
                                                <label for="noise_70">61 bis 70 dB (14)</label>
                                            </li>
                                            <li>
                                                <input onclick="this.form.submit()" type="radio" name="noise"
                                                       id="noise_71" value="71">
                                                <label for="noise_71">über 70 dB (31)</label>
                                            </li>
                                            <li>
                                                <input class="with-gap" onclick="this.form.submit()" type="radio"
                                                       name="noise" id="noise_0" value="0">
                                                <label for="noise_0">Alle anzeigen</label>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <noscript><input type="submit" value="Filter anwenden"
                                             class="filter-submit-bottom btn btn-success"></noscript>
                        </div>
                    </div>
                </div> <!-- //end filter-->


                <div class="col m9 s12">
                    <div class="row header-produktliste">
                        <div class="col m5 s12 modelsearch">
                            <form class="row" method="get" action="/suche/filter" role="search">
                                <div class="input-field col s12">
                                    <input type="text" name="term" id="robot"
                                           placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nach Roboter-Modell oder Hersteller suchen"
                                           value="">
                                    <label for="search"><i class="fa fa-search"></i></label>
                                    <!--<input type="submit" class="col s3 btn" name="submitautocomplete" value="Suchen" type="button" >-->
                                </div>
                            </form>
                        </div>
                        <div class="col m4 offset-m3 s12">
                            <select name="sort" onchange="this.form.submit()">
                                <option value="salesrank">Beliebtheit</option>
                                <option value="sort_ratings">Kundenbewertungen</option>
                                <option value="sort_price_asc">Preis: aufsteigend</option>
                                <option value="sort_price_desc">Preis: absteigend</option>
                                <option value="sort_asc">Neu eingetroffen</option>
                            </select>
                        </div>
                    </div>

                    <ul class="row produktliste">
                        <li data-url-follow="/roboter/saugroboter/ecovacs-deebot-d79/" class="col l4 m6 s12 clearfix">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/assets/uploads/saugroboter/overview/1063c-ecovacs-deebot-d79-front.jpg"
                                         alt="Ecovacs Deebot D79">
                                </div>
                                <div class="card-content">
                                    <h3><a href="/roboter/saugroboter/ecovacs-deebot-d79/">Ecovacs Deebot D79</a></h3>
                                    <span class="price-used"><i class="used">0 gebrauchte Deebot D79</i></span>
                                </div>
                                <div class="card-action row">
                                    <span class="col s6"><span class="rating" title="0.0 Sterne von 5"><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span></span> <span
                                                class="reviews-no">0</span> </span>
                                    <span class="col s6 price"><span>ab 499.00 </span>€ <span class="savemoney"><strike>599.00 €</strike></span></span>
                                </div>
                            </div>
                        </li>
                        <li data-url-follow="/roboter/saugroboter/samsung-sr-8874/" class="col l4 m6 s12 clearfix">
                            <div class="card">
                                <div class="card-image">
                                    <img src="http://ecx.images-amazon.com/images/I/41hnEtZVfKL.jpg"
                                         alt="Samsung NaviBot SR8874">
                                </div>
                                <div class="card-content">
                                    <h3><a href="/roboter/saugroboter/samsung-sr-8874/">Samsung NaviBot SR8874</a></h3>
                                    <span class="price-used"><i class="used">0 gebrauchte NaviBot SR8874</i></span>
                                </div>
                                <div class="card-action row">
                                    <span class="col s6"><span class="rating" title="0.0 Sterne von 5"><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span></span> <span
                                                class="reviews-no">0</span> </span>
                                    <span class="col s6 price"><span>ab 380.41 </span>€ <span class="savemoney"><strike>499.00 €</strike></span></span>
                                </div>
                            </div>
                        </li>
                        <li data-url-follow="/roboter/saugroboter/hoover-rbc-009/" class="col l4 m6 s12 clearfix">
                            <div class="card">
                                <div class="card-image">
                                    <img src="http://ecx.images-amazon.com/images/I/41tnrBrpW9L.jpg"
                                         alt="Hoover RBC 009">
                                </div>
                                <div class="card-content">
                                    <h3><a href="/roboter/saugroboter/hoover-rbc-009/">Hoover RBC 009</a></h3>
                                    <span class="price-used"><i class="used">0 gebrauchte RBC 009</i></span>
                                </div>
                                <div class="card-action row">
                                    <span class="col s6"><span class="rating" title="0.0 Sterne von 5"><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span></span> <span
                                                class="reviews-no">0</span> </span>
                                    <span class="col s6 price"><span>ab 333.98 </span>€ <span class="savemoney"><strike>399.00 €</strike></span></span>
                                </div>
                            </div>
                        </li>
                        <script>
                            (function () {
                                function r(e) {
                                    var t = 0;
                                    if (e.offsetParent) {
                                        do t += e.offsetTop; while (e = e.offsetParent);
                                        return t
                                    }
                                }

                                var e = window.addEventListener || function (e, t) {
                                    window.attachEvent("on" + e, t)
                                }, t = window.removeEventListener || function (e, t, n) {
                                    window.detachEvent("on" + e, t)
                                }, n = {
                                    cache: [], mobileScreenSize: 500, addObservers: function () {
                                        e("scroll", n.throttledLoad), e("resize", n.throttledLoad)
                                    }, removeObservers: function () {
                                        t("scroll", n.throttledLoad, !1), t("resize", n.throttledLoad, !1)
                                    }, throttleTimer: (new Date).getTime(), throttledLoad: function () {
                                        var e = (new Date).getTime();
                                        e - n.throttleTimer >= 200 && (n.throttleTimer = e, n.loadVisibleImages())
                                    }, loadVisibleImages: function () {
                                        var e = window.pageYOffset || document.documentElement.scrollTop,
                                            t = window.innerHeight || document.documentElement.clientHeight,
                                            i = {min: e - 300, max: e + t + 300}, s = 0;
                                        while (s < n.cache.length) {
                                            var o = n.cache[s], u = r(o), a = o.height || 0;
                                            if (u >= i.min - a && u <= i.max) {
                                                var f = o.getAttribute("data-src-mobile");
                                                o.onload = function () {
                                                    this.className = "lazy-loaded"
                                                }, f && screen.width <= n.mobileScreenSize ? o.src = f : o.src = o.getAttribute("data-src"), o.removeAttribute("data-src"), o.removeAttribute("data-src-mobile"), n.cache.splice(s, 1);
                                                continue
                                            }
                                            s++
                                        }
                                        n.cache.length === 0 && n.removeObservers()
                                    }, init: function () {
                                        document.querySelectorAll || (document.querySelectorAll = function (e) {
                                            var t = document, n = t.documentElement.firstChild,
                                                r = t.createElement("STYLE");
                                            return n.appendChild(r), t.__qsaels = [], r.styleSheet.cssText = e + "{x:expression(document.__qsaels.push(this))}", window.scrollBy(0, 0), t.__qsaels
                                        }), e("load", function r() {
                                            var e = document.querySelectorAll("img[data-src]");
                                            for (var i = 0; i < e.length; i++) {
                                                var s = e[i];
                                                n.cache.push(s)
                                            }
                                            n.addObservers(), n.loadVisibleImages(), t("load", r, !1)
                                        })
                                    }
                                };
                                n.init()
                            })()
                        </script>
                        <li data-url-follow="/roboter/saugroboter/hoover-rbc-012/" class="col l4 m6 s12 clearfix">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/assets/img/Roboterwelt.png" class="lazy-load"
                                         data-src="http://ecx.images-amazon.com/images/I/312w8KXJqAL.jpg"
                                         alt="Hoover RBC 012 ">
                                </div>
                                <div class="card-content">
                                    <h3><a href="/roboter/saugroboter/hoover-rbc-012/">Hoover RBC 012 </a></h3>
                                    <span class="price-used"><i class="used">0 gebrauchte RBC 012 </i></span>
                                </div>
                                <div class="card-action row">
                                    <span class="col s6"><span class="rating" title="0.0 Sterne von 5"><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span><span
                                                    class="fa fa-star grey-star"></span></span> <span
                                                class="reviews-no">0</span> </span>
                                    <span class="col s6 price"><span>ab 354.66 </span>€ <span class="savemoney"><strike>519.00 €</strike></span></span>
                                </div>
                            </div>
                        </li>
                        <li data-url-follow="/roboter/saugroboter/sichler-pcr-2550l/" class="col l4 m6 s12 clearfix">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/assets/img/Roboterwelt.png" class="lazy-load"
                                         data-src="/assets/uploads/saugroboter/overview/1a670-sichler_pcr-2550l_frontansicht.jpg"
                                         alt="Sichler PCR-2550L">
                                </div>
                                <div class="card-content">
                                    <h3><a href="/roboter/saugroboter/sichler-pcr-2550l/">Sichler PCR-2550L</a></h3>
                                    <span class="price-used"><i class="used">0 gebrauchte PCR-2550L</i></span>
                                </div>
                                <div class="card-action row">
                                    <span class="col s6"><span class="rating" title="3.8 Sterne von 5"><span
                                                    class="fa fa-star"></span><span class="fa fa-star"></span><span
                                                    class="fa fa-star"></span><span
                                                    class="fa fa-star-half-o"></span><span
                                                    class="fa fa-star grey-star"></span></span> <span
                                                class="reviews-no">5</span> </span>
                                    <span class="col s6 price"><span>ab 189.99 </span>€ <span class="savemoney"><strike>299.90 €</strike></span></span>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="col-md-12">
                        <nav>
                            <ul class="pagination">
                                <li class="active"><a>1</a></li>
                                <li><a href="/suche/searchAll/24">2</a></li>
                                <li><a href="/suche/searchAll/48">3</a></li>
                                <li><a href="/suche/searchAll/72">4</a></li>
                                <li><a href="/suche/searchAll/96">5</a></li>
                                <li><a href="/suche/searchAll/24">&gt;</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>


<div class="section logos">
    <div class="container">
        <div class="row">
            <h2>Saugroboter Hersteller</h2>
            <div class="slider-logos">
                <div><a href="/magazin/companies/dyson/"><img src="/assets/img/unternehmen/Dyson-Logo.png"
                                                              alt="Logo Dyson"
                                                              title="Unternehmensprofil Dyson GmbH"></a></div>
                <div><a href="/magazin/companies/irobot/"><img src="/assets/img/unternehmen/iRobot-Logo.png"
                                                               alt="Logo iRobot" title="Unternehmensprofil iRobot"></a>
                </div>
                <div><a href="/magazin/companies/ecovacs-robotics/"><img
                                src="/assets/img/unternehmen/ecovacs-robotics-logo.png" alt="Logo Ecovacs Robotics"
                                title="Unternehmensprofil Ecovacs Robotics"></a></div>
                <div><img src="/assets/img/unternehmen/Sichler-Logo.png"></div>
                <div><img src="/assets/img/unternehmen/Vileda-Logo.png"></div>
                <div><img src="/assets/img/unternehmen/Kaercher-Logo.png"></div>
                <div><img src="/assets/img/unternehmen/Neato-Robotics-Logo.png"></div>
            </div>
        </div>
    </div>
</div>

<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<footer class="page-footer grey">
    <div class="container">
        <div class="row">
            <div class="col l6 m6 s12">
                <h5 class="white-text">Roboterwelt.de</h5>
                <p class="grey-text text-lighten-4 thin-text">Alles über Roboter: Entwicklungen auf dem Markt,
                    innovative Unternehmen, Events und vieles mehr.</p>
                <div class="social-icons-footer">
                    <a href="http://www.facebook.com/roboterwelt"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/roboterwelt"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.youtube.com/user/roboterwelt"><i class="fa fa-youtube"></i></a>
                    <!--<a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>-->
                </div>
            </div>
            <div class="col l3 m3 s12">
                <h5 class="white-text">Service</h5>
                <ul class="thin-text">
                    <li><a class="grey-text text-lighten-3" href="http://www.roboterwelt.de/magazin/news/">News</a></li>
                    <li><a class="grey-text text-lighten-3" href="http://www.roboterwelt.de/magazin/category/wissen/">Wissen</a>
                    </li>
                    <li><a class="grey-text text-lighten-3" href="#!">Presse</a></li>
                </ul>
            </div>
            <div class="col l3 m3 s12">
                <h5 class="white-text">Rechtliches</h5>
                <ul class="thin-text">
                    <li><a class="grey-text text-lighten-3" href="http://www.roboterwelt.de/magazin/impressum/">Impressum</a>
                    </li>
                    <li><a class="grey-text text-lighten-3" href="http://www.roboterwelt.de/magazin/datenschutz/">Datenschutz</a>
                    </li>
                    <li><a class="grey-text text-lighten-3" href="http://www.roboterwelt.de/magazin/team/">Team</a></li>
                    <!--<li><a class="grey-text text-lighten-3" href="#!">Kontakt</a></li>-->
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Copyright © 2015 Roboterwelt
        </div>
    </div>
</footer>


<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="componentes/js/unveil.js"></script>

<script>


    (function ($) {

        $(function () {


            $("#robot").autocomplete({
                source: "/suche/searchAll",
                minLength: 1,
                select: function (event, ui) {

                    window.location = ("/roboter/" + ui.item.url + "/" + ui.item.id + "/")
                }
            });

            $('.button-collapse').sideNav();
            $('.dropdown-button').dropdown();

            $("img").unveil(200, function () {
                $(this).load(function () {
                    this.style.opacity = 1;
                });
            });

            $('select').material_select();
            $('.collapsible').collapsible({
                accordion: false
            });


            $("#robot").autocomplete({
                source: "/suche/searchAll",
                minLength: 1,
                select: function (event, ui) {

                    window.location = ("/roboter/saugroboter/" + ui.item.id + "/")
                }
            });

            $('[data-url-follow]').click(function () {
                location.href = $(this).attr("data-url-follow")
            });

            $('.slider-logos').slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2500,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });


        }); // end of document ready
    })(jQuery); // end of jQuery name space
</script>
<script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&appId=270479126353894&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-36699803-3', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');
</script>


<!-- Begin Cookie Consent plugin by Silktide - http://silktide.com/cookieconsent -->
<script type="text/javascript">
    window.cookieconsent_options = {
        "message": "Wir sind eine moderne Webseite und nutzen Cookies. Weitere Informationen zu Cookies und unserer Datenschutzrichtlinie finden Sie im Impressum.",
        "dismiss": "OK",
        "learnMore": "Weitere Information",
        "link": null,
        "theme": "light-bottom"
    };
</script>

<script type="text/javascript" src="//s3.amazonaws.com/cc.silktide.com/cookieconsent.latest.min.js"></script>
<!-- End Cookie Consent plugin -->

</body>
</html>