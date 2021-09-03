package project.store.onlinestore.repositories;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import project.store.onlinestore.enums.ProductStatus;
import project.store.onlinestore.model.Product;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findProductByProductStatus(Pageable pageable, ProductStatus productStatus);


}
