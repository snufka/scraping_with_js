const axios = require("axios");
const cheerio = require("cheerio");

function getPageText(pageUrl) {
    //Define the method for collecting the data
    return axios.get(pageUrl).then((res) => {
        // const text = []
        const $ = cheerio.load(res.data);

        // Geting the Title of the page
        const title = $("#firstHeading").html();
        console.log("************* " + title + " *************");

      

        //Nevigation leftsidebar
        let leftSideBar = "";
        $("#mw-navigation").each((index, element) => {
            leftSideBar = $(element).children("#mw-panel").text();
        });
        console.log("**Left side**" + "\n" + leftSideBar);

        
        let rightSideBar = "";
        $("tr").each((index, element) => {
            rightSideBar = $(element).children("th").text();
            //
        });
        console.log("right side bar" + "\n" + rightSideBar);

      
        let mainText = "";

        $(".mw-parser-output").each((index, element) => {
            let headertwo = $(element).children("h2").text();
            let p = $(element).children("p").text();
            let ul = $(element).children("ul").text();
            mainText = mainText + "\n" + headertwo + "\n" + p + "\n" + ul;
        });
        console.log(
            "*****************Main Text*******************" + "\n" + mainText
        );

        ///table of content -- needs spaces
        const tableOfContent = $(".toclevel-1").children("a").text();
        console.log("table of content: " + tableOfContent);

       
        //all the text of the page

        let allTheText = "";
        allTheText = title + leftSideBar + rightSideBar + mainText + tableOfContent;
        return allTheText;
    });
}

module.exports = getPageText
