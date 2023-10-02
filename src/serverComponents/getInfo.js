const cheerio = require("cheerio");
const { normalizeString, getHeaders } = require("./functions.js");

function getInfo(){
    return new Promise ((resolve) => {
        fetch("https://linkedin.com/in/slavik-rozputnii-221a3b261/", getHeaders())
            .then((response) => response.text()
            .then((data) => {
                const $ = cheerio.load(data);
                const images = [];
                const jobs = [];
                const jobsInfo = [];
                let contacts = "";
                $('img').each((index, element) => {
                    if (element["attribs"]["alt"] === "Slavik Rozputnii"){
                        images.push((element["attribs"]["data-delayed-url"]));
                    };
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
                resolve({
                    images: images,
                    contacts: contacts, 
                    jobsInfo: jobsInfo
                });
            })).catch((error) => console.error(error));
    });
};


module.exports = { getInfo };