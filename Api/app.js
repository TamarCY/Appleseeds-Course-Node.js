const request = require("request");

const cocktail = process.argv[2];

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log(error);
  } else if (!response.body.drinks) {
    console.log("not a valid input");
  } else {
    console.log(
      `How to make a ${cocktail} - ${response.body.drinks[0].strInstructions}`
    );
  }
});
