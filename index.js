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
        let data='';
        soz=msg.text.split(/\s* \s*/)
        console.log(soz)
        for(let j=0;j<soz.length;j++)
        if(data==='')
        for(let i=0;i<=j;i++){
console.log(soz.slice(i,soz.length-j+i).join(' '))
    await wiki().page(`${soz.slice(i,soz.length-j+i).join(' ')}`).then(page => page.summary()).then((k)=>{
        console.log('ok')
    if(k.length>1000){
        // k=k.substring(0,(k.indexOf('.',1000)))+'.'
        k=k.substring(0,1000)
    }
    if(k)data=k;
    bot.sendMessage(msg.chat.id,k);
    
})
.catch((err)=>{
    // bot.sendMessage(msg.chat.id,q)
    
})
if(data!='')break
}
// if(data!=''){bot.sendMessage(msg.chat.id,data)} 
// else 
// {bot.sendMessage(msg.chat.id,"Narmalniy so'z yoz wikpediyadan ham topolmadim.Insofing bormi?")}

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


const app=require('express')()
const port=process.env.PORT || 3300
app.get('/', (req, res) => {
  res.send("ok");
});
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

setInterval(()=> {
 request.get('http://automashinaboti.herokuapp.com',(error, response, body)=>{
     console.log("error:",error)
    //  console.log("response",response)
    //  console.log("body",' ',body)
})   
},15*60000)