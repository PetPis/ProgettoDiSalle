package savemymoney.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


public enum TipoMovimento {
	ENTRATA,USCITA;
}
