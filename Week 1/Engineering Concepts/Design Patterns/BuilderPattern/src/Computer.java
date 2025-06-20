public class Computer {

    private String CPU;
    private String RAM;

    private String storage;
    private String GPU;


    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.GPU = builder.GPU;
    }

    public static class Builder {
        private String CPU;
        private String RAM;
        private String storage;
        private String GPU;

        public Builder(String CPU, String RAM) {
            this.CPU = CPU;
            this.RAM = RAM;
        }

        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder setGPU(String GPU) {
            this.GPU = GPU;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }

    @Override
    public String toString() {
        return "Computer Configuration:\n" +
               "CPU: " + CPU + "\n" +
               "RAM: " + RAM + "\n" +
               "Storage: " + (storage != null ? storage : "N/A") + "\n" +
               "GPU: " + (GPU != null ? GPU : "N/A");
    }
}
