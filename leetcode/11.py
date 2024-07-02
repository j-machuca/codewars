

def maxArea(height):
    left = 0
    right = len(height) - 1
    curr_max = 0

    while left < right:
        x = right - left
        y = height[right] if height[left] > height[right] else height[left]

        area = x * y
        curr_max = max(curr_max, area)

        if height[left] > height[right]:
            right -= 1
        else:
            left += 1

    return curr_max


print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
