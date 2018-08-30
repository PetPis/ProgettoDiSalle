package savemymoney.presentation;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import savemymoney.business.SaveMyMoneyService;
import savemymoney.common.Utility;
import savemymoney.domain.Categoria;
import savemymoney.domain.Utente;

@RestController
@RequestMapping("/api/categorie")
public class RESTCategoriaController {

	
	@Autowired
	private SaveMyMoneyService service;
	
	@GetMapping("/{idCategoria}")
	public Categoria findCategoriaById(@PathVariable long idCategoria) {
		return service.findCategoriaById(idCategoria);
	}
	
	/*@GetMapping("/famiglia")
	public Set<Categoria> findAllCatByFam(){
		Utente utente = Utility.getUtente();
		return service.findCategorieByFamiglia(utente.getFamiglia());
	}*/
	
	@GetMapping
	public List<Categoria> findAllCategorie(){
		return service.findAllCategorie();
	}

	@PostMapping
	public void insertCategoria(@RequestBody Categoria categoria) {
		service.InsertCategoria(categoria);
	}
	
	@PutMapping
	public void updateCategoria(@RequestBody Categoria categoria) {
		service.UpdateCategoria(categoria);;
	}
	
	@DeleteMapping("/{idCategoria}")
	public void deleteCategoria( @PathVariable long idCategoria) {
		service.DeleteCategoriaById(idCategoria);
	}
	
}
