// import assert from 'power-assert@1.6.1/build/power-assert.js';

// function loopString() {}

// /*
//  * --- 测试部分无需修改 ---
//  */
// try {
//   const bar = loopString('bar');
//   assert.strictEqual(bar(), 'b');
//   assert.strictEqual(bar(), 'a');
//   assert.strictEqual(bar(), 'r');
//   assert.strictEqual(bar(), 'b');
//   console.log('通过');
// } catch (err) {
//   console.log('不通过');
// }

// function find(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       let c = Math.sqrt(i * i + j * j);
//       if (
//         i + j > c &&
//         i + c > j &&
//         j + c > i &&
//         c <= n &&
//         Number.isInteger(c)
//       ) {
//         arr.push(`${i},${j},${c}`);
//       }
//     }
//   }
//   return arr;
// }

// console.log(find(10));

// function feb(arr, now) {
//   return [...arr, arr[now - 1] + arr[now]];
// }

// function findFibonacciIndex(n) {
//   let arr = [1, 1];
//   let now = 1;
//   // 当斐波那契数列最后一项小于n时，调用feb函数，这样可以减少调用次数
//   while (arr[now] < n) {
//     arr = feb(arr, now);
//     now++;
//   }
//   return arr.findIndex((item) => item === n);
// }

// console.log(findFibonacciIndex(34));

function findParentDirectory(paths) {
  let result = null;

  paths.reduce((pre, cur) => {
    console.log('pre, cur: ', pre, cur);
    let left = 0;
    
    let leftArr = pre.split("/");
    let rightArr = cur.split("/");
    let minLen = Math.min(leftArr.length, rightArr.length);
    while (left < minLen) {
      console.log(leftArr, rightArr, left);

      if (leftArr[left] === rightArr[left]) {
        left++;
      } else {
        break;
      }
    }
  }, "");

  return result;
}

// console.log(
//   findParentDirectory([
//     "/home/admin/vue",
//     "/home/admin/react",
//     "/home/pages/1.js",
//   ])
// );


// import 'vue@3/dist/vue.global.prod.js';
// import React from 'react';
// import ReactDOM from 'react-dom';

// /**
//  * 券卡片渲染数据
//  */
// interface IDirectVoucher {
//   /** 标题 */
//   title?: string;
//   /** 副标题 */
//   subTitle?: string;
// }

// const cardDataList: IDirectVoucher[] = [
//   {
//     title: '杭州市通用5元券',
//     subTitle: '杭味面馆非常好吃，味道鲜美，特别划算，快快抢购',
//   },
//   {
//     title: '杭州市10元券',
//     subTitle: '兰州拉面非常好吃'
//   },
// ];

// interface ICardProps {
//   data: IDirectVoucher;
// }
  
// /** 这里是Vue实现方式 **/
// const CardVue = {
//   props: {
//     data: Object,
//   },
//   template: `
// <div class="card">
//   <div>{{data.title}}</div>
//   <div>待实现</div>
// </div>
//   `
// };
  
// const CardListVue = {
//   components: { CardVue },
//   data() {
//     return {
//       cardDataList,
//     };
//   },
//   template: `
// <div>
//   <cardVue v-for="cardData in cardDataList" :data="cardData" />
// </div>
// `,
// }

// Vue.createApp(CardListVue).mount('#app-vue');


  
  
// /** 这里是react实现方式**/
// const CardReact: React.FC<ICardProps> = (props) => {
//   const { data } = props;
//   return (
//     <div className="card">
//     	<div>{data.title}</div>
//       <div>待实现</div>
//     </div>
//   );
// };

// const CardList: React.FC<{ list: IDirectVoucher[] }> = (props) => {
//   return (
//     <>
//       {props.list.map((data) => (
//         <CardReact data={data} />
//       ))}
//     </>
//   );
// };

// ReactDOM.render(<CardList list={cardDataList} />, document.getElementById('app-react'));


let n = 0;
function loopString(str) {
  let arr = str.split('');
  let result = arr[n % 3];
  n++;
  return result;
}
console.log(loopString("str"));
console.log(loopString("str"));
console.log(loopString("str"));
console.log(loopString("str"));