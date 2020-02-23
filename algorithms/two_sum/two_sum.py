# O(n) time, O(log(n)) space
def twoNumberSum(arr, targetSum):
    index = {}
    for i in range(len(arr)):
        possibleMatch = targetSum - arr[i]
        indexedMatch = index.get(possibleMatch)
        if indexedMatch is None:
            index[arr[i]] = i
        else:
            return [indexedMatch, i]  # Add arr[ ] to return numbers
    return []


print(twoNumberSum([3, 5, 2, -4, 8, 11], 19))
