// Your code here
function saturdayFun (day= "roller-skate") {
   return `This Saturday, I want to ${day}!`;
}
saturdayFun("bathe my dog");

 function mondayWork (arg= "go to the office")  {
  return `This Monday, I will ${arg}.`  
}

mondayWork("work from home")

function wrapAdjective (val= "*") {
 let innerFn = function(ele = "special") {
   return `You are ${val}${ele}${val}!`
 }
 return innerFn
}
let somehing = wrapAdjective("||")

