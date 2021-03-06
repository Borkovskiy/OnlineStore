package project.store.onlinestore.dto.result;

public abstract class ResultDTO {
    protected String description = "OK";

    public ResultDTO() {
    }

    public ResultDTO(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

