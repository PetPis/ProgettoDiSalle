package savemymoney.presentation;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.password.PasswordEncoder;

import savemymoney.business.SaveMyMoneyService;
import savemymoney.common.spring.security.JWTTokenUtil;
import savemymoney.common.spring.security.UserDetailsImpl;
import savemymoney.domain.Utente;

@RestController
@RequestMapping("/api")
public class RESTUtenteController {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Value("${jwt.header}")
	private String tokenHeader;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JWTTokenUtil jwtTokenUtil;
	
	@Autowired
	private SaveMyMoneyService savemymoney; 

	@PostMapping("/login")
	public UtenteResponse login(@RequestBody AuthenticationRequest authenticationRequest, HttpServletResponse response) throws AuthenticationException {
		// Effettuo l'autenticazione
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);

		// Genero Token e lo inserisco nell'header di risposta
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		String token = jwtTokenUtil.generateToken(userDetails);
		response.setHeader(tokenHeader, token);

		// Ritorno l'utente
		return new UtenteResponse(((UserDetailsImpl) userDetails).getUtente());		
	}
	@PostMapping("/utente/updateprofilo")
	public UtenteResponse updateProfilo(@RequestBody Utente utente) {
		Utente nuovoUtente = savemymoney.updateProfilo(utente);		
		return new UtenteResponse(nuovoUtente);
	}
	
	@PostMapping("/registrazione")
	public void insertUtente(@RequestBody UtenteRegistrazione utente) {
		Utente regUser = new Utente();
		regUser.setNome(utente.getNome());
		regUser.setCognome(utente.getCognome());
		regUser.setUsername(utente.getUsername());
		regUser.setFamiglia(utente.getFamiglia());
		regUser.setPassword(passwordEncoder.encode(utente.getPassword()));
		savemymoney.insertUtente(regUser);
	}
	
}
