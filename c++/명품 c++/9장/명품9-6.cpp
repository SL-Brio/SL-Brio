#include<iostream>
using namespace std;

class AbstrackStack {
public:
    virtual bool push(int n) = 0; // ���ÿ� n�� Ǫ���Ѵ�. ������ full�̸� false ���� 
    virtual bool pop(int& n) = 0; // ���ÿ��� ���� ������ n�� �����ϰ� ������ empty�̸� false ���� 

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
        cout << "1: push\t\t2: pop\t\t3: show_size\t\t4: exit\n�����ϼ���>> ";
        cin >> c;
        if (c == 1) {
            cout << "push �� ������ �Է��ϼ���>>";
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
