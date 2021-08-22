package project.store.onlinestore.controllers;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.PageCountDTO;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.ProductStartPageDTO;
import project.store.onlinestore.dto.SliderDTO;
import project.store.onlinestore.services.ProductService;

import java.util.List;


@RestController
@RequestMapping("/store")
@CrossOrigin
public class StoreController {
    private static final int PAGE_SIZE = 6;

    private final ProductService productServices;

    public StoreController(ProductService productServices) {
        this.productServices = productServices;
    }


    @GetMapping("products")
    public List<ProductInfoDTO> getProducts(@RequestParam(required = false, defaultValue = "1")
                                                        Integer page) {
        // Front-end problem forced  do start count from 1 and standard spring settings(spring.data.web.pageable.one-indexed-parameters) dont work
        if(page == null){
            page = 0;
        }
        if(page >= 1){

            page--;
        }
        return productServices.getAllProduct(PageRequest.of(page, PAGE_SIZE, Sort.Direction.ASC,
                "id"));
    }

    @GetMapping("count")
    public PageCountDTO count() {
        return PageCountDTO.of(productServices.count(), PAGE_SIZE);
    }

    @GetMapping("products/{id}")
    public ProductInfoDTO getProduct(
            @PathVariable(value = "id") long productId) {
        return productServices.getProduct(productId);
    }
    @GetMapping("slider")
    public List<SliderDTO> slider() {
        List<SliderDTO> slider= productServices.getSlider();
        for (SliderDTO s: slider) {
            System.out.println(s.getId());
        }
        return productServices.getSlider();
    }
}
