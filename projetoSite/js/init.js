(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered$('.btn_carrega_conteudo
    $('#modal1').modal();
    $('.btn_carrega_conteudo').click(function () {

        var carrega_url = this.id;
        carrega_url = carrega_url+'.php';

        $.ajax({

            url: carrega_url,
            success: function (data) {
                $('#div_conteudo').html(data);
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
$(document).ready(function(){
    $('.carousel').carousel();
});
