package it.univaq.disim.mobile.myunivaq.domain;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "appelli")
public class Appello {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_APPELLO", nullable = false)
	private Long id;
	
	@Column(name = "DATA_APPELLO", nullable = false)
	private Date dataAppello;
	
	@Column(name = "descrizione", nullable = false, length = 255)
	private String descrizione;
	
	@Enumerated(EnumType.STRING)
	private TipologiaEsame tipologiaEsame;
	

	@ManyToOne
    @JoinColumn(name = "ID_INSEGNAMENTO", nullable = false)
	private Insegnamento insegnamento;
	
	@ManyToMany
	@JoinTable(name="APPELLI_STUDENTI",
	    joinColumns={@JoinColumn(name="ID_APPELLO")},
	    inverseJoinColumns={@JoinColumn(name="ID_STUDENTE")})
	private Set<Studente> studentiIscritti = new HashSet<>();
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDataAppello() {
		return dataAppello;
	}
	public void setDataAppello(Date data) {
		this.dataAppello = data;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public TipologiaEsame getTipologiaEsame() {
		return tipologiaEsame;
	}
	public void setTipologiaEsame(TipologiaEsame tipologiaEsame) {
		this.tipologiaEsame = tipologiaEsame;
	}
	public Insegnamento getInsegnamento() {
		return insegnamento;
	}
	public void setInsegnamento(Insegnamento insegnamento) {
		this.insegnamento = insegnamento;
	}
	public Set<Studente> getStudentiIscritti() {
		return studentiIscritti;
	}
	public void setStudentiIscritti(Set<Studente> studentiIscritti) {
		this.studentiIscritti = studentiIscritti;
	}

	
}
