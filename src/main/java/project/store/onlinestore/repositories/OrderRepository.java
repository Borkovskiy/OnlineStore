package project.store.onlinestore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.model.UserOrder;

import java.util.List;

public interface OrderRepository extends JpaRepository<UserOrder, Long> {
    List<UserOrder> findUserOrderByCustomUser(CustomUser customUser);
}
