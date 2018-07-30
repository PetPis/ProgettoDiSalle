package savemymoney.business.impl.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import savemymoney.domain.Movimento;

public interface MovimentoRepository extends JpaRepository<Movimento, Long> {

}
