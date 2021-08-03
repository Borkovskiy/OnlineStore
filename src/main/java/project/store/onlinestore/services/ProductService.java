package project.store.onlinestore.services;

import org.springframework.data.domain.Pageable;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.ProductToStartPageDTO;
import project.store.onlinestore.model.Product;

import java.util.List;

public interface ProductService {
    void addProduct(Product product);
    List<ProductToStartPageDTO> getAllProduct(Pageable pageable);
    ProductInfoDTO getProduct(long id);
    Long count();
}
