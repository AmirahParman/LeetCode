/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'. */

let s = '';

function validStr(s) {
    s = s.split(''); // ( , ) , [, ], {, }

    let parenthesesCounter = 0;
    let curlyBraceCounter = 0;
    let squareCounter = 0;


    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')') {
            parenthesesCounter--;
        }
        else if (s[i] == '(') {
            parenthesesCounter++;
        }
        if (s[i] == '{') {
            curlyBraceCounter--;
        } else if (s[i] == '}') {
            curlyBraceCounter++
        }
        if (s[i] == '[') {
            squareCounter++;
        } else if (s[i] == ']')
            squareCounter--;
    }
    if (parenthesesCounter != 0 || curlyBraceCounter != 0 || squareCounter != 0) {
        return false;
    } else return true;
}