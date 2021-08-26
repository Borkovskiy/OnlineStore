package project.store.onlinestore.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class UserOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime creationDate;

    @ManyToOne
    @JoinColumn(name = "customUser_id")
    private CustomUser customUser;

    @ManyToOne
    @JoinColumn(name =  "userOrder")
    private Address address;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userOrder")
    private List<OrderProduct> products= new ArrayList<>();






}
