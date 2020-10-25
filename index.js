const request=require('request');
const Telegram=require('node-telegram-bot-api')
const token='1331049909:AAGFN3LGO0YWzIMgC1djswhmHws3CZx4vfw';
const bot = new Telegram(token, {polling:true})
const fs=require('fs')
const wiki = require('wikijs').default;

bot.onText('/\start/',msg=>{
    bot.sendMessage(msg.chat.id,'Botga xush kelibsiz')
});

// if(msg.text!='start'){
    bot.on('message',async(msg)=>{
        soz=msg.text.split(/\s* \s*/)
        for(let j=0;j<soz.length;j++){

    await wiki().page(`${soz[j]}`).then(page => page.summary()).then((k)=>{
        console.log('ok')
    if(k.length>1000){
        k=k.substring(0,(k.indexOf('.',1000)))+'.'
    }
    
    bot.sendMessage(msg.chat.id,k)
    })
    .catch((err)=>{
        // bot.sendMessage(msg.chat.id,q)

    })
            
        }
    //    fs.writeFile('loyiha.html', k, function (err) {
    //         if (err) throw err;
    //         console.log('Saved!');
    //       });
        
       
    //    for(let i=0;i<5;i++){
// if(k){
    
// }
//     //    }
    })
// }

// wiki().page('batman').then(page => page.summary()).then(console.log);

// fs.writeFile('mynewfile3.html', k, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


    

