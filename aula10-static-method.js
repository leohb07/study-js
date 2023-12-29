class RemoteControl {
  constructor(television) {
    this.television = television;
    this.volume = 0;
  }

  // Func instance
  turnUpTheVolume() {
    this.volume += 5;
  }

  turnDownTheVolume() {
    this.volume -= 5;
  }

  // Func Class
  static changeBatteryOfRemoteControl() {
    console.log("Battery of control changed");
  }
}

const remoteControl1 = new RemoteControl("Samsung");
RemoteControl.changeBatteryOfRemoteControl();

remoteControl1.turnUpTheVolume();
remoteControl1.turnUpTheVolume();
remoteControl1.turnUpTheVolume();

console.log(remoteControl1.volume);
