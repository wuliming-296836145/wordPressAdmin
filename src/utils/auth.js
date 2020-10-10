/*
 * @文件描述: cookie,sessionStorage
 * @作者: L
 */

import Cookies from 'js-cookie'

// 获取 Cookie
export function getCookie(name) {
    return Cookies.get(name)
}

// 创建 Cookie
export function setCookie(name,value) {
   //创建简单的cookie
    Cookies.set(name, value);
    //创建有效期为7天的cookie
    // Cookies.set('name', 'value', { expires: 7 });
    // //为当前页创建有效期7天的cookie
    // Cookies.set('name', 'value', { expires: 7, path: '' });
} 