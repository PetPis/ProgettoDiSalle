package savemymoney.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("capofamiglia")
public class CapoFamiglia extends Utente {
	
}
