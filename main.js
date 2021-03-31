console.log("Hello Chairs");

var Airtable = require("airtable");
console.log(Airtable);

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
  showChairs();
}

// just loop through the books and console.log them
function consoleLogChairs() {
  console.log("consoleLogChairs()");
  chairs.forEach((chair) => {
    console.log("Chair:", chair);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showChairs() {
  console.log("showChairs()");
  chairs.forEach((chair) => {
    const h2 = document.createElement("h2");
    h2.innerText = chair.fields.title;
    document.body.appendChild(h2);
  });
}

