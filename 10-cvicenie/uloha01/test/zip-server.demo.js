const server = require("../src/zip-server");
const client = require("../src/zip-client");

server.start();

const files = ["test1.txt", "test2.png"];

files.forEach(
    (file) => {
        client.send(file);
    }
);

client.close();