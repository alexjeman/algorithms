def reverseString(arr):
    i = 0
    j = len(arr) - 1
    while i < j:
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        i += 1
        j -= 1
    return arr

print(reverseString(["h", "e", "l", "l", "o"]))
