const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// app.get("", (req, res) => {
//     res.send("Hello World")
//  })

app.get("/hello", (req, res) => {
    res.json({status: "success. You are at /hello path"})
})

/* clientData :
1.)Query Params3. body object
2. http method
5.
path*/

app.get('/', (req, res) => {
    //query params
    console.log(req.params)
    res.end()
})

// app.post("/hello", (req, res) => {
//     res.json({status: "success. You are at /hello path"})
// });

// app.put("/hello", (req, res) => {
//     res.json({status: "success. You are at /hello path"})
// });

// app.delete("/hello", (req, res) => {
//     res.json({status: "success. You are at /hello path"})
// });
// //for all
// app.all("/hello", (req, res) => {
//     res.json({status: "success. You are at /hello path"});
//     console.log(req.method) }
//     );






app.listen(port, ()=>{
console.log(`Server Started at ${port}`)
})
