def reverseString(str):
    result = ""
    for i in range(len(str) - 1, -1, -1):
        result += str[i]
    return result


print(reverseString(("hello")))
