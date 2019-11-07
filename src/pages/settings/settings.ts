import { Component } from '@angular/core';
import { IonicPage, NavController, Toggle } from 'ionic-angular';
import { SettingsService } from "../../services/settings.service";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public settingsService: SettingsService) {
  }

  onToggle(toggle: Toggle){
    // console.log("onToggle()");
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground(){
    // console.log("checkAltBG()");
    return this.settingsService.isAltBackground();
  }
}
