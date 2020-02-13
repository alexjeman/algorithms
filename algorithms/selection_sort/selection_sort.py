# Time O(1) space O(n^2)
def selectionSort(array):
    currentIndex = 0
    while currentIndex < len(array) - 1:
        smallIndex = currentIndex
        for i in range(currentIndex + 1, len(array)):
            if array[smallIndex] > array[i]:
                smallIndex = i
        array[currentIndex], array[smallIndex] = array[smallIndex], array[currentIndex]
        currentIndex += 1
    return array

print(selectionSort([24, 26, 47, 2, 5, 6, 8, 9, 12, 15, 20]))
