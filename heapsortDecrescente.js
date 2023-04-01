console.time(heapSort)
function heapSort(array) {
    buildHeap(array);
    for (let end = array.length - 1; end > 0; end--) {
      [array[0], array[end]] = [array[end], array[0]];
      heapify(array, 0, end);
    }
    return array;
  }
  
  function buildHeap(array) {
    let mid = Math.floor((array.length - 1) / 2);
    for (let i = mid; i >= 0; i--) {
      heapify(array, i, array.length);
    }
  }
  
  function heapify(array, start, end) {
    let root = start;
    while (root * 2 + 1 < end) {
      let child = root * 2 + 1;
      if (child + 1 < end && array[child] > array[child + 1]) {
        child += 1;
      }
      if (array[root] > array[child]) {
        [array[root], array[child]] = [array[child], array[root]];
        root = child;
      } else {
        return;
      }
    }
  }
  
  // Exemplo de uso
  let array = [3, 1, 4, 2, 5];
  console.log(heapSort(array));
  console.timeEnd(heapSort)