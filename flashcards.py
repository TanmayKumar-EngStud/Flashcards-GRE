import json
import os
os.system("clear")
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

# Load the JSON file
file_name = "words.json"
with open(file_name) as file:
    data = json.load(file)

# Replace the synonyms and antonyms
replace_synonyms_and_antonyms(data)

# Save the updated data as a JSON file
updated_file_name = "updated_words.json"
with open(updated_file_name, "w") as file:
    json.dump(data, file, indent=2)
