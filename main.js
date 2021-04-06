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
    console.log("Chair:", chair);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showChairs() {
  console.log("showChairs()");
  chairs.forEach((chair) => {

    //const h2 = document.createElement("h2");
   // h2.innerText = chair.fields.name;
   // document.body.appendChild(h2);

   //create new div container
   var chairContainer = document.createElement("div");
   chairContainer.classList.add("chair-container");
   document.querySelector(".container").append(chairContainer);

  //add chair name to our container
  var chairName = document.createElement("h2");
  chairName.classList.add("chair-Name");
  chairName.innerText = chair.fields.name;
  chairContainer.append(chairName);

   //add designer
   var chairDesigner = document.createElement("h2");
   chairDesigner.classList.add("designer");
   chairDesigner.innerText = chair.fields.designer;
   chairContainer.append(chairDesigner);

    //add chair image
    var chairImg = document.createElement("img");
    chairImg.classList.add("chair-img");
    chairImg.src = chair.fields.chairImage[0].url;
    chairContainer.append(chairImg);

      //get genre field from airtable

var chairGenre = chair.fields.genre;
chairGenre.forEach(function(genre) {
  chairContainer.classList.add(genre)
})

//---------------------------add filter!!!!!!--------------------
//add event lisnter to our filter
//to add an active class to our song

var filterWood = document.querySelector('.wood');
filterWood.addEventListener("click", function(){

  if(chairContainer.classList.contains("wood")){
    chairContainer.style.background = "pink";
  } else{
    chairContainer.style.background = "white";
  }
})

//active
chairContainer.addEventListener("click", function(){
  chairImg.classList.toggle("active");
})

//----------------1950s---------------------------
var filter1950 = document.querySelector('.1950s');
filter1950.addEventListener("click", function(){

  if(chairContainer.classList.contains("1950s")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------20s---------------------------
var filter20 = document.querySelector('.20s');
filter20.addEventListener("click", function(){

  if(chairContainer.classList.contains("20s")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------marco---------------------------
var filterMarco = document.querySelector('.marco');
filterMarco.addEventListener("click", function(){

  if(chairContainer.classList.contains("marco")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

  });
}

