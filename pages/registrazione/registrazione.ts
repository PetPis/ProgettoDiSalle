import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtenteService } from '../../services/utente.service';
import { Utente } from '../../model/utente.model';
import { NgForm } from '@angular/forms';
import { Famiglia } from '../../model/famiglia.model';
import { FamigliaService } from '../../services/famiglia.service';

@IonicPage()
@Component({
  selector: 'page-registrazione',
  templateUrl: 'registrazione.html',
})
export class RegistrazionePage {
  famiglia: Famiglia;
  nomeFam: string;
  utente:Utente= {nome:"Nome",cognome:"Cognome",username:"Username",password:"Pass",famiglia:{id:0,nome:""}};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public utenteService: UtenteService, public famigliaService: FamigliaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrazionePage');
  }

  onSubmit(form : NgForm){
    if(form.valid){
    this.nomeFam=this.utente.famiglia.nome;
    //se la famiglia non è inserita la creo (nomeFam= Username utente)
      /*if(!this.nomeFam){
        //nomeFamiglia= NomeUsername
        console.log("Famiglia Vuota")
        this.famiglia.nome=this.utente.username;
        console.log(this.famiglia);
        this.famigliaService.createFamiglia(this.famiglia).subscribe(()=>{
          console.log("creating new Family");
        });
        this.famigliaService.getFamigliaByNome(this.famiglia.nome).subscribe((data:Famiglia)=>{
          this.utente.famiglia=data;
        });
      }

      //se la famiglia è inserita vedo se esiste
      else{*/
        this.famigliaService.getFamigliaByNome(this.utente.famiglia.nome).subscribe((data:Famiglia) =>{
          if(data){
            //se la famiglia la assegno all'utente
            this.utente.famiglia=data;
            this.utenteService.register(this.utente).subscribe(()=>{})
          }/*else{
            //altrimenti ne creo una con il nome specificato
            this.famiglia.nome=this.nomeFam;
            this.famigliaService.createFamiglia(this.famiglia).subscribe(()=>{
              console.log("creating new Family");
            });
            this.famigliaService.getFamigliaByNome(this.famiglia.nome).subscribe((data:Famiglia)=>{
              this.utente.famiglia=data;
            });
          }*/
        });
      this.navCtrl.pop();
      }
      
    }

    cancel(){
      this.navCtrl.pop();
    }
  }

