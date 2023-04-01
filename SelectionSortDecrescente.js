console.time(selectionSort)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      [array[i], array[maxIndex]] = [array[maxIndex], array[i]];
    }
  }
  return array;
}

// Exemplo de uso
let array = [3, 1, 4, 2, 5];
console.log(selectionSort(array));
console.timeEnd(selectionSort)