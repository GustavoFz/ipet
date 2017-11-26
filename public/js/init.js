(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
    });
})(jQuery);


// ATIVADOR MODAL E CARREGAMENTO AJAX COM LOADER
$(document).ready(function () {
    $('#modal-login').modal();
    $('#modal-servico').modal();
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
