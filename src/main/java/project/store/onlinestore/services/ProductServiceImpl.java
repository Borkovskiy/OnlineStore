package project.store.onlinestore.services;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.SliderDTO;
import project.store.onlinestore.enums.ProductStatus;
import project.store.onlinestore.exception.ProductNotFoundException;
import project.store.onlinestore.model.Product;
import project.store.onlinestore.model.Slider;
import project.store.onlinestore.repositories.ProductRepository;
import project.store.onlinestore.repositories.SliderRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final SliderRepository sliderRepository;

    public ProductServiceImpl(ProductRepository productRepository, SliderRepository sliderRepository) {
        this.productRepository = productRepository;
        this.sliderRepository = sliderRepository;
    }

    @Transactional
    @Override
    public void addProduct(Product product) {

        productRepository.save(product);
    }

    @Transactional(readOnly = true)
    @Override
    public List<ProductInfoDTO> getAllProduct(Pageable pageable) {
        List<ProductInfoDTO> result = new ArrayList<>();
        List<Product> products = productRepository.findProductByProductStatus(pageable, ProductStatus.ACTIVE);
        products.forEach((p) -> result.add(p.toProductInfoDTO()));
        return result;
    }

    @Transactional(readOnly = true)
    @Override
    public Long count() {
        return productRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public ProductInfoDTO getProduct(long id) throws ProductNotFoundException {
        Product product = productRepository.findById(id).orElseThrow(()->
                new ProductNotFoundException("Product doesnt exist "));
        return product.toProductInfoDTO();
    }

    @Override
    @Transactional(readOnly = true)
    public List<SliderDTO> getSlider() {
        List<SliderDTO> result = new ArrayList<>();
        List<Slider> sliders= sliderRepository.findAll();
        sliders.forEach((s)-> result.add(s.toSliderDTO()));
        return result;

    }
    @Transactional
    @Override
    public void addSlider(Slider slider) {

        sliderRepository.save(slider);
    }
}
