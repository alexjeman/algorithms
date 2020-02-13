function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return;
  }
  let pivot = startIndex;
  let left = startIndex + 1;
  let right = endIndex;
  while (right >= left) {
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      let tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
    }
    if (array[left] <= array[pivot]) {
      left++;
    }
    if (array[right] >= array[pivot]) {
      right--;
    }
  }
  let tmp = array[pivot];
  array[pivot] = array[right];
  array[right] = tmp;
  let leftSubArraySmall = right - 1 - startIndex < endIndex - (right + 1);
  if (leftSubArraySmall) {
    quickSortHelper(array, startIndex, right - 1);
    quickSortHelper(array, right + 1, endIndex);
  } else {
    quickSortHelper(array, right + 1, endIndex);
    quickSortHelper(array, startIndex, right - 1);
  }
}
