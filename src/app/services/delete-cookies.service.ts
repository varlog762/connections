import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteCookiesService {
  constructor() {}
  // Function to get all cookies as an object
  getAllCookies() {
    const cookies = document.cookie.split(';');
    const cookieObj = {};

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      let value = eqPos > -1 ? cookie.substring(eqPos + 1) : '';

      // cookieObj[name]: = decodeURIComponent(value);
    }

    console.log(cookies);
    return cookieObj;
  }

  // Function to delete a cookie by name
  // function deleteCookie(name) {
  //   document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
  // }

  // Get all cookies
  // let allCookies = getAllCookies();

  // Remove each cookie
  // for (let cookieName in allCookies) {
  //   if (allCookies.hasOwnProperty(cookieName)) {
  //       deleteCookie(cookieName);
  //       console.log('Cookie removed:', cookieName);
  //   }
  // }
}

// const deleteCookie = (name: string, path: string, domain: string) => {
//   if (getCookie(name)) {
//     document.cookie = name + "=" +
//       ((path) ? ";path=" + path : "") +
//       ((domain) ? ";domain=" + domain : "") +
//       ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
//   }
// }
// document.cookie = 'foo=bar'
// deleteCookie('foo')
