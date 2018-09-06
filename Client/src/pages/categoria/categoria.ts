import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria } from '../../model/categoria.model';
import { CatFam } from '../../model/catFam.model';
import { FamigliaService } from '../../services/famiglia.service';
import { Famiglia } from '../../model/famiglia.model';
import { NgForm } from '@angular/forms';
import { CatFamService } from '../../services/catFam.service';
import { CategoriaService } from '../../services/categoria.service';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  inserimento: boolean = false;
  c= new CatFam();
  cat=new Categoria();
  segni:Array<String> = ['ENTRATA','USCITA'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public famigliService:FamigliaService,
              public catFamService: CatFamService,public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
    this.inserimento= this.navParams.get("inserimento");
    //prendo i dati della famiglia
    this.famigliService.getFamiglia().subscribe((data:Famiglia)=>{
      this.c.famiglia=data;
    });
  }

  onSubmit(form: NgForm){
    if(form.valid){
      //se il budget non è impostato lo setto a 0
      if(!this.c.budget){
        this.c.budget=0;
      }
      //prendo i dati della categoria
      this.c.categoria=this.cat;
      console.log(this.cat.nome);
      this.categoriaService.findByNome(this.cat.nome).subscribe((data:Categoria)=>{
        console.log(data);
        if(!data){
          console.log("Categoria non esistente")
          this.categoriaService.createCategoria(this.cat).subscribe(()=>{});
        }
        this.catFamService.insert(this.c).subscribe(()=>{});
        });
    }
  }
}
