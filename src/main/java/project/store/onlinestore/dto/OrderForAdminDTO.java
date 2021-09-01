package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class OrderForAdminDTO {
    Map<Long,Integer> products= new HashMap<>();

    private String firstName;
    private String lastName;
    private String address;
    private String Region;
    private String email;
    private String shippingCountry;
    private String postalCode;
    private String city;

    public OrderForAdminDTO(Map<Long, Integer> products, String firstName, String lastName, String address, String region, String email, String shippingCountry, String postalCode, String city) {
        this.products = products;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        Region = region;
        this.email = email;
        this.shippingCountry = shippingCountry;
        this.postalCode = postalCode;
        this.city = city;
    }
}