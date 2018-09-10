import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { Categoria } from '../../model/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { CATEGORIA_PAGE } from '../pages';
import { MovimentoService } from '../../services/movimento.service';
import { Movimento } from '../../model/movimento.model';
import { CatFam } from '../../model/catFam.model';
import { CatFamService } from '../../services/catFam.service';

@IonicPage()
@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html',
})
export class CategoriePage {
  categorie:Array<CatFam>;
  inserimento: boolean;
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,public catFamService : CatFamService,
              public categoriaService:CategoriaService, public alert: AlertController,public movimentoService:MovimentoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriePage');
    this.catFamService.list().subscribe((data:Array<CatFam>)=>{
      this.categorie= data;
      console.log(data);
    })
  }

  update(c: Categoria){
    this.categoriaService.findById(c.id).subscribe((data:Categoria)=>{
      this.app.getRootNav().push(CATEGORIA_PAGE,{"inserimento":false,"c":data});
    })
  }

  add(){
    let c = new CatFam();
    c.categoria=new Categoria();
    c.categoria.nome="Nome";
    c.categoria.segno=false;
    this.app.getRootNav().push(CATEGORIA_PAGE,{"inserimento":true,"c":c})
  }

  delete(c:CatFam){    
    const confirm = this.alert.create({
      title: 'Elimina Categoria',
      message: "TUTTI I MOVIMENTI CON TALE CATEGORIA SARANNO ELIMINATI. PROCEDERE?",
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'Si',
          handler: () => {
                this.catFamService.delete(c.id).subscribe(()=>{
                  console.log("Categoria Eliminata");
                  this.movimentoService.deleteByCatAndFam(c.categoria.id,c.famiglia.id).subscribe(()=>{})
                });
              }
        },
        {
          text: 'No',
          handler: () => {
            console.log("No Clicked");
          }
        }
      ]
    });
    confirm.present();
  }
}
