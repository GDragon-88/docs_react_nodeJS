const express = require("express")
const mysql = require("mysql2");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.json())
const port = 8080

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'todolist_schemas',
    password:"chien2811"
})

let db = pool.promise()

app.get("/api/task",async(req,res)=>{
    let [data] = await db.execute("SELECT * FROM todolist_schemas.tbl_task;")
    res.json(data)
    
})
app.post("/api/task/:id",async(req,res)=>{
    let data = req.params.id
    let sql = "INSERT INTO `todolist_schemas`.`tbl_task` (`task`) VALUES (?);"
    let value = [data]
    sql = mysql.format(sql,value)
    await db.execute(sql).then(()=>{
        res.json('ok')
    }).
    catch(err=>console.log(err))

})

app.listen(port,()=>{
    console.log("running is good");
})