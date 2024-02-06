const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;
  
const rockGesture = new GestureDescription('rock'); // ✊️
const paperGesture = new GestureDescription('paper'); // 🖐
const scissorsGesture = new GestureDescription('scissors'); // ✌️
const dontGesture = new GestureDescription('dont'); // 🚫;
const hangLooseGesture = new GestureDescription('hang_loose'); // 🤙
const thumbsDownGesture = new GestureDescription('thumbs_down'); // 👎
const rockandrollGesture = new GestureDescription('rockandroll'); // 🤘
const okGesture = new GestureDescription('ok'); // 👌
const gunGesture = new GestureDescription('gun'); // 👉
const thiefGesture = new GestureDescription('thief'); // 👮‍♂️


  
// Rock
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
// rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
rockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors
//------------------------------------------------------------------------------
  
// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  
// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
// scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
// scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// Dont 🚫
//------------------------------------------------------------------------------
dontGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
dontGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.8);
dontGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
dontGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
dontGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Ring, Finger.Pinky]) {
  dontGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// Hang Loose 🤙

hangLooseGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hangLooseGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
hangLooseGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
hangLooseGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);

hangLooseGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
hangLooseGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
hangLooseGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
hangLooseGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.8);
hangLooseGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.8);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  hangLooseGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// thumbs down 👎

thumbsDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// rock and roll 🤘

rockandrollGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
rockandrollGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.8);
rockandrollGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
rockandrollGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
rockandrollGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);
rockandrollGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.9);
rockGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
rockGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.9);
for(let finger of [ Finger.Middle, Finger.Ring]) {
  rockandrollGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  rockandrollGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// ok 👌

okGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
okGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  okGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  okGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// gun 👉

gunGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.6);
gunGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
gunGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);
gunGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);

gunGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gunGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
gunGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);
gunGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.9);
gunGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gunGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  gunGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// thief 👮‍♂️
thiefGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
thiefGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
thiefGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

thiefGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thiefGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
thiefGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
thiefGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thiefGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thiefGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// thiefGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
// thiefGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
// thiefGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
// thiefGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
// thiefGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
// thiefGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
// thiefGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
// thiefGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
// thiefGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);



const gestures = [
  rockGesture, paperGesture, scissorsGesture, dontGesture, hangLooseGesture, thumbsDownGesture, rockandrollGesture, okGesture, gunGesture, thiefGesture
]

export {
    gestures
}