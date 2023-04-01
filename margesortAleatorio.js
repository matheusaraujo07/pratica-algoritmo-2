console.time(mergeSort)
function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return [...result, ...left, ...right];
  }
  
  // Exemplo de uso
  let array = [15, 20, 30, 75, 26, 10029];
  console.log(mergeSort(array));
  console.timeEnd(mergeSort)