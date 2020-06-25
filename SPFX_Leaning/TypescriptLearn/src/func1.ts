// func1.ts - Function is TS

function DisplayMessage(msg : string, quote?: string, ln: number = 7) : void {

    console.log(msg);

    if(quote) {
        console.log(quote);
    }

    console.log("Lucky No : " + ln);

}


DisplayMessage("HELLO WORLD!","BIHETITB", 4);
DisplayMessage("OLA!");