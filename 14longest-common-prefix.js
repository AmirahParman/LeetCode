/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */

let strs = ["flower", "flow", "flight"];
let i = 0;
let output = '';
let temptLetter = '';
let letterToLookAt = 0;

while (i < strs.length) {
    let currentItem = strs[i].split('');

    if (currentItem.length == 0 || letterToLookAt >= currentItem.length)
        break;

    if (i == 0) {
        temptLetter = currentItem[letterToLookAt];
    }

    if (temptLetter == currentItem[letterToLookAt]) {
        if (i == strs.length - 1) {
            output += currentItem[letterToLookAt];
        }
    }
    else {
        break;
    }

    if (i < strs.length - 1) {
        i++;
    }
    else {
        i = 0;
        letterToLookAt++
    }
}

console.log(output)