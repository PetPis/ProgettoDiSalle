package savemymoney.business.impl.repositories;

import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import savemymoney.domain.Categoria_has_Famiglia;


public interface CategoriaFamigliaRepository extends JpaRepository<Categoria_has_Famiglia, Long> {
	
}
