package savemymoney.business.impl.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import savemymoney.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
