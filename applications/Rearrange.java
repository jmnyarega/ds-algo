/* Rearrange.java
 *
 */

import java.util.Arrays;

public class Rearrange {
  static public int[] rearrangePositiveNegative(int arr[]) {
    int j = 1;
    int i = 0;
    while(i < arr.length) {
      if((arr[i] > 0 && arr[j] < 0)) {
        i++;
        j++;
      } else if ((arr[i] < 0 && arr[j] < 0) || (arr[i] > 0 && arr[j] > 0)) {
        System.out.println(arr[i] + "  " + arr[j] + " " + Arrays.toString(arr) + "i" + i + "j" + j);
        j++;
        break;
      } else if (arr[i] < 0 && arr[j] > 0) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        System.out.println("i => "+ i+"j "+j);
      }
      j++;
      i++;
    }
    System.out.println(Arrays.toString(arr));
    return arr;
  }
  public static void main(String[] args) {
    int arr[] = {1, -1, -2, 5, 3, -4, -1, 4};
    System.out.println("Testing");
    Rearrange.rearrangePositiveNegative(arr);
  }
}
