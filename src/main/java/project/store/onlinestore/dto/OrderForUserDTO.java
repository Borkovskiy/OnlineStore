package project.store.onlinestore.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.enums.OrderStatus;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
public class OrderForUserDTO {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime localDateTime;
    private String phoneNumber;
    private String address;
    private String region;
    private String shippingCountry;
    private String postalCode;
    private String city;
    List<OrderProductDTO> orderProductDTOS;
    OrderStatus orderStatus;

    public OrderForUserDTO(LocalDateTime localDateTime, String phoneNumber, String address, String region, String shippingCountry, String postalCode, String city, List<OrderProductDTO> orderProductDTOS, OrderStatus orderStatus) {
        this.localDateTime = localDateTime;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.region = region;
        this.shippingCountry = shippingCountry;
        this.postalCode = postalCode;
        this.city = city;
        this.orderProductDTOS = orderProductDTOS;
        this.orderStatus = orderStatus;
    }

    public static OrderForUserDTO of(LocalDateTime localDateTime, String phoneNumber, String address, String region, String shippingCountry, String postalCode, String city, List<OrderProductDTO> orderProductDTOS, OrderStatus orderStatus) {
        return new OrderForUserDTO(localDateTime, phoneNumber, address, region, shippingCountry, postalCode, city, orderProductDTOS, orderStatus);
    }

    @Override
    public String toString() {
        return "OrderForUserDTO{" +
                "localDateTime=" + localDateTime +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", region='" + region + '\'' +
                ", shippingCountry='" + shippingCountry + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", city='" + city + '\'' +
                ", orderProductDTOS=" + orderProductDTOS +
                ", orderStatus=" + orderStatus +
                '}';
    }
}
