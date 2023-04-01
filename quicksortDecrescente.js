
console.time(quickSortDescending)
function quickSortDescending(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (array[i] > pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
  }
  
  // Exemplo de uso
  let array = [3, 1, 4, 2, 5];
  console.log(quickSortDescending(array));
  console.timeEnd(quickSortDescending)