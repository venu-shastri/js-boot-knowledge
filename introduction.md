### How to run JavaScript code?

---

- Any Where

  - Node Js
    - Process - host - V8 Chrome Js Engine
    - Platform Independent 

- Browser

  - contains JS Engine

  - ex: Chrome - V8 Engine , Firefox - Spider Monkey 

    

    

    

### JavaScript Facts

---

- Interpreted

- Scripting Language

- No Strong Datatype Supported

- Function Oriented Programming Language

- Case Sensitive

- Supports GC 

- "Everything is an Object"

- "Objects are arranged in the form of tree  nodes "

  - Each Object Looks like Map (Dictionary , Hash)

    - key - string
    - value - > Any

  - Objects are extensible

    - add  and remove keys dynamically

      



### Building Blocks in JS

---

- scope - object

  - local scope
  - global scope 
    - vary for browser and node

  

- closure

- Functions

- Objects

- Two Pass execution

- "this"

- Bindings

- IIFE 

- Module Pattern

- Prototype

- constructors

  - construct an object / initialize an object

  - built-in constructors

    - Array

    - Function

    - Date

    - XMlHttpRequest

      

#### Program

----

- data
  - datatypes 
    - primitive
    - object
- algorithm 
  - function

### JS in Browser

-----------

- Global Object/Scope 
  - "window"

### Functions

-----------

- Every Function is an Object
  -  Store 
  - passed as an Argument
  - Return from function
- Every Function Object constructed using built-in Constructor named "Function"

### How to address object key  

---

- object.key - dot notation

- object["key"]- index notation

  

  ### Function apply

  ----

  - Two pass execution
    - First Pass
      - JS engine construct an object - Execution Context Object
        - Local Scope
          - arguments
          - local variables
          - special key "this"
    - Second Pass
      - execution

  ### Bindings in JavaScript

  ---

  - Binds value for "this" key
  - Determines value for "this" key
  - Helper - to set value for this - while function applied
  - Types of Bindings
    - default
    - explicit
    - new 
    - implicit

  

  #### Default binding

  ----

  

  ```javascript
  fucntion test(){
  console.log(this);
  }
  
  test(); // default binding grammer - binds "global object" -> this
  ```

  ### Explict Binding

  ----

  - let caller define this value explicitly

  - ```javascript
    fucntion test(){
    console.log(this);
    }
    
    test.apply(10); // explicit binding binds "10" -> this
    test.call(100); //explict binding binds "100" -> this
    ```

    

  

  

  

  

​	