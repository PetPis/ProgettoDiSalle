import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController, App } from 'ionic-angular';
import { Movimento } from '../../model/movimento.model';
import { MovimentoService } from '../../services/movimento.service';
import { MOVIMENTO_PAGE } from '../pages';

@IonicPage()
@Component({
  selector: 'page-movimenti',
  templateUrl: 'movimenti.html',
})
export class MovimentiPage {

  movimenti: Array<Movimento>;
  inserimento:boolean;
  saldo: number;
  
  
  constructor(public app: App ,public navCtrl: NavController, public navParams: NavParams,public movimentoService: MovimentoService,
   public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovimentiPage');
    this.movimentoService.list().subscribe((data:Array<Movimento>)=>{
      this.movimenti= data;
    })
  }


  UpdateMovimento(n: Movimento) {
    this.movimentoService.findById(n.id).subscribe((movimento:Movimento) =>{
     console.log(movimento);
     this.app.getRootNav().push(MOVIMENTO_PAGE,{"inserimento":false,"movimento":movimento});
    })
    
  }

  addMovimento(){
    console.log('Aggiungi Nuovo Movimento');
    let movimento= new Movimento();
    this.app.getRootNav().push(MOVIMENTO_PAGE,{"inserimento":true,"movimento":movimento});
  }

  listMovimenti(){
    console.log("Lista Movimenti");
    this.movimentoService.list().subscribe((app: Array<Movimento>) =>{
      this.movimenti = app;
    })
  }

  doRefresh(refresher: Refresher) {
    console.log("refresh Lista Movimenti");
    this.movimentoService.list().subscribe((data: Array<Movimento>) => {
      this.movimenti = data;
      refresher.complete();
    });

  }
}
