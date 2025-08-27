import time
import random as rd

"""[summary]
- Aim of this file is to implement, test and evaluate the classic algorithm of bubble sorting.
- I made an optimized version of this algorithm by decreasing by one the number of combinations 
to check each time.
"""

def listGenerator(n):
    """[summary]
    This function returns a list of n random elements from 0 to n
    Args:
        n ([int]): [number of elements in the returned list]
    Returns:
        [list]: [list of (n) random element]
    """
    data = []
    for i in range(n):
        data.append(rd.randint(0, n))
    return data


def checkIfSorted(data):
    """[summary]
    Args:
        data ([list]): [input list to check if sorted]
    Returns:
        [bool]: [return True if the list is sorted, False elsewhere]
    """
    for i in range(len(data) - 1):
        if data[i] > data[i + 1]:
            return False
    return True

def sortList(data):
    """[summary]

    Args:
        data ([list]): [list of int to sort]

    Returns:
        [list]: [sorted list ]
    """
    for n in range(len(data) - 1):
        for i in range(len(data) - 1):
            a = data[i]
            b = data[i + 1]
            if data[i] > data[i + 1]:
                tempo = data[i]
                data[i] = data[i + 1]
                data[i + 1] = tempo
    return data

def sortListOpt(data):
    """[summary]
    An optimized implementation of bubble sorting algorithm
    Args:
        data ([list]): [list of int to sort]
    Returns:
        [list]: [sorted list ]
    """
    for n in range(len(data) - 1):
        for i in range(len(data) - 1 - n):
            a = data[i]
            b = data[i + 1]
            if data[i] > data[i + 1]:
                tempo = data[i]
                data[i] = data[i + 1]
                data[i + 1] = tempo
    return data


if __name__ == "__main__":
    # Time analysis

    ## Optimized version analysis
    before = time.time()
    outList = sortListOpt(listGenerator(100000))
    after = time.time()
    deltaOpt = after - before
    print(f"Opt : {deltaOpt}s ")

    ## Naive version analysis
    before = time.time()
    outList = sortList(listGenerator(100000))
    after = time.time()
    delta = after - before

    print(f"Norm: {delta}s ")

    ## Difference
    print(f"Diff: {int(deltaOpt/delta*100)}% ")



# (c) NajlaaEzz 2021
