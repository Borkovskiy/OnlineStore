package project.store.onlinestore.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.enums.Gender;
import project.store.onlinestore.enums.Provider;
import project.store.onlinestore.enums.UserRole;

import javax.persistence.*;


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
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "customUser")
    private Address address;
    private String name;
    private String lastName;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    @Enumerated(EnumType.STRING)
    private Provider provider;

    public CustomUser(String email, String password, UserRole role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
