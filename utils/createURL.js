
function createURL(url) {
    const userinput = url.length
        ? url
        : "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart";

    const split = userinput.split(".");


    // Checking Language by subDomain;


    if (split[0].includes("de")) {
        console.log("*********Looking at the URL this page is in German*****************" + "\n");
    } else if (split[0].includes("en")) {
        console.log("*********Looking at the URL this page is in English*****************" + "\n");
    } else {
        console.log(
            "it's not english nor German, to find out more please visit https://en.wikipedia.org/wiki/List_of_Wikipedias#List"
        );
    }
    // logic for dealing with urls without https://
    let finalUrl;

    if (split[0].includes("https://")) {
        finalUrl = userinput;
    } else {
        finalUrl = "https://" + userinput;
    }

    return finalUrl;
}
module.exports = createURL
