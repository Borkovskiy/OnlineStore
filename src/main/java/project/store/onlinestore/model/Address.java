package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    @JoinColumn(name = "customUser_id")
    private CustomUser customUser;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "address")
    private List<UserOrder> userOrder = new ArrayList<>();


    private String address;
    private String region;
    private String shippingCountry;
    private String postalCode;
    private String city;


    public void addUserOrder(UserOrder userOrder) {
        this.userOrder.add(userOrder);
    }
}
