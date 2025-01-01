
const terminal = document.getElementById("terminal");

async function writeMessage(message, delay = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            const glitchMessage = `<span class="glitch" data-text="${message}">${message}</span>`;
            terminal.innerHTML += glitchMessage + '\n';
            terminal.scrollTop = terminal.scrollHeight;
            resolve();
        }, delay);
    });
}

async function simulateStartup() {
    const startupMessages = [
        "Initializing secure connection...",
        "Bypassing firewall...",
        "Spoofing MAC address...",
        "Connecting to dark web...",
        "Decrypting SSL channels..."
    ];

    for (const msg of startupMessages) {
        await writeMessage(msg, Math.random() * 1500);
    }
    await writeMessage("\nConnection established...\n");
}

async function simulateHackingProcess() {
    for (let i = 0; i < 5; i++) {
        const ip = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        await writeMessage(`Accessing node at ${ip}...`, 0);
        await simulateLoadingBar();
    }
}

async function simulateLoadingBar() {
    const loadLength = 30;
    let bar = "[";
    const barElement = document.createElement("div");
    barElement.textContent = bar + " ".repeat(loadLength) + "]";
    terminal.appendChild(barElement);  // Append new bar below previous text

    for (let i = 0; i < loadLength; i++) {
        bar += "#";
        barElement.textContent = bar + " ".repeat(loadLength - i - 1) + "] 100%";
        terminal.scrollTop = terminal.scrollHeight;
        await new Promise(r => setTimeout(r, Math.random() * 50));
    }
    await writeMessage("Success\n", 0);  // New line after bar completes
}


async function showFunnyEnding() {
    await writeMessage("\nAccess granted to the mainframe!");
    await new Promise(r => setTimeout(r, 2000));
    terminal.innerHTML += '<span class="warning">\n \n##  WARNING! Virus detected... \n##  You\'ve been hacked...</span>';
    terminal.scrollTop = terminal.scrollHeight;
    await new Promise(r => setTimeout(r, 2000));
    terminal.innerHTML += '<span class="warning"> BY YOURSELF!\n \n</span>';
    terminal.scrollTop = terminal.scrollHeight;
    await new Promise(r => setTimeout(r, 2000));
    await writeMessage("JK this is all fake.");
    await writeMessage("pls don't sue me...");
}

async function startSimulation() {
    await simulateStartup();
    await simulateHackingProcess();
    await showFunnyEnding();
}

startSimulation();