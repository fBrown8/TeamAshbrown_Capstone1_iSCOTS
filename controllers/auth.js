const mysql2 = require("mysql2");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const db = mysql2.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


 exports.register = (req,res)=>{
    console.log(req.body);

    const {fname,lname,email,password,cpassword} = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], (error, results)=>{
        if(error){
            console.log(error);
        }

        
    })

    db.query('INSERT INTO users SET ?' , {fname:fname, lname:lname, email:email,password:password}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            return res.render('register',{
                message:'User registered'
            });
        }
    })


   res.send("test")
    
}