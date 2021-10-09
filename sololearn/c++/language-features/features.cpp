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