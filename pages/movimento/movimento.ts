import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movimento } from '../../model/movimento.model';
import { UtenteService } from '../../services/utente.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { MovimentoService } from '../../services/movimento.service';
import { Categoria } from '../../model/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { Utente } from '../../model/utente.model';

@IonicPage()
@Component({
  selector: 'page-movimento',
  templateUrl: 'movimento.html',
})
export class MovimentoPage {

  movimento = new Movimento();
  categorie: Array<Categoria>;
  inserimento: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public movimentoService: MovimentoService, 
              public categoriaService :CategoriaService,public utenteService: UtenteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovimentoPage');
    this.movimento =this.navParams.get("movimento");
    //flag for insert or create
    this.inserimento = this.navParams.get("inserimento");
    //get category array to display
    //TODO: mettere in array categorie solo quelle disponibili nella famiglia
    this.categoriaService.list().subscribe((data:Array<Categoria>) =>{
      this.categorie=data;})
    //get current family
    this.utenteService.getUtente().subscribe((data:Utente) =>{
      this.movimento.famiglia=data.famiglia;
      })
    }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(this.movimento.categoria.segno);
      //Setto importo negativo per le uscite
      if(this.movimento.categoria.segno == "USCITA"){
        this.movimento.importo *= -1;
      }
      console.log(this.movimento.importo);
      if(this.inserimento){
        this.movimentoService.createMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop()
        });
      } else{
        this.movimentoService.updateMovimento(this.movimento).subscribe(() =>{
          this.navCtrl.pop();
        });
      }
      console.log(this.movimento);
    }
  }
  onDelete(){
    this.movimentoService.deleteMovimento(this.movimento).subscribe(()=>{
      this.navCtrl.pop();
    })
  }
}

