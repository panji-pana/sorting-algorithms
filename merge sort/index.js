// @ts-nocheck
var x = [1,4,7,45,7,43,44,25,6,4,6,9,34,2,49,50,5,31,56,2,18,34];

function mergeSort(arr){
    // check list isn't just a single element (a sorted single list)
    if(arr.length == 1){
        return arr
    }
    
    let result = splitInTwo(arr)

    /*
        keep splitting recursively until n items of 1 is reached (it is atomic)
        then merge back together
    */
    return mergeTwoLists(mergeSort(result[0]), mergeSort(result[1]))
}

function splitInTwo(arr){
    // split the array into two arrays up to the mid point and after the mid point
    let mid = Math.floor(arr.length/2)
    let arr1 = arr.slice(0,mid)
    let arr2 = arr.slice(mid)

    return [arr1,arr2]
}

function mergeTwoLists(a1,a2){
    console.log(a1,a2)
    let final = []
    let pointer1 = 0
    let pointer2 = 0

    let totalLength = a1.length + a2.length
    
    for(let i=0; i < totalLength; i++){
        
        if(a1[pointer1] !== undefined){
            
            if (a1[pointer1] <= a2[pointer2]){
                pointer1++
                final.push(a1[pointer1])
            }
            else{
                pointer2++
                final.push(a2[pointer2])
            }
        
        }
        else{
            final.push(a2[pointer2])
            pointer2++
        }

        console.log(final)
    
    }
    // console.log(final)
    return final
}