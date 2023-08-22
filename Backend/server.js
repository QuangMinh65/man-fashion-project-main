const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())
const mysql = require('mysql')
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "cloth_shopping"
})


app.get("/", (req, res) => {
  res.render("home");
});


app.get('/cate', (req,res) => { 
  const sql = `SELECT * FROM danhmuc `
  db.query(sql, (err, data) => {
      if (err) throw err
      return res.json(data)
  })
})

app.get('/products', (req,res) => { 
  const sql = `SELECT * FROM products `
  db.query(sql, (err, data) => {
      if (err) throw err
      return res.json(data)
  })
})


app.get('/users', (req,res) => { 
  const sql = `SELECT * FROM account_users `
  db.query(sql, (err, data) => {
      if (err) throw err
      return res.json(data)
  })
})




app.get('/shirts', (req,res) => { 
  const sql = `SELECT * FROM products WHERE id_danhmuc = 1 `
  db.query(sql, (err, data) => {
      if (err) throw err
      return res.json(data)
  })
})

app.get('/polos', (req,res) => { 
  const sql = `SELECT * FROM products WHERE id_danhmuc = 2 `
  db.query(sql, (err, data) => {
      if (err) throw err
      return res.json(data)
  })
})


app.get('/pants', (req,res) => { 
  const sql = `SELECT * FROM products WHERE id_danhmuc = 3 `
  db.query(sql, (err, data) => {
      if (err) throw err
      return res.json(data)
  })
})

app.get('/best_seller', (req,res) => { 
  const sql = `SELECT * FROM products WHERE buy >= 500  order by id desc `
  db.query(sql, (err, data) => {
      if (err) throw err
      return res.json(data)
  })
})


app.listen(port, () => {
  console.log(`Project is running at ${port}`);
});
