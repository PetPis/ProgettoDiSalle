package savemymoney;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import savemymoney.business.impl.repositories.CategoriaRepository;
import savemymoney.business.impl.repositories.FamigliaRepository;
import savemymoney.business.impl.repositories.MovimentoRepository;
import savemymoney.business.impl.repositories.UtenteRepository;
import savemymoney.domain.CapoFamiglia;
import savemymoney.domain.Categoria;
import savemymoney.domain.Famiglia;
import savemymoney.domain.Membro;
import savemymoney.domain.Movimento;


@SpringBootApplication
public class SaveMyMoneyApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Bean
	public CommandLineRunner loadData(UtenteRepository utenteRepository, FamigliaRepository famigliaRepository, CategoriaRepository categoriaRepository, MovimentoRepository movimentoRepository) {
		return (args) -> {
			Famiglia pis = new Famiglia();
			pis.setNome("pistilli");
			pis=famigliaRepository.save(pis);
			
			Famiglia pet = new Famiglia();
			pet.setNome("petrini");
			pet=famigliaRepository.save(pet);
			
			CapoFamiglia marco = new CapoFamiglia();
			marco.setUsername("Marco");
			marco.setPassword(passwordEncoder.encode("marco"));
			marco.setNome("Marco");
			marco.setCognome("Pistilli");
			marco.setFamiglia(pis);
			marco = utenteRepository.save(marco);
			
			CapoFamiglia davide = new CapoFamiglia();
			davide.setUsername("Davide");
			davide.setPassword(passwordEncoder.encode("davide"));
			davide.setNome("davide");
			davide.setCognome("Petrini");
			davide.setFamiglia(pet);
			davide = utenteRepository.save(davide);			

			Membro bimbo = new Membro();
			bimbo.setUsername("BimboPis");
			bimbo.setPassword(passwordEncoder.encode("bimbo"));
			bimbo.setNome("Mark");
			bimbo.setCognome("Pistilli");
			bimbo.setFamiglia(pis);
			bimbo = utenteRepository.save(bimbo);
			
			Membro bimba = new Membro();
			bimba.setUsername("BimbaPet");
			bimba.setPassword(passwordEncoder.encode("bimba"));
			bimba.setNome("Davida");
			bimba.setCognome("Petrini");
			bimba.setFamiglia(pet);
			bimba = utenteRepository.save(bimba);
			
			Categoria cibo= new Categoria();
			cibo.setNome("cibo");
			cibo.setSegno(false);
			cibo.setBudget(1000);
			cibo= categoriaRepository.save(cibo);
			
			Categoria stip= new Categoria();
			stip.setNome("stipendio");
			stip.setSegno(true);
			stip= categoriaRepository.save(stip);
			
			Movimento stipe = new Movimento();
			stipe.setCategoria(stip);
			stipe.setData(new Date(System.currentTimeMillis() + (20 * 86400000)));
			stipe.setImporto(2000.50);
			stipe.setUtente(davide);
			stipe.setSegno(true);
			stipe.setNome("Stipendio");
			stipe = movimentoRepository.save(stipe);
			
			Movimento food = new Movimento();
			food.setCategoria(cibo);
			food.setData(new Date(System.currentTimeMillis() + (20 * 86400000)));
			food.setImporto(20.50);
			food.setUtente(davide);
			food.setSegno(false);
			food.setNome("FastFood");
			food = movimentoRepository.save(food);
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(SaveMyMoneyApplication.class, args);
	}

}
