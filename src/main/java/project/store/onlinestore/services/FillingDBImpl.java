package project.store.onlinestore.services;


import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.store.onlinestore.enums.ProductStatus;
import project.store.onlinestore.enums.Provider;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.model.Product;
import project.store.onlinestore.model.Slider;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;

//Class for initialising DB with DEMO products and sliders
@Service
public class FillingDBImpl implements FillingDB {
    private final ProductService productService;
    private final UserService userService;


    private final static HashMap<Integer, Product> description = new HashMap<>();

    static {
        Product product1 = new Product("DOLCE & GABBANA", 645.00, "Yellow", "Printed cotton-blend poplin bralette", "Dolce & Gabbana's printed cotton-blend poplin bralette depicts ceremonial standards held by jousting knights. It's cut for a close fit with boning down each side and traced with picot trims. Style yours with a white skirt to make the colors really pop.", ProductStatus.ACTIVE);
        Product product2 = new Product("ZIMMERMANN", 1225.00, "Ivory", "Aliane cutout tie-front broderie anglaise cotton midi dress", "Zimmermann's 'Aliane' dress is perfect for a bohemian bride. It's made from airy broderie anglaise cotton and has voluminous blouson sleeves and cutout sides that show off a flash of skin. It's fully lined through the bust and skirt to keep you covered where you need it most.", ProductStatus.ACTIVE);
        Product product3 = new Product("DOLCE & GABBANA", 995.00, "Red", "Tiered printed cotton-poplin maxi skirt", "Dolce & Gabbana has answered this season's call for joyful dressing with a bold printed skirt. Made in Italy from cotton-poplin, it sits on the waist and gradually builds in volume with tiers to enhance the shape. The maxi-length hem invites you to add a dainty anklet.", ProductStatus.ACTIVE);
        Product product4 = new Product("JACQUEMUS", 225.00, "Beige", "Alzou cropped mohair-blend cardigan", "Jacquemus' 'Alzou' cardigan has a daring shrunken fit - it's one of the French designer's go-to silhouettes. With plenty of mohair in the blend, you can imagine how wonderfully soft and fluffy it feels.", ProductStatus.ACTIVE);
        Product product5 = new Product("ROKSANDA", 1350.00, "YELLOW", "Naomina pleated cotton-poplin midi dress", "What better way to inject a touch of joyful color into your wardrobe than with Roksanda's vibrant yellow 'Naomina' dress? It's cut from crisp cotton-poplin that's artfully pleated throughout and threaded with a contrasting belt to cinch the shape.", ProductStatus.ACTIVE);
        Product product6 = new Product("GUCCI", 1600.00, "White", "Belted organic cotton-twill jacket", "Gucci's belted safari jacket is tailored from organic cotton-twill that's grown without the use of pesticides and synthetic fertilizers. It's detailed with utilitarian pockets and the label's gold 'GG' buttons. If you're wearing jewelry with it, mix different metals for a modern look.", ProductStatus.ACTIVE);
        Product product7 = new Product("SEA", 465.00, "RED", "Ziggy striped crochet-knit sweater", "Sea's colorful 'Ziggy' sweater is modeled on one that was hand-crocheted by co-founder Monica Paolini's nanny - she personally taught the brand's team how to recreate it. It's spun with generous amounts of wool and cotton in a joyful rainbow palette. Wear yours with denim.", ProductStatus.ACTIVE);
        Product product8 = new Product("BALMAIN", 2190.00, "White", "Double-breasted frayed tweed blazer", "Our buyers highlight boyish blazers as a key investment for the season - you can wear them now and for years to come, too. Topping the wish list, Balmain's frayed version is tailored from soft white tweed and punctuated by signature gold buttons, which you could match your jewelry to.", ProductStatus.ACTIVE);
        Product product9 = new Product("GUCCI", 890.00, "White", "Button-embellished checked tweed mini skirt", "Recalling styles from the '60s, Gucci's retro mini skirt is made from tactile tweed in a structured silhouette. It's woven with navy and red checks and embellished with decorative medallion buttons at the waist. It'll look so chic styled with the matching jacket.", ProductStatus.ACTIVE);
        description.put(1, product1);
        description.put(2, product2);
        description.put(3, product3);
        description.put(4, product4);
        description.put(5, product5);
        description.put(6, product6);
        description.put(7, product7);
        description.put(8, product8);
        description.put(9, product9);
    }

    public FillingDBImpl(ProductService productService, UserService userService) {
        this.productService = productService;
        this.userService = userService;

    }


    @Override
    public void saveToBase() {
        saveToBaseUsers();
        saveToBaseProducts();
        saveToBaseSlider();

    }

    private void saveToBaseUsers() {
        CustomUser user = new CustomUser("admin@admin", ("admin"), UserRole.ADMIN);
        userService.addUser(user);
    }

    private void saveToBaseProducts() {
        for (int i = 1; i < 10; i++) {
            Product product = description.get(i);
            product=getImage(i,product);

            productService.addProduct(product);
        }
    }


    private Product getImage(int i,Product product) {
        File folder = new File("product" + i);
        List<File> f= Arrays.asList(folder.listFiles());
        for (int k =1;k<=f.size();k++) {
            try {
                byte[] fByte = fileToByte(f.get(k));
                product.getProductImages().get(i).setImage(fByte);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return product;
    }

    private byte[] fileToByte(File file) throws IOException {
        byte[] bytes;
        bytes = Files.readAllBytes(file.toPath());
        return bytes;
    }

    private void saveToBaseSlider() {
        File folder = new File("slider");
        for (File f : folder.listFiles()) {
            int number = parseInt(f.getName());
            System.out.println(number);
            try {
                byte[] fByte = fileToByte(f);
                Slider slider = new Slider(number, fByte);
                productService.addSlider(slider);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }


    }

}

