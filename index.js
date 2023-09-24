const http = require("http");
const fs = require("fs");
const url = require("url");

const slugify = require("slugify");

const replaceTemplate = require(`${__dirname}/modules/replaceTemplate.js`);

const overviewPage = fs.readFileSync(
	`${__dirname}/templates/overview.html`,
	"utf-8"
);
const productPage = fs.readFileSync(
	`${__dirname}/templates/product.html`,
	"utf-8"
);
const productCard = fs.readFileSync(
	`${__dirname}/templates/template-card.html`,
	"utf-8"
);

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const dataJson = JSON.parse(data);
const slugifyDataJson = dataJson.map((el) => {
	el["slug"] = slugify(el["productName"], { lower: true });
	return el;
});
console.log(slugifyDataJson);

const server = http.createServer((req, res) => {
	console.log(req);

	const urlData = url.parse(req.url, true);
	const path = urlData.pathname;
	const query = urlData.query;

	if (path === "/overview" || path === "/") {
		res.writeHead(200, { "Content-type": "text/html" });

		cardsHtml = slugifyDataJson
			.map((el) => {
				return replaceTemplate(productCard, el);
			})
			.join("");
		overviewHtml = overviewPage.replace("{%PROD_CARDS%}", cardsHtml);

		res.end(overviewHtml);
	} else if (path === "/product") {
		res.writeHead(200, { "Content-type": "text/html" });

		const prod = slugifyDataJson.filter((el) => el.slug == query.id);

		productHtml = replaceTemplate(productPage, prod[0]);

		res.end(productHtml);
	} else if (path === "/api") {
		res.writeHead(200, { "Content-type": "application/json" });
		res.end(data);
	} else {
		res.writeHead(404, {
			"Content-type": "text/html",
		});
		res.end("<h1>Page doesn't exist!</h1>");
	}
});

server.listen(8000, "127.0.0.1", () => {
	console.log("Server is listening... 😎");
});
