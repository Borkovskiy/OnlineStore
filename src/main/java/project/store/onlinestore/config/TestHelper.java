package project.store.onlinestore.config;

import org.springframework.stereotype.Component;
import project.store.onlinestore.services.ProductService;
import project.store.onlinestore.services.TestStart;


@Component
public class TestHelper {
    private final ProductService productService;

    public TestHelper(ProductService productService) {
        this.productService = productService;
    }

    public void init() {
        TestStart testStart = new TestStart(productService);
        testStart.saveToBase();

    }
}
