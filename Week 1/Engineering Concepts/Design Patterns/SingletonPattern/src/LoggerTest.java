public class LoggerTest {
    public static void main(String[] args) {
        // Get Logger instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First log message");
        logger2.log("Second log message");

        // Test if both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same (singleton works)");
        } else {
            System.out.println("Different logger instances (singleton failed)");
        }
    }
}
