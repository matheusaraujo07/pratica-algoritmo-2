console.time(quickSort)
function quickSort(array) {
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
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Exemplo de uso
  let array = [80, 20, 35, 65, 85, 96];
  console.log(quickSort(array));
  console.timeEnd(quickSort)
  