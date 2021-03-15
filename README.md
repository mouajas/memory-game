# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jasmine Moua**

Time spent: **5** hours spent in total

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

<!-- The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app! -->

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/3cb6896b-3c49-4b76-8cac-b13f1027f131%2Fprework-lose.gif?v=1614878991060)
![](https://cdn.glitch.com/3cb6896b-3c49-4b76-8cac-b13f1027f131%2Fprework-win.gif?v=1614878985970)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    - w3schools.com
    - developer.mozilla.org

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    I ran into trouble understanding built-in methods in the .js file. The methods like .createOscillator, .setTargetAtTime, etc. were a bit vague and unfamiliar as I've never worked with them before, let alone coded in JavaScript. However, I overcame this challange by reading more them on W3Schools and MDN Web Docs. After reading a bit more I learned that .createOscillater() is used to represent an occuring waveform and generates a type of constant tone such as the different sounds in the game that I made (Mozilla). Additionally, I thought .setTargetAtTime() would be self-explanatory but if I were to explain what it actually did to someone else I realized I wouldn't know how therefore I searched it up. According to Mozilla, it helps create the start of a sound or audio transition given the target where the value will gradually go towards, the start time which is used to determined the beginning of the transition, and the time constant which controls the duraction of the change. With these readings, I was about to grasp a better comprehension of some of the methods used yet, with more time to study, I know my comfortability with JavaScript will further.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  Does the placement of the functions in the .js file matter? What is the difference between var and let when creating variables in JavaScript? Is there a way to design the alert method in the .js file using JavaScript or HTML/CSS? How is the freqMap being utilized? What is freqMap? Is it a dictionary? Can we set a set size for the pattern array? On average, how long do developers usually take to complete a project like this from start to finish? What is a recommended text editor for web development? Are there any available tools that can help debug and improve a website's performance? How should web developers overcome creative block?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had a few more hours to work on this project, I would add additional features. I wanted to use a random secret pattern by implementing JavaScript's Math.random however, I was not able to get it running. I know I changed the array that held the pattern because I added console.log's but the sounds when the game started were incorrect. Although I did not try out adding a clock, I think it would be a great feauture to add and it would help me practice more with JavaScript so if I had more time and some help from others, I would love to have added it.



## License

    Copyright Jasmine Moua

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.