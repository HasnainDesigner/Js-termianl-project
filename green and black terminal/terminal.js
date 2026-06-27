// let task=async()=>{
//   return new Promise((resolve,reject) =>{ 

// setTimeout(()=>{

// console.log("Initailizing...")

// setTimeout(()=>{
// console.log("Server data...")

// },3000) 
// resolve("done task")

// },3000)   



//    })
// }




// let task2=async()=>{
//   return new Promise((resolve,reject) =>{ 

// setTimeout(()=>{

// console.log("In server...")

// setTimeout(()=>{
// console.log("IDS...")

// },3000) 
// resolve("done task2")

// },7000)   



//    })
// }

// let task3=async()=>{
//   return new Promise((resolve,reject) =>{ 

// setTimeout(()=>{

// console.log("Account:ali9987")

// setTimeout(()=>{
// console.log("Pasword:********")

// },5000) 
// resolve("done task3")

// },5000)   



//    })
// }

// let runtask=async()=>{

    
// let t1= await task()
// let t2=await task2()
// let t3= await task3()
// // let alltask= await Promise.all([t1,t2,t3])

// }
// // runtask()

// function printToTerminal(text) {
//     let terminal_body = document.querySelector('.terminal-body');
    
//     // Create a new paragraph element
//     let p = document.createElement('p');
//     let p2=document.createElement('p')
//     let p3=document.createElement('p')
//     let p4=document.createElement('p')
//     let p5=document.createElement('p')
//     let p6=document.createElement('p')
//     let p7=document.createElement('p')

//     p.className = 'line';
//     p.innerHTML = "Server data...";



//     setTimeout(()=>{
//         p2.innerHTML="bypassing..."

//     },3000)


//     setTimeout(()=>{
//         p3.innerHTML="done task..."

//     },8000)
    
//     setTimeout(()=>{
//         p4.innerHTML="IDS..."

//     },13000)
    
//     setTimeout(()=>{
//         p5.innerHTML="INSTAGRAM:~aliNawab99014"

//     },17000)
    
// setTimeout(()=>{
//         p7.innerHTML="PASWORD:***99power**"

//     },29000)

    
//     setTimeout(()=>{
//         p6.innerHTML="FACEBOOK:Shah Ali khan"

//     },22000)










//     // Add it to the terminal
//     terminal_body.appendChild(p);
//     terminal_body.appendChild(p2);
//     terminal_body.appendChild(p3);
//     terminal_body.appendChild(p4);
//     terminal_body.appendChild(p5);
//     terminal_body.appendChild(p7);
//     terminal_body.appendChild(p6);

// }

// function time(){
// setTimeout(() => {
    
//     printToTerminal()
// }, 3000);
// }

// time();

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const hackerLogs = [
    { text: "Initializing exploit...", delay: 1500 },
    { text: "Connecting to secure database...", delay: 2000 },
    { text: "Bypassing IDS firewall... [SUCCESS]", delay: 1500 },
    { text: "Target Found: Account 'aliNawab99014'", delay: 1000 },
    { text: "Decrypting password...", delay: 3000 },
    { text: "PASSWORD RETRIEVED: ***99power**", delay: 1000 }
];



// 1. A reusable utility function that turns setTimeout into an awaitable Promise

// 2. An array holding all your hacker steps and their individual delay times


// 3. The engine that prints lines one by one
async function runTerminal() {
    let terminal_body = document.querySelector('.terminal-body');
    
    // Find the blinking cursor line if it exists so we can insert text *above* it
    let inputLine = document.querySelector('.line-input');

    for (let log of hackerLogs) {
        // Wait for the specific duration assigned to this log line
        await wait(log.delay);

        // Dynamically build and append the new line on the spot
        let p = document.createElement('p');
        p.className = 'line';
        p.innerHTML = `<span class="prompt">root@system:~#</span> ${log.text}`;

        if (inputLine) {
            terminal_body.insertBefore(p, inputLine);
        } else {
            terminal_body.appendChild(p);
        }

        // Auto-scroll to the bottom of the container as text builds up
        terminal_body.scrollTop = terminal_body.scrollHeight;
    }
}

// 4. Trigger the sequence on page load
runTerminal();