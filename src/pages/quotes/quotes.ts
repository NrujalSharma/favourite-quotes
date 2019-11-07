import { Component, OnInit } from '@angular/core';
import { IonicPage, AlertController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes.service";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup:  {category: string, quotes: Quote[], icon: string, img: string};

  constructor(
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private quotesService: QuotesService) {}

  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  // }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavourites(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: "Heyyy.....",
      subTitle: "Are you sure?",
      message: "You want to add the quote?",
      buttons: [
        {
          text: 'Yes!!',
          handler: () => {
            this.quotesService.addQuoteToFavourites(selectedQuote);
          }
        },
        {
          text: 'No!!',
          role: 'cancel',
          handler: () => {
            console.log("Cancelled.");
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavourites(quote: Quote){
    this.quotesService.removeQuoteFromFavourites(quote);
  }

  isFavourite(quote: Quote){
    return this.quotesService.isQuoteFavourite(quote);
  }
}
