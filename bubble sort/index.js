var x = [1,4,7,45,7,43,44,25,6,4,6,9,34,2,49,50,5,31,56,2,18,34];

function bubbleSort(arr){
    let isSorted = false;
    while(!isSorted){
        isSorted = true
        for (let i=0;i<arr.length-1;i++){
            const temp = arr[i+1]
            
            // comparing pairs
            if(arr[i]>arr[i+1]){

                arr[i+1] = arr[i]
                arr[i] = temp
            
                isSorted = false
            }
        }
    }
    return arr
}
