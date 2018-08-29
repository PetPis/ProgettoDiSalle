package savemymoney.domain;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="utente")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TIPO", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("user")
public class Utente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_UTENTE", nullable = false)
	private Long id;
	
	@Column(name = "NOME", nullable = false, length = 255)
	private String nome;
	
	@Column(name = "COGNOME", nullable = false, length = 255)
	private String cognome;
	
	@Column(name = "USERNAME", length = 16, updatable = false, unique = true)
	private String username;
	
	@JsonIgnore
	@Column(name = "PASSWORD", nullable = true, length = 255)
	private String password;
	
	@ManyToOne
	@JoinColumn(name = "FAMIGLIA_IDFAMIGLIA", nullable = false)
	private Famiglia famiglia;
	
	@ManyToMany
	@JoinTable(name="CATEGORIA_HAS_UTENTE",
	    joinColumns={@JoinColumn(name="UTENTE_IDUTENTE")},
	    inverseJoinColumns={@JoinColumn(name="CATEGORIA_IDCATEGORIA")})
	private Set<Categoria> categorieUtente = new HashSet<>();
	
	
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public Famiglia getFamiglia() {
		return famiglia;
	}

	public void setFamiglia(Famiglia famiglia) {
		this.famiglia = famiglia;
	}
	
	public Set<Categoria> getCategorieUtente() {
		return categorieUtente;
	}
	
	public void setCategorieUtente(Set<Categoria> categorieUtente) {
		this.categorieUtente = categorieUtente;
	}
}
