package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.enums.ProductStatus;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    @Column(length = 1000)
    private String description;

    private ProductStatus productStatus;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    private List<ProductImage> productImages=new ArrayList<>();


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    private List<OrderProduct> orderProducts= new ArrayList<>();



    public Product( String name, double price, String color, String shortDescription, String description, ProductStatus productStatus) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.shortDescription = shortDescription;
        this.description = description;
        this.productStatus= productStatus;
    }





    public ProductInfoDTO toProductInfoDTO() {
        return ProductInfoDTO.of(id, name, price, color, shortDescription, description, productImages);
    }

    public void addImage(byte[] image) {
        productImages.add(new ProductImage(this,image));

    }
}
