# Flashcards-GRE

This is a simple program which one can use to learn new words more efficiently. <br>
This program is build with simple vanilla javascript in the frontend and python flask as backend. <br>
Just click on any Synonym or antonym to find it's definitions and examples <br><br>
Design looks obsolete because, I am not a designer, I am a developer!! <br>
### Installation

1. firsly clone this repository
```[bash]
 git clone https://github.com/TanmayKumar-EngStud/Flashcards-GRE.git
```
2. You should have python and javascript installed in your system.
3. Install flask and ntlk
```[bash]
  pip3 install flask, ntlk
```
4. Download wordnet in nltk, for this open a python program and run the following code
```[python]
import nltk

nltk.download('wordnet')
```

### Running the program
1. First run the app.py python program, that is your backend server
2. run the html file

### Usage
<img width="963" alt="Screenshot 2023-04-16 at 11 48 57 PM" src="https://user-images.githubusercontent.com/72539289/232647347-68839c2b-21dd-4fd2-909f-d2531ed64ccd.png">

1. In order to insert new word, click on the '+' button in the top right corner <br>
2. Then enter the word, it's definition it's synonyms and antonyms. <br>
3. Then click on the insert button <br>
4. The python program in the backend will automatically find the definitions and examples of all the synonyms and antonyms with the help of nltk corpus (word-net).<br>
<img width="1440" alt="Screenshot 2023-04-18 at 7 04 20 AM" src="https://user-images.githubusercontent.com/72539289/232649329-3b8e7f1f-ac62-43dd-8ac1-ff439cd35fda.png">

<img width="1440" alt="Screenshot 2023-04-18 at 7 05 02 AM" src="https://user-images.githubusercontent.com/72539289/232649344-94cb3dee-a1e9-46ba-8771-668e7829a557.png">


### ⚠️ incase of any wrong word insertion, or corruption of the  `updated_words.json` just copy it from `backup_words.json`

