const getgccSnippet = `
sudo apt update
sudo apt install build-essential
gcc –version
`

const helloWorldSnippet = `
#include <stdio.h> 
Int main(void) {
	Printf(“Hello World.\n”)
	Return 0;
}
`

const structSnippet = `
Struct card {
	int val;
	char suit;
};
struct card c1, c2;
`

const typedefStructSnippet = `
typedef struct {
	int val;
	char suit;
} card;
card c1, c2; //Now we don’t have to write the word ‘struct’! (:
`

const librariesSnippet = `
<math.h> //use with compiler flag -lm
<ctype.h>
<time.h>
<stdlib.h>
<pthread> //use with compiler flag -lpthread
<signal.h>
<unistd.h>
`

const CBasics = () => {
  return (
    <div className="page">
      <div className="header">
        <h1>C Basics</h1>
        <p><em>Get started with the C programming language. Learn the different primative types, arrays, 
          and pointers.</em></p>
        <hr/>
      </div>
      <h2>Introduction</h2>
      <p>C is such a popular language because it gives you closer control over the hardware. C lets you 
        manipulate memory, which is helpful at times, but requires you to really understand your code 
        or you risk causing memory leaks. C does little to hold your hand, so you must do everything 
        yourself which gives you a better understanding of what exactly your code is doing.</p>
      <h2>Get Started</h2>
      <p>To get started with C, you will need a compiler. A compiler converts human readable C code 
        into Assembly for the computer to read, along with some code optimizations. To install gcc, 
        run the following bash commands.</p>
      <div className="snippet-container">
        <pre className="code">{getgccSnippet}</pre>
      </div>
      <p>Let’s create a basic program. Create a file called Program.c</p>
      <div className="snippet-container">
        <pre className="code">{helloWorldSnippet}</pre>
      </div>
      <p>You can compile this code into an executable by running the bash script <code>gcc Program.c</code>.
      “-o” lets you specify the name of the output file. <code>gcc -o hello_world Program.c</code></p>
      <h2>Data Types</h2>
      <p>C is a strongly typed language. This means that you need to specify the type when you define a variable 
        as well as the type of the output when defining a function.</p>
      <h3>Numbers</h3>
      <p>C has multiple integer types: char, short, int, and long.</p>
      <p>For floating point types, we have float and double.</p>
      <h3>Booleans</h3>
      <p>There is no Boolean class in C. Instead it just uses 0 as false, and anything nonzero (usually 1) 
        as true. All strings evaluate to true except for empty strings.</p>
      <h3>Strings</h3>
      <p>Strings in C are simply arrays of char’s. </p>
      <p>“Word” = &#123;‘w’, ‘o’, ‘r’, ‘d’, ‘\0’&#125;</p>
      <p>C knows the end of a string by looking for the termination character ‘\0’. Since strings are 
        not objects, they do not have a “.length”  property.</p>
      <h3>Structs Instead of Classes</h3>
      <p>C does not have classes. The closest we get is struct. A struct is analogous to a class with 
        only public fields.</p>
      <div className="snippet-container">
        <pre className="code">{structSnippet}</pre>
      </div>
      <p>You can shorten the declaration with typedef.</p>
      <div className="snippet-container">
        <pre className="code">{typedefStructSnippet}</pre>
      </div>
      <p>You can access members of the struct as follows:</p>
      <p><code>c1.val=3; c1.suit=’s’;</code></p>
      <h2>Pointers</h2>
      <p>Pointers are variables that store memory addresses. They point to the memory address of 
        something. Useful for passing values by reference rather than passing by value.</p>
      <p>Declare a pointer variable like <code>int* foo</code>. The * indicates it is a pointer.</p>
      <p>You can refer to the value stored at that memory address by “dereferencing” the pointer. 
        Foo stores some memory address of an int. I can change the value of that int with 
        <code>*foo = 3;</code></p>
      <p>You can get the memory address of a variable by using the & sign which means “address of”. 
        <code>int* pointer = &amp;number; //number is an int</code></p>
      <h2>Arrays</h2>
      <p>Arrays store a list of values. Physically the space is allocated when the array is 
        created, and the actual values of the array are all stored next to each other in memory. 
        In the case of the array defined as <code>int arr[5]</code>, the array contains 5 int values. The 
        expression ‘<code>arr</code>’ is a pointer to the first element of the array. That is what people 
        mean when they say an array is a pointer. ‘<code>arr</code>’ is the exact same as ‘<code>&arr[0]</code>’. You can 
        access the nth value of an array with <code>arr[n]</code>.</p>
      <p>You must specify the size of the array at the time of its creation. If an array is created after 
        compile-time, you must manually allocate memory for it.</p>
      <h2>Memory</h2>
      <p>When you need to allocate memory at runtime you can do so with</p>
      <p><code>void* memory = malloc(numberOfBits).</code></p>
      <p>Whenever you use malloc, it is crucial to free that memory once you are done with it. Free memory 
        by calling </p>
      <p><code>free(memory)</code></p>
      <p>Failure to free up memory will cause memory leaks which can cause problems in your program after 
        a while when you run low on available memory.</p>
      <p>The memory used by local variables inside functions get automatically freed once the function 
        returns, so you don’t need to worry about freeing them.</p>
      <h2>#define</h2>
      <p>You can define constants in your code using <code>#define</code>. When your code gets compiled, 
      each usage of this defined constant essentially gets replaced with its value.</p>
      <p><code>#define PI 3.14</code></p>
      <h2>Useful Libraries</h2>
      <div className="snippet-container">
        <pre className="code">{librariesSnippet}</pre>
      </div>

    </div>
  )
}
export default CBasics;