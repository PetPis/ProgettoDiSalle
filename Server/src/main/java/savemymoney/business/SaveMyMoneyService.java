package savemymoney.business;

import java.util.List;

import savemymoney.business.BusinessException;
import savemymoney.domain.Categoria;
import savemymoney.domain.Famiglia;
import savemymoney.domain.Movimento;
import savemymoney.domain.Utente;

public interface SaveMyMoneyService {

	Utente findUtenteByUsername(String username) throws BusinessException;
	
	List<Movimento> findAllMovimentiByFamiglia(Famiglia famiglia) throws BusinessException;
	
	Movimento findMovimentoById(Long id) throws BusinessException;
	
	void UpdateMovimento(Movimento movimento) throws BusinessException;
	
	void DeleteMovimentoById(Long id) throws BusinessException;
	
	void InsertMovimento(Movimento movimento) throws BusinessException;
	
	List<Categoria> findAllCategorie() throws BusinessException;

	Categoria findCategoriaById(Long id) throws BusinessException;
	
	void UpdateCategoria(Categoria categoria) throws BusinessException;
	
	void DeleteCategoriaById(Long id) throws BusinessException;
	
	void InsertCategoria(Categoria categoria) throws BusinessException;
	
	Famiglia findFamigliaById(Long id) throws BusinessException;
	
	List<Famiglia> findAllFamiglie() throws BusinessException;
	
	void UpdateFamiglia(Famiglia famiglia) throws BusinessException;
	
	void DeleteFamigliaById(Long id) throws BusinessException;
	
	void InserFamiiglia(Famiglia famiglia) throws BusinessException;
	
	Famiglia findFamigliaByUtente(Utente utente) throws BusinessException;

	Utente updateProfilo(Utente utente) throws BusinessException;
	
	void createMovimento(Movimento movimento) throws BusinessException;
	
	void deleteMovimento(Long id) throws BusinessException;
	
	void updateMovimento(Movimento movimento) throws BusinessException;
}
