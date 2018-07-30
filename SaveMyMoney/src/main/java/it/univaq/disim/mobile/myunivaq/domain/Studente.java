package it.univaq.disim.mobile.myunivaq.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@DiscriminatorValue("studente")
public class Studente extends Utente {

	@ManyToOne
    @JoinColumn(name = "ID_CORSO_DI_LAUREA", nullable = true)
	private CorsoDiLaurea corsoDiLaurea;

	public CorsoDiLaurea getCorsoDiLaurea() {
		return corsoDiLaurea;
	}

	public void setCorsoDiLaurea(CorsoDiLaurea corsoDiLaurea) {
		this.corsoDiLaurea = corsoDiLaurea;
	}
	
	
	
}
