
// Message Classification: Restricted
// Given an array of integer values that ascends to a peak value and then descends, implement a solution that best finds the position/index of the peak value.
 

// should return 8
// let inputArray= [ 2, 4, 6, 8, 10, 12, 14, 16, 15, 14, 13, 12, 11, 9, 7, 5, 3, 1] 
// should return 7

// function getPeak(inputArray){
//     let temp=0;
//     let tempIndex=0;
//     for (i=0; i<inputArray.length;i++){
        
//         if (inputArray[i]>temp) {
//             temp=inputArray[i];
//             tempIndex=i;
//         }
//     }
//     return tempIndex;
// }
// let results=getPeak(inputArray);
// console.log("Index: ", results );
// console.log("Value: ",inputArray[results]);



let inputArray= [ 1, 3, 4, 5, 6, 7, 8, 9, 12 ,9 ,7 ,6 ,4 ,2 ] 


function
let checkArrayLength=inputArray.length;
let getMidPoint=checkArrayLength/2;
let getMidPointRight=getMidPoint+1;


if (inputArray[getMidPoint]<inputArray[getMidPointRight]) {
    let newArray=inputArray.slice(getMidPointRight);
}



