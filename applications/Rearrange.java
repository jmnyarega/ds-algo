/* HelloWorld.java
 */
import java.util.*;

public class Rearrange
{

  static public void rearrangePositiveNegative(int arr[]) {
    int j = 0;
    for (int i = 0; i < arr.length - 1; i++) {
      j = i + 1;
      if ((i % 2 == 0) && arr[i] < 0) {
       int temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
       i--;
       j--;
      } else if ((i % 2 == 1) && arr[i] >= 0) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    System.out.println(Arrays.toString(arr));
  }
  public static void main(String[] args) {
    int arr[] = {-1, 2, -3, 4, 5, 6, -7, 8, -9, 0, 1, 2};
    Rearrange.rearrangePositiveNegative(arr);
  }
}
