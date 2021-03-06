// We take an element from the unsorted part and insert it in the right place in the sorted part
// Initially one element would be sorted because a single elment is always sorted in itself

// Time Complexity O(n^2)
// Space Complexity O(1)
// In-place, Stable, Adaptive, Online

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (arr[j] > current && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}
