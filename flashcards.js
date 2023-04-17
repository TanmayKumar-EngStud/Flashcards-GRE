let data = null;
let currentIndex = 0;

// Load the JSON file
fetch("updated_words.json")
   .then((response) => response.json())
   .then((json) => {
      data = json;
      updateFlashcard();
   })
   .catch((error) => console.error(error));

// Update the flashcard with the current word
function updateFlashcard() {
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

   document.getElementById("word").textContent = word;
   document.getElementById("definition").textContent = definition;
   document.getElementById("synonyms").innerHTML = synonymList;
   document.getElementById("antonyms").innerHTML = antonymList;
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
         final_content = `<Strong><h3>${token.toUpperCase()}</h3></Strong><br> ${token_info}`;
         document.querySelector(".footer").innerHTML = final_content;
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
         final_content = `<Strong><h3>${token.toUpperCase()}</h3></Strong><br> ${token_info}`;
         document.querySelector(".footer").innerHTML = final_content;
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
