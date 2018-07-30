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
import savemymoney.domain.Movimento;

@RestController
@RequestMapping("/api/movimenti")
public class RESTMovimentoController {

	
	@Autowired
	private SaveMyMoneyService service;
	
	@GetMapping("/{idMovimento}")
	public Movimento findMovimentoById(@PathVariable long idMovimento) {
		return service.findMovimentoById(idMovimento);
	}

	@PostMapping
	public void insertMovimento(@RequestBody Movimento movimento) {
		service.InsertMovimento(movimento);
	}
	
	@PutMapping
	public void updateMovimento(@RequestBody Movimento movimento) {
		service.UpdateMovimento(movimento);
	}
	
	@DeleteMapping("/{idMovimento}")
	public void deleteMovimento( @PathVariable long idMovimento) {
		service.DeleteMovimentoById(idMovimento);;
	}
}
