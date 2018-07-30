package savemymoney.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("membro")
public class Membro extends Utente {
	
}
