package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderProductDTO {
    private long productId;
    private double price;
    private int quantity;

    public OrderProductDTO(long productId, double price, int quantity) {
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;
    }

    public static OrderProductDTO of(long productId, double price, int quantity) {
        return new OrderProductDTO(productId, price, quantity);
    }
}

