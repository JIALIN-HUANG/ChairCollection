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
var filter1950 = document.querySelector('.fiveZero');
filter1950.addEventListener("click", function(){

  if(chairContainer.classList.contains("fiveZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------20s---------------------------
var filter20 = document.querySelector('.twenty');
filter20.addEventListener("click", function(){

  if(chairContainer.classList.contains("twenty")){
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

//----------------1960---------------------------
var filter1960 = document.querySelector('.sixZero');
filter1960.addEventListener("click", function(){

  if(chairContainer.classList.contains("sixZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------1970---------------------------
var filter1970 = document.querySelector('.sevenZero');
filter1970.addEventListener("click", function(){

  if(chairContainer.classList.contains("sevenZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------1980---------------------------
var filter1980 = document.querySelector('.eightZero');
filter1980.addEventListener("click", function(){

  if(chairContainer.classList.contains("eightZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------1990---------------------------
var filter1990 = document.querySelector('.nineZero');
filter1990.addEventListener("click", function(){

  if(chairContainer.classList.contains("nineZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------1900---------------------------
var filter1900 = document.querySelector('.zeroZero');
filter1900.addEventListener("click", function(){

  if(chairContainer.classList.contains("1900")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------1910---------------------------
var filter1910 = document.querySelector('.oneZero');
filter1910.addEventListener("click", function(){

  if(chairContainer.classList.contains("oneZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})
//----------------1920---------------------------
var filter1920 = document.querySelector('.twoZero');
filter1920.addEventListener("click", function(){

  if(chairContainer.classList.contains("twoZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------1930---------------------------
var filter1930 = document.querySelector('.threeZero');
filter1930.addEventListener("click", function(){

  if(chairContainer.classList.contains("threeZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

//----------------1940---------------------------
var filter1940 = document.querySelector('.fourZero');
filter1940.addEventListener("click", function(){

  if(chairContainer.classList.contains("fourZero")){
    chairContainer.style.background = "yellow";
  } else{
    chairContainer.style.background = "white";
  }
})

  });
}

