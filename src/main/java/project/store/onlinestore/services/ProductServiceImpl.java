package project.store.onlinestore.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.ProductStartPageDTO;
import project.store.onlinestore.dto.SliderDTO;
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

    @Transactional
    @Override
    public List<ProductStartPageDTO> getAllProduct(Pageable pageable) {
        List<ProductStartPageDTO> result = new ArrayList<>();
        Page<Product> products = productRepository.findAll(pageable);
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
        Optional<Product> product = productRepository.findById(id);
        return product.get().toProductInfoDTO();
    }

    @Override
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
