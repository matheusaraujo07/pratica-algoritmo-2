console.time(bubbleSort)
let bubble = [80, 40, 30, 20, 60, 95, 15];
    
function bubbleSort () {
    for (let i = 0; i < bubble.length; i++) {
        if (bubble[i] > bubble[i +1]) {
            let v1 = bubble[i]
            let v2 = bubble[i +1] 
            bubble[i] = v2
            bubble[i +1] = v1
        }
    }
}

for (let j = 0; j < bubble.length ; j++) {
    bubbleSort();
}

console.log(bubble)
console.timeEnd(bubbleSort)