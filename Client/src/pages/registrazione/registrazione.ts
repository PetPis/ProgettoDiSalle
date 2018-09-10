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
  utente:Utente= {nome:"Nome",cognome:"Cognome",username:"Username",password:"Pass",famiglia:{id:0,nome:""}};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public utenteService: UtenteService, public famigliaService: FamigliaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrazionePage');
  }

  onSubmit(form : NgForm){
    if(form.valid){    
        this.famigliaService.getFamigliaByNome(this.utente.famiglia.nome).subscribe((data:Famiglia) =>{
          if(data){
            //se la famiglia esiste la assegno all'utente
            this.utente.famiglia=data;
            this.utenteService.register(this.utente).subscribe(()=>{})
          }else{
            //altrimenti ne creo una con il nome specificato
            this.famigliaService.createFamiglia(this.utente.famiglia).subscribe(()=>{
              console.log("creating new Family");
            });
            // devo rifare la query perchè non ho l'id della famiglia creata
            this.famigliaService.getFamigliaByNome(this.utente.famiglia.nome).subscribe((data:Famiglia)=>{
              this.utente.famiglia = data;
              this.utenteService.register(this.utente).subscribe(()=>{});
            })
          }
        });
      this.navCtrl.pop();
      }
      
    }
    cancel(){
      this.navCtrl.pop();
    }
  }

