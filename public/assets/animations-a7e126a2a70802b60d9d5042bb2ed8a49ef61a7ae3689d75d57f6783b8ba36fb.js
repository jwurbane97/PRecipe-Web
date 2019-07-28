var canvas;
var stage;
var screen_width;
var screen_height;
var bmpAnimation;

// Sprites
var pour = new Image();
var open = new Image();
var close = new Image();
var raw = new Image();
var ripe = new Image();
var burnt = new Image();
var add_redbean = new Image();
var add_cream = new Image();
var turnover = new Image();

var aniStack;
var currentLevel;

var aniSet;

function init(e, level) {
  aniStack = e;
  currentLevel = level;
  canvas = document.getElementById("resultCanvas");

  ripe.onerror = handleImageError;
  ripe.src = "/images/ripe.png";

  raw.onerror = handleImageError;
  raw.src = "/images/raw.png";

  burnt.onerror = handleImageError;
  burnt.src = "/images/burnt.png";
  
  open.onerror = handleImageError;
  open.src = "/images/open.png";

  close.onerror = handleImageError;
  close.src = "/images/close.png";

  pour.onerror = handleImageError;
  pour.src = "/images/pour.png";
  
  close.onerror = handleImageError;
  close.src = "/images/close.png";
  
  add_redbean.onerror = handleImageError;
  add_redbean.src = "/images/add_redbean.png";

  add_cream.onerror = handleImageError;
  add_cream.src = "/images/add_cream.png";
  
  turnover.onerror = handleImageError;
  turnover.src = "/images/turnover.png";


  if(e !== null) startGame();
  else{
    stage.removeAllChildren();
    stage.cache();
    stage.updateCache();
  }
}

function reset() {
  stage.removeAllChildren();
  createjs.Ticker.removeAllListeners();
  stage.update();
}

function handleImageLoad(e) {
  startGame(aniStack);
}

function startGame() {
  console.log(aniStack);
  
  switch(currentLevel) {
    case "1":
      aniSet = [pour];
      break;
    case "2":
      if(aniStack[0] == "add_redbean"){
        aniSet = [add_redbean];
      }else{
        aniSet = [add_cream];
      }
      break;
    case "3":
      aniSet = [turnover];
      break;
    case "4":
      aniSet = [ripe];
      break;
    case "5":
      if(aniStack[0] == "raw") {
        aniSet = [raw];
      }else if(aniStack[0] == "ripe") {
        aniSet = [ripe];
      }else {
        aniSet = [burnt];
      }
      break;
  }
  // create a new stage and point it at our canvas:
  stage = new createjs.Stage(canvas);

  // grab canvas width and height for later calculations:
  screen_width = canvas.width;
  screen_height = canvas.height;

  // create spritesheet and assign the associated data.
  var spriteSheet = new createjs.SpriteSheet({
    // image to use
    images: aniSet,
    // width, height & registration point of each sprite
    frames: {width: 539, height: 539, regX: 0, regY: 0},
    animations: {
      raw: {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        next: false
      },
      ripe: {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        next: false
      },
      burnt: {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        next: false
      },
      pour: {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        next: false
      },
      add_redbean: {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        next: false
      },
      add_cream: {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        next: false
      },
    }
  });

  // create a BitmapAnimation instance to display and play back the sprite sheet:
  bmpAnimation = new createjs.BitmapAnimation(spriteSheet);

  // start playing the first sequence:
  if(aniStack.length == 0) {
    reset();
    init(null);
  } else {
    bmpAnimation.gotoAndPlay(aniStack);    //animate
    bmpAnimation.onAnimationEnd = nextAni;
  }

  bmpAnimation.name = "fishbread";
  bmpAnimation.vX = 0;
  bmpAnimation.x = 0;
  bmpAnimation.y = 0;

  bmpAnimation.scaleX = 0.3;
  bmpAnimation.scaleY = 0.3;

  // have each monster start at a specific frame
  bmpAnimation.currentFrame = 0;
  stage.addChild(bmpAnimation);

  // we want to do some work before we update the canvas,
  // otherwise we could use Ticker.addListener(stage);
  createjs.Ticker.addListener(window);
  createjs.Ticker.useRAF = true;
  createjs.Ticker.setFPS(10);
}

//called if there is an error loading the image (usually due to a 404)
function handleImageError(e) {
  console.log("Error Loading Image : " + e.target.src);
}

function tick() {
  // update the stage:
  stage.update();
}

function nextAni() {
  reset();
  startGame();
}
;
