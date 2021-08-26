package project.store.onlinestore.repositories;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.store.onlinestore.model.Product;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(value ="SELECT u FROM Product u")
    List<Product> retriveAll(Pageable pageable);

}
