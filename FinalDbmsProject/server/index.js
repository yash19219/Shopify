const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "finaldbmsproject",
});

app.listen(3001, () => {
  console.log("YEAP RUNNING");
});

app.post("/authentication", (req, res) => {
  console.log("INSIDE AUTH");
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM user WHERE uname=(?) AND password=(?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("result is:", result);
        res.send(result);
      }
    }
  );
});

app.post("/customerCheck", (req, res) => {
  console.log("INSIDE CUSTOMER CHECK");
  const username = req.body.username;
  db.query(
    "Select * from customer where User_uname=(?)",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("result is:", result);
        res.send(result);
      }
    }
  );
});
app.post("/employeeCheck", (req, res) => {
  console.log("INSIDE EMPLOYEE CHECK");
  const username = req.body.username;
  db.query(
    "Select * from employee where User_uname=(?)",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("result is:", result);
        res.send(result);
      }
    }
  );
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("Total Records:- " + result.length);
      res.send(result);
    }
  });
});

app.get("/productss", (req, res) => {
  // console.log("YEAP RUNNING1");
  db.query("SELECT * FROM product where catagory = 'Pencil'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const brand = req.body.brand;
  const catagory = req.body.catagory;
  const price = req.body.price;
  const stocks = req.body.stocks;
  const url = req.body.url;

  db.query(
    // console.log("YEAP done");
    "INSERT INTO product (pid,name, brand, catagory, price, stocks,url) VALUES (?,?,?,?,?,?,?)",
    [id, name, brand, catagory, price, stocks, url],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/Phone", (req, res) => {
  // console.log("YEAP RUNNING1");
  db.query("SELECT * FROM product where catagory = 'Phone'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/Laptop", (req, res) => {
  // console.log("YEAP RUNNING1");
  db.query("SELECT * FROM product where catagory = 'Laptop'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/Pen", (req, res) => {
  // console.log("YEAP RUNNING1");
  db.query("SELECT * FROM product where catagory = 'Pen'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/cart", (req, res) => {
  const cartid = req.body.cartid;
  const cost = req.body.cost;
  const cid = req.body.cid;
  const pid = req.body.pid;
  const quan = 1;

  console.log("cartid", cartid);
  console.log("cost", cost);
  console.log("cid", cid);
  console.log("pid", pid);

  db.query(
    "SELECT Customer_cid FROM cart where cartid = (?)",
    [cartid],
    (err, result) => {
      if (err) {
        console.log("8888888 ", err);
      } else {
        if (result.length == 0) {
          db.query(
            // console.log("YEAP done");
            "INSERT INTO cart (cartid,quantity, cost, Customer_cid) VALUES (?,?,?,?)",
            [cartid, 0, 0, cid],
            (err, result) => {
              if (err) {
                console.log(err);
              }
            }
          );

          db.query(
            // console.log(cartid);
            "INSERT INTO cart_has_product (Cart_cartid,Product_pid, quantity) VALUES (?,?,?)",
            [cartid, pid, quan],
            (err, result) => {
              if (err) {
                console.log(err);
              }
            }
          );
        } else {
          // db.query(
          //   // console.log("YEAP done");
          //   "select quantity from cart where cartid=(?)",
          //   [cartid],
          //   (err, result) => {
          //     if (err) {
          //       console.log(err);
          //     } else {
          //       res.send("Values Inserted");
          //     }
          //   }
          // );

          // db.query(
          //   // console.log("YEAP done");
          //   "select cost from cart where cartid=(?)",
          //   [cartid],
          //   (err, result) => {
          //     if (err) {
          //       console.log(err);
          //     } else {
          //       res.send("Values Inserted");
          //     }
          //   }
          // );

          // db.query(
          //   // console.log("YEAP done");
          //   "update cart set quantity = (quantity+1) where (cartid = ?)",
          //   cartid,
          //   (err, result) => {
          //     if (err) {
          //       console.log(err);
          //     }
          //   }
          // );

          // db.query(
          //   // console.log("YEAP done");
          //   "update cart set cost = (cost+ ?) where (cartid = ?)",
          //   [cost, cartid],
          //   (err, result) => {
          //     if (err) {
          //       console.log(err);
          //     }
          //   }
          // );

          db.query(
            // console.log("YEAP done");
            "select * from cart_has_product where Cart_cartid=? and Product_pid=?",
            [cartid, pid],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                if (result.length == 0) {
                  db.query(
                    // console.log(cartid);
                    "INSERT INTO cart_has_product (Cart_cartid,Product_pid, quantity) VALUES (?,?,?)",
                    [cartid, pid, quan],
                    (err, result) => {
                      if (err) {
                        console.log(err);
                      }
                    }
                  );
                } else {
                  db.query(
                    // console.log("YEAP done");
                    "update cart_has_product set quantity = (quantity+1) where (Cart_cartid = ? and Product_pid=?)",
                    [cost, cartid],
                    (err, result) => {
                      if (err) {
                        console.log(err);
                      }
                    }
                  );
                }
              }
            }
          );
        }
      }
    }
  );
});

app.post("/checkout", (req, res) => {
  const cartid = req.body.cartid;

  console.log("cartid", cartid);

  db.query(
    // console.log("YEAP done");
    "update cart set quantity = 0 where (cartid = ?)",
    cartid,
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );

  db.query(
    // console.log("YEAP done");
    "update cart set cost = 0 where (cartid = ?)",
    [cartid],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );

  db.query(
    // console.log("YEAP done");
    // DELETE FROM `finaldbmsproject`.`cart_has_product` WHERE (`Cart_cartid` = '1') and (`Product_pid` = '2');
    "delete from cart_has_product where (Cart_cartid = ? )",
    [cartid],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});


app.post('/totalSales',(req,res)=>{
  console.log('INSIDE totalSales')
  console.log(req.body)
  const year=req.body.year
  db.query("select sum(amount) as 'sales' from finaldbmsproject.order , (select Order_Details_oid id from finaldbmsproject.shipping where year(date_time) = (?)) as t1 where oid = id",
  [year],
  (err,result)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log('result is:',result)
          res.send(result)
      }
  }
  )
})


app.post('/countOrders',(req,res)=>{
  console.log('INSIDE COUNT ORDERS')
  db.query("select count(distinct oid) as 'orders' from finaldbmsproject.order;",
  (err,result)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log('result is:',result)
          res.send(result)
      }
  }
  )
})

app.post('/countCustomers',(req,res)=>{
  console.log('INSIDE COUNT CUSTOMERS')
  db.query("SELECT COUNT(distinct cid) as 'customers' From finaldbmsproject.customer",
  (err,result)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log('result is:',result)
          res.send(result)
      }
  }
  )
})


app.post('/pieChartData',(req,res)=>{
  
  db.query("select *, rank() over (order by D.cat desc) as s_rank from (SELECT catagory,Count(catagory) as 'cat' FROM ((order_has_product LEFT JOIN finaldbmsproject.order on finaldbmsproject.order.oid =  finaldbmsproject.order_has_product.Order_oid) LEFT JOIN finaldbmsproject.product on finaldbmsproject.order_has_product.Product_pid = finaldbmsproject.product.pid) GROUP BY catagory order by cat desc) as D;",(err,result)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log('result is:',result)
          res.send(result)
      }
  })
})

app.post('/productStock',(req,res)=>{
  db.query("Select * from finaldbmsproject.product order by stocks",(err,result)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log('result is:g',result)
          res.send(result)
      }
  }
  ) 
})

app.post('/employeeDetails',(req,res)=>{
  db.query("Select * from finaldbmsproject.empDetail",(err,result)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log('result is:',result)
          res.send(result)
      }
  }
  )
})