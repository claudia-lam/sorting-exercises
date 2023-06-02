function mergeSort(array) {
  // base case - subarray length is 1
  if (array.length === 1) return;

  // 1. divide - split array in half
    // find mid point
    let middleIndex = //math
    // split array in half
    let leftHalf = array.slice(0, middleIndex)
    let rightHalf = array.slice(middleIndex, array.length -1)


  // 2. conquer - recursive halving until left with single items
  let sortedLeft = mergeSort(leftHalf) // -- finishes first
  // wont hit next line till left is done

  let sortedRight = mergeSort(rightHalf) // -- finishes next
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