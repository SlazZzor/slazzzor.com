const { getHeaders } = require("./functions.js");


function getProfilePhoto(profileInfo){
    return new Promise((resolve) => {
        if (Object.keys(profileInfo).length > 0){
            fetch(profileInfo["images"][0], getHeaders({Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"}))
                .then(result => result.blob()
                .then(imageBlob => {
                    resolve(imageBlob);
                }))
            }
        })
};


module.exports = { getProfilePhoto };