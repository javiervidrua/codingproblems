#include <iostream>
using namespace std;

template <class T>
class Queue {
	protected:
	int size;
	T* queue;

	public:
	Queue() {
		size = 0;
		queue = new T[100];
	}
	void add(T data) { 
		queue[size] = data;
		size++;
	}
	void remove() { 
		if (size == 0) {
			cout << "Queue is empty"<<endl;
			return;
		}
		else {
			for (int i = 0; i < size - 1; i++) {
				queue[i] = queue[i + 1];
			}
			size--;
		}
	}
	void print() {
		if (size == 0) {
			cout << "Queue is empty"<<endl;
			return;
		}
		for (int i = 0; i < size; i++) {
			cout<<queue[i]<<" <- ";
		}
		cout << endl;
	}
	Queue operator+(Queue &queue2){
		if(this->size + queue2.size > 100){
			cout << "Error: the queues are too big" << endl;
			return *(Queue *)NULL;
		}

		Queue newQueue;
        for(int i=0;i<this->size;i++) {
            newQueue.add(this->queue[i]);
        }
        for(int i=0;i<queue2.size;i++) {
            newQueue.add(queue2.queue[i]);
        }
        return newQueue;
	}
};

class Queue2: public Queue{
	public:
	void print(){
		if (size == 0) { 
			cout << "Queue is empty"<<endl; 
			return; 
		}
		for (int i = 0; i < size; i++) { 
			cout<<queue[i]<<endl;
		} 
		cout << endl;
	}
};

int main() {
	Queue<int> q1;
	q1.add(42); q1.add(2); q1.add(8);  q1.add(1);
	q1.print();

	Queue<string> q2;
	q2.add("Dave"); q2.add("John"); q2.add("Amy");
	q2.print();

	return 0;
}
