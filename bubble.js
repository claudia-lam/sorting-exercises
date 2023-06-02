function bubbleSort(array) {

  for(let i = array.length - 1; i >= 0; i--) {
    console.log("array BEFORE:", array);
    console.log("i:", array[i]);
    for (let j = 0; j <= i - 1; j++) {
      console.log("j:", array[j], "j+1:", array[j+1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j + 1], array[j]];
      }
      console.log("array AFTER SWAP:", array);
    }
  }

  return array;

}

module.exports = bubbleSort;