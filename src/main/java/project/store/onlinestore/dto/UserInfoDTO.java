package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserInfoDTO {

    private String name;
    private String lastName;
    private String address;
    private String region;
    private String email;
    private String shippingCountry;
    private String postalCode;
    private String city;

    public UserInfoDTO(String name, String lastName, String address, String region, String email, String shippingCountry, String postalCode, String city) {
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.region = region;
        this.email = email;
        this.shippingCountry = shippingCountry;
        this.postalCode = postalCode;
        this.city = city;
    }

    public UserInfoDTO(String name, String lastName, String email) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }

    public static UserInfoDTO of(String name, String lastName, String address, String region, String email, String shippingCountry, String postalCode, String city) {
        return new UserInfoDTO(name, lastName, address,  region, email, shippingCountry, postalCode, city);
    }

    public static UserInfoDTO of(String name, String lastName, String email) {
        return  new UserInfoDTO (name,lastName,email);
    }
}
