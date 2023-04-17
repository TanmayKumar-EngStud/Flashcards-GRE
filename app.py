from flask import Flask, request, jsonify
import json
from flask_cors import CORS
from nltk.corpus import wordnet as wn
def get_definition(word):
   synsets = wn.synsets(word)
   combos = []
   for synset in synsets:
      lemma, definition, example = synset.lemma_names(), synset.definition(), synset.examples()
      if definition == None:
         continue
      if example == None:
         example = ""
      combos.append((synset.definition(), synset.examples()))
   return combos


def replace_synonyms_and_antonyms(data):
   for definitions in data.values():
      synonyms = definitions[1].get("Synonyms")
      if synonyms:
         synonym_definitions = {}
         for synonym in synonyms:
            synonym_definitions[synonym] = get_definition(synonym)
         definitions[1]["Synonyms"] = synonym_definitions

      antonyms = definitions[1].get("Antonyms")
      if antonyms:
         antonym_definitions = {}
         for antonym in antonyms:
            antonym_definitions[antonym] = get_definition(antonym)
         definitions[1]["Antonyms"] = antonym_definitions

app = Flask(__name__)
CORS(app)


@app.route('/add-word', methods=['POST'])
def add_word():
   try:
      new_data = request.get_json()
      replace_synonyms_and_antonyms(new_data)
      new_data = ","+json.dumps(new_data, indent=2)[1:]
      with open('updated_words.json', 'rb+') as file:
         file.seek(-2, 2)
         file.write(new_data.encode('utf-8'))

      return jsonify(success=True)
   except Exception as e:
      return jsonify(success=False, error=str(e)+" shit!!")

if __name__ == '__main__':
    app.run(debug=True)
