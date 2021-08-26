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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(nullable = false, unique = true)
    private String email;
    private String phoneNumber;
    private String password;
    private String name;
    private String lastName;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    @Enumerated(EnumType.STRING)
    private Provider provider;
    private String resetPasswordToken;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customUser")
    private List<UserOrder> UserOrders= new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "customUser")
    private Address address;

    public CustomUser(String email, String password, UserRole role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public CustomUser(String email, String name) {
        this.email = email;
        this.name = name;
    }
    public  UserInfoDTO toUserInfoDTO(){
        if(address==null)return UserInfoDTO.of(name,lastName,email);
        return UserInfoDTO.of(name,lastName,address.getAddress(),address.getRegion(),email,address.getShippingCountry(),address.getPostalCode(),address.getCity());
    }
}
