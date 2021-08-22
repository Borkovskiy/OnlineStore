package project.store.onlinestore.config;

import org.springframework.stereotype.Component;
import project.store.onlinestore.services.ProductService;
import project.store.onlinestore.services.FillingDB;


@Component
public class TestHelper {
    private final ProductService productService;

    public TestHelper(ProductService productService) {
        this.productService = productService;
    }

    public void init() {
        FillingDB fillingDB = new FillingDB(productService);
        fillingDB.saveToBase();

    }
}
