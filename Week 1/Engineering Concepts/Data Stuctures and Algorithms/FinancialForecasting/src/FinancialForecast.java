public class FinancialForecast {


    public static double forecastValue(double currValue, double gRate, int yrs) {
        if (yrs == 0) {
            return currValue;
        } else {
            return forecastValue(currValue * (1 + gRate), gRate, yrs - 1);
        }
    }

    public static double optimizedForecast(double currentValue, double growthRate, int years) {
        return currentValue * Math.pow(1 + growthRate, years);
    }

    public static void main(String[] args) {
        double initialValue = 10000.0;
        double growthRate = 0.05; 
        int years = 5;

        double forecastedValue = forecastValue(initialValue, growthRate, years);
        double optimizedValue = optimizedForecast(initialValue, growthRate, years);

        System.out.printf("Recursive Forecast for %d years: ₹%.2f\n", years, forecastedValue);
        System.out.printf("Optimized Forecast using Math.pow: ₹%.2f\n", optimizedValue);
    }
}
