import{A as r}from"./UIcon.ada0175d.js";const o=`# Leetcode #11: Container with Most Water

---

![Alt Text](https://i.ibb.co/4RQLn0C/blog0-0.png)

[Problem #11](https://leetcode.com/problems/container-with-most-water/description/) gives an integer array \`height\` of length \`n\`, and each element represents a height. We are trying to find a container that can trap the most water.

<br/>

To calculate the container's water volume: **\`V = h * w = min(height[left], height[right]) * (right - left)\`**, where \`left\` and \`right\` are the indexes of the container's borders.

<br/>

We start with the largest \`w\` we can have which is when \`left\` is \`0\` and \`right\` is \`n-1\`. To find the largest container, we could reduce the \`w\` by \`1\` and search for a better \`h\`. The problem is how to reduce the \`w\`. Which side of the border should we change?

<br/>

The answer is very intuitive. We abandon the lower border to search for a better \`h\`.

<br/>

## Code

\`\`\`js
volume = 0
left, right = 0, len(height)-1

while left < right:
    curr_volume = min(height[left], height[right]) * (right - left)
    volume = max(volume, curr_volume)
    if height[left] < height[right]:
        left +=1
    else:
        right -=1

return volume
\`\`\`
`,s=`# Leetcode #437: Path Sum III

---

![Alt Text](https://i.ibb.co/HpTVYMV/blog1-0.jpg)

[Problem #437](https://leetcode.com/problems/path-sum-iii/) gives an integer binary tree with \`n\` nodes, and a \`targetSum\`. We are trying to find the total number of paths where the sum of the node values along the path equals \`targetSum\`.

<br/>

1. To find a path with \`targetSum\`, we need to keep track of what value we want to add to the current path sum to reach the \`targetSum\`. A list \`targets\` could be a good way to store all wanted values.

## Code

\`\`\`js
targets = [targetSum]
pathSum(root, targetSum, targets)

def pathSum(root, targetSum, targets) -> int:
    count = 0
    if root:
        // if the current node value equals to any of the wanted values, then we find a required path
        // there could be more than one path that are waiting for the same wanted value
        count += len([t for t in targets if t == root.val]) 

        // 1: adjusts all the wanted values with the current node value
        // 2: add the original targetSum to the wanted values, because the path can start from any node
        targets = [t - root.val for t in targets] + [targetSum]

        // dfs search down the binary tree
        count += pathSum(root.left, targetSum, targets) + pathSum(root.right, targetSum, targets)

    return count
\`\`\`

<br/>

2. If there could be more than one path that are waiting for the same wanted value, then we need to count the frequency of the same wanted value. A dictionary \`targets\` would be better to store wanted values.

## Code

\`\`\`js
targets = {targetSum: 1}
pathSum(root, targetSum, targets)

def pathSum(root, targetSum, targets) -> int:
    count = 0
    if root:
        // if the current node value equals to any of the wanted values, then we find a required path
        // there could be more than one path that are waiting for the same wanted value
        if root.val in targets:
            count += targets[root.val]

        // 1: adjusts all the wanted values with the current node value
        // 2: add the original targetSum to the wanted values, because the path can start from any node
       targets = { k - root.val: v for k, v in targets.items() }
        if targetSum not in targets:
            targets[targetSum] = 1
        else:
            targets[targetSum] += 1

        // dfs search down the binary tree
        count += pathSum(root.left, targetSum, targets) + pathSum(root.right, targetSum, targets)

    return count
\`\`\`

<br/>

3. Instead of storing the wanted values, how about we keep storing the current prefix sum of a path? Then when we reach a new node, we can check if any prefix sums equal the current sum - \`targetSum\`. This means there exists sub paths of the current path where the sum of the sub path value is \`targetSum\`. Lets change the \`targets\` dictionary to a \`prefixsums\` dictionary.
## Code

\`\`\`js
prefixsums = defaultdict(int)
prefixsums[0] = 1
pathSum(root, targetSum, prefixsums, 0)

def pathSum(root, targetSum, prefixsums, curr_sum) -> int:
    count = 0
    if root:
        curr_sum +=root.val

        // if there exists any prefixsums equal to the current sum - targetSum, we find required sub paths
        count +=prefixsums[curr_sum - targetSum]

        // add the current sum as a prefix sum to the dictionary
        prefixsums[curr_sum] += 1

        // dfs search down the binary tree
        count += pathSum(root.left, targetSum, prefixsums, curr_sum)
        count += pathSum(root.right, targetSum, prefixsums, curr_sum)

        // remove the current sum after finishing searching down this path
        prefixsums[curr_sum] -= 1

    return count
\`\`\`
`,t=e=>e,i=[t({slug:"py",name:"Python"}),t({slug:"algo",name:"Algorithm"}),t({slug:"lc",name:"Leetcode"}),t({slug:"dp",name:"Dynamic Programming"}),t({slug:"2pointers",name:"Two Pointers"}),t({slug:"ar",name:"Array"}),t({slug:"bt",name:"Binary Tree"}),t({slug:"dfs",name:"Depth First Search"})],a=(...e)=>i.filter(n=>e.includes(n.slug)),h=[{slug:"container-with-most-water-intuitive-solution",color:"lightblue",description:o,shortDescription:"An intuitive solution to find the container with most water in a 1D array using <b>two pointers</b>.",id:0,links:[{to:"https://leetcode.com/problems/container-with-most-water/",label:"Leetcode"}],logo:r.Blog_0,name:"Container with Most Water Intuitive Solution",date:new Date("June 18, 2024"),topics:a("lc","2pointers","ar","algo")},{slug:"path-sum-3-of-binary-tree",color:"lightcoral",description:s,shortDescription:"3 solutions with different level of optimization, using <b>DFS</b>.",id:0,links:[{to:"https://leetcode.com/problems/path-sum-iii/",label:"Leetcode"}],logo:r.Blog_1,name:"Find All Path with Target Sum in Binary Tree",date:new Date("July 9, 2024"),topics:a("lc","bt","algo","dfs")}],l="Blogs";export{h as a,i,l as t};
