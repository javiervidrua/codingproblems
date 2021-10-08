#include <iostream>
using namespace std; 

class Queue { 
	int size; 
	int* queue; 
	
	public:
	Queue() { 
		size = 0;
		queue = new int[100];
	}
	void add(int data) { 
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
	//your code goes here
	Queue operator+(Queue &queue2){
		if(this->size + queue2.size > 100){
			cout << "Error: the queues are too big" << endl;
			return *(Queue *)NULL;
		}

		Queue newQueue;
		// Initialize
		int i;
		for(i=0; i<this->size; i++){
			newQueue.queue[i] = this->queue[i];
			newQueue.size++;
		}
		// Add queue2 values
		for(int j = 0; j<queue2.size; j++){
			newQueue.queue[j+i] = queue2.queue[j];
			newQueue.size++;
		}

		return newQueue;
	}
	
}; 

int main() { 
	Queue q1; 
	q1.add(42); q1.add(2); q1.add(8);  q1.add(1);
	Queue q2;
	q2.add(3); q2.add(66); q2.add(128);  q2.add(5);
	Queue q3 = q1+q2;
	q3.print();

	return 0; 
} 
