$(function(){
    $("input").on("click",function(){
        //window.alert("Hi");
        $("#selector").empty();
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("#selector").attr("src",$("li>img").eq(randomChildNumber).attr("src"));
    });
});

