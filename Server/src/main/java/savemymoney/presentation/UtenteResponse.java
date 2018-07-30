package savemymoney.presentation;

import savemymoney.domain.CapoFamiglia;
import savemymoney.domain.Famiglia;
import savemymoney.domain.Utente;

public class UtenteResponse {

	private String username;
	private String nome;
	private String cognome;
	private String tipo;
	private Famiglia famiglia;
	
	public UtenteResponse() {
	}
	
	public UtenteResponse(Utente utente) {
		this.nome = utente.getNome();
		this.cognome = utente.getCognome();
		this.username = utente.getUsername();
		this.famiglia = utente.getFamiglia();
		if (utente instanceof CapoFamiglia) {
			this.tipo = "capoFamiglia";
		} else {
			this.tipo = "membro";
		}
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Famiglia getFamiglia() {
		return famiglia;
	}
	public void setFamiglia(Famiglia famiglia) {
		this.famiglia = famiglia;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

}
