package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.dto.OrderProductDTO;

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


    public OrderProduct(UserOrder userOrder, Product product, double price, int quantity) {
        this.userOrder = userOrder;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
    }


    public OrderProductDTO toOrderProductDTO() {
        return OrderProductDTO.of(product.getId(), price, quantity);
    }
}
