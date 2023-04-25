let data = null;
let currentIndex = 0;

// Load the JSON file
fetch("updated_words.json")
   .then((response) => response.json())
   .then((json) => {
      data = json;
      updateFlashcard();
      add_action();
   })
   .catch((error) => console.error(error));

// Update the flashcard with the current word
function updateFlashcard() {
   let color = "";
   if (0 <= currentIndex && currentIndex < 100) {
      color = "green";
   } else if (100 <= currentIndex && currentIndex < 200) {
      color = "purple";
   }

   const word = Object.keys(data)[currentIndex];
   const definition = data[word][0];
   const synonyms = data[word][1].Synonyms || {};
   const antonyms = data[word][1].Antonyms || {};
   const synonymList = Object.keys(synonyms)
      .map((synonym) => `<li>${synonym}</li>`)
      ?.join("");
   const antonymList = Object.keys(antonyms)
      .map((antonym) => `<li>${antonym}</li>`)
      ?.join("");
   const flashcard = document.getElementById("flashcard");
   while (flashcard.classList.length > 0) {
      flashcard.classList.remove(flashcard.classList.item(0));
   }
   flashcard.classList.add(color);
   document.getElementById("word").textContent = word;
   document.getElementById("definition").textContent = definition;
   document.getElementById("synonyms").innerHTML = synonymList;
   document.getElementById("antonyms").innerHTML = antonymList;
   const content_li = document.querySelectorAll("#content li");

   for (i of content_li) {
      if (i.textContent == word) {
         i.classList.add("active");
      } else {
         i.classList.remove("active");
      }
   }
   const synonymsList = document.querySelectorAll("#synonyms li");
   synonymsList.forEach((li) => {
      li.addEventListener("click", (event) => {
         token = li.textContent;
         count = 0;
         token_info = "";
         for (i of synonyms[token]) {
            if (count % 2 == 0) {
               token_info +=
                  `<Strong>Definition (${count / 2 + 1}): </Strong> ` +
                  i +
                  `<br>`;
            } else {
               token_info += `<Strong>Examples:</Strong> \n`;
               for (examples of i) {
                  token_info += `<p>${examples}</p> \n`;
               }
            }
            count++;
         }
         document.querySelector(".footer").classList.remove("hidden");
         document.querySelector(".footer Strong h3").innerHTML =
            token.toUpperCase();
         document.querySelector(".footer .info").innerHTML = token_info;
      });
   });
   const antonymsList = document.querySelectorAll("#antonyms li");
   antonymsList.forEach((li) => {
      li.addEventListener("click", (event) => {
         token = li.textContent;
         count = 0;
         token_info = "";
         for (i of antonyms[token]) {
            if (count % 2 == 0) {
               token_info +=
                  `<Strong>Definition (${count / 2 + 1}): </Strong> ` +
                  i +
                  `<br>`;
            } else {
               token_info += `<Strong>Examples:</Strong> \n`;
               for (examples of i) {
                  token_info += `<p>${examples}</p> \n`;
               }
            }
            count++;
         }
         document.querySelector(".footer").classList.remove("hidden");
         document.querySelector(".footer Strong h3").innerHTML =
            token.toUpperCase();
         document.querySelector(".footer .info").innerHTML = token_info;
      });
   });
}

// Move to the previous flashcard
document.getElementById("prev").addEventListener("click", () => {
   currentIndex--;
   if (currentIndex < 0) {
      currentIndex = Object.keys(data).length - 1;
   }
   updateFlashcard();
});

// Move to the next flashcard
document.getElementById("next").addEventListener("click", () => {
   currentIndex++;
   if (currentIndex > Object.keys(data).length - 1) {
      currentIndex = 0;
   }
   updateFlashcard();
});

function add_action() {
   const content_li = document.querySelectorAll("#content li");

   content_li.forEach((li) => {
      li.addEventListener("click", (event) => {
         const keyword = li.querySelector("#keyword").textContent;
         currentIndex = Object.keys(data).indexOf(keyword);

         updateFlashcard();
      });
   });
}

document.getElementById("close").addEventListener("click", () => {
   document.querySelector(".footer").classList.add("hidden");
});
document.querySelector(".footer").classList.add("hidden");
