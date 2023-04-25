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
   count = 0;
   for (i of Object.keys(content_data)) {
      color = "";
      if (0 <= count && count < 100) {
         color = "green";
      } else if (100 <= count && count < 200) {
         color = "purple";
      }

      content += `<li class= "${color}" id="content_word ${count++}"><div id="number">${count}.</div><div id="keyword">${i}</div></li>`;
   }

   document.getElementById("content").innerHTML = content;
}
