function mergeSort(array) {
  // base case - subarray length is 1
  if (array.length === 1) return;

  // 1. divide - split array in half
    // find mid point
    // split array in half


  // 2. conquer - recursive halving until left with single items
  // RECURSIVE CALL - halve subarrays until lengths are 1
  let sortedLeft = mergeSort(left side) -- finishes first
  let sortedRight = mergeSort(right side) -- finishes next

  // 3. merge
  merge(sortedLeft, sortedRight);

}

/** merge
 *
 * helper func. for merging two sorted arrays
 *
 * input: [1,2,4,7], [3,5,6,8]
 * output: [1,2,3,4,5,6,7,8]
 *
 */
function merge(sortedLeft, sortedRight) {

  return sortedArray;
}

module.exports = { merge, mergeSort };