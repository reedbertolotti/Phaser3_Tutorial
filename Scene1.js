class Scene1 extends Phaser.Scene
{
  constructor()
  {
    super("bootGame");
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
