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
    console.log("Chair:",chair);
  });
}


  function showChairs() {
    console.log("showChairs()");
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

  // This is to for display the Text
        // if (category == 'fifties') {
        //   var fiftiesChairName = document.createElement("h1");
        //   fiftiesChairName.classList.add("fifties-name");
        //   fiftiesChairName.innerText = chair.fields.name;
        //   document.querySelector(".fifties-container").appendChild(fiftiesChairName);
        // }

        //1900
        if (category == 'zeroZero'){
  
          //diplay 1900's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('zeroZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".zeroZero-container").appendChild(chairImage);
        }

        //1910
        if (category == 'oneZero'){
  
          //diplay 1910's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('oneZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".oneZero-container").appendChild(chairImage);
        }

        if (category == 'twoZero'){
  
          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('twoZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".twoZero-container").appendChild(chairImage);
        }

        if (category == 'threeZero'){
  
          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('threeZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".threeZero-container").appendChild(chairImage);
        }

        if (category == 'fourZero'){
  
          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('fourZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".fourZero-container").appendChild(chairImage);
        }

        if (category == 'fifties'){
  
          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('fifties-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".fifties-container").appendChild(chairImage);
        }
        
        if (category == 'sixZero'){
  
          //diplay 1960's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('sixZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".sixZero-container").appendChild(chairImage);
        }

        if (category == 'sevenZero'){
  
          //diplay 1970's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('sevenZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".sevenZero-container").appendChild(chairImage);
        }

        if (category == 'eightZero'){
  
          //diplay 1970's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('eightZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".eightZero-container").appendChild(chairImage);
        }

        if (category == 'nineZero'){
  
          //diplay 1990's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('nineZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".nineZero-container").appendChild(chairImage);
        }

        // //twenty
        // if (category == 'twenty'){
  
        //   //diplay 2000's image
        //   var chairImage = document.createElement("img");
        //   chairImage.classList.add('twenty-image');
        //   chairImage.src = chair.fields.chairImage[0].url;
        //   document.querySelector(".twenty-container").appendChild(chairImage);
        // }

        if (category == 'marco'){
  
          //diplay wood image
          var chairImage = document.createElement("img");
          chairImage.classList.add('marco-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".marco-container").appendChild(chairImage);
        }

        if (category == 'arne'){
  
          //diplay Arne image
          var chairImage = document.createElement("img");
          chairImage.classList.add('arne-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".arne-container").appendChild(chairImage);
        }

        if (category == 'finn'){
  
          //diplay Finn image
          var chairImage = document.createElement("img");
          chairImage.classList.add('finn-image');
          chairImage.src = chair.fields.chairImage[0].url;
          document.querySelector(".finn-container").appendChild(chairImage);
        }

      //   //chair-container class
      //   var chairContainer = document.createElement("div");
      //   chairContainer.classList.add("chair-container");
      //   document.querySelector(".container").append(chairContainer);

      //   //add chair designers name
      //   var chairDesigner = document.createElement("h2");
      //   chairDesigner.classList.add('chair-designers');
      //   chairDesigner.innerText = chair.fields.designer;
      //   chairDesigner.append(chair-Designer)
      // 
      
      })

    });
    }
