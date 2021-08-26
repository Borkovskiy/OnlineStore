package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Lob
    private byte [] image;

    public ProductImage(Product product, byte[] image) {
        this.product = product;
        this.image = image;
    }
}
