import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria} from '../../model/categoria.model';
import { CatFam } from '../../model/catFam.model';
import { FamigliaService } from '../../services/famiglia.service';
import { Famiglia } from '../../model/famiglia.model';
import { NgForm } from '@angular/forms';
import { CatFamService } from '../../services/catFam.service';
import { CategoriaService } from '../../services/categoria.service';
export interface cate{
  nome:string;
  segno:boolean;
}
@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  //booleano per update o create
  inserimento: boolean = false;
  // dato da passare al server
  c= new CatFam();
  //variabili appoggio per dati form
  nomeCat:string;
  segni : boolean = false;
  budgetCat:number;
  //categoria per controllo esistenza sul db
  cat= new Categoria();

  constructor(public navCtrl: NavController, public navParams: NavParams, public famigliService:FamigliaService,
              public catFamService: CatFamService,public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
    this.inserimento= this.navParams.get("inserimento");
    this.c=this.navParams.get("c");
    //prendo i dati della famiglia
    this.famigliService.getFamiglia().subscribe((data:Famiglia)=>{
      this.c.famiglia=data;
    });
  }

  onSubmit(form: NgForm){
    if(form.valid){
      //valore budget per campo vuoto
      if(!this.budgetCat){
        this.budgetCat=0;
      }
      //prendo i dati dal form
      this.c.categoria.nome=this.nomeCat;
      this.c.categoria.segno=this.segni;
      this.c.budget=this.budgetCat;
      //controllo se la categoria esiste sul DB
      this.categoriaService.findByNome(this.nomeCat).subscribe((data:Categoria)=>{
        if(!data){
          //se non esiste creo una nuova Categoria
          console.log("Categoria non esistente");
          this.categoriaService.createCategoria(this.c.categoria).subscribe(()=>{});
          //faccio di nuovo la query perchè non ho l'id della nuova categoria
          this.categoriaService.findByNome(this.nomeCat).subscribe((data:Categoria)=>{
            this.c.categoria=data;
          });
        }
        else{
          console.log("Categoria esistente");
          this.c.categoria=data;
        }
      });
      console.log(this.c);
    //a questo punto la categoria è nel DB, posso inserire CatFam
    this.catFamService.insert(this.c).subscribe(()=>{});
    }
  }
}

