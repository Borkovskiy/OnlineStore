package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Base64;

@Data
@NoArgsConstructor
public class ProductToStartPageDTO {
    private long id;
    private String name;
    private double price;
    private String shortDescription;
    private String base64Image;

    public ProductToStartPageDTO(long id, String name, double price, String shortDescription, String base64Image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.shortDescription = shortDescription;
        this.base64Image = base64Image;
    }

    public static ProductToStartPageDTO of(long id, String name, double price, String shortDescription, byte[]image){
        return new ProductToStartPageDTO(id,name,price,shortDescription,toBaseImage(image));
    }
    public static String toBaseImage(byte [] image){
        String base64Image = Base64.getEncoder().encodeToString(image);
        return base64Image;
    }
}
