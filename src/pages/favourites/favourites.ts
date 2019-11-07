import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  quotes: Quote[];
  constructor(private settingsService: SettingsService, private quotesService: QuotesService, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavouriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create('QuotePage', quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRemoveFromFavourites(quote);
      }
    });
  }

  onRemoveFromFavourites(quote: Quote){
    this.quotesService.removeQuoteFromFavourites(quote);
    // this.quotes = this.quotesService.getFavouriteQuotes();
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackground(){
    console.log("hello");
    console.log(this.settingsService.isAltBackground() ? 'altQuoteBG' : 'quoteBG');
    return this.settingsService.isAltBackground() ? 'altQuoteBG' : 'quoteBG';
    // return 'altQuoteBG';
  }
  // onOpenMenu(){
  //   this.menuCtrl.open();
  // }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }
}
