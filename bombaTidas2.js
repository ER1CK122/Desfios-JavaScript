function closeModal2() {
    $("#modal").removeClass("in");
    $("body").removeClass("overflow-none");

    setTimeout(function(){
        $("#modal").hide();
    }, 150);
    
    console.log('Fecho o modal');
}

$(document).ready(function() {
    $("#close-modal").on('click', function(){
        closeModal2();
    });
})