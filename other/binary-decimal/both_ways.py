def decToBin(n):
    res = []
    while n:
        res.append(str(int(n % 2)))
        n = n // 2
    return "".join(reversed(res))


# def binToDec(n):
#     res = 0
#     for i in range(len(n)):
#         res += int(n[len(n) - 1 - i])*pow(2, i)
#     return res

def binToDec(n):
    return int(''.join(str(a) for a in n), 2)


# Convert decimal to binary and binary to decimal
number = 99

print(decToBin(number))
print(binToDec(decToBin(number)))
