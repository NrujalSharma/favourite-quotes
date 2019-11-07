export class SettingsService{
  private altBackground = false;

  setBackground(isAlt: boolean){
    // console.log("setBG()");
    this.altBackground = isAlt;
  }

  isAltBackground(){
    // console.log("isALtBG()");
    return this.altBackground;
  }
}
