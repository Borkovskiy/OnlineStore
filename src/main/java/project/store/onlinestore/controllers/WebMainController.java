package project.store.onlinestore.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebMainController {
    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }
}
