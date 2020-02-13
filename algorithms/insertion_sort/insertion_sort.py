def insertionSort(array):
    for i in range(1, len(array)):
        j = i
        while j > 0 and array[j - 1] > array[j]:
            array[j], array[j - 1] = array[j - 1], array[j]
            j -= 1
    return array


print(insertionSort([24, 26, 47, 2, 5, 6, 8, 9, 12, 15, 20]))
