import java.util.Arrays;
import java.util.Comparator;

public class ECommerceSearch {

    // Linear Search (by productName)
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search (by productName)
    public static Product binarySearch(Product[] sortedProducts, String targetName) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = sortedProducts[mid].productName.compareToIgnoreCase(targetName);

            if (cmp == 0) return sortedProducts[mid];
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Shoes", "Footwear"),
            new Product(102, "Laptop", "Electronics"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "T-Shirt", "Apparel"),
            new Product(105, "Watch", "Accessories")
        };

        // Linear Search
        System.out.println("Linear Search Result:");
        Product result1 = linearSearch(products, "Laptop");
        System.out.println(result1 != null ? result1 : "Product not found");

        // Binary Search requires sorted array
        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        System.out.println("\nBinary Search Result:");
        Product result2 = binarySearch(products, "Laptop");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
