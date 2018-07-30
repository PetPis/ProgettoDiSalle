package it.univaq.disim.mobile.myunivaq.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "appelli")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_APPELLO", nullable = false)
	private Long id;
	
	@Column(name = "SEGNO", nullable = false)
	private boolean segno;
	
	@Column(name = "NOME", nullable = false, length = 255)
	private String nome;
	
	@Column(name = "BUDGET", nullable = false, length = 255)
	private float budget;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id=id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome=nome;
	}
	
	public boolean getSegno() {
		return segno;
	}
	
	public void setNome(boolean segno) {
		this.segno =segno;
	}
	
	public float getBudget() {
		return budget;
	}
	
	public void setBudget(float budget){
		this.budget=budget;
	}
}
