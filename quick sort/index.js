function pivot(arr, start = 0, end = arr.length + 1){
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

    let pivot = arr[start],
        pointer = start;


    for (let i = start; i < arr.length; i++) {
        if (arr[i] < pivot  ) {
            pointer++;
            swap(arr, pointer, i);
        }
    };
    swap(arr, start, pointer);

    return pointer;
}

function quickSort (arr, start = 0, end = arr.length){
    let pivotIndex = pivot(arr, start, end);

    if (start >= end) return arr;
    arr = quickSort(arr, start, pivotIndex);
    arr = quickSort(arr, pivotIndex + 1, end);

    return arr;
};

const x = [1,4,7,45,7,43,44,25,6,4,6,9,34,2,49,50,5,31,56,2,18,34];
