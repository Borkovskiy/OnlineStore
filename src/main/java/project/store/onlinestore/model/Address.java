package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
public class Address {
    @Id
    @GeneratedValue
    private long id;

    @OneToOne
    @JoinColumn(name = "customUser_id")
    private CustomUser customUser;

    @OneToMany
    (cascade = CascadeType.ALL, mappedBy = "address")
    private List<UserOrder> userOrder;


    private String address;
    private String region;
    private String shippingCountry;
    private String postalCode;
    private String city;


}
