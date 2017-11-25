(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('#modal-login').modal();
    $('.btn_carrega_conteudo').click(function () {

        var carrega_url = this.id;
        carrega_url = carrega_url;

        $.ajax({

            url: carrega_url,
            success: function (data) {
                $('#conteudo-home').html(data);
            },

            beforeSend: function () {
                $('loader').css({display:"block"})
            },

            complete: function () {
                $('loader').css({display:"none  "})
            }
        })
    })
});
