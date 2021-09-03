package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class OrderFromUserDTO {
    Map<Long, Integer> products = new HashMap<>();

    private String firstName;
    private String lastName;
    private String address;
    private String region;
    private String email;
    private String shippingCountry;
    private String postalCode;
    private String city;

    public OrderFromUserDTO(Map<Long, Integer> products, String firstName, String lastName, String address, String region, String email, String shippingCountry, String postalCode, String city) {
        this.products = products;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.region = region;
        this.email = email;
        this.shippingCountry = shippingCountry;
        this.postalCode = postalCode;
        this.city = city;
    }
}