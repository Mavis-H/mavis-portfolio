# Leetcode #437: Path Sum III

---

![Alt Text](https://i.ibb.co/HpTVYMV/blog1-0.jpg)

[Problem #437](https://leetcode.com/problems/path-sum-iii/) gives an integer binary tree with `n` nodes, and a `targetSum`. We are trying to find the total number of paths where the sum of the node values along the path equals `targetSum`.

<br/>

1. To find a path with `targetSum`, we need to keep track of what value we want to add to the current path sum to reach the `targetSum`. A list `targets` could be a good way to store all wanted values.

## Code

```js
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
```

<br/>

2. If there could be more than one path that are waiting for the same wanted value, then we need to count the frequency of the same wanted value. A dictionary `targets` would be better to store wanted values.

## Code

```js
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
```

<br/>

3. Instead of storing the wanted values, how about we keep storing the current prefix sum of a path? Then when we reach a new node, we can check if any prefix sums equal the current sum - `targetSum`. This means there exists sub paths of the current path where the sum of the sub path value is `targetSum`. Lets change the `targets` dictionary to a `prefixsums` dictionary.
## Code

```js
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
```
