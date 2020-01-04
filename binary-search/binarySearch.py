#  O(log(n)) time O(1) space


def binarySearch(arr, target):
    left = 0
    right = len(arr) - 1
    while left <= right:
        middle = (left + right) // 2
        potentialMatch = arr[middle]
        if target == potentialMatch:
            return middle
        elif target < potentialMatch:
            right = middle - 1
        else:
            left = middle + 1
    return -1

print(binarySearch([2, 5, 6, 8, 9, 12, 15, 20, 24, 26, 47], 15))
