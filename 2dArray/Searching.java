// Searching an element in a sorted 2d array
// We start from top right corner if the element is greater than the key we reduce the column and if it is lesser than the key we increment the row

public static void search(int[][] arr,int key, int row, int column){
    int n = 0;
    int m = column - 1;
    boolean flag = false;

    while(n < row && m > 0){
        if(key == arr[n][m]){
            System.out.println("Element Found");
        }else
            if(arr[n][m] > key)
                m--;
            else
                n++;
        if(!flag)
            System.out.println("Element not Found");
    }
}