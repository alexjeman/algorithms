# O(n)
def twoNumberSum(arr, target):
    map = {}
    i = 0
    while i < len(arr):
        potentialMatch = target - arr[i]
        previousIndex = map.get(potentialMatch)
        if previousIndex != None:
            return [previousIndex, i] # Add array[ ] if you want to return numbers
        else:
            map[arr[i]] = i
        i += 1
    return []


print(twoNumberSum([3, 5, 2, -4, 8, 11], 19))
