console.log("Hello Chairs");

var Airtable = require("airtable");
//console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyj8qNsToxQPYuPk" }).base(
  "appapbsO1qjRj1XRk"
);


//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("Gallery").select({}).eachPage(gotPageOfChairs, gotAllChairs);

// an empty array to hold our book data
const chairs = [];

// callback function that receives our data
function gotPageOfChairs(records, fetchNextPage) {
  console.log("gotPageOfChairs()");
  // add the records from this page to our books array
  chairs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllChairs(err) {
  console.log("gotAllChairs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading chairs");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogChairs();
  try {
   showChairs();
  } catch(e){
   console.log(e);
  }
}

// just loop through the books and console.log them
function consoleLogChairs() {
  console.log("consoleLogChairs()");
  chairs.forEach((chair) => {
    
    var chairCategory = chair.fields.chair_category;
    chairCategory.forEach((category) => {

      if (category == 'wood'){

        //diplay wood image
        var chairImage = document.createElement("img");
        chairImage.classList.add('wood-image');
        chairImage.src = chair.fields.chairImage[0].url;
        document.querySelector(".wood-container").appendChild(chairImage);
      }

      if (category == 'fiveZero') {
        var fiveZeroChairName = document.createElement("h1");
        fiveZeroChairName.classList.add("fiveZero-name");
        fiveZeroChairName.innerText = chair.fields.name;
        document.querySelector(".fiveZero-container").appendChild(fiftiesChairName);
      }

    })

  });
}

