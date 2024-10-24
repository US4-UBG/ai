(function() {
    var button = document.createElement('button');
    button.style.position = 'fixed';
    button.style.bottom = '100px';
    button.style.right = '20px';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.background = 'gray';
    button.style.borderRadius = '50%';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.zIndex = '9999';
    button.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.3)';
    
    var robotIcon = document.createElement('span');
    robotIcon.innerHTML = '&#x1F916;';
    robotIcon.style.fontSize = '30px';
    robotIcon.style.transition = 'transform 0.5s';
    
    button.appendChild(robotIcon);
    document.body.appendChild(button);
    
    var iframe = document.createElement('iframe');
    iframe.srcdoc = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>US4 - Ai</title>
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
                color: gold;
                background-color: black;
            }
            #chat-container {
                border: 1.7px solid black;
                height: 400px;
                overflow-y: auto;
                padding: 10px;
                margin-bottom: 10px;
                border-radius: 5px;
                background-color: black;
                color: gold;
            }
            #input-container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }
            #user-input {
                flex-grow: 1;
                padding: 10px;
                border-radius: 5px;
                background-color: black;
                color: gold;
                border: 1px solid gold;
                margin-right: 10px;
            }
            #send-button {
                width: 40px;
                height: 40px;
                background-color: black;
                color: gold;
                border-radius: 50%;
                border: 1px solid gold;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #send-button::before {
                content: '↑';
                font-size: 18px;
            }
            h1 {
                text-align: center;
                color: gold;
            }
        </style>
    </head>
    <body>
        <h1>Bookmarklet AI</h1>
        <div id='chat-container'>
            <img src='https://us4-ubg.github.io/ai/logo.png' alt='AI Logo' style='width:30px;height:30px;'>
            Hello! I am an AI made with groq. The developer of this bookmarklet was Unblocked Sites 4 or US4 (https://us4-ubg.github.io)
        </div>
        <div id='input-container'>
            <textarea id='user-input' placeholder='Type your message here...'></textarea>
            <button id='send-button'></button>
        </div>
        <script src='https://us4-ubg.github.io/ai/ai.js'></script>
    </body>
    </html>`;
    
    iframe.style.position = 'fixed';
    iframe.style.bottom = '60px';
    iframe.style.right = '100px';
    iframe.style.width = '450px';
    iframe.style.height = '500px';
    iframe.style.border = '2px solid #000';
    iframe.style.background = '#fff';
    iframe.style.borderRadius = '8px';
    iframe.style.display = 'none';
    iframe.style.zIndex = '9999';
    iframe.style.overflowY = 'auto';
    iframe.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.4)';
    
    document.body.appendChild(iframe);
    
    button.addEventListener('click', function() {
        if (iframe.style.display === 'none') {
            robotIcon.style.transform = 'rotate(360deg)';
            setTimeout(function() {
                iframe.style.display = 'block';
                robotIcon.innerHTML = '&#x274C;';
            }, 10);
        } else {
            iframe.style.display = 'none';
            robotIcon.innerHTML = '&#x1F916;';
        }
    });
})();
