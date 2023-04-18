let content_data = null;
fetch("updated_words.json")
   .then((response) => response.json())
   .then((json) => {
      content_data = json;
      fill_content(content_data);
   })
   .catch((error) => console.error(error));
function fill_content(content_data) {
   content = ``;
   count = 1;
   for (i of Object.keys(content_data)) {
      content += `<li id="content_word ${count++}">${i}</li>`;
   }

   document.getElementById("content").innerHTML = content;
}
