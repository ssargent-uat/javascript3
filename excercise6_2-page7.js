// 6.2 Writing Your Own Functions
//
//Module_main ()
    //  Local Variables
//    Declare Integer firstAge, secondAge, total

    // Get the users age and the users best friends age
//    Display "Enter your age."
//    Input firstAge
//    Display "Enter your best friends age."
//   Input secondAge

    // Get the sum of both ages.
//    Set total = sum(firstAge, secondAge)

    // Display the sum
//    Display "Together you are  ", total, - years old."
//End Module

    // The sum function accepts two integer arguments and
    // returns the sum of those arguments as an integer.
//Function Integer sum(Integer num1, Integer num2)
//    Declare Integer result
//    Set result = num1 + num2
//    Return result
//End Function

// Program Output
// Enter your age
// 22 Enter
// Enter your best friends age.
// 24 Enter
// Together you are 46 years old

Module_main ()
        Declare Integer firstAge
        Display "Enter your age."
        Input firstAge
    // secondAge part
        Declare Integer secondAge
        Display "Enter your best friends age."
        Input  secondAge
    // Get the sum
        Set total = sum(firstAge, secondAge)
        Display "Together you are  ", total, - " years old."
    End Module 
    // Return sum of Integers
    Function Integer sum(Integer num1, Integer num2)
        Declare Integer result
        Set result = num1 + num2
        Return result
    End Function
