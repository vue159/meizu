(function() {
    var ajax = {
        get: function(url, data, callback) {
            var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObjext('Microsoft.XMLHttp');
            if (typeof data === 'object') {
                var str = "?";
                for (var i in data) {
                    str += i + "=" + data[i] + "&";
                }
                str = str.slice(0, -1);
                url += str;
            }

            xhr.open("get", url, true);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (typeof data === 'function') {
                        data(xhr.responseText);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            }
        }
    };

    window.ajax = ajax;
})();