var map;
var layer;
var cursors;
var player;
var game;

$( document ).ready(function() {
  game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });





});

function preload() {
  game.add.plugin(Phaser.Plugin.Tiled);

  // By using the built-in cache key creator, the plugin can
  // automagically find all the necessary items in the cache
  var cacheKey = Phaser.Plugin.Tiled.utils.cacheKey;

  // load the tiled map, notice it is "tiledmap" and not "tilemap"
  game.load.tiledmap(cacheKey('my-tiledmap', 'tiledmap'), 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);

  // load the images for your tilesets, make sure the last param to "cacheKey" is
  // the name of the tileset in your map so the plugin can find it later
  game.load.image(cacheKey('my-tiledmap', 'tileset', 'map_sprite'), 'assets/map_sprite.png');

  // if you have image layers, be sure to load those too! Again,
  // make sure the last param is the name of your layer in the map.
  //game.load.image(cacheKey('my-tiledmap', 'layer', 'layer-name'), 'assets/levels/layer.png');
}

function create() {

  game.physics.startSystem(Phaser.Physics.P2JS);

  // add the tiledmap to the game
  // this method takes the key for the tiledmap which has been used in the cacheKey calls
  // earlier, and an optional group to add the tilemap to (defaults to game.world).
  map = game.add.tiledmap('my-tiledmap');


  ////  Create our layer
  //layer = map.createLayer(0);
  //
  ////  Resize the world
  //layer.resizeWorld();
  //
  ////  This isn't totally accurate, but it'll do for now
  //map.setCollisionBetween(54, 83);
  //
  ////  Convert the tilemap layer into bodies. Only tiles that collide (see above) are created.
  ////  This call returns an array of body objects which you can perform addition actions on if
  ////  required. There is also a parameter to control optimising the map build.
  //game.physics.p2.convertTilemap(map, layer);
  //
  //  Player
  player = game.add.sprite(48, 48, 'player');

  game.physics.p2.enable(player);

  game.physics.p2.setBoundsToWorld(true, true, true, true, false);

  game.camera.follow(player);

  //  Allow cursors to scroll around the map
  cursors = game.input.keyboard.createCursorKeys();

  var help = game.add.text(16, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
  help.fixedToCamera = true;

}

function update() {

  if (cursors.left.isDown)
  {
      player.body.rotateLeft(100);
  }
  else if (cursors.right.isDown)
  {
      player.body.rotateRight(100);
  }
  else
  {
      player.body.setZeroRotation();
  }

  if (cursors.up.isDown)
  {
      player.body.thrust(400);
  }
  else if (cursors.down.isDown)
  {
      player.body.reverse(400);
  }

}

function render() {
}