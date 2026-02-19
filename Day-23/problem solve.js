// problem -1

const loginUser = (user,callback)=>{
    setTimeout(()=>{
        console.log(`${user} login`);
        callback();
    },1000)
}

const getUserOrders=(callback)=>{
    setTimeout(()=>{
        console.log("Orders fetched");
        callback();
    },1500)
}

const processPayment =(callback)=>{
    setTimeout(()=>{
        console.log("Payment successful")
        callback();
    },2000)
}


loginUser("Omar",()=>{
    getUserOrders(()=>{
        processPayment(()=>{
            console.log("All Done!")
        })
    })
})


// problem-2 
const loginUser = (user)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`${user} logged in`)
        },1000)
    })
}

const getUserOrders= ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Orders fetched")
        },1500)
    })
}

const processPayment =()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Payment successful")
        },2000)
    })
}


loginUser("Omar")
.then(res=>{
    console.log(res);
    return getUserOrders()
}).then(res=>{
    console.log(res)
    return processPayment()
}).then(res=>{
    console.log(res)
    console.log("All Done!")
})



// problem-3
const loginUser = (user)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`${user} logged in`)
        },1000)
    })
}

const getUserOrders= ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Orders fetched")
        },1500)
    })
}

const processPayment =()=>{
    return new Promise(reject=>{
        setTimeout(()=>{
            reject("Payment successful")
        },2000)
    })
}


async function run(){
    const p1=await loginUser("Omar");
    console.log(p1)
    const p2= await getUserOrders();
    console.log(p2)
    const p3= await processPayment()
    console.log(p3)
    console.log("All Done!")
}
run()





// problem -4 

const loginUser = (user)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`${user} logged in`)
        },1000)
    })
}

const getUserOrders= ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Orders fetched")
        },1500)
    })
}

const processPayment =()=>{
    return new Promise(reject=>{
        setTimeout(()=>{
            reject("Payment reject")
        },2000)
    })
}


async function run(){
    try{
        const p1=await loginUser("Omar");
        console.log(p1)
        const p2= await getUserOrders();
        console.log(p2)
        const p3= await processPayment()
        console.log(p3)
        console.log("All Done!")
    }catch(err){
        console.error(err)
    }
}
run()




// problem - 5 
function fetchUserProfile(){
    return new Promise(resolve=>{ 
        setTimeout(()=>{
           resolve({id:1,name:"Omar"})
        },1000)  
    })
}


function fetchUserPosts(userId){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(["Post1", "Post2"])
        }, 2000);
    })
}

function fetchUserFriends(userId){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(["Friend1", "Friend2"])
        }, 2000);
    })
}


async function loadUserDashboard() {

   // Step 1 (Sequential)
   const profile = await fetchUserProfile();
   console.log(profile)

//    Step 2 (Parallel)
   const [posts, friends] = await Promise.all([
       fetchUserPosts(profile.id),
       fetchUserFriends(profile.id)
   ]);

   // Step 3
   console.log("Profile:", profile);
   console.log("Posts:", posts);
   console.log("Friends:", friends);
}

loadUserDashboard();

// bonus trick 
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
console.log("C");
// output  C B A
