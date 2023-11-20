const arr = [12,345,3,4,6,8,4,2,4,9,0]
let temp;
for (let current = 0; current < arr.length; current++) {
    let minIndex = current;
    while(minIndex > 0 && arr[minIndex]<arr[minIndex-1]){
        temp = arr[minIndex];
        arr[minIndex] = arr[minIndex-1];
        arr[minIndex-1]= temp;

        minIndex-=1;
    }
    console.log(arr);
}