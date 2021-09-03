package project.store.onlinestore.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EmailDTO {
    private String email;
    public EmailDTO(String email) {
        this.email = email;
    }
}
