$(document).ready(function(){
    $(document).on("click", "#addtweet", function(){
        var text = $("#texto").val();
        var id = "containertweets";
        addTweet(id,text);
    });

    $(document).on("click", ".like", function(){
        var count = parseInt($(this).next("span").html());
        $(this).next("span").html(count+1);

    });

})
function addTweet(id,text){
    var template = '<div class="card">'+
                    '<button class="btncerrar" type="button" name="button"><i class="fas fa-times cerrar"></i></button>'+
                    '<img class="avatar" src="https://picsum.photos/40" alt="avatar">'+
                    '<h4> <strong>Valentina</strong> @valenticosas </h4>'+
                    '<div class="twit">'+
                        '<p>'+text+' </p>'+
                    '</div>'+
                    '<img src="https://picsum.photos/500/230" alt="">'+
                    '<button class="btnlike"type="button" name="button"><i class="far fa-heart likes"></i></button>'+
                    '</div>';

    $("#"+id).append(template);
}
function addlike(){
    var count = 0;
    $("#like").on(click, function(){count+1})
}
