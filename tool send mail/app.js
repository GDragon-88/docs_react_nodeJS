//node js la mot runtime giup js chay tren ssever
// Mo hinhf client - server
//request (get/post/push/delete)
//response ==>(html,css,js,Json)
//web tĩnh và web dộng
// khái niem csr vs ssr(client-side rendering và server-side rendẻing)
//csr servẻr gửi về Json và browser se render ra những thông tin đó 

//ssr sẽ gửi về HTML ,css , JS cho client và browsẻr sẽ render ra những web mong muốn 
//Vd toàn bộ nhũng HTML sẽ rendẻr tại server



//NPM là node package manager (công cụ quản lý các package)
//npm init : khoi tao 1 file package.js//
// 3 " trươngf dependencies trong package.js
// file .gitignore : noi lu tru nhung file khong muon day len git
// 5 su dung node js
const http = require('http');
const _ = require("lodash")
const hostname = 'localhost';
const port = 3000;
// http.createServer(port,hostname)
var nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');

function sendMail (mail){
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'manhchienltpt@gmail.com',
        pass: 'vpunxsitiktawbxf'
    }
  });
  let mailDetails = {
    from: 'manhchienltpt@gmail.com',
    to: mail,
    subject: 'Chien nguyen gui mail',
    text: 'Em chao anh quan!'
  };
  mailTransporter.sendMail(mailDetails, function(err, data) {
    
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
  });
}
sendMail('quan831993@gmail.com')
// let arr = ['levanduc2052004@gmail.com','specialoneminute@gmail.com']
// for(let i in arr){
//   sendMail(arr[i])
// }
// sendMail('specialoneminute@gmail.com')
// module.exports.handler = function(event, context) {
//   console.log('Email Sending...');
    
// };
