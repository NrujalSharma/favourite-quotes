import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs [selectedIndex]=index>
      <ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="bookmarks"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public glVar: GlobalvarsProvider) {}

  index = this.glVar.getTabIndex();
  favouritesPage = 'FavouritesPage';
  libraryPage = 'LibraryPage';
}
