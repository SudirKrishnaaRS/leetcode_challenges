/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let ar = nums;
    let res = init;
    for(let i=0; i<ar.length; i++)
    {
        res = fn(res,ar[i]);
    }
    console.log(res);
    return res;
};