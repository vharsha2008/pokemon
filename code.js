var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a414779c-eab8-43ea-a5f7-cfd57626f74f","c9781c4e-5c0b-44a3-acfd-fa6962a2e564","c3f0d0cf-653f-486b-bdb8-9413e2c9ec38","f71e0bd4-c24a-42b5-84b7-1def43ed78a3","901ee7d8-96d1-4642-873d-7b6f0b6b56c9","85fa2c3d-dd42-4e88-926e-4e6f1f6c6d43","621173e0-4670-4ec9-899c-451d3c30ab12"],"propsByKey":{"a414779c-eab8-43ea-a5f7-cfd57626f74f":{"name":"ground2.png_1","sourceUrl":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/a414779c-eab8-43ea-a5f7-cfd57626f74f.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"zDYjrGbRCA.c0QZGoQbOyTRrYeFrzfVl","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/a414779c-eab8-43ea-a5f7-cfd57626f74f.png"},"c9781c4e-5c0b-44a3-acfd-fa6962a2e564":{"name":"download (22).png_1","sourceUrl":null,"frameSize":{"x":473,"y":346},"frameCount":7,"looping":true,"frameDelay":5,"version":"qziaLv9GH.ZK1Cfk18Qb75vkxpHwbCO7","loadedFromSource":true,"saved":true,"sourceSize":{"x":946,"y":1384},"rootRelativePath":"assets/c9781c4e-5c0b-44a3-acfd-fa6962a2e564.png"},"c3f0d0cf-653f-486b-bdb8-9413e2c9ec38":{"name":"images.jpg_1.","sourceUrl":null,"frameSize":{"x":297,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"M1lJ7s0_jsdqWUp.OskgqLuTZoWHEnUp","loadedFromSource":true,"saved":true,"sourceSize":{"x":297,"y":170},"rootRelativePath":"assets/c3f0d0cf-653f-486b-bdb8-9413e2c9ec38.png"},"f71e0bd4-c24a-42b5-84b7-1def43ed78a3":{"name":"obstacle4.png_1","sourceUrl":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/f71e0bd4-c24a-42b5-84b7-1def43ed78a3.png","frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"myl6bqyrfE871W5RohATGgPlNLaKq._E","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/f71e0bd4-c24a-42b5-84b7-1def43ed78a3.png"},"901ee7d8-96d1-4642-873d-7b6f0b6b56c9":{"name":"download.jpg_1","sourceUrl":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/901ee7d8-96d1-4642-873d-7b6f0b6b56c9.png","frameSize":{"x":284,"y":177},"frameCount":1,"looping":true,"frameDelay":4,"version":"iJ9h0RCo6dSmAesQbyy62lLa2zCXJ_3J","loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":177},"rootRelativePath":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/901ee7d8-96d1-4642-873d-7b6f0b6b56c9.png"},"85fa2c3d-dd42-4e88-926e-4e6f1f6c6d43":{"name":"obstacle5.png_1","sourceUrl":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/85fa2c3d-dd42-4e88-926e-4e6f1f6c6d43.png","frameSize":{"x":103,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"TILwicd.PsVbBV.EP3Kro4f6SVN08Jg3","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":100},"rootRelativePath":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/85fa2c3d-dd42-4e88-926e-4e6f1f6c6d43.png"},"621173e0-4670-4ec9-899c-451d3c30ab12":{"name":"obstacle6.png_1","sourceUrl":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/621173e0-4670-4ec9-899c-451d3c30ab12.png","frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"QUG.CaYYRt.CMmML0A8MHcu4m74tAqOe","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/v3/animations/hHUA1eluokw_y6FWFWcoyEbdm8wS23Hnm1gqruJc05A/621173e0-4670-4ec9-899c-451d3c30ab12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  
  
  
  
  
var wall = createSprite(200,590,5,50);
  wall.velocityY=-3;
  
 var ground = createSprite(200, 200);
ground.setAnimation("download.jpg_1");
ground.height=400;
ground.width=400;




var back = createSprite(200,350,800,5);
back.setAnimation("ground2.png_1");


var you = createSprite(50,310,10,10);
you.setAnimation("download (22).png_1");
you.scale=0.1;

  invisibleGround = createSprite(200,360,400,10);
  invisibleGround.visible = false;
        
var obstacle = createSprite(380,330,5,50);
obstacle.velocityX=-5;
obstacle.setAnimation("obstacle4.png_1");
obstacle.scale=0.4;


score = 0;



function draw() {
 background("white");
   createEdgeSprites();

  
   
  drawSprites();
  you.collide(invisibleGround);
  
  fill("red");
  textSize(20);
  text("Score: "+ score,30,50);
score = score + Math.round(getFrameRate()/60);


 if (back.x < 0){
      back.x = back.width/2;
    }
  back.velocityX = -5; 
  
  if(keyDown("space")&& you.y >= 290) {
        you.velocityY = -10;
    }
    
    //add gravity
    you.velocityY = you.velocityY + 0.8;
  
  
  if (obstacle.isTouching(leftEdge)) {
  obstacle.x=380;
  obstacle.y=330;
  obstacle.velocityX=-10;
  obstacle.setAnimation("obstacle5.png_1");
  obstacle.scale=0.4;
  
  
}
  
  

if (you.isTouching(obstacle)) {
  
   background("black");
obstacle.velocityX=0;
  
  
  fill("yellow");
  textSize(50);
  text("Game over",100,200);
  you.velocityY = -0;
  
  
  
  
   
}





if (obstacle.isTouching(wall)) {
  obstacle.x=400;
  obstacle.y=330;
  obstacle.setAnimation("obstacle6.png_1");
  obstacle.scale=0.4;
  
}


if (wall.isTouching(topEdge)) {
  wall.x=200;
  wall.y=590;
  wall.velocityY=-4;
}


























}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
