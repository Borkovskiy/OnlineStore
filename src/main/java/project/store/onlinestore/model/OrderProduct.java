package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userOrder_id")
    private UserOrder userOrder;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private double price;
    private int quantity;
}
