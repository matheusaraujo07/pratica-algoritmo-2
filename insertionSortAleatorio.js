console.time(insertionSort)
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
    }
    return array;
  }
  
  // Exemplo de uso
  let array = [80, 40, 52, 74, 15, 10];
  console.log(insertionSort(array));
  console.timeEnd(insertionSort)