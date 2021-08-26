package project.store.onlinestore.dto;

import lombok.Data;


@Data

public class PageCountDTO {
    private final long count;
    private final int pageSize;

    public PageCountDTO(long count, int pageSize) {
        this.count = count;
        this.pageSize = pageSize;
    }

    public static PageCountDTO of(long count, int pageSize) {
        return new PageCountDTO(count, pageSize);
    }
}
