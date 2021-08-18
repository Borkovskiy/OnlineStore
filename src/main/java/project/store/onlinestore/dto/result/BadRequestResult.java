package project.store.onlinestore.dto.result;

public class BadRequestResult extends ResultDTO {
    public BadRequestResult() {
        super("user already exist");
    }
    public BadRequestResult(String result){super(result);}
}