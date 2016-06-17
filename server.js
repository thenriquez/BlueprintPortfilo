var express = require("express");
var app     = express();
var path    = require("path");
var router = express.Router();
var nodemailer = require('nodemailer');

// node file render
app.use ("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
// page routes
app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/portfolio',function(req,res){
  res.sendFile(path.join(__dirname+'/portfolio.html'));
});
app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.outlook.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
// router.post('/send',function(req, res,);{
//   var transporter = nodemailer.createTransport({
//           service:  'Outlook'
//           auth: {
//               user: 'thenriquez25@outlook.com',
//               pass:'chronoprint2594'
//           }
//   });
//     var mailOptions = {
//       from: 'John Doe<johndoe@gmail.com>',
//       to: 'thenriquez25@outlook.com',
//       subject: 'Website Submission',
//       text: 'You have a new submission with the following details...Name: '+req.body.name+' Email: '+req.body.email+ ' Message: '+req.body.message+,
//       html:'<p>You got a new submission with the following details..</p><ul><li>Name: '+req.body.name+ ' Email:'+req.body.name+'</li><li>Message:'+req.body.message+'</li></ul>'
//     };
//     transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             console.log(error);
//             res.redirect('/');
//         } else {
//             console.log('Message Sent:'+info.response);
//               res.redirect('/');
//         }
//     });
//
// });

app.listen(3000);

console.log("Running at Port 3000");
