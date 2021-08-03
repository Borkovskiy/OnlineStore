package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashMap;
@Entity
@Data
@NoArgsConstructor
public class ImageToSlider {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Lob
    private HashMap<Integer, byte[]> sliderImage;


}