module.exports = (temp, prod) => {
	let result = temp.replace(/{%PRODUCT_NAME%}/g, prod.productName);
	result = result.replace(/{%IMAGE%}/g, prod.image);
	result = result.replace(/{%ORIGIN%}/g, prod.from);
	result = result.replace(/{%NUTRITION%}/g, prod.nutrients);
	result = result.replace(/{%QUANTITY%}/g, prod.quantity);
	result = result.replace(/{%PRICE%}/g, prod.price);
	result = result.replace(/{%DESCRIPTION%}/g, prod.description);
	result = result.replace(/{%ID%}/g, prod.id);

	if (!prod.organic) {
		result = result.replace(/{%NOT_ORGANIC%}/g, "not-organic");
	} else {
		result = result.replace(/{%NOT_ORGANIC%}/g, "");
	}
	return result;
};
