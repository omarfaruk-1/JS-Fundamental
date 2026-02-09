//? how promise and reject (resolve age solve hole porer reject resolve ignored kore)
let promises = new Promise(function(resolve,reject){
    resolve("Hey fulfill");

    reject("Rejected");
    resolve("Done")
})

// how to handle 
promises.then(
    (result)=>{console.log(result);},
).catch(
    (error)=>{console.error(error);}
)

//Promise chained
let getUser = new Promise(function(resolve,reject){
    const user={
        name : "Omar Faruk",
        email : "email.com",
        password : "12345"
    }
    resolve(user)
})

getUser.then(
    (user)=>{
        console.log(`got user ${user.name}`);  
        return user.email;}
)
.then((email)=>{
    console.log(`got user ${email}`);

    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Tangail");
        },2000);
    })
})
.then((address)=>{
    console.log(`user address ${address}`);
}).catch((error)=>{
    console.log(error);
})