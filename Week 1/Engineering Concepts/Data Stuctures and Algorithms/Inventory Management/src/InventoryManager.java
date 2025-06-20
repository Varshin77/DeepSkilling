import java.util.HashMap;
import java.util.Map;

public class InventoryManager {
    private Map<Integer, Product> inventory = new HashMap<>();

    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
    }

    public void updateProduct(int id, int newQty, double newPrice) {
        Product product = inventory.get(id);
        if (product != null) {
            product.setQuantity(newQty);
            product.setPrice(newPrice);
        } else {
            System.out.println("Product not found.");
        }
    }

    public void deleteProduct(int id) {
        if (inventory.remove(id) == null) {
            System.out.println("Product not found.");
        }
    }

    public void showInventory() {
        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }

    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager();

        manager.addProduct(new Product(101, "Laptop", 10, 75000));
        manager.addProduct(new Product(102, "Mouse", 50, 500));
        manager.addProduct(new Product(103, "Keyboard", 30, 1200));

        System.out.println("Inventory:");
        manager.showInventory();

        manager.updateProduct(102, 45, 480);
        manager.deleteProduct(103);

        System.out.println("\nAfter updates:");
        manager.showInventory();
    }
}
