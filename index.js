
var Papa = require('papaparse');
var choiceLength = 4;
var peopleCount = 72;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var people =Array.from({length: 72}, (_, i) => i + 1);
var array2d = [
    ["Name"].concat(Array.from({length: choiceLength}, (_, i) => i + 1))
];
people.forEach((person)=>{
    var refArr = JSON.parse(JSON.stringify(array2d));
    refArr.shift();
    var specificChoice = [person];
    var firstOne = true;
    for(var i = 0; i<choiceLength;i++){
        if(!firstOne){
        specificChoice.push(people[getRandomInt(people.length-0.5)])
        continue;
        }
        firstOne = false;
        var res = refArr.find((e)=> e.includes(person));
        
        if(res != null){
            specificChoice.push(res[0]);
            continue;
        }
        specificChoice.push(people[getRandomInt(people.length-0.5)]);
    }
    array2d.push(specificChoice);
});
/*var csv = array2d
.map((item) => {

  // Here item refers to a row in that 2D array
  var row = item;
  
  // Now join the elements of row with "," using join function
  return row.join(",");
}) // At this point we have an array of strings
.join("\n");*/
var unparsed = Papa.unparse({data:array2d,
    header:false
});
console.log(unparsed);