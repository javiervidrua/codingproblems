#include <iostream>

using namespace std;

class TheClass{
    public:
        // C++ feature
        // Constructor
        TheClass(){}
        // C++ feature
        // Constructor overloading
        TheClass(int value)
        // C++ feature
        // Member initialization list (: operator)
        // Good practice instead of assigning the values in the body of the constructor, as this works for const variables too
        : value(value)
        {
        }
        // C++ feature
        // Destructor
        ~TheClass(){
            this->value = 0;
        }

        // C++ feature
        // virtual functions (allows polymorphism to use pointers to the base class to call the derived classes' functions)
        // The derived classes will override the virtual function and have a separate implementation
        // A class is polymorphic if it has a virtual function
        virtual void getValue(){
            return value;
        }

        // C++ feature
        // Pure virtual functions
        // If the function is not defined in the derived class, the file does not compile
        // The classes that have pure virtual functions are called ABSTRACT CLASSES, and you cannot create an object of them
        virtual void pureVirtualFunction() = 0;

        // C++ feature
        // operator overloading with the operator keyword
        // This function will get called when doing + operations on instances of the class TheClass
        TheClass operator+(TheClass &theclass){
            TheClass result;
            // C++ feature
            // this points to itself
            result.value = this->value + theclass.value;
            // result.value = value + theclass.value; // This is the same but personally I think is less clear
            return result;
        }
    private:
        int value;

        // C++ feature
        // friend non-member functions can access public and private variables of the class
        friend void externalFunction(TheClass &theclass);
};

void externalFunction(TheClass &theclass){
    // C++ feature
    // Automatic indirection: you do class.variable instead of (*class).variable or class->variable
    cout << theclass.value << endl;
}

// C++ feature
// Inheritance
class TheClassTheSecond : public TheClass{}
class TheClassTheSecond2 : protected TheClass{}
class TheClassTheSecond3 : protected TheClass{}

// C++ feature
// Function Templates
// They are used to write type-independent code
// They are written once, and can work with many different types
template <class NewType> NewType exampleFunction(NewType a, NewType b){
    return a+b;
}

// C++ feature
// Function templates with various types
// T is short for Type, and is what is generally used, but you can use whatever you want
template <class T, class U> T smaller(T a, U b) {
  return (a < b ? a : b);
}

// C++ feature
// Class templates
template <class T> class MyClass{
    public:
    T some_function();
};
// And to define the function outside the class definition
template <class T>
void MyClass<T>::some_function(){
    cout << "Nice" << endl;
}
// And to create an object, set the type of the template
MyClass <int> myClass;

// C++ feature
// Template specialization
template <> class MyClass<char>{
    public:
    char someFunction(){
        return 'c';
    }
}

// C++ feature
// Exceptions
try{
    throw "Custom exception";
}
catch(string s){
    cout << s << endl;
}
// C++ feature
// Catch all exceptions
catch(...)


// Working with files
#include <iostream>
#include <fstream>
// fstream defines:
// ofstream: write to file
// ifstream: read from file
// fstream: general, can create, write and read to files
ofstream File1;
File1.open("test.txt");
File1 << "More info \n";
File1.close();

// C++ feature
// file modes:
// ios::app append at the end
// ios::ate go to end of file on opening
// ios::binary binary mode
// ios::in read only
// ios::out write only
// ios::trunc delete the contents of the file if it exists
ofstream File2;
File2.open("file.txt", ios::out | ios::trunc);

// Read contents of a file
ofstream MyFile1("test.txt");
    
MyFile1 << "This is awesome! \n";
MyFile1.close();

string line;
ifstream MyFile("test.txt");
while ( getline (MyFile, line) ) {
    cout << line << '\n';
}
MyFile.close();