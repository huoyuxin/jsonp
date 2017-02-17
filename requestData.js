// var xmlHttp = new XMLHttpRequest();
// xmlHttp.onreadystatechange = state_change;
// xmlHttp.open("get", "http://127.0.0.1:8012/user", true);
// xmlHttp.send(null);
//
// function state_change() {
//     if(xmlHttp.status == 200){
//         alert("data"+ xmlHttp.responseText);
//     }
//     else{
//         alert("request data false");
//     }
// }


var script = document.createElement("script");
document.getElementsByTagName("body")[0].appendChild(script);
script.src = "http://127.0.0.1:8012/user?callback=dealOrigin";

function dealOrigin(data) {
    window.onload = function () {
        document.write("跨域访问服务器传回数据：");
        document.write(JSON.stringify(data));
    };
}
