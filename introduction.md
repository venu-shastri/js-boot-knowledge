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

  
### New Binding
  
----
  
- use new binding - apply constructors
  
```javascript
  function Test(){} //constructor function
  var obj=new Test();//new binding
  
  function test(){}
  
   function Patient(mrn,name,age,contactNumber){
  				//this => New object 
              }
   var obj=new Patient("Mrn001","tom",34,"1234");
   var newObj=new Patient("Mrn002","hary","3421");
  ```
  
  
  
  ### Object Oriented Programming in JS
  
  -----
  
  Encapsulation
  
  - define Constructor (aka class)
  
    | C#              | Js                   |
    | --------------- | -------------------- |
    | class Patient{} | function Patient(){} |
  
    
  
  ```C#
  // C#,Java
  class Patient{
  public string MRN;
  Public string Name;
      public Patient(string mrn , string name){
          this.MRN=mrn;
          this.Name=name
      }
      public void getMrn(){return this.MRN;}
      public void setMrn(mrn){this.mrn=value;}
  
  }
  ```
  
  

​	

```javascript
//Js
function Patient(mrn,name){
this.MRN=mrn;
this.Name=name;
}
Patient.prototype.setName=function(name){
	    
    this.Name=name;

}
Patient.protoype.getName=function(){return this.Name;}

var obj1=new Patient("MR001","Tom");
var obj2=new Patient("MR002","Hary");

obj1.setName("Jack"); // setName applied using refrence of object - implicit binding , this->obj1;

obj2.setName("james");// this->obj2



```



### Implicit Binding

---

- function applied using reference of an object

  

```
var obj={key="name", value="tom", getValue:function{return this.value;}} //syntactical sugar - var obj= new Object()

var obj=new Object();
obj.key="name";
obj.value="tom";
obj.getValue=function(){return this.value;}

obj.getValue(); // implicit Binding this->obj;

var fun=obj.getValue;
fun();//this->
```



Function Closure

___

- prevent garbage collection for local scope members except "this"

- ```javascript
  function onSearchButtonClick() {
  
              var searchKey = window.document.getElementById('searchIdTextBox').value;
              //AJAX Request - Asynchronous Http Request;
             var   httpReq = new XMLHttpRequest();
              httpReq.open("GET", "http://localhost:60349/patients/PatientData/GetPatientByMrn/" + searchKey, true);
              //registering callback - to get updates on status of http request
              httpReq.onreadystatechange = function () {
              
                  console.log("callback");
                  //httpReq -> preserved in closure 
                  if (httpReq.readyState == 4) {
  
                      var liTag = document.createElement("li");
                      liTag.innerText = httpReq.responseText;
                      document.getElementById("resultDashboard").appendChild(liTag);
                  }
  
              }
              httpReq.send();
      
      //example
      funtion test(arg)
      {
      var local=arg;
      function echo(){
          console.log(local);
      }
          return echo;
          
      }
      
      var returnValue=test(100);
      returnValue();
      
      var newReturnvalue=test(1000);
      newReturnValue();
      returnValue();
      
      
      
  ```

  

### Ajax

---

- Asynchronous JavaScript and XML



### IIFE

----

- Immediately Invoked Function Expression / Self Callable Anonymous Function

- Declare Function object and invoke immediately

- IIFE applied using default binding

- usage

  - block scope 
  - module pattern

   

```javascript
//IIFE Syntax
(function(){


})();

(function(arg){
console.log(arg);
})(1000);

//Variable Hoisting
function test(isValid){

    var i=0;
    console.log(i); //0
    if(isValid){
        //block scope 
       ( function(){
        var i=10;
           console.log(i);//10
        })();
    }
    console.log(i);//0
}

```

