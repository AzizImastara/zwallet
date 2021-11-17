// import cookies from "next-cookies";

// export function unAuthPage(context) {
//   // Public Route
//   return new Promise((resolve) => {
//     const dataCookie = cookies(context);
//     if (dataCookie.token) {
//       return context.res
//         .writeHead(302, {
//           Location: "/main/home",
//         })
//         .end();
//     }
//     resolve("unauthorized");
//   });
// }

// export function authPage(context) {
//   // Private Route
//   return new Promise((resolve) => {
//     const dataCookie = cookies(context);
//     if (!dataCookie.token) {
//       return context.res
//         .writeHead(302, {
//           Location: "/auth/login",
//         })
//         .end();
//     }
//     return resolve(dataCookie);
//   });
// }

import cookies from "next-cookies";

export function getDataCookie(context) {
  return new Promise((resolve) => {
    let dataCookie = cookies(context);
    if (dataCookie.token) {
      dataCookie.isLogin = true;
    } else {
      dataCookie.isLogin = false;
    }
    resolve(dataCookie);
  });
}
