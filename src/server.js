const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const port = 8080;
const app = express();
const cheerio = require("cheerio");
const fakeUa = require("fake-useragent");
const cors = require("cors");

function normalizeString(str){
    return str.replaceAll("\n", "").split(" ").filter((value) => value !== "").join(" ");
};

function getInfo(){
    fetch("https://linkedin.com/in/slavik-rozputnii-221a3b261/", {
            headers: {
                "User-Agent": fakeUa(),
                'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                'Accept-Encoding': '*',
                'Connection': 'keep-alive',
                'Cookie': 'JSESSIONID=ajax:3924883692768381087; bcookie="v=2&8e067a53-9ee9-4f27-8d70-140c64e995ae"; lidc="b=VGST08:s=V:r=V:a=V:p=V:g=2678:u=1:x=1:i=1696143704:t=16962301040000:v=2:sig=AQGuVHB8xo43drYEyJOItcKCA-ja4zxA"; li_alerts=e30=; li_gc=MTsyMTsxNjk2MTQzNzEwOzI7MDIxBfqz/wHuypUd0m0Sc/eF4APFdbUHa5x/2OxjXy83+2s=; lang="v=2&lang=en-us"; fid=AQHY0__bMnHaPwAAAYrqGGftiCQspNnITDj_hZb2QvNFuOFO-3niDaGKWO6DeWLaZBMgn0KecH_XFA; fcookie=AQHYTbnlt-xSOAAAAYrqGHXNOfS71SYwyO5-uDQp9_8pooCAVuNmLYAaS42Rv1a0HsyvRx7TzLJ7HYQ9NWAar3Z2fjm0Hj_9fvFXr0fTj_oABJtTgZWtV-6F9c1pW5sQe2uBT69b7N7GmzqPTnIJIY-eduQ37UgIi4wjU4biTWOQ4KKri2FejosjAuadJpN9Ais7DOEsEgU81Vb7Fwlp2AvZADnxYOddK98Y_dTR50jeDUODEpoK05zym0mV744FyWnqROrXq3FyAagmqS3Gz6cY_0mahoqWY4a50hTQGPlhm7c2U3zArRgO2rDovd2vIvkVNyCyUKTrO25DK4DBdDXADzPnWELB139MKVKLRoebhHhyMbjZRQ==',
                'Upgrade-Insecure-Requests': '1',
                'Cache-Control': 'max-age=0',
                'TE': 'Trailers',
                'Referer': 'https://www.linkedin.com/',
            }})
        .then((response) => response.text()
        .then((data) => {
            const $ = cheerio.load(data);
            const images = [];
            const jobs = [];
            const jobsInfo = [];
            let profileName = "";
            let contacts = "";
            $('img').each((index, element) => {
                if (element["attribs"]["alt"] === "Slavik Rozputnii"){
                    images.push((element["attribs"]["data-delayed-url"]));
                };
            });
            $('h1').each((index, element) => {
                if (element["attribs"]["class"] === "top-card-layout__title font-sans text-lg papabear:text-xl font-bold leading-open text-color-text mb-0"){
                    profileName = normalizeString(element["children"][0]["data"]);
                }
            });
            $('span').each((index, element) => {
                if (element["attribs"]["class"] === "top-card__subline-item top-card__subline-item--bullet"){
                    contacts = element["children"][0]["data"];
                }
            });
            $('ul').each((index, element) => {
                if (element["attribs"]["class"] === "experience__list"){
                    for (let child of element["children"]){
                        if (child?.attribs?.class === "profile-section-card  experience-item"){
                            jobs.push(child);
                        }
                    }
                }
            });
    
            for (let job of jobs){
                const jobImageUrl = job["children"][3]["children"][1]["attribs"]["data-delayed-url"];
                const jobTitle = normalizeString(job["children"][5]["children"][1]["children"][0]["data"]);
                const jobSubtitle = normalizeString(job["children"][5]["children"][3]["children"][1]["children"][0]["data"])
                const timeDiv = job["children"][5]["children"][5]["children"][1]["children"][1];
                const experienceSlice = `${timeDiv["children"][1]["children"][0]["data"]}${timeDiv["children"][2]["data"]}`;
                const experienceTime = timeDiv["children"][3]["children"][0]["data"];
                const description = normalizeString(job["children"][5]["children"][5]["children"][5]["children"][1]["children"][1]["children"][0]["data"])
                jobsInfo.push({
                    jobImageUrl: jobImageUrl,
                    jobTitle: jobTitle,
                    jobSubtitle: jobSubtitle,
                    experienceSlice: experienceSlice,
                    experienceTime: experienceTime,
                    description: description
                });
            };
            profileInfo = {
                images: images,
                profileName: profileName,
                contacts: contacts, 
                jobsInfo: jobsInfo
            };
    })).catch((error) => console.error(error));
};

let profileInfo = {};
getInfo();
setTimeout(() => getInfo(), 3600000)

app.use(cors());


app.get('/getProfileInfo', (req, res) => {
    res.json(profileInfo);
});

app.get('/getProfilePhoto', (req, res) => {
    if (Object.keys(profileInfo).length > 0){
        fetch(profileInfo["images"][0], {
            headers: {
                "User-Agent": fakeUa(),
                'Accept': "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Cookie': 'JSESSIONID=ajax:3924883692768381087; bcookie="v=2&8e067a53-9ee9-4f27-8d70-140c64e995ae"; lidc="b=VGST08:s=V:r=V:a=V:p=V:g=2678:u=1:x=1:i=1696143704:t=16962301040000:v=2:sig=AQGuVHB8xo43drYEyJOItcKCA-ja4zxA"; li_alerts=e30=; li_gc=MTsyMTsxNjk2MTQzNzEwOzI7MDIxBfqz/wHuypUd0m0Sc/eF4APFdbUHa5x/2OxjXy83+2s=; lang="v=2&lang=en-us"; fid=AQHY0__bMnHaPwAAAYrqGGftiCQspNnITDj_hZb2QvNFuOFO-3niDaGKWO6DeWLaZBMgn0KecH_XFA; fcookie=AQHYTbnlt-xSOAAAAYrqGHXNOfS71SYwyO5-uDQp9_8pooCAVuNmLYAaS42Rv1a0HsyvRx7TzLJ7HYQ9NWAar3Z2fjm0Hj_9fvFXr0fTj_oABJtTgZWtV-6F9c1pW5sQe2uBT69b7N7GmzqPTnIJIY-eduQ37UgIi4wjU4biTWOQ4KKri2FejosjAuadJpN9Ais7DOEsEgU81Vb7Fwlp2AvZADnxYOddK98Y_dTR50jeDUODEpoK05zym0mV744FyWnqROrXq3FyAagmqS3Gz6cY_0mahoqWY4a50hTQGPlhm7c2U3zArRgO2rDovd2vIvkVNyCyUKTrO25DK4DBdDXADzPnWELB139MKVKLRoebhHhyMbjZRQ==',
                'Upgrade-Insecure-Requests': '1',
                'Cache-Control': 'max-age=0',
                'TE': 'Trailers',
                'Referer': 'https://www.linkedin.com/',
            }})
                    .then(result => result.blob()
                    .then(imageBlob => {
                        res.type(imageBlob.type)
                        imageBlob.arrayBuffer().then((buf) => {
                            res.send(Buffer.from(buf))
                        });
                    }))
    }
});
        
app.listen(port);
console.log('Server started');