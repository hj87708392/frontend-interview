let hj=[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
    // console.log(accumulator)
     return accumulator + currentValue;
   });
   //console.log(hj)
 
 
   var initialValue = 0;
 var sum = [{x: 1}, {x:2}, {x:3}].reduce(
     (accumulator, currentValue) => accumulator + currentValue.x
     ,initialValue
 );
 //console.log(sum)
 
 
 var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
     function(accumulator, currentValue) {
         // console.log(accumulator)
         //console.log(currentValue)
       return accumulator.concat(currentValue);
     },
     []
   );
 
   var people = [
     { name: 'Alice', age: 21 },
     { name: 'Max', age: 20 },
     { name: 'Jane', age: 20 }
   ];
   
   function groupBy(objectArray, property) {
     return objectArray.reduce(function (acc, obj) {
       //  console.log(obj)
       var key = obj[property];//age 21
       if (!acc[key]) {
         acc[key] = [];//
       }
       acc[key].push(obj);
       return acc;
     }, {});
   }
   
   var groupedPeople = groupBy(people, 'age');
   console.log(groupedPeople)