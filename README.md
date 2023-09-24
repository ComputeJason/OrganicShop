# 🧀 🥦 Organic Shop 🥕🥑

##### Whacky Shop to buy some nonsense (just some practice..)

Organic Shop is a server-side rendered app, with a very simple API. Spent some time on this playful design concept to practice simple HTML & CSS & demonstrate basic nodeJS concepts. Mostly for personal practice & learning. Do play around with the app!

## Installation

Organic Farm requires [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

```sh
cd OrganicFarm
npm install
node index.js
(alternatively, script "npm start" activates nodemon)
```

Run localhost:8000/ in browser to open the Overview page :)

## Pages

- Overview page --> Summary of all products

<p align="center">
  <img width="700" alt="Screenshot 2023-09-24 at 10 45 27 AM" src="https://github.com/ComputeJason/OrganicShop/assets/65109081/6bf77149-5349-4841-9ea4-0d964e8398dd">
</p>

- Product page --> Details of a product

<p align="center">
  <img width="700" alt="Screenshot 2023-09-24 at 10 47 59 A" src="https://github.com/ComputeJason/OrganicShop/assets/65109081/d551fd01-aad4-467a-a963-dee85632bd45">
</p>

## Learning

1. NodeJS designed based on a single threaded non-blocking I/O model. Concurrency handled with the Event Loop.
2. Node is about modules. Usually we import core > 3rd party > internal dependencies. To export we simply call module.exports = \_\_

```js
const http = require("http");
module.exports = (param) => {
	return param;
};
```

3. Creating a server to listen to events is quite simple. NOTE: res.end() can only be called once.

```js
const server = http.createServer((req, res) => {
    res.end()
}

server.listen(8000, "127.0.0.1", () => {
	console.log("Server is listening... 😎");
});
```
4. Basic routing just involves retreiving the path name, and conditionally returning the corresponding output. Advanced ones involve retreiving qeury params as well.
```js
// basic
const path = req.url;
if (path === "/overview" || path === "/") {
	res.end(output);
}
// advanced
const urlData = url.parse(req.url, true);
const path = urlData.pathname;
const query = urlData.query; // use params
```
5. Editting the header to provide useful information to the browser and user. Eg. return type, status no., additional meta data as key-value
```js
res.writeHead(200, { "Content-type": "text/html" });
res.writeHead(200, { "Content-type": "application/json" });
res.writeHead(404, { "Content-type": "text/html" });
res.end("<h1>Page doesn't exist!</h1>");
```
6. Each NodeJS File is actually wrapped in a function that provides all these node functionalities. eg. \_\_dirname, require, process
### Dependenies
| 3rd Party | Type    | Function                                                                                                                  |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| Nodemon   | Dev-Dep | On save, auto restarts application, so you don't need to do it manually                                                   |
| Slugify   | Dep     | easy-to-use module to create slugs from Strings. Slugs are human-readable unique identifiers for resources (good for SEO) |
### TechStack
- HTML
- Inline CSS
- NodeJS
##### thanks for watching!! :)
