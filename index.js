const express = require("express");
const app = express();
const bodyparser=require("body-parser");
const db = require('./models/database');

// app.listen(3000, "10.5.10.133" || "localhost" ,() => {
//   console.log(`Listening to requests on http://localhost:${3000}`);
// });
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
app.use(bodyparser());
app.use(express.static(__dirname + "/Front_end"));
app.set('view engine','ejs');

app.post("/login",async (req, res) => {
   Name=req.body.username;
   Password=req.body.password;
   if(Name=='Nishanth' && Password=='123')
   {
    const values = await db.subsection_register.findAll();
    res.render(__dirname + "/Front_end/subsections", {obj:values});
   }
  });

  app.post("/create_subsection", async (req, res) => {
    id=req.body.id;
    name=req.body.name;
    password=req.body.password;
    teacher=req.body.teacher;
    const details={
      subsection_id:id,
      subsection_name:name,
      password:password,
      t_name:teacher
    }
    const subsection_register = await db.subsection_register.create(details);
    const values = await db.subsection_register.findAll();
    res.render(__dirname + "/Front_end/subsections", {obj:values});
   });
   app.post("/create_teacher", async (req, res) => {
    id=req.body.t_id;
    name=req.body.t_name;
    phno=req.body.phno;
    const details={
      t_id:id,
      t_name:name,
      phno:phno
    }
    const teacher_register = await db.teacher_register.create(details);
    const values = await db.teacher_register.findAll();
    res.render(__dirname + "/Front_end/teacher", {obj:values});
   });
   app.post("/create_student", async (req, res) => {
    id=req.body.student_id;
    name=req.body.student_name;
    password=req.body.student_password;
    rollno=req.body.student_rollno;
    fname=req.body.student_father_name;
    bloodgrp=req.body.student_bloodgrp;
    dob=req.body.student_dob;
    phno=req.body.student_number;
    ephno=req.body.student_enumber;
    qual=req.body.student_qualification;
    dateofjoin=req.body.student_dateofjoin;
    stu_sem=req.body.student_sem;
    const details={
      student_id:id,
      student_name:name,
      password:password,
      student_rollno:rollno,
      student_father_name:fname,
      student_bloodgrp:bloodgrp,
      student_dob:dob,
      student_number:phno,
      student_enumber:ephno,
      student_qualification:qual,
      student_dateofjoin:dateofjoin,
      student_sem:stu_sem
    }
    const student_register = await db.student_register.create(details);
    const values = await db.student_register.findAll();
    res.render(__dirname + "/Front_end/students", {obj:values});
   });

   app.post("/verify", async (req, res) => {
    var sname=req.body.sname;
    const inf= await db.student_register.findOne({where:{id:sname}});
    if(inf == null)
    {
      res.sendFile(__dirname + "/Front_end/false.html");
    }
    else{
      res.render(__dirname + "/Front_end/verify",{
        name:inf.student_name,
        mobile:inf.student_number,
        mobile2:inf.student_enumber,
        email:inf.student_id,
        course:inf.course,
        // img:inf.img,
        dob:inf.student_dob,
        rollno:inf.student_rollno,
        father:inf.student_father_name,
        bg:inf.student_bloodgrp,
        
        doj:inf.student_dateofjoin,
        quali:inf.student_qualification
      });
  
    }  
    
  });
  app.get("/verify", (req, res) => {
    res.sendFile(__dirname + "/Front_end/auth.html");
    
   });
  // app.post("/register", async (req, res) => {
  
   app.post("/create_exam", async (req, res) => {
    id=req.body.exam_id;
    name=req.body.exam_name;
    date=req.body.exam_date;
    const details={
      exam_id:id,
      exam_name:name,
      exam_date:date
    }
    const exam_register = await db.exam_register.create(details);
    const values = await db.student_register.findAll();
    res.render(__dirname + "/Front_end/academics", {obj:values});
   });
   app.get("/teacher", async (req,res)=>{
    const values = await db.teacher_register.findAll();
    res.render(__dirname + "/Front_end/teacher", {obj:values});
   });
   app.get("/subsections",async (req,res)=>{
    const values = await db.subsection_register.findAll();
    res.render(__dirname + "/Front_end/subsections", {obj:values});
   })

app.use(bodyparser.urlencoded({ extended: true }));
app.get("/apply.html", (req, res) => {

  res.sendFile(__dirname + "/template/apply.html");
});
/*app.post("/verify", async (req, res) => {
  var sname=req.body.sname;
  const inf= await db.info.findOne({where:{id:sname}});
  if(inf == null)
  {
    res.sendFile(__dirname + "/template/auth/false.html");
  }
  else{
    res.render(__dirname + "/template/auth/verify",{name:inf.name,mobile:inf.mobile,email:inf.email,course:inf.course});

  }  

});*/
app.get("/create", (req, res) => {
  res.sendFile(__dirname + "/Front_end/form2.html");

});
app.get("/create_s", (req, res) => {
  res.sendFile(__dirname + "/Front_end/form4.html");

});
app.get("/create_t", (req, res) => {
  res.sendFile(__dirname + "/Front_end/form3.html");

});
app.get("/class_login", (req, res) => {

  res.sendFile(__dirname + "/Front_end/form_2.html");
});
app.get("/add_exam", (req, res) => {

  res.sendFile(__dirname + "/Front_end/form_3.html");
});
app.get("/academics", async (req, res) => {
  const values = await db.student_register.findAll();
  res.render(__dirname + "/Front_end/academics",{obj:values});
});
app.post("/class_login",async (req, res) => {
  Name=req.body.username;
  Password=req.body.password;
  const details=await db.subsection_register.findOne(
    {
      where:
  {
    subsection_name:Name
  }});
  if(details.password==Password)
  {
   const values = await db.student_register.findAll();
   res.render(__dirname + "/Front_end/students", {obj:values});
  }
 });
app.get("/", (req, res) => {

  res.sendFile(__dirname + "/Front_end/form.html");
});
