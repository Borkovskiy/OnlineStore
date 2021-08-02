package project.store.onlinestore.controllers;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.PageCountDTO;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.ProductToStartPageDTO;
import project.store.onlinestore.services.ProductService;


import java.util.List;


@RestController
@RequestMapping("/store")
public class StoreController {
    private static final int PAGE_SIZE = 6;

    private final ProductService productServices;
    public StoreController(ProductService productServices) {
        this.productServices = productServices;
    }


    @GetMapping("products")
    public List<ProductToStartPageDTO> products(@RequestParam(required = false, defaultValue = "0")
                                              Integer page){

    return productServices.getAllProduct(PageRequest.of(page,PAGE_SIZE, Sort.Direction.ASC,
            "id"));
    }
    @GetMapping("count")
    public PageCountDTO count() {
        return PageCountDTO.of(productServices.count(), PAGE_SIZE);
    }
    @GetMapping("product/{id}")
    public ProductInfoDTO product(
            @PathVariable(value = "id") long productId){
        return productServices.getProduct(productId);
    }
}
