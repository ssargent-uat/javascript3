// The code for a module is known as a module definition.
    Module showMessage()
        Display "Hello World."
      End Module
      
// To execute the module you write a statement that calls it
        Call showMessage()

// Excercise  3.4 passing arguments to modules
    Module main()
    Display "The sum of 12 and 45 is"
    Call showSum(12, 45)
End Module

Module showSum(Integer num1, Integer num2)
    Declare Integer result
    Set result = num1 + num2
    Display result
End Module