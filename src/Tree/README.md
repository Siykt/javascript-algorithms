# 树

树是数据结构中比较重要也是比较难理解的一类存储结构, 它的结构是一种非线性存储结构, 存储的是具有"一对多"关系的数据元素的集合

> 示例 1

```
     1
   /   \
  2     3
 / \   / \
4   5 6   7
```

将具有"一对多"关系的集合中的数据元素按照示例的恶形式进行存储, 整个存储形状在逻辑结构上看,类似于实际生活中倒着的树, 所以称这种存储结构为"树型"存储结构

## 节点

使用树结构存储的每一个数据元素都被称为"节点", 树节点同 [链表节点](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedList/LinkedListNode.ts) 类似 (链式存储结构), 也是由两大部分组成: 一个是用于存储数据的**元素域**, 一个是用于存储指针信息的**链接域**

每一个非空树都有且只有一个被称为根的节点, 只要一个节点不存在父节点, 那么它就是该树的**根节点**,
而任何没有子节点的节点称为**叶节点**

数节点的实现参考: [TreeNode.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/Tree/TreeNode.ts)

### 节点的度和层次

对于一个节点, 拥有的子树数 (**节点有多少分支**) 称为节点的**度 (Degree)**. 如示例 1 中, 每个节点的子节点都是 2 个即为 2 度. 二叉树就是**一颗只包含的 0、1、2 度节点组成的树**

而一棵树的深度是树中节点所在的最大的层次, 也就是最深处的叶节点所处的位置. 如示例中, 最深处的叶节点的深度为 3, 次树的深度亦为 3

### 有序和无序

如果树中节点的子树从左到右看, 谁在左边, 谁在右边, 是有规定的, 这棵树称为**有序树**, 反之称为**无序树**. 在有序树中, 一个节点最左边的子树称为"第一个孩子", 最右边的称为"最后一个孩子"

## 二叉树

简单地理解, 满足以下两个条件的树就是二叉树:

1. 有序树
2. 只包含的 0、1、2 度节点

> 二叉树 示例

```
     1
   /   \
  2     3
 / \   /
4   5 6
```

### 二叉树的性质

从其特殊的结构我们可以总结出以下几个性质:

1. 二叉树中, 第 i 层最多有 $2^{(i - 1)}$ 个结点, 比如第 5 层最多能有 `2 ** (5 - 1) = 16` 个结点
2. 如果二叉树的深度为 K, 那么此二叉树最多有 $2^K-1$ 个结点, 比如深度为 4 的二叉树最多有 `2 ** 4 - 1 = 15` 个结点
3. 二叉树中, 叶结点数（即度为 0 的节点）为 n0, 度为 2 的结点数为 n2, 则 `n0 = n2 + 1`

### 满二叉树

当二叉树中除了终端结点, 每个结点的度都为 2, 则此二叉树称为满二叉树

> 示例 1 即为满二叉树

作为特殊的二叉树, 满二叉树还具有以下性质:

1. 满二叉树中第 i 层的节点数为 $2^{(i - 1)}$ 个
2. 深度为 K 的满二叉树必有 $2^K-1$ 个节点, 叶节点数为 $2^{(K - 1)}$
3. 满二叉树中不存在度为 1 的节点, 每一个分支点中都是两棵深度相同的子树, 且叶子节点都在最底层
4. 具有 n 个节点的满二叉树的深度为 $\log_2{(n+1)}$

### 完全二叉树

如果二叉树中除去最后一层节点为满二叉树, 且最后一层的结点依次从左到右分布, 则此二叉树被称为完全二叉树.

> 示例 1 与 二叉树 示例都是完全二叉树

### 二叉树的遍历实例

#### 前序遍历

给你二叉树的根节点 root, 返回它节点值的 前序 遍历

详细参见: [144. 二叉树的前序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-preorder-traversal/))

算法实现: [examples/PreorderTraversal.ts](./examples/PreorderTraversal.ts)

#### 中序遍历

给定一个二叉树的根节点 root, 返回 它的 中序 遍历

详细参见: [94. 二叉树的中序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-inorder-traversal/))

算法实现: [examples/InorderTraversal.ts](./examples/InorderTraversal.ts)

#### 后序遍历

给定一个二叉树的根节点 root, 返回 它的 后序 遍历

详细参见: [94. 二叉树的后序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-postorder-traversal/))

算法实现: [examples/PostorderTraversal.ts](./examples/PostorderTraversal.ts)

#### 层序遍历

给你二叉树的根节点 root, 返回其节点值的 层序遍历 （即逐层地, 从左到右访问所有节点）

详细参见: [102. 二叉树的层序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-level-order-traversal/))

算法实现: [examples/LevelOrder.ts](./examples/LevelOrder.ts)

### 算法实例

> 没有实例的数据结构都是空洞且乏味的

#### 二叉树的最大深度

给定一个二叉树, 找出其最大深度

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数

同理可得计算最深 DOM 节点树的深度的实现

详细参见: [104. 二叉树的最大深度 - 力扣（LeetCode）](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

算法实现: [examples/MaxDepth.ts](./examples/MaxDepth.ts)

#### 98. 验证二叉搜索树

给你一个二叉树的根节点 root , 判断其是否是一个有效的二叉搜索树

有效 二叉搜索树定义如下：

- 节点的左子树只包含 小于 当前节点的数
- 节点的右子树只包含 大于 当前节点的数
- 所有左子树和右子树自身必须也是二叉搜索树

详细参见: [98. 验证二叉搜索树 - 力扣（LeetCode）](https://leetcode.cn/problems/validate-binary-search-tree/)

算法实现: [examples/validateBinarySearchTree.ts](./examples/validateBinarySearchTree.ts)

#### 101. 对称二叉树

给你一个二叉树的根节点 root , 检查它是否轴对称

详细参见: [101. 对称二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/symmetric-tree/)

算法实现: [examples/symmetricTree.ts](./examples/symmetricTree.ts)

#### 700. 二叉搜索树中的搜索

给定二叉搜索树（BST）的根节点 root 和一个整数值 val

你需要在 BST 中找到节点值等于 val 的节点. 返回以该节点为根的子树 如果节点不存在, 则返回 null

详细参见: [700. 二叉搜索树中的搜索 - 力扣（LeetCode）](https://leetcode.cn/problems/search-in-a-binary-search-tree/)

算法实现: [examples/searchInABinarySearchTree.ts](./examples/searchInABinarySearchTree.ts)

#### 116. 填充每个节点的下一个右侧节点指针

给定一个 完美二叉树 , 其所有叶子节点都在同一层, 每个父节点都有两个子节点

填充它的每个 next 指针, 让这个指针指向其下一个右侧节点. 如果找不到下一个右侧节点, 则将 next 指针设置为 NULL

详细参见: [116. 填充每个节点的下一个右侧节点指针 - 力扣（LeetCode）](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)

算法实现: [examples/populatingNextRightPointersInEachNode.ts](./examples/populatingNextRightPointersInEachNode.ts)

#### 617. 合并二叉树

详细参见: [617. 合并二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-two-binary-trees/)

算法实现: [examples/mergeTwoBinaryTrees.ts](./examples/mergeTwoBinaryTrees.ts)

#### 235. 二叉搜索树的最近公共祖先

详细参见: [235. 二叉搜索树的最近公共祖先 - 力扣（LeetCode）](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)

算法实现: [examples/lowestCommonAncestor.ts](./examples/lowestCommonAncestor.ts)

#### 226. 翻转二叉树

给你一棵二叉树的根节点 root , 翻转这棵二叉树, 并返回其根节点

详细参见: [226. 翻转二叉树 - 力扣（LeetCode）](https://leetcode.cn/problems/invert-binary-tree/)

算法实现: [examples/invertBinaryTree.ts](./examples/invertBinaryTree.ts)

#### 701. 二叉搜索树中的插入操作

详细参见: [701. 二叉搜索树中的插入操作 - 力扣（LeetCode）](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

算法实现: [examples/insertIntoABinarySearchTree.ts](./examples/insertIntoABinarySearchTree.ts)

#### 112. 路径总和

详细参见: [112. 路径总和 - 力扣（LeetCode）](https://leetcode.cn/problems/path-sum/)

算法实现: [examples/hasPathSum.ts](./examples/hasPathSum.ts)

#### 653. 两数之和 IV - 输入二叉搜索树

详细参见: [653. 两数之和 IV - 输入二叉搜索树 - 力扣（LeetCode）](https://leetcode.cn/problems/two-sum-iv-input-is-a-bst/)

算法实现: [examples/findTargetByBST.ts](./examples/findTargetByBST.ts)
