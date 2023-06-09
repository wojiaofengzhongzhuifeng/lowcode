import { useEffect, useRef, useState} from "react";
import {GetRequest} from "../utils";


export const useQueryCurrentDeviceIsMobileAtWidth = (callback, threshold = 768) => {
  //  自定义hooks  根据屏幕宽度实时判断当前是否是H5的宽度，配合栅格达到不刷新即可自适应
  const savedCallback = useRef();
  const isMobile = useRef(window.innerWidth < threshold);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function getWidth() {
      const w = window.innerWidth;
      if (isMobile.current !== (w < threshold)) {
        isMobile.current = (w < threshold);
        savedCallback.current();
      }
    }
    window.addEventListener("resize", ()=>{getWidth()});
    return () => window.removeEventListener("resize", ()=>{getWidth()});
  }, [threshold]);
};

export const useQueryCurrentDeviceIsMobile = () => {
  //  自定义hooks  判断当前是否在App内 并返回设别类别是安卓还是iOS
  const [inApps, setInApps] = useState(false) // 是否在APP内
  const [inIos, setInIos] = useState(false);  // 当前设备是否是 IOS APP
  const [inAndroid, setInAndroid] = useState(false); // 当前设备是否是 Android APP
  useEffect(() => {
    const urlData = GetRequest()
    if (urlData['is_phone'] === 1 || urlData['is_phone'] === '1') {
      setInApps(true)
      setInAndroid(urlData['device_type'] === "1" || urlData['device_type'] === 1)
      setInIos(urlData['device_type'] === "2" || urlData['device_type'] === 2)
    }
  }, [])
  return [inApps, inIos, inAndroid]
}

export const useQueryCurrentThemeIsDark = () => {
  // 判断当前是否在dark模式下  一般用于js控制图片在dark下替换dark图片使用
  const [isDark, setIsDark] = useState(false);
  function isDarkMode() {
    const bodyClass = document.body.className;
    if (bodyClass.includes("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }
  useEffect(() => {
    isDarkMode()
    setTimeout(() => {
      const ele = document.getElementById("theme");
      ele && ele.addEventListener("click", function () {isDarkMode()});

      const switchEle = document.getElementById(`phone_theme_switch`)
      switchEle && switchEle.addEventListener("click", function () {isDarkMode()});
    }, 1000);
  }, []);
  return isDark
}


export const useSetForcedBrightTheme = () => {
  // 页面强制使用亮色模式
  useEffect(() => {
    const deleteDarkTheme = () => {
      window.$('body').removeClass('classic-dark')
      window.$('#classicDark') && window.$('#classicDark').remove()
      window.$('#openSesame_light') && window.$('#openSesame_light').removeClass('night_icon')
    }
    setTimeout(() => {
      window.$(function () {
        deleteDarkTheme()
        window.$("#theme").hide();
      });
    }, 300);
  }, []);
}

export const useSetForcedDarkTheme = () => {
  // 页面强制使用暗色模式，需要配合html设置 主站暗色css 使用 <link href="/css/theme_classicDark.css?v={{_v('theme_classicDark.css')}}" rel="stylesheet"/>
  useEffect(() => {
    setTimeout(() => {
      window.$(function () {
        window.$("body").addClass("classic-dark");
        window.$('#theme').hide()
        window.$("openSesame_light").addClass('night_icon')
      });
    }, 300)
  }, [])
}

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const GetDocumentInnerHeight = () => {
  const [inApps, inIos, inAndroid] = useQueryCurrentDeviceIsMobile()
  useEffect(()=> {
    const documentHeight = () => {
      const doc = document.documentElement
      if (inApps && inIos) {
        doc.style.setProperty('--doc-height', `${window.outerHeight}px`)
      }
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', documentHeight)
    setTimeout(() => {
      window.$(function () {
        documentHeight()
      });
    }, 800);
  }, [inApps, inIos, inAndroid])
}


