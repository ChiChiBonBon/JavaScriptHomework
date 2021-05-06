$(function(){
    $("#courseTable").append("<tr>場次</tr><tr>時間</tr>主題<tr></tr>");

    let topilCount=topic.length;
    let millisecsPerDay = 24*60*60*1000;

    for(let x=0;x<topilCount;x++){
        $("#courseTable").append("<tr>");
        //$("#courseTable").append("<td>"+(x+1)+"</td");
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString('en-US')}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`)
        $("#courseTable").append("</tr>");
        $("tr")[x].style.bgcolor="#FFFACD";
    } 

    // chageRowColor();
});

// function chageRowColor(){
//     let rowCount = document.getElementsByTagName("tr").length;
//     console.log(rowCount);
//     for(let i=1;i<=rowCount;i++){
//         if((i % 2) === 0){
//             document.getElementsByTagName("tr")[i].style.backgroundColor="#FFFACD";
//         }
//     }

// };


