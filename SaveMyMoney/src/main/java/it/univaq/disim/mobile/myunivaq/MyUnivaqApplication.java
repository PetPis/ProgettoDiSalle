package it.univaq.disim.mobile.myunivaq;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import it.univaq.disim.mobile.myunivaq.business.impl.repositories.AppelloRepository;
import it.univaq.disim.mobile.myunivaq.business.impl.repositories.CorsoDiLaureaRepository;
import it.univaq.disim.mobile.myunivaq.business.impl.repositories.InsegnamentoRepository;
import it.univaq.disim.mobile.myunivaq.business.impl.repositories.NotiziaRepository;
import it.univaq.disim.mobile.myunivaq.business.impl.repositories.TipologiaNotiziaRepository;
import it.univaq.disim.mobile.myunivaq.business.impl.repositories.UtenteRepository;
import it.univaq.disim.mobile.myunivaq.domain.Appello;
import it.univaq.disim.mobile.myunivaq.domain.CorsoDiLaurea;
import it.univaq.disim.mobile.myunivaq.domain.Docente;
import it.univaq.disim.mobile.myunivaq.domain.Insegnamento;
import it.univaq.disim.mobile.myunivaq.domain.Lingua;
import it.univaq.disim.mobile.myunivaq.domain.Notizia;
import it.univaq.disim.mobile.myunivaq.domain.Studente;
import it.univaq.disim.mobile.myunivaq.domain.TipologiaCredito;
import it.univaq.disim.mobile.myunivaq.domain.TipologiaEsame;
import it.univaq.disim.mobile.myunivaq.domain.TipologiaNotizia;

@SpringBootApplication
public class MyUnivaqApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Bean
	public CommandLineRunner loadData(UtenteRepository utenteRepository, NotiziaRepository notiziaRepository, TipologiaNotiziaRepository tipologiaNotiziaRepository, CorsoDiLaureaRepository corsoDiLaureaRepository, InsegnamentoRepository insegnamentoRepository, AppelloRepository appelloRepository) {
		return (args) -> {
			TipologiaNotizia tipologiaDidattica = new TipologiaNotizia();
			tipologiaDidattica.setNome("Didattica");
			tipologiaDidattica = tipologiaNotiziaRepository.save(tipologiaDidattica);

			TipologiaNotizia tipologiaLavoro = new TipologiaNotizia();
			tipologiaLavoro.setNome("Lavoro");
			tipologiaLavoro = tipologiaNotiziaRepository.save(tipologiaLavoro);

			CorsoDiLaurea corsoDiLaureaInformatica = new CorsoDiLaurea();
			corsoDiLaureaInformatica.setClasse("L-31");
			corsoDiLaureaInformatica.setNome("Informatica");
			corsoDiLaureaInformatica = corsoDiLaureaRepository.save(corsoDiLaureaInformatica);

			CorsoDiLaurea corsoDiLaureaMaster = new CorsoDiLaurea();
			corsoDiLaureaMaster.setClasse("L-32");
			corsoDiLaureaMaster.setNome("Master Web Technology");
			corsoDiLaureaMaster = corsoDiLaureaRepository.save(corsoDiLaureaMaster);
			
			Docente amleto = new Docente();
			amleto.setUsername("amleto");
			amleto.setPassword(passwordEncoder.encode("amleto"));
			amleto.setNome("Amleto");
			amleto.setCognome("Di Salle");
			amleto.setEmail("amleto.disalle@univaq.it");
			amleto.setMatricola("09999");
			amleto.setTelefono("+39.0862/433735");
			amleto = utenteRepository.save(amleto);
			
			Docente marco = new Docente();
			marco.setUsername("marco");
			marco.setPassword(passwordEncoder.encode("marco"));
			marco.setNome("Marco");
			marco.setCognome("Autili");
			marco.setEmail("marco.autili@univaq.it");
			marco.setMatricola("01111");
			marco.setTelefono("+39.0862/433xxx");
			marco = utenteRepository.save(marco);			

			Studente studente = new Studente();
			studente.setUsername("studente");
			studente.setPassword(passwordEncoder.encode("studente"));
			studente.setNome("Studente");
			studente.setCognome("Studente");
			studente.setEmail("studente.studente@student.univaq.it");
			studente.setMatricola("299999");
			studente.setCorsoDiLaurea(corsoDiLaureaInformatica);
			studente = utenteRepository.save(studente);

			for (int i = 0; i < 10; i++) {
				Notizia notizia = new Notizia();
				notizia.setNome("Lezioni del corso " + i);
				notizia.setDescrizione("Le lezioni di " + i + "  comprese nel periodo 11-24 Maggio 2018 si svolgeranno secondo il seguente calendario:");
				Date dataPubblicazione = new Date(System.currentTimeMillis() - (i * 86400000));
				notizia.setDataPubblicazione(dataPubblicazione);
				notizia.setPubblicatoDa(amleto);
				notizia.setTipologia(tipologiaDidattica);
				notiziaRepository.save(notizia);
			}

			Insegnamento mobile = new Insegnamento();
			mobile.setCodice("F1081");
			mobile.setDenominazione("Applicazioni per Dispositivi Mobili");
			mobile.setLingua(Lingua.ITA);
			mobile.setCfu(6);
			mobile.setTipologiaCredito(TipologiaCredito.b);
			mobile.setPeriodoInsegnamento(2);
			mobile.setCorsoDiLaurea(corsoDiLaureaInformatica);
			mobile.setDocente(amleto);
			insegnamentoRepository.save(mobile);

			Appello appelloGiugno = new Appello();
			appelloGiugno.setDescrizione("1 appello giugno");
			appelloGiugno.setDataAppello(new Date(System.currentTimeMillis() + (20 * 86400000)));
			appelloGiugno.setInsegnamento(mobile);
			appelloGiugno.setTipologiaEsame(TipologiaEsame.ORALE);
			appelloRepository.save(appelloGiugno);

			Appello appelloGiugno2 = new Appello();
			appelloGiugno2.setDescrizione("2 appello giugno");
			appelloGiugno2.setDataAppello(new Date(System.currentTimeMillis() + (35 * 86400000)));
			appelloGiugno2.setInsegnamento(mobile);
			appelloGiugno2.setTipologiaEsame(TipologiaEsame.ORALE);
			appelloRepository.save(appelloGiugno2);
			
			Insegnamento java = new Insegnamento();
			java.setCodice("F7W027");
			java.setDenominazione("Programmazione avanzata Java");
			java.setLingua(Lingua.ITA);
			java.setCfu(5);
			java.setTipologiaCredito(TipologiaCredito.b);
			java.setPeriodoInsegnamento(1);
			java.setCorsoDiLaurea(corsoDiLaureaMaster);
			java.setDocente(amleto);
			insegnamentoRepository.save(java);

			Insegnamento jee = new Insegnamento();
			jee.setCodice("F7W021");
			jee.setDenominazione("Piattaforma JEE");
			jee.setLingua(Lingua.ITA);
			jee.setCfu(6);
			jee.setTipologiaCredito(TipologiaCredito.b);
			jee.setPeriodoInsegnamento(2);
			jee.setCorsoDiLaurea(corsoDiLaureaMaster);
			jee.setDocente(amleto);
			insegnamentoRepository.save(jee);
			
			Insegnamento laboratoriosistemioperativi = new Insegnamento();
			laboratoriosistemioperativi.setCodice("F1I021");
			laboratoriosistemioperativi.setDenominazione("Laboratorio di Sistemi Operativi");
			laboratoriosistemioperativi.setLingua(Lingua.ITA);
			laboratoriosistemioperativi.setCfu(6);
			laboratoriosistemioperativi.setTipologiaCredito(TipologiaCredito.b);
			laboratoriosistemioperativi.setPeriodoInsegnamento(1);
			laboratoriosistemioperativi.setCorsoDiLaurea(corsoDiLaureaInformatica);
			laboratoriosistemioperativi.setDocente(marco);
			insegnamentoRepository.save(laboratoriosistemioperativi);

		};
	}

	public static void main(String[] args) {
		SpringApplication.run(MyUnivaqApplication.class, args);
	}

}
