var x = [1,4,7,45,7,43,44,25,6,4,6,9,34,2,49,50,5,31,56,2,18,34];

function insertionSort(arr){ 
    let i, j, temp;
    let n = arr.length; 
    
    for (i = 1; i < n; i++){ 
        
        temp = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than temp, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > temp)
        { 
            arr[j + 1] = arr[j]; 
            j-- 
        } 
        arr[j + 1] = temp; 
    } 

    return arr;
} 
