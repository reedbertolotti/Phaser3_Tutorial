class Scene1 extends Phaser.Scene
{
  constructor()
  {
    super("bootGame");
  }

  preload()
  {
    this.load.image("background", "assets/images/background.png");
  }

  create()
  {
    this.add.text(20, 20, "Loading game...");

    // added a delay
    setTimeout(() => {
      this.scene.start('playGame')
    }, 2000);

    //this.scene.start("playGame");
  }
}
