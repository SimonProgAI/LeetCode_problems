
import java.util.Scanner;

public class ChoiceChallenge {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        /* Number monsterHP = 20;
        Number playerHP = 30;
        Number playerAP = 5;
        Number monsterAP = 3; */
        String contextMsg = "A monster attacks!";
        String selectActionMsg = "Choose your action: attack / defend";
        String errorMsg = "You failed to spell the word already written for you. Don't give up!";
        String attackCmd = "attack";
        String defendCmd = "defend";

        System.out.println(contextMsg);
        System.out.println(selectActionMsg);
        String playerInput = scanner.nextLine();

        while (!playerInput.equalsIgnoreCase(attackCmd) && !playerInput.equalsIgnoreCase(defendCmd)) {
            System.out.println(errorMsg);
            System.out.println(selectActionMsg);
            playerInput = scanner.nextLine();
        }
        while (playerInput.equalsIgnoreCase(attackCmd)) {
            System.out.println(selectActionMsg);
            playerInput = scanner.nextLine();
            System.out.println("You selected " + playerInput + ".");
        } 
        while (playerInput.equalsIgnoreCase(defendCmd)) {
            System.out.println(selectActionMsg);
            System.out.println("You selected " + playerInput + ".");
            System.out.println(selectActionMsg);
        }
    }
}


