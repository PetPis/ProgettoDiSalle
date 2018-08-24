package savemymoney.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
	private double importo;
	
	@ManyToOne
	@JoinColumn(name = "FAMIGLiA_IDFAMIGLIA", nullable = false)
	private Famiglia famiglia;
	
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
	public double getImporto() {
		return importo;
	}
	
	public void setImporto(double d) {
		this.importo=d;
	}
	
	public Famiglia getFamiglia() {
		return famiglia;
	}
	
	public void setFamiglia(Famiglia famiglia) {
		this.famiglia=famiglia;
	}
	
	public Categoria getCategoria() {
		return categoria;
	}
	
	public void setCategoria(Categoria categoria) {
		this.categoria=categoria;
	}

}
