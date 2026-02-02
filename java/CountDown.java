public class CountDown {
    public static void countDown(int num){
        if(num>0){
            System.out.println(num);
        }
        if(num==0){
            System.out.println(num + " Blast off!");
            return;
        }
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        countDown(num-1);
    }
    public static void main(String[] args){
        countDown(5);
    }
}
