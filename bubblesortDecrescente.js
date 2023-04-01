console.time(bubbleSort)
function bubbleSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n-i-1; j++) {
      if (arr[j] < arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

// Exemplo de uso
var arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log("Array ordenada em ordem decrescente:");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.timeEnd(bubbleSort)