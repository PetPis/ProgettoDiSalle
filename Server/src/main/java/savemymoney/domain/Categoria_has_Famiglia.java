package savemymoney.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CATEGORIA_HAS_FAMIGLIA")
public class Categoria_has_Famiglia {
	/*@Embeddable
	public static class Id implements Serializable{
		@Column(name="CATEGORIA_IDCATEGORIA")
		private Long Categoria_idCategoria;
		
		@Column(name="FAMIGLIA_IDFAMIGLIA")
		private Long Famiglia_idFamiglia;
		
		public Id() {}
		
		public Id(Long Categoria_idCategoria,Long Famiglia_idFamiglia) {
			this.Categoria_idCategoria=Categoria_idCategoria;
			this.Famiglia_idFamiglia=Famiglia_idFamiglia;
		}
		
		public boolean equals(Object o) {
			if (o!= null && o instanceof Id) {
				Id that = (Id) o;
				return this.Categoria_idCategoria.equals(that.Categoria_idCategoria)
						&& this.Famiglia_idFamiglia.equals(that.Famiglia_idFamiglia);
			}else {
				return false;
			}
		}
		
		public int HashCode() {
			return Categoria_idCategoria.hashCode() + Famiglia_idFamiglia.hashCode();
		}
	}	
	
	@EmbeddedId
	private Id id = new Id();*/
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_CATFAM", nullable = false)
	private Long id;
	
	@Column(name="Budget",length = 255)
	private float budget;
	
	@ManyToOne
	@JoinColumn(name="CATEGORIA_IDCATEGORIA")
	private Categoria categoria;
	
	@ManyToOne
	@JoinColumn(name="FAMIGLIA_IDFAMIGLIA")
	private Famiglia famiglia;
	
	public Categoria_has_Famiglia() {}
	
	public Categoria_has_Famiglia(float budget,Categoria categoria,Famiglia famiglia) {
		this.budget=budget;
		this.categoria=categoria;
		this.famiglia=famiglia;
	}
	
	public void setId(Long id) {
		this.id=id;
	}
	
	public Long getId() {
		return this.id;
	}
	
	public void setBudget (float budget) {
		this.budget=budget;
	}
	
	public float getBudget() {
		return this.budget;
	}
	
	public void setFamiglia(Famiglia famiglia) {
		this.famiglia= famiglia;
	}
	
	public Famiglia getFamiglia() {
		return this.famiglia;
	}
	
	public void setCategoria(Categoria categoria) {
		this.categoria= categoria;
	}
	
	public Categoria getCategoria() {
		return this.categoria;
	}
}
