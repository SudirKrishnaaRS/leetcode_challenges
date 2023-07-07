/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let ar = arr;
    let res = [];
    for(let i=0; i<ar.length; i++)
    {
        if(fn(ar[i],i))
        {
            res.push(ar[i]);
        }
    }
    console.log(res);
    return res;
};