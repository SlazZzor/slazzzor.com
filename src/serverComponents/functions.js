const fakeUa = require("fake-useragent");


function normalizeString(str){
    return str.replaceAll("\n", "").split(" ").filter((value) => value !== "").join(" ");
};


function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return btoa( binary );
};


function getHeaders({Accept: Accept} = {}){
    const headers = {
        "User-Agent": fakeUa(),
        'Accept': Accept ? Accept : "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        'Accept-Encoding': '*',
        'Connection': 'keep-alive',
        'Cookie': 'JSESSIONID=ajax:3924883692768381087; bcookie="v=2&8e067a53-9ee9-4f27-8d70-140c64e995ae"; lidc="b=VGST08:s=V:r=V:a=V:p=V:g=2678:u=1:x=1:i=1696143704:t=16962301040000:v=2:sig=AQGuVHB8xo43drYEyJOItcKCA-ja4zxA"; li_alerts=e30=; li_gc=MTsyMTsxNjk2MTQzNzEwOzI7MDIxBfqz/wHuypUd0m0Sc/eF4APFdbUHa5x/2OxjXy83+2s=; lang="v=2&lang=en-us"; fid=AQHY0__bMnHaPwAAAYrqGGftiCQspNnITDj_hZb2QvNFuOFO-3niDaGKWO6DeWLaZBMgn0KecH_XFA; fcookie=AQHYTbnlt-xSOAAAAYrqGHXNOfS71SYwyO5-uDQp9_8pooCAVuNmLYAaS42Rv1a0HsyvRx7TzLJ7HYQ9NWAar3Z2fjm0Hj_9fvFXr0fTj_oABJtTgZWtV-6F9c1pW5sQe2uBT69b7N7GmzqPTnIJIY-eduQ37UgIi4wjU4biTWOQ4KKri2FejosjAuadJpN9Ais7DOEsEgU81Vb7Fwlp2AvZADnxYOddK98Y_dTR50jeDUODEpoK05zym0mV744FyWnqROrXq3FyAagmqS3Gz6cY_0mahoqWY4a50hTQGPlhm7c2U3zArRgO2rDovd2vIvkVNyCyUKTrO25DK4DBdDXADzPnWELB139MKVKLRoebhHhyMbjZRQ==',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0',
        'TE': 'Trailers',
        'Referer': 'https://www.linkedin.com/',
    }
    return {
        'headers': headers
    };
};


module.exports = { normalizeString, _arrayBufferToBase64, getHeaders };