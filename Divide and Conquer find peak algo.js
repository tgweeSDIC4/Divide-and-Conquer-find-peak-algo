
// Given an array of integer values that ascends to a peak value and then descends, 
// implement a solution that best finds the position/index of the peak value.

// let inputArray= [ 2, 4, 6, 8, 10, 12, 14, 16, 15, 14, 13, 12, 11, 9, 7, 5, 3, 1] 
// should return index 7 or value 16

// let inputArray= [ 1, 3, 4, 5, 6, 7, 8, 9, 12 ,9 ,7 ,6 ,4 ,2 ] 
// should return index 8 or  value 12

// brute force approach
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



// Divide and Conquer algorithm to find peak
// let dataArray= [ 2, 4, 6, 8, 10, 12, 14, 16, 15, 14, 13, 12, 11, 9, 7, 5, 3, 1] 
// should return index 7 or value 16

// let dataArray= [ 1, 3, 4, 5, 6, 7, 8, 9, 12 ,9 ,7 ,6 ,4 ,2 ] 
// should return index 8 or value 12

// for edge case testing
// let dataArray= [2, 12, 23, 34]; 
 let dataArray= [14, 7, 5];


function getPeak(inputArray){

    // if array contains only one value, then the value is the required Peak
    if (inputArray.length==1){
        return inputArray[0];
    }

    if (inputArray.length>1){
    // get mid point of index rounded down to lowest integer
        mid=Math.floor(inputArray.length/2);
    // compare mid point to the value on the right of midpoint 
    // if mid is lower slice array from mid point
        if (inputArray[mid-1]<inputArray[mid]) {
            return getPeak(inputArray.slice(mid));
        } else { // else slice array from start to mid point
            return getPeak(inputArray.slice(0,mid));
        }
    }
 
}

console.log("Results (value): ", getPeak(dataArray));
