"use strict";
// func1.ts - Function is TS
function DisplayMessage(msg, quote, ln = 7) {
    console.log(msg);
    if (quote) {
        console.log(quote);
    }
    console.log("Lucky No : " + ln);
}
DisplayMessage("HELLO WORLD!", "BIHETITB", 4);
DisplayMessage("OLA!");
