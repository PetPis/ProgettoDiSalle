package savemymoney.common;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import savemymoney.common.spring.security.UserDetailsImpl;
import savemymoney.domain.Utente;

public class Utility {

	public static Utente getUtente() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication != null) {
			UserDetailsImpl userDetailsImpl = (UserDetailsImpl) authentication.getPrincipal();
			return userDetailsImpl.getUtente();

		} else {
			return null;
		}
		
	}
}
