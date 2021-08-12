package project.store.onlinestore.model;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.enums.AuthProvider;
import project.store.onlinestore.enums.Gender;
import project.store.onlinestore.enums.UserRole;


import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class CustomUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "customUser")
    private Address address;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String phoneNumber;
    private String username;
    private String password;



}
