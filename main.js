
const countLetters = require("./utils/countLetters");
const createURL = require("./utils/createURL")
const getPageText = require("./utils/getPageText")


async function main(userinput) {
  // Create Url out of user input
  pageUrl = await createURL(userinput);

  // Request the page and scrap content for text
  pageText = await getPageText(pageUrl);

  // Count letter and print out result
  return countLetters(pageText);
}



module.exports = main;
