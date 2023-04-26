// 1)Найдите общие элементы(в виде массива) между двумя массивами.
// Пример: [1,2,3], [4,2,1] => [1,2]

// let array1 = [1,2,3];
// let array2 = [4,2,1];
// let array3 = [];

// for(let i=0; i<array1.length; i++){
//     for(let j=0; j<array2.length; j++){
//         if(array1[i]===array2[j]){
//             array3.push(array1[i]);
//         }
//     }
// }
// console.log(array3);

// 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа

// let array2 = [];
// function array (num){
   
//     for(let i=0; i<=num; i++){
//        array2.push(i);
//     }
// }

// array(6);
// console.log(array2);

// 3)Предыдущее задание делаем с объектом. (как ключ передаем i)

// let array = [];
// function array1(num){
//     for(let i=0; i<=num; i++){
//     array.push({i: i});
//     }
// }
// array1(4);
// console.log(array);

// 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”]

// let array = [];
// function masiv(num1, num2){
//     for(let i=0; i<num2; i++)
//     array.push(num1);
// }
// masiv("cat", 4);
// console.log(array);

// 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде. Пример: “cat” => “tac

// let newWord = "";
// function strExpand(word){
    
//      for(let i=word.length-1; i>=0; i--){
//         newWord+= word[i];
//      }
//     return newWord;
    
// }
// strExpand("Alex");
//  console.log(newWord);

// 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.


 

// function polindrom(word){
//    let array1 = word;
//    let array2 = "";
    
//     for(let i=word.length-1; i>=0; i--){
//           array2+=( word[i]); 
//         }

//     for(let i=0; i<array1.length/2; i++){
//        for(let i=0; i<array2.length/2; i++){
//            if(array1[i]!==array2[i]){
//                return false
//                  }
//               }
//          }
//          return true
         
         
// }

//  let result =  polindrom("potop");
//  console.log(result);

 
// // 7)Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект 
//с самым дорогим товаром


//   function dearest(array){
//    let maxArr = array[o];
//   for(let i=0; i<array.length; i++){
//       if(arrau[i].price > maxArr.price){
//         maxArr = array[i];
//       }
//   }
//      return maxArr;
//  }




 