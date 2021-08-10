package project.store.onlinestore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.store.onlinestore.model.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {


}
