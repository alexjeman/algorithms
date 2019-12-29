def reverseString(arr):
    i = 0
    j = len(arr) - 1
    while j > i:
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        i += 1
        j -= 1
    return arr

    # for i in range(len(arr)):
    #     j = (len(arr) - i - 1)
    #     if i > j:
    #         break
    #     tmp = arr[i]
    #     arr[i] = arr[j]
    #     arr[j] = tmp
    # return arr


print(reverseString(["h", "e", "l", "l", "o"]))
