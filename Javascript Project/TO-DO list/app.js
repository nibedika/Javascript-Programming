$(document).ready(function(){

        $("button").on("click", function(){
        var input = $("input");
        if(input.val().trim() != ""){

        var output = "<li><a>[X] </a>" + input.val() + "</li>";
        $("ul:last-child").append(output);
        input.val("");

        }
        else{
            alert("Insert Something!");
        }
        
        });

        $(document.body).on("click", "li a", function(){
        var li = $(this).parent();
        li.remove();

    });

});
