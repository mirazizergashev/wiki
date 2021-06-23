const request=require('request');
const Telegram=require('node-telegram-bot-api')
const token='YOUR_TELEGRAM_TOKEN';
const bot = new Telegram(token, {polling:true})
const fs=require('fs')
const wiki = require('wikijs').default;

bot.onText('/\start/',msg=>{
    bot.sendMessage(msg.chat.id,'Botga xush kelibsiz')
});

    bot.on('message',async(msg)=>{
        let data='';
        soz=msg.text.split(/\s* \s*/)
        for(let j=0;j<soz.length;j++)
        if(data==='')
        for(let i=0;i<=j;i++){
            await wiki().page(`${soz.slice(i,soz.length-j+i).join(' ')}`).then(page => page.summary()).then((k)=>{
                if(k.length>1000){
                    k=k.substring(0,1000)
                }
                if(k)data=k;
                bot.sendMessage(msg.chat.id,k);
    
            }).catch((err)=>{
               console.log(err);
            })
            if(data!='')break
            }

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
})   
},15*60000)
