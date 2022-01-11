const axios = require("axios");

const cocktail = process.argv[2];

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;



const getCocktail = async () => {
    try{
    const response =  await axios.get(url);
    if(!response.data.drinks){
    throw "invalid input"}
    console.log(response.data.drinks[0].strInstructions);
    } catch (error){
        console.log("error: "+ error);
    }
}

getCocktail()