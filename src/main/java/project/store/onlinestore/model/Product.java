package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.ProductStartPageDTO;


import javax.persistence.*;
import java.util.HashMap;

@Entity
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private double price;
    private String color;
    private String shortDescription;
    private String description;
    @Lob
    private HashMap<Integer, byte[]> productImage;

    public Product(String name, double price, String color, String shortDescription, String description, HashMap<Integer, byte[]> productImage) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.shortDescription = shortDescription;
        this.description = description;
        this.productImage = productImage;
    }

    public ProductStartPageDTO toStartPageDTO() {
        return ProductStartPageDTO.of(id, name, price, shortDescription, productImage.get(1));
    }

    public ProductInfoDTO toProductInfoDTO() {
        return ProductInfoDTO.of(id, name, price, color, shortDescription, description, productImage);
    }
}
