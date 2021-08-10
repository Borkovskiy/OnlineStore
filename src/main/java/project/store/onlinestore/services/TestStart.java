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
        for (int i = 0; i < 9; i++) {
            Product product = new Product();
            HashMap<Integer, byte[]> productImage = new HashMap<>();
            productImage = getImage();
            product.setProductImage(productImage);
            product.setName("DOLCE & GABBANA");
            product.setColor("Yellow");
            product.setPrice(875.00);
            product.setShortDescription("Printed cotton-blend poplin bralette");
            product.setDescription("Dolce & Gabbana's printed cotton-blend poplin bralette depicts ceremonial standards held by jousting knights. It's cut for a close fit with boning down each side and traced with picot trims. Style yours with a white skirt to make the colors really pop.");
            productService.addProduct(product);
        }
        saveToBaseSlider();
    }



    private static HashMap<Integer, byte[]> getImage() {
        File folder = new File("product");
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

