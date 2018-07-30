package savemymoney.presentation;

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
import savemymoney.domain.Famiglia;

@RestController
@RequestMapping("/api/famiglia")
public class RESTFamigliaController {

	
	@Autowired
	private SaveMyMoneyService service;
	
	@GetMapping("/{idFamiglia}")
	public Famiglia findFamigliaById(@PathVariable long idFamiglia) {
		return service.findFamigliaById(idFamiglia);
	}

	@PostMapping
	public void insertFamiglia(@RequestBody Famiglia famiglia) {
		service.InserFamiiglia(famiglia);
	}
	
	@PutMapping
	public void updateFamiglia(@RequestBody Famiglia famiglia) {
		service.UpdateFamiglia(famiglia);;
	}
	
	@DeleteMapping("/{idFamiglia}")
	public void deleteFamiglia( @PathVariable long idFamiglia) {
		service.DeleteFamigliaById(idFamiglia);
	}
}
