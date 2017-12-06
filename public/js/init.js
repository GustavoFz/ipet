(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
    });
})(jQuery);
// ATIVADOR CAMPO SELECT
$(document).ready(function() {
    $('select').material_select();
});


// ATIVADOR MODAL E CARREGAMENTO AJAX COM LOADER
$(document).ready(function () {
    $('#modal-login').modal();
    $('#modal-servico').modal();
    $('#modal-animal').modal();
    $('.btn_carrega_conteudo').click(function () {

        var carrega_url = this.id;
        carrega_url = carrega_url;

        $.ajax({

            url: carrega_url,
            success: function (data) {
                $('#conteudo-home').html(data);
            },

            beforeSend: function () {
                $('#loader').css({display: "block"})
            },

            complete: function () {
                $('#loader').css({display: "none"})
            }
        })
    })
});

//paralax utilizado na tela index
$(document).ready(function(){
    $('.parallax').parallax();
});
//madal de calendario em PT-BR
$('.datepicker').pickadate({
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Pronto',
    labelMonthNext: 'Próximo mês',
    labelMonthPrev: 'Mês anterior',
    labelMonthSelect: 'Selecione um mês',
    labelYearSelect: 'Selecione um ano',
    selectMonths: true,
    selectYears: 15
});
