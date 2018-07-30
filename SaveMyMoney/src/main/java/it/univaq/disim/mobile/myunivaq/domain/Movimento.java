package it.univaq.disim.mobile.myunivaq.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Table(name = "movimento")
public class Movimento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_MOVIMENTO", nullable = false)
	private Long id;
	
	@Column(name = "DATA", nullable = false)
	private Date data;
	
	@Column(name = "IMPORTO", nullable = false)
	private float importo;
	
	@Column(name = "SEGNO", nullable = false)
	private boolean segno;
	
	@ManyToOne
	@JoinColumn(name = "UTENTE_IDUTENTE", nullable = false)
	private User utente;
	
	@ManyToOne
	@JoinColumn(name = "CATEGORIA_IDCATEGORIA", nullable = false)
	private Categoria categoria;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id=id;
	}
	
	public Date getData() {
		return data;
	}
	
	public void setData(Date data) {
		this.data=data;
	}
	public float getImporto() {
		return importo;
	}
	
	public void setImporto(float importo) {
		this.importo=importo;
	}
	
	public boolean getSegno() {
		return segno;
	}
	
	public void setSegno(boolean segno) {
		this.segno=segno;
	}
	
	public User getUtente() {
		return utente;
	}
	
	public void setUtente(User utente) {
		this.utente=utente;
	}
	
	public Categoria getCategoria() {
		return categoria;
	}
	
	public void setCategoria(Categoria categoria) {
		this.categoria=categoria;
	}
}
