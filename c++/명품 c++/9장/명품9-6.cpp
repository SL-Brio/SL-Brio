#include<iostream>
using namespace std;

class AbstrackStack {
public:
    virtual bool push(int n) = 0; // 스택에 n을 푸시한다. 스택이 full이면 false 리턴 
    virtual bool pop(int& n) = 0; // 스택에서 팝한 정수를 n에 저장하고 스택이 empty이면 false 리턴 

    virtual int size() = 0;
};

class IntStack : public AbstrackStack {
    int s, full, top;
    int* int_stack;
public:
    IntStack(int s = 3) {

        int_stack = new int[s];
        full = s;
        top = -1;
    }
    ~IntStack() { delete[] int_stack; }
    virtual bool push(int n) {
        if (top == full) return false;
        ++top;
        int_stack[top] = n;
        return true;
    }
    virtual bool pop(int& n) {
        if (top == -1) return false;
        n = int_stack[top];
        top--;
        return true;
    }
    virtual int size() {
        return top + 1;
    }
};

int main() {
    int c, pop;
    bool b;

    IntStack intstack(5);

    while (true) {
        cout << "1: push\t\t2: pop\t\t3: show_size\t\t4: exit\n선택하세요>> ";
        cin >> c;
        if (c == 1) {
            cout << "push 할 정수를 입력하세요>>";
            cin >> c;
            b = intstack.push(c);
            if (!b)
                cout << "stack is full...\n";
            else
                cout << "success!\n";
        }
        else if (c == 2) {
            b = intstack.pop(pop);
            if (!b)
                cout << "stack is empty...\n";
            else
                cout << "pop : " << pop << endl;
        }
        else if (c == 3)
            cout << "size : " << intstack.size() << endl;
        else
            return 0;
        cout << endl;
    }
}
