const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

const audioElement = document.querySelector("audio");

const track = audioContext.createMediaElementSource(audioElement);



// Select the play button
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play or pause track depending on state
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }
  },
  false,
);
//listens for end of song and stops audio
audioElement.addEventListener(
    "ended",
    () => {
      playButton.dataset.playing = "false";
    },
    false,
  );
  
  //gain control (references gain range value from index.html)
  const gainNode = audioContext.createGain();
  const volumeControl = document.querySelector("#volume");

  volumeControl.addEventListener(
    "input",
    () => {
        gainNode.gain.value = volumeControl.value;
    },
    false,
  );

  // panning parameter (references panning range value from index.html)
  const pannerOptions = { pan:0};
  const panner = new StereoPannerNode(audioContext, pannerOptions);

  const pannerControl = document.querySelector("#panner");

  pannerControl.addEventListener(
    "input",
    () => {
        panner.pan.value = pannerControl.value;
    },
    false,


  );

  // connecting all nodes together in order in series
  track.connect(gainNode).connect(panner).connect(audioContext.destination)