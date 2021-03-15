/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/* * * * * * * * * * * * * * * */
/*      GLOBAL CONSTANTS      */

// how long to hold each clue's light and sound
const clueHoldTime = 1000;

// how long to pause in between clues
const cluePauseTime = 333;

// how long to wait before starting playback
const nextClueWaitTime = 1000;

/* * * * * * * * * * * * * * * */
/*      GLOBAL VARIABLES      */

/* keeps track of secret pattern of button presses
 * size of 7 with ints from 1-4 */
var pattern = [2, 3, 1, 4, 6, 6, 5];

// counts how far along player is in guessing
var progress = 0;

/* checks to see whether game is still active
 * will be true once user starts and will be false
      as soon as user wins, loses, or stops */
var gamePlaying = false;

// keeps track whether tone is playing or not
var tonePlaying = false;

// must be between 0.0 and 1.0
var volume = 0.5;

// keeps track of where the user is in the clue sequence
var guessCounter = 0;

/* * * * * * * * * * * * * * * * */
/*      BASIC GAME FUNCTIONS     */

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

/* * * * * * * * * * * * * * * * * * * */
/*      SOUND SYNTHESIS FUNCTIONS     */

// determines what pitch will be played for each button
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 550,
  6: 690
};

/* takes a button number (1-4) and length of time in milliseconds
 * plays a tone for the amount of time specified */
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

// tone will be played
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

// tone will be stopped
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

/* * * * * * * * * * * * * * * * * * */
/*        PAGE INITIALIZATION       */
/*      init sound synethesizer    */

var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

/* * * * * * * * * * * * * * * * * * * * */
/*      LIGHT OR CLEARING A BUTTON      */

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

/* * * * * * * * * * * * * * * * * * */
/*      PLAYING CLUE FUNCTIONS      */

// for each clue, we call this function to run
function playSingleClue(btn) {
  // only if game has begun
  if (gamePlaying) {
    // lights button up
    lightButton(btn);

    // tone plays
    playTone(btn, clueHoldTime);

    // performs action after specific time given
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// repeats code one for each clue we want to play
function playClueSequence() {
  guessCounter = 0;

  //set delay to initial wait time
  let delay = nextClueWaitTime;

  // progress keeps track of which turn we are on
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue

    // keeps running total of how long to play the next clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

/* * * * * * * * * * * * * * * * * */
/*      END OF GAME FUNCTIONS     */

function loseGame() {
  // calls function to stop the game
  stopGame();

  // pops a dialog box up in browser with message
  alert("GAME OVER - You lost.");
}

function winGame() {
  // calls function to stop the game
  stopGame();

  // pops a dialog box up in browser with message
  alert("GAME OVER - You won!");
}

/* * * * * * * * * * * * * */
/*     GUESS FUNCTION     */

function guess(btn) {
  console.log("user guessed: " + btn);

  // if user has not started game
  if (!gamePlaying) {
    // breaks out of function
    return;
  }

  // if pressed button was correct
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      // completes game
      if (progress == pattern.length - 1) {
        winGame();
      }
      // continues to play sequence
      else {
        progress++;
        playClueSequence();
      }
    } else {
      // counts up number of guesses
      guessCounter++;
    }
  }

  // if pressed button was incorrect
  else {
    loseGame();
  }
}
