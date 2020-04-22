const fs = require("fs");
module.exports.profileEmbed = function(client, message, user, iUser, Discord) {
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./RANK.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(504, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 504, 404);
    
     })
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = user.displayAvatarURL
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 180, 5.5, 161, 170);
                                                                            //wl
                                                     ctx.font = '40px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '40px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${iUser.globalPoints} / ${iUser.nextPL}`,395, 371.2);
                                                   
                                                                                                        ctx.font = '40px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${iUser.globalRank}`,252, 272.6);
                                                   
                                                   
                                                                                                        ctx.font = '40px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${iUser.uLevel}`,111.2, 370);
                                                                            
                                                                
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            ``
                            
                          
                            
                             })
                            
                             })
 }