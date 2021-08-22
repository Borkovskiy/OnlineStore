package project.store.onlinestore.dto.result;

public class BadRequestResult extends ResultDTO {
    public BadRequestResult() {
        super("JSON deserialization failed");
    }
    public BadRequestResult(String result){super(result);}
}