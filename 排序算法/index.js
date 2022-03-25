// https://juejin.cn/post/6844903444365443080

const arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const arr2 = [6, 8, 2, 4, 1, 0, 9, 7, 3, 5];
const arr3 = [];
const arr4 = [0, 0, 0, 1, 9, 5];
const arr5 = [5, 5, 5];

/**
 * 冒泡排序
 * 时间复杂度：O(n ** 2)
 * 原理：相邻元素进行比较，交换彼此位置
 */
const bubbleSort = (arr) => {
  console.time("冒泡排序耗时：");
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // console.log(arr.toString());
  console.timeEnd("冒泡排序耗时：");
  return arr;
};

/**
 * 选择排序
 * 时间复杂度：O(n ** 2)
 * 原理：从头开始遍历数组每次找到最小的，与最前面的交换位置
 */
const selectSort = (arr) => {
  // 时间复杂度： O(n ** 2)
  console.time("选择排序耗时：");
  const len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    // console.log(arr.toString());
    console.timeEnd("选择排序耗时：");
  }
  return arr;
};

/**
 * 插入排序
 * 时间复杂度：O(n ** 2)
 * 原理：遍历数组在已排序列中从后向前扫描，找到对应位置插入
 */
const insertSort = (arr) => {
  console.time("插入排序耗时：");
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    console.log(arr.toString());
  }
  console.timeEnd("插入排序耗时：");
  return arr;
};

/**
 * 希尔排序
 * 平均时间复杂度o(n^1.3)
 * 是简单插入排序的改进版；它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序
 * 原理：将待排序的数列分为多个组，然后再对每个组进行插入排序，先使数列大致有序，然后多次调整分组方式，使数列更加有序，最后再用一次插入排序，使数列全部有序
 */
const shellSort = (arr) => {
  console.time("希尔排序耗时：");
  const len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i - gap;
      let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + gap] = arr[j];
        arr[j] = temp;
        j -= gap;
      }
    }
    gap = Math.floor(gap / 2);
    // console.log(arr.toString());
  }
  console.timeEnd("希尔排序耗时：");
  return arr;
};

/**
 * 归并排序（分治思想）
 * 平均时间复杂度O(n log n）
 * 和选择排序一样，归并排序的性能不受输入数据的影响，代价是需要额外的内存空间。
 * 原理：把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起
 */
const mergeSort = (arr) => {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  // length >> 1 和 Math.floor(len / 2) 等价
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

/*
 * 快速排序
 * 时间复杂度：最佳情况：T(n) = O(nlogn)。 最差情况：T(n) = O(n2)。 平均情况：T(n) = O(nlogn)。
 * 快速排序的特点就是快，而且效率高！它是处理大数据最快的排序算法之一。
 * 原理：先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。左右分别用一个空数组去存储比较后的数据。最后递归执行上述操作，直到数组长度 <= 1;
 */
const quickSort = (arr) => {
  // 这里不能记录len=arr.length,否则执行栈会溢出
  if (arr.length <= 1) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const valArr = arr.splice(midIndex, 1);
  const midIndexVal = valArr[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(midIndexVal, quickSort(right));
};

/*
 * 快排和归并用的都是分治思想，递推公式和递归代码也非常相似，那它们的区别在哪里呢 ？
归并排序的处理过程是由下而上的，先处理子问题，然后再合并。
而快排正好相反，它的处理过程是由上而下的，先分区，然后再处理子问题。
归并排序虽然是稳定的、时间复杂度为 O(nlogn) 的排序算法，但是它是非原地排序算法。
归并之所以是非原地排序算法，主要原因是合并函数无法在原地执行。
快速排序通过设计巧妙的原地分区函数，可以实现原地排序，解决了归并排序占用太多内存的问题。
 */

console.log(quickSort(arr1));

/**
 * 
 堆排序
  堆排序基本介绍
1.堆排序是利用堆这种数据结构而设计的一种排序算法，堆排序是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。
2.堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆, 注意 : 没有要求结点的左孩子的值和右孩子的值的大小关系。
3.每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆

堆排序的基本思想是：
1.将待排序序列构造成一个大顶堆
2.此时，整个序列的最大值就是堆顶的根节点。
3.将其与末尾元素进行交换，此时末尾就为最大值。
4.然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。

可以看到在构建大顶堆的过程中，元素的个数逐渐减少，最后就得到一个有序序列了.


 * 
 */

let arr = [4, 6, 8, 5, 9, -1, 17, 5, 23, 11, 6];
heapSort(arr);
console.log(arr);



//编写一个堆排序
function heapSort(arr) {
  let temp;
  //1.将无序序列构成一个堆，根据升序降序需求选择大顶堆或小顶堆
  //最后一个值的序号为arr.length-1，根据顺序存储二叉树，
  //n节点的左子树为2*n+1,右子树为2*n+2，
  //那么最后一个非叶子节点的值应该为Math.floor((arr.length-1-1)/2)
  //= Math.floor((arr.length)/2 -1)
  //=Math.floor(arr.length / 2) - 1
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    adjustHeap(arr, i, arr.length);
  }
  //2.将堆顶元素与末尾元素交换，将最大元素“沉”到数组末端
  //3.重新调整结构，使其满足堆条件，然后继续交换堆顶元素和当前末尾元素,
  //  反复执行调整+交换步骤，直到整个序列有序
  for (let j = arr.length - 1; j > 0; j--) {
    //交换
    temp = arr[j];
    arr[j] = arr[0];
    arr[0] = temp;
    adjustHeap(arr, 0, j);
  }
}

//将一个数组(二叉树),调整成一个大顶堆
/**
 * 将以i对应的非叶子节点的树调整成一个大顶堆
 * @param {要调整的数组} arr
 * @param {表示非叶子节点在数组中的索引} i
 * @param {对多少个元素进行调整，length是在逐渐减少} length
 */
function adjustHeap(arr, i, length) {
  let temp = arr[i]; //先取出当前元素的值，保存在临时变量
  //开始调整
  //说明 调整非叶子节点的顺序时从下到上，从左到右
  //从最下层开始，逐层将大的值往上提
  //1.k=i*2+1是i节点的左子节点
  for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {
    if (k + 1 < length && arr[k] < arr[k + 1]) {
      //说明左子节点的值小于右子节点的值
      k++; //k指向右子节点
    }
    if (arr[k] > temp) {
      //如果子节点大于父节点
      arr[i] = arr[k]; //把较大的值赋给当前节点
      //i指向k，继续循环比较，使的以当前i顶点的二叉树满足大顶堆的条件
      //k为i节点的左子节点或右子节点，因为从下往上调整的，
      //我们可以认为左子节点树或右子节点树已经是一个大顶堆，
      //当这个大顶堆的顶点被某值X替换后，大顶堆被破坏结构，
      //此时我们需要从原来的大顶堆右边节点树找到一个位置，将X放入该位置，从而重新形成大顶堆结构
      //其实是从把最右边的一排节点逐层上移，X被安放在最右边的一排节点中合适的位置
      i = k;
    } else {
      break; //调整非叶子节点的顺序时从下到上，从左到右,所以可以中断
    }
    //当for选好结束后，我们已经将以i为父节点的树的最大值，放在了最顶上（局部）
    arr[i] = temp; //将temp值放到调整后的位置
  }
}
