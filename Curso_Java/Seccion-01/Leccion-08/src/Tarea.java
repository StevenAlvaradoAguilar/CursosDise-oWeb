
import java.util.Scanner;

//Mi clase en Java

public class Tarea {

    public static void main(String args[]) {
        System.out.println("Proporciona el título:");
        Scanner consola = new Scanner(System.in);   
        var titulo = consola.nextLine();
        System.out.println("Proporciona el autor:");
        var autor = consola.nextLine();
        System.out.println(titulo + " fue escrito por " + autor);
    }
}
