def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    results = []
    i = 0
    j = 0
    mid = len(arr) // 2
    left = mergeSort(arr[:mid])
    right = mergeSort(arr[mid:])
    while (i < len(left) and j < len(right)):
        if (right[j] > left[i]):
            results.append(left[i])
            i += 1
        else:
            results.append(right[j])
            j += 1
    while (i < len(left)):
        results.append(left[i])
        i += 1
    while (j < len(right)):
        results.append(right[j])
        j += 1
    return results


print(mergeSort([24, 26, 47, 2, 5, 6, 8, 9, 12, 15, 20]))
