package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.model.ProductImage;

import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;


@Data
@NoArgsConstructor
public class ProductInfoDTO {
    private long id;
    private String name;
    private double price;
    private String color;
    private String shortDescription;
    private String description;
    private List<String> productImage;
    private int count;

    public ProductInfoDTO(long id, String name, double price, String color, String shortDescription, String description, List<String> productImage, int count) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.shortDescription = shortDescription;
        this.description = description;
        this.productImage = productImage;
        this.count = count;
    }

    public static ProductInfoDTO of(long id, String name, Double price, String color, String shortDescription, String description, List<ProductImage> productImages) {
        List<String> base64Image = toBase64(productImages);
        return new ProductInfoDTO(id, name, price, color, shortDescription, description, base64Image, 1);
    }

    public static List<String> toBase64(List<ProductImage> productImages) {
        List<String> base64Image = new ArrayList<>();
        productImages.forEach((p) -> base64Image.add(Base64.getEncoder().encodeToString(p.getImage())));

        return base64Image;
    }
}
