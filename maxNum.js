let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function maxNUm(arr){
    let max = arr[0];
    for(let i =0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNUm(arr)); // Output: 10