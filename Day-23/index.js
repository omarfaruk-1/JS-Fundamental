//? customer order processed
const takeOrder =(customer,callback)=>{
    console.log(`Take order for ${customer}`);
    callback(customer);
}

const processOrder =(customer,callback)=>{
    console.log(`Order processing for ${customer}`);
    setTimeout(()=>{
        console.log(`Order processed for ${customer}`);
        console.log(`Cooking completed`);
        callback(customer);
    },3000)
    
}

const orderComplete =(customer)=>{
    console.log(`Complete order for ${customer}`);
}

takeOrder("customer 1",(customer)=>{
    processOrder(customer,(customer)=>{
        orderComplete(customer);
    });
})



//? basic structure promises
const hasMeeting = false;

const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails ={
            name : "Technical Meeting",
            location : "Google Meet",
            time : "08 : 00 PM",
        }
        resolve(meetingDetails);
    }else{
        reject(new Error('already Meeting has'))
    }
})

// const addCalender =(meetingDetails)=>{
//     return new Promise((resolve,reject)=>{
//         const calender = `${meetingDetails.name} has been schedule on ${meetingDetails.location} at ${meetingDetails.time}`
//         resolve(calender);
//     })
// }


const addCalender =(meetingDetails)=>{
    const calender = `${meetingDetails.name} has been schedule on ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(calender);
}

meeting
.then(addCalender()) //addCalender meetingDetails argument niche automatic 
.then((res)=>{ // addCalender promise resolve value got
    console.log(res); 
})
.catch((err)=>{ // single catch can receive all then error
    console.log(err.message);
    
})


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


//? multiple promise one result 
const promise1= Promise.resolve("Promise 1 resolved");
const promise2= Promise.reject("Promise 2 rejected");

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3 resolved");
    },3000)
})

// promise1.then((res)=>{
//     console.log(res); 
// })
// promise2.then((res)=>{
//     console.log(res); 
// })
Promise.all([promise1,promise2,promise2]) //? if one reject all promise fail
.then((res)=>{
    console.log(res)
})

Promise.race([promise1,promise2,promise2]) //? first resolved showed result
.then((res)=>{
    console.log(res)
})

Promise.allSettled([promise1,promise2,promise2]) //? resolve or reject no matter show all result
.then((res)=>{
    console.log(res);
})



//  Problem 1: Promise Chain Calculator
const calculate =(num)=>{
    const promise=new Promise ((resolve,reject)=>{
        
        setTimeout(()=>{
            let mul=2*num;
            mul+=10;
            if(mul>20){
                resolve(mul)
            }else{
                reject("Value too small");  
            }
        },1000)
        
    })

    return promise;
}


calculate(6)
.then((res)=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})




// ? TASK:2 User → Posts → Comments (Chaining Practice) 

const getUser = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const user = {
                id : 1,
                name : "Omar",
            }
            resolve(user);
        },1000)
    })
    
}


const getPosts =(user)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const post ={
                userId : user.id,
                postId: 101,
            }
            resolve(post)
        },1000)
    })
}

const getComments =(post)=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Comments loaded for post ${post.postId}`)
        },1000)
    })
    return promise;
}

getUser()
.then(getPosts) //then(value=>getPosts(value)) 
.then(getComments)
.then(res=>{
    console.log(res);
    
})




//?  TASK:3 Bank Transaction Flow (Promise Chaining) 
const checkBalance = (userId)=>{
    const promise = new Promise(resolve=>{
        setTimeout(()=>{
            const user = {
                userId : userId,
                balance : 300,
            }
            resolve(user)
        },1000)
    })
    return promise;
}

const withdraw=(user,amount)=>{
    const promise =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(user.balance>amount){
                user.balance -=amount;
                resolve(user);
            }else{
                reject("Insufficient balance");
            }
            
        },1000)
    })
    return promise;
}

const sendNotification = (user)=>{
    return new Promise(resolve=>{
        resolve(`Withdrawal successful. Remaining balance: ${user.balance}`)
    })
}


checkBalance(1)
.then(user=> withdraw(user,400))
.then(sendNotification)
.then(res=>{
    console.log(res);
    
})
.catch(err=>{
    console.log(err);
    
})


//? TASK:3 Order Processing System 

const createOrder = (userId,productId)=>{
    const promise = new Promise(resolve=>{
        setTimeout(()=>{
            const order = {
                orderId : 101,
                userId : userId,
                productId : productId,
                amount : 10000,
            }
            resolve(order);
        },1000)
    })
    return promise;
}

const processPayment = (order)=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(order.amount<=5000){
                resolve({...order, paymentStatus: "Paid"})
            }else{
                reject("Payment Failed");
            }
        },1000)
    })
    return promise;
}


const shipOrder = (order)=>{
    const promise = new Promise (resolve=>{
        setTimeout(()=>{
            resolve(`Order ${order.orderId} shipped successfully`)
        },1000)
    })
    return promise;
}


createOrder(201,301)
.then(processPayment)
.then(shipOrder)
.then(res=>{console.log(res)})
.catch(err=>{
    console.log(err);
    
})


//? Task - Food Delivery Order Confirmation 
const checkRestaurant = (restaurantId)=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(restaurantId){
                resolve({restaurantId, isOpen:true})
            }else{
                reject("Restaurant is closed")
            }
        },2000)
    })
    return promise;
}

const checkStock =(itemId)=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(itemId){
                resolve({itemId, inStock: true })
            }else{
                reject("Item out of stock")
            }
        },1000)
    })
    return promise;
}

const assignRider = (orderId)=>{
    const promise = new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Rider assigned successfully");
        },3000)
    })
    return promise;
}


const placeOrder = (restaurantId,itemId,orderId)=>{
    return checkRestaurant(restaurantId)
        .then(()=>checkStock(itemId))
        .then((stock)=>{
            console.log(stock)
            return assignRider(orderId)
        })
        .then((res)=>{
            console.log(res)
            return "Order confirmed and rider assigned";
        })
}

placeOrder(1,2,5)
.then((res)=>console.log(res))
.catch(err=>{console.log(err)})