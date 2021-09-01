package project.store.onlinestore.services;

import org.springframework.data.domain.Pageable;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.SliderDTO;
import project.store.onlinestore.exception.ProductNotFoundException;
import project.store.onlinestore.model.Product;
import project.store.onlinestore.model.Slider;

import java.util.List;

public interface ProductService {
    void addProduct(Product product);
    void addSlider(Slider slider);
    List<ProductInfoDTO> getAllProduct(Pageable pageable);
    ProductInfoDTO getProduct(long id) throws ProductNotFoundException;
    Long count();
    List<SliderDTO> getSlider();

}
