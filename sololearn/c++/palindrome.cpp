#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    // Get the number of digits of x
    int z=x, counter=0, counter2=0;
    while(true){
        if(z<10)
            break;
        else{
            z=z/10;
            counter++;
        }
    }

    // Create an array with the digits
    z=x;
    auto arr = new int[counter+1];
    while(z != 0){
        int current = z % 10; // Get rightmost digit
        z /= 10;
        arr[counter-counter2]=current;
        counter2++;
    }

    // Check if it's a palindrome
    for(int i=0, j=counter; j>counter/2; i++,j--){
        if(arr[i] != arr[j])
            return false;
    }

    return true;
}

int main() {
    int n;
    cin >>n;

    if(isPalindrome(n)) {
        cout <<n<<" is a palindrome";
    }
    else {
        cout << n<<" is NOT a palindrome";
    }
    return 0;
}
