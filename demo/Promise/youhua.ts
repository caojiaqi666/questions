const axios = require("axios");

// 登录接口
const toLogin = async (data) => {
  return await axios({
    method: "POST",
    url: `http://localhost:9527/login`,
    data,
    withCredentials: true,
  });
};

// function getResData(data) {
//   return new Promise((resolve, reject) => {
//     toLogin(data)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => console.log(err, "===="));
//   });
// }

function getResData(data) {
  return toLogin(data)
    .then(res => res.data)
    .catch(err => console.log(err))
}

// 响应拦截器
// axios.interceptors.response.use(
//   (response) => {
//     if (response?.data?.state == 5) {
//       return router.push({
//         path: "/login",
//         query: { redirect: router.currentRoute.fullPath },
//       });
//     } else if (response?.data?.state == 4) {
//       console.log("权限不够");
//     }
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const fn = async () => {
  try {
    let res = await getResData({ username: "1223", passwd: "123121" });
    console.log("res: ", res);
  } catch (e) {
    console.log("e: ", e);
  }
};
fn();
