package project.store.onlinestore.services;



import project.store.onlinestore.model.Product;

import java.io.*;
import java.nio.file.Files;
import java.util.HashMap;

import static java.lang.Integer.parseInt;

public class TestStart {
    private final ProductService productService;

    public TestStart(ProductService productService) {
        this.productService = productService;
    }

    public void saveToBase(){
        for(int i=0;i<9;i++) {

        File folder = new File("product");

        HashMap<Integer,byte[]> productImage= new HashMap<>();
        Product product=new Product();
        for(File f:folder.listFiles()){
            int number= parseInt(f.getName());
            try {
                byte[] fByte=fileToByte(f);

            productImage.put(number,fByte);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        product.setProductImage(productImage);
        product.setName("DOLCE & GABBANA");
        product.setColor("Yellow");
        product.setPrice(875.00);
        product.setShortDescription("Printed cotton-blend poplin bralette");
        product.setDescription("Dolce & Gabbana's printed cotton-blend poplin bralette depicts ceremonial standards held by jousting knights. It's cut for a close fit with boning down each side and traced with picot trims. Style yours with a white skirt to make the colors really pop.");

               productService.addProduct(product);

           }
        }


public byte[] fileToByte(File file) throws IOException {
    byte[] bytes;

        bytes = Files.readAllBytes(file.toPath());


    return bytes;
}

}

