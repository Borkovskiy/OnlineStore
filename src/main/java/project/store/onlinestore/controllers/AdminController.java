package project.store.onlinestore.controllers;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.ProductInfoDTO;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class AdminController {

    @GetMapping("")
    public String admin() {
        return "Admin page";
    }
}
