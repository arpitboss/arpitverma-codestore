#include <iostream>
using namespace std;

void pat(int n) {
    
    // for the upward triangle
    
    for (int i=1;i<=n;i++) {
        for (int j=1;j<=n-i;j++) {
            cout<<" ";
        }
        for (int j=1;j<=2*i-1;j++) {
            cout<<"*";
        }
        cout<<endl;
    }
    
    // for the downward triangle

    for (int i=n-1;i>=1;i--) {
        for (int j=0;j<n-i;j++) {
            cout<<" ";
        }
        for (int j=1;j<=(2*i-1);j++) {
            cout<<"*";
        }
        cout<<endl;
    }
}

int main() {
    int n;
    cout<<"how many rows(upward) you want ? ";
    cin>>n;
    pat(n);
    return 0;
}
