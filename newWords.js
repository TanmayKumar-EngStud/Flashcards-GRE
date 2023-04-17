document.getElementById("add").addEventListener("click", () => {
   const dialog_box = document.getElementById("dialog-content");
   dialog_box.classList.add("show");
});
document.getElementById("close-button").addEventListener("click", () => {
   const dialog_box = document.getElementById("dialog-content");
   dialog_box.classList.remove("show");
});

document.getElementById("clear-button").addEventListener("click", () => {
   const wordInput = document.getElementById("new_word");
   const definitionInput = document.getElementById("new_definition");
   const synonymsInput = document.getElementById("new_synonyms");
   const antonymsInput = document.getElementById("new_antonyms");
   wordInput.value = "";
   definitionInput.value = "";
   synonymsInput.value = "";
   antonymsInput.value = "";
   // Weeb Developer BRUHHHH!!!! 💀
});

const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (event) => {
   event.preventDefault();
   const wordInput = document.getElementById("new_word");
   const definitionInput = document.getElementById("new_definition");
   const synonymsInput = document.getElementById("new_synonyms");
   const antonymsInput = document.getElementById("new_antonyms");

   const word = wordInput.value.trim();
   const definition = definitionInput.value.trim();
   const synonyms = synonymsInput.value.split(",").map((s) => s.trim());
   const antonyms = antonymsInput.value.split(",").map((s) => s.trim());

   const data = {
      [word]: [definition, { Synonyms: synonyms, Antonyms: antonyms }],
   };
   console.log(JSON.stringify(data));
   fetch("http://127.0.0.1:5000/add-word", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   })
      .then((response) => response.json())
      .then((json) => {
         if (json.success) {
            notification.textContent = "Word added successfully";
            notification.classList.add("success");
         } else {
            notification.textContent = "Error: " + json.error;
            notification.classList.add("error");
         }
         setTimeout(() => {
            notification.classList.remove("success", "error");
         }, 500);
      })
      .catch((error) => {
         notification.textContent = "Error: " + error.message;
         notification.classList.add("error");
         setTimeout(() => {
            notification.classList.remove("error");
         }, 500);
      });

   wordInput.value = "";
   definitionInput.value = "";
   synonymsInput.value = "";
   antonymsInput.value = "";
});
