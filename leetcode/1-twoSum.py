from typing import List

remainders = {}


def twoSumEnumarate(nums: List[int], target: int) -> List[int]:

    # use a map to store the remainders
    remainders = {}

    # iterate over the array
    for k, v in enumerate(nums):
        # calculate the remainder of each operation
        diff = target - v
        # check if the remainder is in the map
        if diff in remainders:
            # return the index of the current iteration and the index of the remainder
            return [remainders[diff], k]
        else:
            remainders[v] = k


def twoSum(nums: List[int], target: int) -> List[int]:

    remainders = {}

    for i in range(len(nums)):
        diff = target - nums[i]

        if diff in remainders:
            return [remainders[diff], i]
        else:
            remainders[nums[i]] = i


print(twoSum(nums=[2, 3, 7, 15], target=10))
