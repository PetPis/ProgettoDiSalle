package savemymoney.presentation;


import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import savemymoney.business.SaveMyMoneyService;
import savemymoney.common.Utility;
import savemymoney.domain.Categoria;
import savemymoney.domain.Categoria_has_Famiglia;
import savemymoney.domain.Famiglia;
import savemymoney.domain.Utente;



@RestController
@RequestMapping("/api/famCat")
public class RESTCatFamController {

	
	@Autowired
	private SaveMyMoneyService service;
	
	@GetMapping
	public List<Categoria> list(){
		Utente utente = Utility.getUtente();
		return service.findCatFamByFamiglia(utente.getFamiglia());
	}
}
