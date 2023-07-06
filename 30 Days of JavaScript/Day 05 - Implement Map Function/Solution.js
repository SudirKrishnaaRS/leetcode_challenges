/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let ar = arr;

    for(let i=0; i<ar.length;i++)
    {
        ar[i]=fn(arr[i],i);
    } 
    
    return ar;
};