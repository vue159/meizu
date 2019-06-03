/**
 * 获得计算过样式
 * @param {object} elm 元素对象
 * @param {string} style 样式名
 */
function getStyle(elm, style) {
    if (elm.currentStyle) {
        return elm.currentStyle[style];
    } else {
        return getComputedStyle(elm)[style];
    }
}


/**
 * 选择元素
 * @param {string} selector 选择器
 */
function $(selector) {
    return document.querySelectorAll(selector);
}

/**
 * 事件绑定
 * @param {string} type 事件类型
 * @param {object} elm 元素对象
 * @param {function} callback 事件处理函数
 */
function addEvent(type, elm, callback) {
    if (elm.addEventListener) {
        elm.addEventListener(type, callback);
    } else if (elm.attachEvent) {
        elm.attachEvent('on' + type, callback);
    } else {
        elm['on' + type] = callback;
    }
}