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
    list = []
    for i in range(n):
        list.append(rd.randint(0,n))
    return list


def checkIfSorted(list):
    """[summary]
    Args:
        list ([list]): [input list to check if sorted]
    Returns:
        [bool]: [return True if the list is sorted, False elsewhere]
    """
    for listIndex in range(len(list)-1):
        if list[listIndex]>=list[listIndex+1]:
            if listIndex==len(list)-2:
                return True
        else:
            return False

def sortList(list):
    """[summary]

    Args:
        list ([list]): [list of int to sort]

    Returns:
        [list]: [sorted list ]
    """
    for n in range(len(list)-1):
        for i in range(len(list)-1):
            a=list[i]
            b=list[i+1]
            if list[i]<list[i+1]:
                tempo=list[i]
                list[i] =list[i+1]
                list[i+1]=tempo
    return list

def sortListOpt(list):
    """[summary]
    An optimized implementation of bubble sorting algorithm
    Args:
        list ([list]): [list of int to sort]
    Returns:
        [list]: [sorted list ]
    """
    for n in range(len(list)-1):
        for i in range(len(list)-1-n):
            a=list[i]
            b=list[i+1]
            if list[i]<list[i+1]:
                tempo=list[i]
                list[i] =list[i+1]
                list[i+1]=tempo
    return list


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
