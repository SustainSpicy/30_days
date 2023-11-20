const arr = [1,2,3,4,5,6,7,8,9,10];

let lo = 0;
let hi = arr.length-1;

let mid = Math.ceil((lo+hi)/2);

let num = 5;

while(lo<=hi){

    if(arr[mid]>num){
        console.log(arr[mid]);
        hi = mid-1;
    }
    if(arr[mid]<num){
        console.log(arr[mid]);
        lo = mid+1;
    }
    if(arr[mid]===num){
        console.log(arr[mid]);
        return "found it";
    }
    mid = Math.ceil((lo+hi)/2);
}