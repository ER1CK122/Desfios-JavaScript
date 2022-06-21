$(document).ready(function () {
    $('#filter').on('keyup', function(){
        let value = $(this).val().toLowerCase();

        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value) > -1);
        });
    });
});