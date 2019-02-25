import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
  titulo:"nome_usuario",
  data:"November 5, 1999",
  descricao:"Estou criando um app incrivel",
  qntd_likes:12,
  qntd_comments:4,
  time_comments:" 11h ago"
  }


  public nome_usuario:string = "Leomar de sousa cod";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    //alert(num1 + num2)
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        console.log(data);
      }, error => {
        console.log(error)
      }
    )
  }

}
