package savemymoney.business.impl.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import savemymoney.domain.Categoria;
import savemymoney.domain.Famiglia;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
	
}
