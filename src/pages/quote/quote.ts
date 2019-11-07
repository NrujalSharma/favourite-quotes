import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  author: string;
  text: string;
  person: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {}

  ionViewDidLoad(){
      this.person = this.navParams.get('person');
      this.text = this.navParams.get('text');
  }

  onClose(){
    this.viewCtrl.dismiss(false);
  }

  onUnfavourite(){
    this.viewCtrl.dismiss(true);
  }
}
