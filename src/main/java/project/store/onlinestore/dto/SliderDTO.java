package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Base64;

@Data
@NoArgsConstructor
public class SliderDTO {
    private long id;
    private String image;

    public SliderDTO(long id, String image) {
        this.id = id;
        this.image = image;
    }

    public static SliderDTO of(long id, byte[] image) {
        return new SliderDTO(id, toBaseImage(image));
    }

    public static String toBaseImage(byte[] image) {
        String base64Image = Base64.getEncoder().encodeToString(image);
        return base64Image;
    }
}
