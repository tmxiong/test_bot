const serverUrls = [

]
// 若桶地址全部失效，将使用这里的地址
var apiBaseUrl = "https://api.oneU-game.com:28001";
var imgBaseUrl = "https://img.oneU-game.com:28001";




var isDev = window.location.hostname.match(/localhost|192.168/)
// var isDev = false;
// 判断测试环境
if(isDev){
    apiBaseUrl='https://api.oneU-game-test.com';
    imgBaseUrl='https://img.oneU-game-test.com';
}

window.$yb = {
    config: {
        isDev,
        serverUrls,
        apiBaseUrl,
        imgBaseUrl,
        platformShortName: 'oneU',
        platformName: 'oneU-game',
    }
}
