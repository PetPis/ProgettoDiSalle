package it.univaq.disim.mobile.myunivaq.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.univaq.disim.mobile.myunivaq.business.MyUnivaqService;
import it.univaq.disim.mobile.myunivaq.domain.Appello;

@RestController
@RequestMapping("/api/appelli")
public class RESTAppelliController {

	
	@Autowired
	private MyUnivaqService service;
	
	@GetMapping("/{idAppello}")
	public Appello findAppelloById(@PathVariable long idAppello) {
		return service.findAppelloById(idAppello);
	}

	@PostMapping
	public void createAppello(@RequestBody Appello appello) {
		service.createAppello(appello);
	}
	
	@PutMapping
	public void updateAppello(@RequestBody Appello appello) {
		service.updateAppello(appello);
	}
	
	@DeleteMapping("/{idAppello}")
	public void deleteAppello( @PathVariable long idAppello) {
		service.deleteAppello(idAppello);
	}
}
