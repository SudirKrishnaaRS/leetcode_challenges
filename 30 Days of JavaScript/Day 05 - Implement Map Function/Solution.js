/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let ar = arr;

    /*LOGIC: The code is using a for loop to iterate over each element in the `arr` array. For each element,
    it calls the `fn` function with two arguments: the current element and its index. The result of
    the `fn` function is then assigned to the corresponding element in the `ar` array. Essentially,
    this code is applying the `fn` function to each element in the `arr` array and storing the
    results in a new array `ar`. */
    
    for(let i=0; i<ar.length;i++)
    {
        ar[i]=fn(arr[i],i);
    } 
    
    return ar;
};