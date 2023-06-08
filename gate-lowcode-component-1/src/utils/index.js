import Cookies from "js-cookie";

export const getParam = (name, type = "") => {
  let urlS = window.location.href;
  if (urlS.indexOf("?") !== -1) {
    let strUrl = urlS.split("?");
    let strId = strUrl[1] ? strUrl[1].split("&") : [];
    if (type) {
      let url = strUrl[1] ? strUrl[1] : "";
      return url;
    } else {
      for (let i = 0; i < strId.length; i++) {
        if (strId[i].split("=")[0] === name) {
          return decodeURI(strId[i].split("=")[1]);
        }
      }
      return "";
    }
  }
};

export function getUrlParam(name) {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  let result = window.location.search.substring(1).match(reg) || window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg);
  return result ? decodeURIComponent(result[2].replace(/%20/g, "%2B")) : null;
}

export const is_login = () => {
  if (getParam("is_phone")) {
    //判断主站APP端是否登录
    return getParam("uid")
  }
  //判断主站PC端是否登录
  return Cookies.get("is_on") === '1'
}

export function GetRequest() {
  const url = window.location.search;
  const theRequest = {};
  if (url.indexOf("?") !== -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

export function initGtCaptcha(cb) {
  window.initCaptcha({
    scene: "login",
    onReady: (captchaContext) => {
      if (captchaContext) {
        captchaContext.verify();
      }
    },
    onSuccess: (obj) => {
      cb(obj);
    },
  });
}

export function debounce(func, wait = 500, immediate = true) {
  let timer, ctx, args;
  const later = () => setTimeout(() => {
    timer = null;
    if (!immediate) {
      func.call(ctx, ...args)
      ctx = args = null
    }
  }, wait)

  return function () {
    if (!timer) {
      timer = later()
      if (immediate) {
        func.call(this, ...arguments);
      } else {
        ctx = this;
        args = arguments;
      }
    } else {
      clearTimeout(timer);
      timer = later()
    }
  }
}

export function getUid() {
  let uid
  if (getParam('is_phone')) {
    uid = getParam('uid')
  } else {
    uid = window.uid
  }
  return uid
}

export const leftPadd = (num) => {
  return num >= 10 ? num : '0' + num
}

export {default as translationLang} from './lang_string'
export {default as storage} from './storage'