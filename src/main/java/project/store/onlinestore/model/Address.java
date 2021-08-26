package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


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

    private String firstName;
    private String lastName;
    private String address;
    private String Region;
    private String email;
    private String shippingCountry;
    private String postalCode;
    private String city;


}
