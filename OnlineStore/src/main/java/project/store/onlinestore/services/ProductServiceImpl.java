package project.store.onlinestore.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.ProductToStartPageDTO;
import project.store.onlinestore.model.Product;
import project.store.onlinestore.repositories.ProductRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    @Transactional
    @Override
    public void addProduct(Product product) {

        productRepository.save(product);
    }
    @Transactional
    @Override
    public List<ProductToStartPageDTO> getAllProduct(Pageable pageable) {
        List<ProductToStartPageDTO> result= new ArrayList<>();
        Page<Product> products= productRepository.findAll(pageable);
        products.forEach((p) -> result.add(p.toStartPageDTO()));
        return result;
    }
    @Transactional(readOnly = true)
    @Override
    public Long count() {
        return productRepository.count();
    }

    @Override
    public ProductInfoDTO getProduct(long id) {
        Optional<Product> product=productRepository.findById(id);
        return product.get().toProductInfoDTO();
    }
}
