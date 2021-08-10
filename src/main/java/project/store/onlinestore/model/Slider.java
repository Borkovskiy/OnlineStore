package project.store.onlinestore.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import project.store.onlinestore.dto.SliderDTO;

import javax.persistence.*;
import java.util.HashMap;

@Entity
@Data
@NoArgsConstructor

public class Slider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Lob
    private byte [] image;

    public Slider(long id, byte[] image) {
        this.id = id;
        this.image = image;
    }

    public SliderDTO toSliderDTO() {
        return SliderDTO.of(id, image);
    }
}