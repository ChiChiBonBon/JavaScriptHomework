$(function(){
    let currentQuiz = null;
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element,index,array){
                    $("#options").append(`<input name='option' type='radio' value='${index}'>
                     <label>${element[0]}</label><br><br>`);    
            });
            $("#startButtion").attr("value","Next");
        }else{
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        $("#options").empty();
                        let finalResult=questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始")
                    }else{
                        $("#options").empty();
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'> <label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            })
        }
    });  
});