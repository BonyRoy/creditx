import "./Chatbox.css";

function Chatbox(){
    var reply=[];
    function show() {
        var coll = document.getElementsByClassName("collapsible");
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    }
    function getTime() {
        let today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let time = hours + ":" + minutes;
        return time;
    }
    var x=setInterval(() => {
        if(document.getElementById("botStarterMessage")!==null){
            let firstMessage = "Welcome to Infinity Car Bazar, How's it going?" 
            let secondtMessage = "What kind of vehicle are you interested in? Answer Bike/Car" 
            document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '<p class="botText"><span>' + secondtMessage+ '</span></p>';
            let time = getTime();
            document.getElementById("chat-timestamp").innerHTML=(time);
            document.getElementById("userInput").scrollIntoView(false);
            clearInterval(x);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }   
      }, 1);
    function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
        if(botResponse!==''){
            let botHtml = '<p class="botText"><span>' + botResponse + '</span></p><br/>';
            document.getElementById("chatbox").innerHTML+=(botHtml);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    function getResponse() {
        let userText = document.getElementById("textInput").value;
        if (userText==="") {
            userText = "I Love StyleZone";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p><br/>';
        document.getElementById("textInput").value="";
        document.getElementById("chatbox").innerHTML+=(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    function getBotResponse(input) {
        if (input==="Hello") {
            reply.push("Hello there!");
        } else if (input==="I Love CreditX") {
            reply.push("Thank you :)");
        }  else if (input==="good") {
            reply.push("Have a nice day!!");
        } else if (input==="Thank you!") {
            reply.push(":)");
        } else if (input==="complain") {
            reply.push("You can mail us at creditx@gmail.com ");
        } 
        return reply[reply.length-1];
    }
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
        document.getElementById("textInput").value="";
        document.getElementById("chatbox").innerHTML+=(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }

    function sendButton() {
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you!")
    }
    function typing(e) {
        if (e.which===13) {
            getResponse();
        }
    }
    return(
        <div className="chat-bar-collapsible">
            <button id="chat-button" type="button" className="collapsible" onClick={show}>🧍 How May I Help You?
                <i id="chat-icon" style={{color: "#fff"}} className="fa fa-fw fa-comments-o"></i>
            </button>
    
            <div className="chatcontent">
                <div className="full-chat-block">
                    <div className="outer-container">
                        <div className="chat-container">
                            <div id="chatbox">
                                <h5 id="chat-timestamp" style={{color:"white"}}> </h5>
                                <p id="botStarterMessage" className="botText"><span>Loading...</span></p>
                            </div>
                            <div className="chat-bar-input-block">
                                <div id="userInput">
                                    <input id="textInput" className="input-box" type="text" name="msg" placeholder="Tap 'Enter' to send a message" autoComplete="off" onKeyPress={(e) => typing(e)}/>
                                    <p></p>
                                </div>
    
                                <div className="chat-bar-icons">
                                    <i id="chat-icon" style={{color: "crimson"}} className="fa fa-fw fa-heart"
                                        onClick={heartButton}></i>
                                    <i id="chat-icon" style={{color: "lightgrey"}} className="fa fa-fw fa-paper-plane"
                                        onClick={sendButton}></i>
                                </div>
                            </div>
    
                            <div id="chat-bar-bottom">
                                <p></p>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    );
}
export default Chatbox;