package project.store.onlinestore.services;


import org.springframework.beans.factory.annotation.Autowired;
import project.store.onlinestore.model.Product;
import project.store.onlinestore.model.Slider;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashMap;

import static java.lang.Integer.parseInt;

public class TestStart {
        @Autowired
    private final ProductService productService;


    public TestStart(ProductService productService) {
        this.productService = productService;
    }

    public void saveToBase() {
        for (int i = 1; i < 10; i++) {
            Product product = new Product();
            HashMap<Integer, byte[]> productImage = new HashMap<>();
            productImage = getImage(i);
            product.setProductImage(productImage);
            product.setName("test"+i);
            product.setColor("test"+i);
            product.setPrice(875.00+i);
            product.setShortDescription("test"+i);
            product.setDescription("test"+i);
            productService.addProduct(product);
        }
        saveToBaseSlider();
    }



    private static HashMap<Integer, byte[]> getImage(int i) {
        File folder = new File("product"+i);
        HashMap<Integer, byte[]> productImage = new HashMap<>();
        for (File f : folder.listFiles()) {
            int number = parseInt(f.getName());
            try {
                byte[] fByte = fileToByte(f);
                productImage.put(number, fByte);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return productImage;
    }
    private static byte[] fileToByte(File file) throws IOException {
        byte[] bytes;
        bytes = Files.readAllBytes(file.toPath());
        return bytes;
    }
    private  void  saveToBaseSlider(){
        File folder = new File("slider");
        for (File f : folder.listFiles()) {
            int number = parseInt(f.getName());
            System.out.println(number);
            try {
                byte[] fByte = fileToByte(f);
                Slider slider= new Slider(number,fByte);
                productService.addSlider(slider);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }


    }

}

