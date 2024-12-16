#include <bits/stdc++.h>
using namespace std;

bool check(int n) {
    if (n<=1) {
        return false;
    }
    for (int i=2;i*i<=n;i++) {
        if (n%i==0) {
            return false; 
        }
    }
    return true;
}

void solve(vector<int> &a, int n) {
    vector<int> pr;
    vector<int> npr;

    for (int i=0;i<n;i++) {
        if (check(a[i])) {
            pr.push_back(a[i]);
        } else {
            npr.push_back(a[i]);
        }
    }

    int maxi=*max_element(pr.begin(), pr.end());
    int smalli=*min_element(pr.begin(), pr.end());
    
    vector<int> total;
    for (auto i:pr) {
        if (i!=maxi && i!=smalli) {
            total.push_back(i);
        }
    }
    for (auto i:npr) {
        total.push_back(i);
    }
    sort(total.begin(),total.end(),greater<int>());

    a.clear();
    a.push_back(maxi); 
    a.insert(a.end(),total.begin(),total.end());
    a.push_back(smalli);
}

int main() {
    int n;
    cin>>n;
    vector<int> a(n);
    for (int i=0;i<n;i++) {
        cin>>a[i];
    }
    solve(a,n);
    for (int i=0;i<n;i++) {
        cout<<a[i]<<" ";
    }
    cout<<endl;
    return 0;
}
