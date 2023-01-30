# NodeJs邮件操作库(NodeMailer)

```js
//引入模块
const nodemailer = require('nodemailer');

//设置邮箱配置
let transporter=nodemailer.createTransport({
    host:'smtp.163.com',//邮箱服务的主机，如smtp.qq.com
    port:'465',//对应的端口号
    //开启安全连接
    secure:true,
    //secureConnection:false,
    //用户信息
    //STXILKFULKDSYJJJ
    auth:{
        user:'han18565991861@163.com',
        pass:'STXILKFULKDSYJJJ'
    }
});

//设置收件人信息
let mailOptions={
    from:'"Fred Foo 👻" <han18565991861@163.com>',//谁发的
    to:'2596194220@qq.com',//发给谁
    subject:'66',//主题是什么
    text:'66',//文本内容
    html:'',//html模板

    //附件信息
    attachments:[
        {
            filename:'',
            path:'',
        }
    ]
};

//发送邮件
transporter.sendMail(mailOptions,(error,info)=>{
    if(error)
        return console.log(error);
    console.log(`Message: ${info.messageId}`);
    console.log(`sent: ${info.response}`);
});

```