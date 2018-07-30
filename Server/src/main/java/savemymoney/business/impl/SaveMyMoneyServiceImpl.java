package savemymoney.business.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import savemymoney.business.BusinessException;
import savemymoney.business.SaveMyMoneyService;
import savemymoney.business.impl.repositories.CategoriaRepository;
import savemymoney.business.impl.repositories.FamigliaRepository;
import savemymoney.business.impl.repositories.MovimentoRepository;
import savemymoney.business.impl.repositories.UtenteRepository;
import savemymoney.domain.Categoria;
import savemymoney.domain.Famiglia;
import savemymoney.domain.Movimento;
import savemymoney.domain.Utente;

@Service
@Transactional
public class SaveMyMoneyServiceImpl implements SaveMyMoneyService {

	@Autowired
	private UtenteRepository utenteRepository;

	@Autowired
	private MovimentoRepository movimentoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private FamigliaRepository famigliaRepository;

	@Override
	public Utente findUtenteByUsername(String username) throws BusinessException {
		return utenteRepository.findByUsername(username);
	}
	
	@Override
	public Movimento findMovimentoById(Long id) throws BusinessException{
		return movimentoRepository.findById(id).get();
	}
	
	@Override
	public List<Movimento> findAllMovimenti() throws BusinessException{
		return movimentoRepository.findAll();
	}

	@Override
	public void DeleteMovimentoById(Long id) throws BusinessException{
		movimentoRepository.deleteById(id);
	}
	
	@Override
	public void InsertMovimento(Movimento movimento) throws BusinessException{
		movimentoRepository.save(movimento);
	}
	
	@Override
	public List<Categoria> findAllCategorie() throws BusinessException{
		return categoriaRepository.findAll();
	}
	
	@Override
	public Categoria findCategoriaById(Long id) throws BusinessException{
		return categoriaRepository.findById(id).get();
	}
	
	@Override
	public void UpdateCategoria(Categoria categoria) throws BusinessException{
		categoriaRepository.save(categoria);
	}
	
	@Override
	public void DeleteCategoriaById(Long id) throws BusinessException{
		categoriaRepository.deleteById(id);
	}
	
	@Override
	public void InsertCategoria(Categoria categoria) throws BusinessException{
		categoriaRepository.save(categoria);
	}

	@Override
	public void UpdateMovimento(Movimento movimento) throws BusinessException {
		movimentoRepository.save(movimento);		
	}

	@Override
	public Famiglia findFamigliaById(Long id) throws BusinessException {
		return famigliaRepository.findById(id).get();
	}

	@Override
	public List<Famiglia> findAllFamiglie() throws BusinessException {
		return famigliaRepository.findAll();
	}

	@Override
	public void UpdateFamiglia(Famiglia famiglia) throws BusinessException {
		famigliaRepository.save(famiglia);
		
	}

	@Override
	public void DeleteFamigliaById(Long id) throws BusinessException {
		famigliaRepository.deleteById(id);
		
	}

	@Override
	public void InserFamiiglia(Famiglia famiglia) throws BusinessException {
		famigliaRepository.save(famiglia);	
	}

}
