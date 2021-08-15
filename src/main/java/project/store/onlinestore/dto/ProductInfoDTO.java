package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Base64;
import java.util.HashMap;


@Data
@NoArgsConstructor
public class ProductInfoDTO {
    private long id;
    private String name;
    private double price;
    private String color;
    private String shortDescription;
    private String description;
    private HashMap<Integer, String> productImage;
    private int count;

    public ProductInfoDTO(long id, String name, double price, String color, String shortDescription, String description, HashMap<Integer, String> productImage,int count) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.shortDescription = shortDescription;
        this.description = description;
        this.productImage = productImage;
        this.count=count;
    }

    public static ProductInfoDTO of(long id, String name, Double price, String color, String shortDescription, String description, HashMap<Integer, byte[]> productImage) {
        HashMap<Integer, String> base64Image = toBase64(productImage);
        return new ProductInfoDTO(id, name, price, color, shortDescription, description, base64Image,1);
    }

    public static HashMap<Integer, String> toBase64(HashMap<Integer, byte[]> productImage) {
        HashMap<Integer, String> base64Image = new HashMap<Integer, String>();
        for (int i = 1; i <= productImage.size(); i++) {
            String image = Base64.getEncoder().encodeToString(productImage.get(i));
            base64Image.put(i, image);
        }
        return base64Image;
    }
}
