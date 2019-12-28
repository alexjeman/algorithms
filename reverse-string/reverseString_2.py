def reverseString(str):
    i = len(str) - 1
    j = 0
    while i > j:
        tmp = str[i]
        str[i] = str[j]
        str[j] = tmp
        i -= 1
        j += 1
    return str

print(reverseString(["h","e","l","l","o"]))