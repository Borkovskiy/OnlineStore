package project.store.onlinestore.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.enums.Gender;
import project.store.onlinestore.enums.Provider;
import project.store.onlinestore.enums.UserRole;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
public class CustomUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String email;
    private String phoneNumber;
    private String password;
    private String firstName;
    private String lastName;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    @Enumerated(EnumType.STRING)
    private Provider provider;
    private String resetPasswordToken;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customUser")
    private List<UserOrder> userOrders = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "customUser")
    private Address address;

    public CustomUser(String email, String password, UserRole role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public CustomUser(String email, String name) {
        this.email = email;
        this.firstName = name;
    }

    public UserInfoDTO toUserInfoDTO() {
        if (address == null) return UserInfoDTO.of(firstName, lastName, email);
        return UserInfoDTO.of(firstName, lastName, address.getAddress(), address.getRegion(), email, address.getShippingCountry(), address.getPostalCode(), address.getCity());
    }

    public void addAddress(Address address) {
        this.address = address;
        address.setCustomUser(this);
    }

    public void addUserOrder(UserOrder userOrder) {
        this.userOrders.add(userOrder);
    }
}
