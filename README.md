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
2. run the html file, using live server

### Usage
<img width="1440" alt="Screenshot 2023-04-25 at 9 35 26 AM" src="https://user-images.githubusercontent.com/72539289/234172151-f2a57ccf-ec88-4e9b-a272-547ccf1a3da6.png">


1. In order to insert new word, click on the '+' button in the top right corner <br>
2. Then enter the word, it's definition it's synonyms and antonyms. <br>
3. Then click on the insert button <br>
4. The python program in the backend will automatically find the definitions and examples of all the synonyms and antonyms with the help of nltk corpus (word-net).<br>
<img width="1049" alt="Screenshot 2023-04-25 at 9 36 28 AM" src="https://user-images.githubusercontent.com/72539289/234172182-8d8f7ef7-b982-43ca-ac16-f282a44c44e8.png">


#### It has different colors for every set of cards

<img width="1049" alt="Screenshot 2023-04-25 at 9 36 50 AM" src="https://user-images.githubusercontent.com/72539289/234172268-e1c5bdc6-6352-47d2-b2a6-e157b1a2cc14.png">


### ⚠️ incase of any wrong word insertion, or corruption of the  `updated_words.json` just copy it from `backup_words.json`

