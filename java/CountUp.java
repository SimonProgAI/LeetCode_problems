
public class CountUp {

    public static void countUp(int currentCount, int target) {
        if (currentCount < target) {
            System.out.println(currentCount);
        } else if (currentCount == target) {
            System.out.println(currentCount + " Done!");
            return;
        } else {
            System.out.println("currentCount must be smaller or equal to target.");
            return;
        }
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        countUp(currentCount + 1, target);
    }

    public static void main(String[] args) {
        countUp(6, 5);
    }
}
