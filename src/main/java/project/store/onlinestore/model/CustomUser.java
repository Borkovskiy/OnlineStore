package project.store.onlinestore.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.enums.Gender;
import project.store.onlinestore.enums.UserRole;

import javax.persistence.*;


@Entity
@Data
@NoArgsConstructor
public class CustomUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "customUser")
    private Address address;
    private String name;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    private String email;
    private String phoneNumber;
    private String username;
    private String password;


}
