#include<iostream>
using namespace std;

class matrix {
private:
	int a, b, c, d;
public:
	matrix() {
		a = 0,  b = 0,  c = 0,  d = 0;
	}
	matrix(int a, int b, int c, int d) {
		this->a = a;
		this->b = b;
		this->c = c;
		this->d = d;
		int A[2][2] = { {a,b},{c,d} };
	}
	matrix operator + (matrix other) {
		matrix newmatrix{
				a + other.a,b + other.b,c + other.c,d + other.d
		};
		return newmatrix;        
	}
	bool operator == (matrix other) {
		if (this->a == other.a ||
			this->b == other.b ||
			this->c == other.c ||
			this->d == other.d) return true;
		return false;
		}
	void show();
};
void matrix::show() {
	cout << "matrix = " << a <<" " << b << " " << c << " " << d;
}

int main() {
	matrix a(1, 2, 3, 4), b(2, 3, 4, 5), c;
	c = a + b;
	a =a + b;
	a.show();
	b.show();
	c.show();
	if (a == c)
		cout << "a and c are the same" << endl;
}