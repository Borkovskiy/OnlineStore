package project.store.onlinestore.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.dto.OrderForUserDTO;
import project.store.onlinestore.dto.OrderFromUserDTO;
import project.store.onlinestore.dto.OrderProductDTO;
import project.store.onlinestore.enums.OrderStatus;
import project.store.onlinestore.exception.ProductNotFoundException;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Entity
@Data
@NoArgsConstructor
public class UserOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contactEmail;

    @Column(updatable = false)
    private LocalDateTime localDateTime;


    @ManyToOne
    @JoinColumn(name = "customUser_id")
    private CustomUser customUser;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "userOrder")
    private Address address;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userOrder")
    private List<OrderProduct> products = new ArrayList<>();

    private OrderStatus orderStatus;

    public UserOrder(String contactEmail, LocalDateTime localDateTime, CustomUser customUser, Address address, OrderStatus orderStatus) {
        this.contactEmail = contactEmail;
        this.localDateTime = localDateTime;
        this.customUser = customUser;
        this.address = address;
        this.orderStatus = orderStatus;
    }

    public OrderForUserDTO toDTO() {
        List<OrderProductDTO> orderProductDTOS = new ArrayList<>();
        products.forEach((x) -> orderProductDTOS.add(x.toOrderProductDTO()));
        return OrderForUserDTO.of(localDateTime, customUser.getPhoneNumber(), address.getAddress(), address.getRegion(), address.getShippingCountry(), address.getPostalCode(), address.getCity(), orderProductDTOS, orderStatus);
    }
}
