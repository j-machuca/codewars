def isValid(s: str) -> bool:

    if len(s) % 2 != 0:
        return False

    # Create a map to hold the pair of opening and closing brackets
    parenMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    # create a stack to hold parentheses and pop when closed
    stack = []

    for char in s:
        # check if character is an opening paren
        if char in parenMap.values():
            # if it is an opening paren add to the stack
            stack.append(char)
        # Else if the character is a closing paren
        elif char in parenMap.keys():
            # check that length of the stack is not empty and the last paren in the stack is the matching paren

            if len(stack) == 0 or stack[-1] != parenMap[char]:
                return False
            stack.pop()

    return True if len(stack) == 0 else False


print(isValid("()"))  # True
print(isValid("()[]{}"))  # True
print(isValid("(]"))  # False
