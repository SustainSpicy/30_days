const arr = [1,2,1,7,5,4,7,3,2,6,7,4,7]

let temp=null;
for (i =0; i<arr.length;i++){

    for(j=i+1; j<arr.length;j++){
 
        if(arr[j]<arr[i]){
            //copy from current
            temp = arr[i];
            // update current
            arr[i]=arr[j];
            // min is updated
            arr[j] = temp;
            
        }
    }
    
}