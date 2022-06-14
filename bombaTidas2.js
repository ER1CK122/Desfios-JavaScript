let tentativas = 2;

function checkPassword(){
    let password = $("#password").val();
    let modal = $(".modal-wrapper");
    let modalBody = $(".modal-body");
    let cOrE = $(".c-or-e");

    $("body").addClass('overflow-none');

    if($(password) == 835947){
        $(modal).css("display", "flex");
       
        setTimeout(function(){
            $(modal).addClass('in modal-yes');
        }, 200);

        $(modalBody).html("A Bomba Foi Desarmada");
        
        console.log('Passou no teste soldado');

        $(cOrE).html("*A senha está correta parabéns*").addClass('turquoise');
    }else{
        $(cOrE).html("*A senha está incorreta, tente novamente*").addClass('red');
    }

    if(tentativas == 0){
        $(modal).css("display", "flex");
       
        setTimeout(function(){
            $(modal).addClass('in modal-no');
        }, 200);

        $(modalBody).html("A Bomba Explodiu");
        
        console.log('Reprovou no teste soldado');
    }else{
        tentativas = tentativas - 1;
    }

    console.log("tentativas restantes: " + tentativas);
}


function closeModal() {
    $("#modal").removeClass("in");
    $("body").removeClass("overflow-none");

    setTimeout(function(){
        $("#modal").hide();
    }, 150);
    
    console.log('Fecho o modal');
}

$(document).ready(function() {
    $("#close-modal").on('click', function(){
        closeModal();
    });
})