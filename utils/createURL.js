
function createURL(url) {
    const userinput = url.length
        ? url
        : "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart";

    const split = userinput.split(".");

    // Define the URLS we will be scrapin-- this is user input-- need to add logic for what happens if the user enter url without https

    // Checking Language by subDomain;


    if (split[0].includes("de")) {
        console.log("*********Looking at the URL this page is in German*****************" + "/n");
    } else if (split[0].includes("en")) {
        console.log("*********Looking at the URL this page is in English*****************" + "/n");
    } else {
        console.log(
            "it's not english nor German, to find out more please visit https://en.wikipedia.org/wiki/List_of_Wikipedias#List"
        );
    }

    let finalUrl;

    if (split[0].includes("http://")) {
        finalUrl = "http://" + userinput;
    } else {
        finalUrl = userinput;
    }

    return finalUrl;
}
module.exports = createURL