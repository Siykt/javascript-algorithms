# 链表

在计算机科学中, 一个 链表 是数据元素的**线性**集合

在最简单的形式下, 每个节点由数据两个部分组成, 一个是用于存储数据的 **<元素域/值域>**, 一个是用于存储指针信息的 **<链接域/指针域>**

其元素的线性顺序是由每个元素的链接域中指针信息所组成:

`链表集合: { {元素域, 链接域}, {元素域, 链接域}, {元素域, 链接域} }`

在使用内存空间的表现上, 因为其节点存在指针信息的链接域, 所以链表不需要连续的内存地址:

| 访问地址 | 元素域 | 链接域 |
| :------: | :----: | :----: |
|   100    |   0    |  130   |
|   130    |   1    |  180   |
|   180    |   2    |   -    |

由于每个元素必须存储指向前后元素位置的指针, 会消耗相对更多的储存空间

因为链表的存储空间不连续, 你无法根据一个索引算出对应元素的地址, 所以不能随机访问

链表节点的实现参考: [LinkedListNode.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedList/LinkedListNode.ts)

## 链表的细分种类

链表有很多种不同的类型: 单向链表, 双向链表以及循环链表

### 单向链表

链表中最简单的一种是单向链表 (又名单链表、线性链表) , 其特点是链表的链接方向是单向的而最后一个节点则指向一个空值. 对链表的访问要通过从头部开始, 依序往下读取

实现参考: [SingleLinkedList.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedListSingleLinkedList.ts)

### 双向链表

双向链表与单向链表的差异就在于其链接域保存的指针有两个, 一个指向上一个节点(前驱), 一个指向下一个节点(后继), 所以, 从双向链表中的任意一个结点开始, 都可以很方便地访问它的前驱结点和后继结点

实现参考: [DoubleLinkedList.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedListDoubleLinkedList.ts)

## 实例

> 没有实例的数据结构都是空洞且乏味的

链表使用在对于不需要搜索但在变动频繁且无法预知数量上限的数据, 比如内存池、进程管理等场景.

### 合并有序链表

将两个升序链表合并为一个新的 **升序** 链表并返回, 新链表是通过拼接给定的两个链表的所有节点组成的

详细参见: [21. 合并两个有序链表 - 力扣（LeetCode）](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

算法实现: [examples/MergeTwoSortedLists.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedList/examples/MergeTwoSortedLists.ts)

### 有序链表的去重算法

给定一个已排序的链表的头 head, 删除所有重复的元素使每个元素只出现一次, 返回已排序的链表

详细参见: [83. 删除排序链表中的重复元素 - 力扣（LeetCode）](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

算法实现: [examples/DeleteDuplicates.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedList/examples/DeleteDuplicates.ts)

### 两个链表的两数相加

合并两个链表将其值域相加并返回为一个新的链表

详细参见: [2. 两数相加 - 力扣（LeetCode）](https://leetcode-cn.com/problems/add-two-numbers/))

算法实现: [examples/AddTwoNumbers.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedList/examples/AddTwoNumbers.ts)

### 删除链表的倒数第 N 个结点

删除链表的倒数第 N 个结点并且返回链表的头结点

详细参见: [19. 删除链表的倒数第 N 个结点 - 力扣（LeetCode）](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/))

算法实现: [examples/RemoveNthNodeFromEndOfList.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedList/examples/RemoveNthNodeFromEndOfList.ts)

### 反转链表

给你单链表的头节点 head, 请你反转链表, 并返回反转后的链表

详细参见: [206. 反转链表 - 力扣（LeetCode）](https://leetcode-cn.com/problems/reverse-linked-list/))

算法实现: [examples/ReverseLinkedList.ts](https://github.com/Siykt/javascript-algorithms/blob/master/src/LinkedList/examples/ReverseLinkedList.ts)
