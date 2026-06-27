// let tbody=document.querySelector('.terminal-body')
//     let inputline = document.querySelector('.line-input');

// const wait = (ms)=>{
    
// return  new Promise((resolve) =>{


//     setTimeout(resolve, ms);
    
// });


// }
    

// let hacker_coding=[

// { text:"WELCOME TO KALI LINUX", delay:1000},
// { text:"HAcking Start", delay:2000},
// { text:"#ROOT DRIECTORY", delay:3000},
// { text:"SOME LINUX COMMANDS", delay:4000},
// { text:"${DECRYTING  PASSKEY]", delay:5000},];

// async function run_terminal(){




//   for(log of hacker_coding){
//     await wait(log.delay)
//     let p=document.createElement('p')
//     p.className="line";
//     p.innerHTML=`<span class="prompt">root@system:~#</span> ${log.text}`

// if(inputline){
// tbody.insertBefore(p,inputline)
// }
// else{
//     tbody.append(p)
// }

//         tbody.scrollTop = tbody.scrollHeight;


//   }// for of 






// }


// // now to change the body color
// let mode=false
// let body=document.querySelector('body')


// let body_color = document.querySelector('.clr_btn');

// function changeColor(){
// if(mode === false){
//      body.style.backgroundColor= '#f1e7e7';
//      mode=true;
// }
// else{
//      body.style.backgroundColor= '#100f0f';
// mode=false;
// }
// console.log("clicked")

// let p10=document.createElement('p')
// let p11=document.createElement('p')
// p10.className="line";
// p10.innerHTML=`<span class="prompt">root@system:~# </span>DOWNLOADING IS START...`

// p11.className="line";

// p11.innerHTML=`<span class="prompt">root@system:~# .......</span>`
    
// if (inputline) {
//         tbody.insertBefore(p10, inputline);
//         tbody.insertBefore(p11, inputline);
//     } else {
//         tbody.append(p10);
//         tbody.append(p11);
//     }

//     tbody.scrollTop = tbody.scrollHeight;


// }
// run_terminal();

// // changeColor()


















// ADVANDCED CODE


let tbody = document.querySelector('.terminal-body');
let inputline = document.querySelector('.line-input');
let body = document.querySelector('body');
let body_color = document.querySelector('.clr_btn');

const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

let hacker_coding = [
    { text: "WELCOME TO KALI LINUX", delay: 1000 },
    { text: "HAcking Start", delay: 2000 },
    { text: "#ROOT DRIECTORY", delay: 3000 },
    { text: "SOME LINUX COMMANDS", delay: 4000 },
    { text: "${DECRYTING  PASSKEY]", delay: 5000 },
];

async function run_terminal() {
    for (let log of hacker_coding) {
        await wait(log.delay);
        let p = document.createElement('p');
        p.className = "line";
        p.innerHTML = `<span class="prompt">root@system:~#</span> ${log.text}`;

        if (inputline) {
            tbody.insertBefore(p, inputline);
        } else {
            tbody.append(p);
        }
        tbody.scrollTop = tbody.scrollHeight;
    }
}

// Reusable helper function to inject standalone alerts right above the loading bar
function logToTerminal(message) {
    let p = document.createElement('p');
    p.className = "line";
    p.innerHTML = `<span class="prompt">root@system:~#</span> ${message}`;
    
    // Find the current live progress element to keep it at the very bottom
    let progressLine = document.querySelector('.progress-line');
    if (progressLine) {
        tbody.insertBefore(p, progressLine);
    } else if (inputline) {
        tbody.insertBefore(p, inputline);
    } else {
        tbody.append(p);
    }
    tbody.scrollTop = tbody.scrollHeight;
}

let mode = false;

function changeColor() {
    if (mode === false) {
        body.style.backgroundColor = '#071607'; // Active hacking alert backdrop
        mode = true;
    }

    // 1. Initial Launch message
    logToTerminal("CORE DATA DOWNLOAD INITIATED...");

    // 2. Create fixed layout items (Countdown line and dynamic progress line)
    let countdownLine = document.createElement('p');
    countdownLine.className = "line";
    
    let progressLine = document.createElement('p');
    progressLine.className = "line progress-line"; // Added an identifying class

    if (inputline) {
        tbody.insertBefore(countdownLine, inputline);
        tbody.insertBefore(progressLine, inputline);
    } else {
        tbody.append(countdownLine);
        tbody.append(progressLine);
    }

    let timeLeft = 40;
    let progress = 0;

    // Countdown Interval (1s increments)
    countdownLine.innerHTML = `<span class="prompt">root@system:~#</span> TIME REMAINING: ${timeLeft}s`;
    let countdownInterval = setInterval(() => {
        timeLeft--;
        countdownLine.innerHTML = `<span class="prompt">root@system:~#</span> TIME REMAINING: ${timeLeft}s`;
        if (timeLeft <= 0) clearInterval(countdownInterval);
        tbody.scrollTop = tbody.scrollHeight;
    }, 1000);

    // Progress Tracker (30 seconds total = 300ms intervals)
    progressLine.innerHTML = `<span class="prompt">root@system:~#</span> PROGRESS: [░░░░░░░░░░] ${progress}%`;
    
    let progressInterval = setInterval(() => {
        progress++;
        
        let bars = "█".repeat(Math.floor(progress / 10)).padEnd(10, "░");
        progressLine.innerHTML = `<span class="prompt">root@system:~#</span> PROGRESS: [${bars}] ${progress}%`;

        // --- CUSTOM MILESTONE TRIGGERS ---
        
        if (progress === 3) {
            logToTerminal("<span style='color: #ffbd2e;'>[WARNING] Extracting multimedia assets...</span>");
            logToTerminal("Downloading private pictures database...");
        }
        
        if (progress === 40) {
            body.style.backgroundColor = '#1a0505'; // Flash deep red terminal warning screen
            logToTerminal("<span style='color: #ff5f56;'>[CRITICAL] Compiling archive blocks...</span>");
            logToTerminal("All intercepted server data is archiving...");
        }

        if (progress === 75) {
            body.style.backgroundColor = '#071607'; // Return back to steady matrix green
            logToTerminal("Uploading files to darknet mirror node...");
        }

        if (progress >= 100) {
            clearInterval(progressInterval);
            progressLine.innerHTML += ` <span style="color: white;">[COMPLETE]</span>`;
            body.style.backgroundColor = '#000000'; // Reset layout back to smooth total black
            logToTerminal("SYSTEM EXPLOIT SUCCESSFUL. SYSTEM ACCESS GRANTED.");
        }
        
        tbody.scrollTop = tbody.scrollHeight;
    }, 300);

    tbody.scrollTop = tbody.scrollHeight;
}

run_terminal();