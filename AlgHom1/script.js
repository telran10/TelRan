
let array = [1,-1,3,5,,6 -5,-3,8,9,,-5];
let min1 = array[0];
 let min2 = min1;
 let min3 = min2;
 let min4 = min3;
 let min5 = min4;



  
  for (let i = 0; i < array.length; i++) {
    // Находим первые три элемента, которые не равны друг другу
    if (array[i] < min1) {
      min5 = min4;  
      min4 = min3;  
      min3 = min2;
      min2 = min1;
      min1 = array[i];
    } else if (array[i] < min2 && array[i] !== min1) {
      min5 = min4;  
      min4 =min3;  
      min3 = min2;
      min2 = array[i];
    } else if (array[i] < min3 && array[i] !== min1 && array[i] !== min2) {
      min5 = min4;  
      min4 = min3;  
      min3 = array[i];
    }  else if (array[i] < min4 && array[i] !== min1 && array[i] !== min3 && array[i] !== min1 && array[i] !== min2) {
        min5 = min4;
        min4 = array[i];
    }  else if (array[i] < min5 && array[i] < min4 && array[i] !== min1 && array[i] !== min3 && array[i] !== min1 && array[i] !== min2) {
        min5 = array[i];
    }
}
console.log(min1, min2 ,min3, min5);