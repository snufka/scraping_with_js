function countLetters(string) {
  const stringLowerCase = string.toLowerCase().replace(/[^a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]+/g);;
  const counts = {};
  console.log("*******************************Letters Count*******************************")
  const len = stringLowerCase.length;
  const umlats = [];
  // Loop through the string...
  for (let index = 0; index < len; ++index) {
    // Get this character
    const ch = stringLowerCase.charAt(index);
    if (ch === "ä" || ch === "ü" || ch === "ß" || ch === "ö") {
      umlats.push(ch);
    }

    count = counts[ch];

   
    counts[ch] = count ? count + 1 : 1;
  }
  for (ch in counts) {
    console.log(ch + " count: " + counts[ch]);
  }


  const spcLitters = umlats.length;
  const allLetters = stringLowerCase.length;
  //umlat frequency percentage
  const num = (spcLitters / allLetters) * 100;
  const spcFrequency = num.toFixed(2);
  console.log("Percentage of German Charachters in the text: " + "(" + spcLitters + "/" + allLetters + ")*100" + " = " + spcFrequency + "%" + "\n");


  if (spcFrequency >= 0.465) {
    console.log(
      "We are 100% sure that this text is in German! The frequency of special German characters is 0.465% or higher!"
    );
  } else if (spcFrequency < 0.465 && spcFrequency >= 0.348) {
    console.log(
      "The chance that this text is in German is very high 100% - 75%! The frequency of special German characters is " +
      spcFrequency + "%"
    );
  } else if (spcFrequency < 0.348 && spcFrequency >= 0.2325) {
    console.log(
      "We are 75% - 50% sure that this text is in German! The frequency of special German characters is " +
      spcFrequency
    );
  } else if (spcFrequency < 0.2325 && spcFrequency >= 0.116) {
    console.log(
      "We are 50% - 25% sure that this text is in German! The frequency of special German characters is " +
      spcFrequency + "%"
    );
  } else {
    console.log(
      "Not German! There is less than 25% that this text is in German! The frequency of special German characters is " +
      spcFrequency + "%"
    );
  }
}
module.exports = countLetters;
