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
          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".wood-container").append(woodBox);
          //diplay wood image
          var chairImage = document.createElement("img");
          chairImage.classList.add('wood-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
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

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".zeroZero-container").append(woodBox);

          //diplay 1900's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('zeroZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }
        //1910
        if (category == 'oneZero'){

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".oneZero-container").append(woodBox);

          //diplay 1910's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('oneZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }
        if (category == 'twoZero'){

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".twoZero-container").append(woodBox);

          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('twoZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }

        if (category == 'threeZero'){

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".threeZero-container").append(woodBox);

          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('threeZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }
        if (category == 'fourZero'){

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".fourZero-container").append(woodBox);

          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('fourZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }

        if (category == 'fifties'){

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".fifties-container").append(woodBox);

          //diplay 1920's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('fifties-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }

        if (category == 'sixZero'){

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".sixZero-container").append(woodBox);

          //diplay 1960's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('sixZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }

        if (category == 'sevenZero'){

        // create a wood box, this is where image will go
        var woodBox = document.createElement("div");
        woodBox.classList.add("wood-box");
        document.querySelector(".sevenZero-container").append(woodBox);

          //diplay 1970's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('sevenZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
         woodBox.appendChild(chairImage);
        }

        if (category == 'eightZero'){

          // create a wood box, this is where image will go
        var woodBox = document.createElement("div");
        woodBox.classList.add("wood-box");
        document.querySelector(".eightZero-container").append(woodBox);

          //diplay 1970's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('eightZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }

        if (category == 'nineZero'){

        // create a wood box, this is where image will go
        var woodBox = document.createElement("div");
        woodBox.classList.add("wood-box");
        document.querySelector(".nineZero-container").append(woodBox);

          //diplay 1990's image
          var chairImage = document.createElement("img");
          chairImage.classList.add('nineZero-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
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

 // create a wood box, this is where image will go
 var woodBox = document.createElement("div");
 woodBox.classList.add("wood-box");
 document.querySelector(".marco-container").append(woodBox);

          //diplay wood image
          var chairImage = document.createElement("img");
          chairImage.classList.add('marco-image');
          chairImage.src = chair.fields.chairImage[0].url;
         woodBox.appendChild(chairImage);
        }

        if (category == 'arne'){

           // create a wood box, this is where image will go
 var woodBox = document.createElement("div");
 woodBox.classList.add("wood-box");
 document.querySelector(".arne-container").append(woodBox);

          //diplay Arne image
          var chairImage = document.createElement("img");
          chairImage.classList.add('arne-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }


        if (category == 'finn'){

 // create a wood box, this is where image will go
 var woodBox = document.createElement("div");
 woodBox.classList.add("wood-box");
 document.querySelector(".finn-container").append(woodBox);

          //diplay Finn image
          var chairImage = document.createElement("img");
          chairImage.classList.add('finn-image');
          chairImage.src = chair.fields.chairImage[0].url;
          woodBox.appendChild(chairImage);
        }

        if (category == 'arneJ'){

          // create a wood box, this is where image will go
          var woodBox = document.createElement("div");
          woodBox.classList.add("wood-box");
          document.querySelector(".arneJ-container").append(woodBox);
         
                   //diplay Finn image
                   var chairImage = document.createElement("img");
                   chairImage.classList.add('arneJ-image');
                   chairImage.src = chair.fields.chairImage[0].url;
                   woodBox.appendChild(chairImage);
                 }

                 if (category == 'eero'){

                  // create a wood box, this is where image will go
                  var eeroBox = document.createElement("div");
                  eeroBox.classList.add("wood-box");
                  document.querySelector(".eero-container").append(eeroBox);
                 
                           //diplay Finn image
                           var chairImage = document.createElement("img");
                           chairImage.classList.add('eero-image');
                           chairImage.src = chair.fields.chairImage[0].url;
                           eeroBox.appendChild(chairImage);
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