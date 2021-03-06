//现在有一个 Ajax 接口，根据用户 uid 获取用户 profile 信息，是一个批量接口。我把这个 ajax 请求封装成以下的异步函数
const requestUserProfile = uids => {
  // uids 是一个数组，最大接受 100 个 uid
  // 这个方法的实现不能修改

  const uidList = uids || [];

  return Promise.resolve().then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 模拟 ajax 异步，1s 返回
        resolve();
      }, 1000);
    }).then(function () {
      var profileList = uidList.map(uid => {
        if (uid < 0) {
          // 模拟 uid 传错，服务端异常，获取不到部分 uid 对应的 profile 等异常场景
          return null;
        } else {
          return {
            uid: uid,
            nick: uid + "Nick",
            age: 18,
          };
        }
      });
      return profileList.filter(profile => {
        return profile !== null;
      });
    });
  });
};

// 现在我们有很多业务都需要根据 uid 获取 userProfile , 大多数业务的需求都是给一个 uid，获取 profile 。为了性能，我们需要把这个单个的请求合并成批量请求。

// 例如，现在页面上 A 模块需要获取 uid 为 1 的 profile，B 模块需要 uid 为 2 的 profile， C 模块需要获取 uid 为 1 的profile
// 这三个模块会单独调用下面这个方法获取 profile，假设这三次调用的时间非常接近(100ms 以内)，最终要求只发送一个 ajax 请求（只调用一次 requestUserProfile )，拿到这三个模块需要的 profile

// 完成以下方法，接收一个参数 uid，返回一个 Promise，当成功请求到 profile 的时候， resolve 对应的profile , 请求失败 reject
// 例如  getUserProfile(1).then(function(profile){ console.log(profile.uid === 1) // true });  // 假设请求成功了。
const getUserProfile = uid => {
  // 你需要实现这个方法。
};
