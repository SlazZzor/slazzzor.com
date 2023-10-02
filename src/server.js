const express = require('express');
const app = express();
const cors = require("cors");
const { getInfo } = require("./serverComponents/getInfo.js");
const { getProfilePhoto } = require("./serverComponents/getProfilePhoto.js");
app.use(cors());
const port = 8080;


let profileInfo = {};
getInfo().then(info => profileInfo = info);
setTimeout(() => getInfo().then(info => profileInfo = info), 3600000)


app.get('/getProfileInfo', (req, res) => {
    res.json(profileInfo);
});


app.get('/getProfilePhoto', (req, res) => {
    getProfilePhoto(profileInfo).then(imageBlob => {
        res.type(imageBlob.type);
        imageBlob.arrayBuffer().then((buf) => {
            res.send(Buffer.from(buf));
        });
    })
});

        
app.listen(port);
console.log('Server started');