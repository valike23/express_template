"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    req;
    res.sendFile(__dirname + '/pages/index.html');
});
app.listen('1999');
//# sourceMappingURL=index.js.map