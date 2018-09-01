package savemymoney;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import savemymoney.business.impl.repositories.CategoriaFamigliaRepository;
import savemymoney.business.impl.repositories.CategoriaRepository;
import savemymoney.business.impl.repositories.FamigliaRepository;
import savemymoney.business.impl.repositories.MovimentoRepository;
import savemymoney.business.impl.repositories.UtenteRepository;
import savemymoney.domain.Categoria;
import savemymoney.domain.Categoria_has_Famiglia;
import savemymoney.domain.Famiglia;
import savemymoney.domain.Movimento;
import savemymoney.domain.TipoMovimento;
import savemymoney.domain.Utente;


@SpringBootApplication
public class SaveMyMoneyApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Bean
	public CommandLineRunner loadData(UtenteRepository utenteRepository, FamigliaRepository famigliaRepository, CategoriaRepository categoriaRepository, MovimentoRepository movimentoRepository,CategoriaFamigliaRepository catFamRepo) {
		return (args) -> {	
			
			
			Categoria cibo= new Categoria();
			cibo.setNome("cibo");
			cibo.setSegno(TipoMovimento.USCITA);
		
			cibo= categoriaRepository.save(cibo);
			
			Categoria stip= new Categoria();
			stip.setNome("stipendio");
			stip.setSegno(TipoMovimento.ENTRATA);
			stip= categoriaRepository.save(stip);
			
			Categoria abiti = new Categoria();
			abiti.setNome("Vestiti");
			abiti.setSegno(TipoMovimento.USCITA);
			abiti=categoriaRepository.save(abiti);
			
			
			Famiglia pis = new Famiglia();
			pis.setNome("pistilli");
			pis=famigliaRepository.save(pis);
			
			Famiglia pet = new Famiglia();
			pet.setNome("petrini");
			pet=famigliaRepository.save(pet);
			
			
			Categoria_has_Famiglia PisStip=new Categoria_has_Famiglia();
			PisStip.setCategoria(stip);
			PisStip.setFamiglia(pis);
			PisStip= catFamRepo.save(PisStip);
			
			Categoria_has_Famiglia PetAbiti=new Categoria_has_Famiglia();
			PetAbiti.setCategoria(abiti);
			PetAbiti.setFamiglia(pet);
			PetAbiti.setBudget(5200);
			PetAbiti= catFamRepo.save(PetAbiti);
			
			
			Categoria_has_Famiglia PetCibo=new Categoria_has_Famiglia();
			PetCibo.setCategoria(cibo);
			PetCibo.setFamiglia(pet);
			PetCibo.setBudget(2000);
			PetCibo= catFamRepo.save(PetCibo);
			
			
			
			Utente marco = new Utente();
			marco.setUsername("Marco");
			marco.setPassword(passwordEncoder.encode("marco"));
			marco.setNome("Marco");
			marco.setCognome("Pistilli");
			marco.setFamiglia(pis);
			marco = utenteRepository.save(marco);
			
			Utente davide = new Utente();
			davide.setUsername("Davide");
			davide.setPassword(passwordEncoder.encode("davide"));
			davide.setNome("davide");
			davide.setCognome("Petrini");
			davide.setFamiglia(pet);
			davide = utenteRepository.save(davide);			

			Utente bimbo = new Utente();
			bimbo.setUsername("BimboPis");
			bimbo.setPassword(passwordEncoder.encode("bimbo"));
			bimbo.setNome("Mark");
			bimbo.setCognome("Pistilli");
			bimbo.setFamiglia(pis);
			bimbo = utenteRepository.save(bimbo);
			
			Utente bimba = new Utente();
			bimba.setUsername("BimbaPet");
			bimba.setPassword(passwordEncoder.encode("bimba"));
			bimba.setNome("Davida");
			bimba.setCognome("Petrini");
			bimba.setFamiglia(pet);
			bimba = utenteRepository.save(bimba);
			
			Movimento stipe = new Movimento();
			stipe.setCategoria(stip);
			stipe.setData(new Date(System.currentTimeMillis() + (20 * 86400000)));
			stipe.setImporto(2000.50);
			stipe.setFamiglia(pis);
			stipe = movimentoRepository.save(stipe);
			
			Movimento food = new Movimento();
			food.setCategoria(cibo);
			food.setData(new Date(System.currentTimeMillis() + (20 * 86400000)));
			food.setImporto(-20.50);
			food.setFamiglia(pet);
			food = movimentoRepository.save(food);
			
			Movimento giacca = new Movimento();
			giacca.setCategoria(abiti);
			giacca.setData(new Date(System.currentTimeMillis()+(20*86400000)));
			giacca.setImporto(-54.90);
			giacca.setFamiglia(pet);
			giacca = movimentoRepository.save(giacca);
			
			Movimento cravatta = new Movimento();
			cravatta.setCategoria(abiti);
			cravatta.setData(new Date(System.currentTimeMillis()+(20*86400000)));
			cravatta.setImporto(- 50.40);
			cravatta.setFamiglia(pet);
			cravatta = movimentoRepository.save(cravatta);
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(SaveMyMoneyApplication.class, args);
	}

}
