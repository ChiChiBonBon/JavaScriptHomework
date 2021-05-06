let topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "重複性",
    "條件判斷"
];

let startDate=new Date();

function setMonthAndDay(startMonth,starDay){
    startDate.setMonth(startMonth-1,starDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}


setMonthAndDay(2,21);


