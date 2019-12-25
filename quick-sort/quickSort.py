def quickSort(array):
    quickSortHelper(array, 0, len(array) - 1)
    return array


def quickSortHelper(array, startIndex, endIndex):
    if startIndex >= endIndex:
        return
    pivot = startIndex
    left = startIndex + 1
    right = endIndex
    while right >= left:
        if array[left] > array[pivot] and array[right] < array[pivot]:
            array[left], array[right] = array[right], array[left]
        if array[left] <= array[pivot]:
            left += 1
        if array[right] >= array[pivot]:
            right -= 1
    array[pivot], array[right] = array[right], array[pivot]
    leftSubArraySmall = right - 1 - startIndex < endIndex - (right + 1)
    if leftSubArraySmall:
        quickSortHelper(array, startIndex, right - 1)
        quickSortHelper(array, right + 1, endIndex)
    else:
        quickSortHelper(array, right + 1, endIndex)
        quickSortHelper(array, startIndex, right - 1)
