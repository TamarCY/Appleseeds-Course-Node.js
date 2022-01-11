const superagent = require ("superagent")
 

const cocktail = process.argv[2];

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;

superagent.get(url)
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body.drinks[0].strInstructions);
});