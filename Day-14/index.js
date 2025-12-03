const { use, useDeferredValue } = require("react");


// real- life example 
function divNumber(a,b){

    try{
        if(b===0){
            const error =new Error("can not divided by zero");
            throw error;
        }
        let div = a/b;
        console.log(div);
        
    }catch(err){
        console.error(`this message ${err}`);
    }
}

divNumber(15,0);


const person = {
    name :"Omar",
    address : {
        city: "Dhaka"
    }
}




// throw new 
function userGet(user){
    try{
        console.log(user.address.postCode);
        console.log(user.address.country.postCode);
    }catch(error){
        console.error("Error accessing property", error.message);
        
    }
}

userGet(person)


function validAge (age){
    try{
        if (isNaN(age)){
            throw new Error("Invalid input: age must be a number" + "your input is: "+ age)
        }
        console.log(`the user age is ${age}`);
        
    }catch(error){
        console.error("validation error :",error.message);
        
    }
}

validAge("s")



// rethrow 

function userForm (userData){
    try{
        if(!userData.username)  throw new Error("User name mandatory");
        if(!userData.email.includes("@")) throw new Error("email not valid");
    }catch(error){
        console.error("Validation issue",error.message);
        throw error;
    }
}

try{
    userForm({username:"Omar",email:"tdsds"});
}catch(error){
    console.error("Showing error message for user creation ",error.message);
    
}


//? try catch finally

function userInformation(information){
    try {
        console.log("Information processing");
        
        if(!information) throw new Error("Now information found");
        console.log("Information processed");
        
    } catch (error) {
        console.error(error.message);
        
    }finally{
        console.log("cleanup closed the database connection");
        
    }
}

userInformation()




// custom error 
function ValidationError(message){
    this.name = "Validation",
    this.message =message;
    this.stack = new Error().stack;
}


ValidationError.prototype = object.create(Error.prototype);

function validationCitizen(age){
    if(age<60) throw new ValidationError("You are not senior citizen");
    return "You are senior citizen";
}

try {
    const msg = validationCitizen(40);
} catch (error) {
    console.error(`${error.name} , ${error.message}`);
}








try {
  throw new Error("Oops");
} catch (Error) {
  console.log(Error.message);
}


// self assignment operator 