package savemymoney.business.impl.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import savemymoney.domain.Utente;

public interface UtenteRepository extends JpaRepository<Utente, Long> {

	Utente findByUsername(String username);
	
}
