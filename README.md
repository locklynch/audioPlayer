# audioPlayer
a simple audio player to learn audioNode and for later implimentation in an audio Visualizer

-making a basic audio player to then use to control sound source in an audio visuializer.

-using a track of mine called Modern Monotony under the Vapid Vulpes artist name

-using live server to test it

-running into
    Uncaught TypeError: playButton is null
    <anonymous> http://127.0.0.1:5500/main.js:14

-FIXED!!!!

-i imiplimented the button after the main.js file in the index!! I gotta remember code executes top down!!!

-took a minuite to understand the code, but successfully implimented gain, and panning as well as start/stop button
notes in comments in .js file

-NOTE! don't link audioNodes from source to destination mulitple times (in the audio graph), it messes with output (it sounds like it sums the different parameters multiple times, which messes with the audio in weird ways)
