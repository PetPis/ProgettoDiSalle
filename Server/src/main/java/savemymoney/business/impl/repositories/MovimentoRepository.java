package savemymoney.business.impl.repositories;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import savemymoney.domain.Movimento;

public interface MovimentoRepository extends JpaRepository<Movimento, Long> {
	
	List<Movimento> findAllMovimentiByFamigliaId(Long idFamiglia, Sort sort);
}
