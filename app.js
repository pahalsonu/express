const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require("path")
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// app.use((req, res, next) =>{
//     console.log(req.query);
//     console.log("i am the primary hit")
//     console.log(req.body)
//     next();
// });

// app.use((req, res, next) =>{
//     console.log(req.query);
//     console.log("i am the secondry hit hit")
//     next();

// });



// app.get("", (req, res) => {
//     res.send("Hello World")
//  })

// app.get("/hello", (req, res) => {
//     res.json({status: "success. You are at /hello path"})
// })

/* clientData :
1.)Query Params3. 
2.)body object

install
3.) http method
4.)headers
5.)path
6.) router params
path*/


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

// dynamci path name , type below function and run http://localhost:3000/home/sonu/bootcamper/pahal
// app.get('/home/:id/bootcamper/:name', (req, res) => {
//     //query params
//     console.log(req.params)
//     res.end()
// })
//out put
// { id: 'sonu', name: 'pahal' }

// app.get('/ab*', (req, res) => {
//     //query params
//     // console.log(req.params)
//     res.send('you can access any path start with ab, like aby, abimm anything')
// })

// app.get('/flights/:from-:to*', (req, res) => {
//     //query params
//     console.log(req.params)
//     res.send('after path just give symbol')
// })
// http://localhost:3000/flights/Delhi-Amastardam
// { '0': '', from: 'Delhi', to: 'Amastardam' }

//queries
// app.all('/:uname', (req, res) => {
//     //query params
//     console.log(req.query);
//     console.log(req.params)
//     res.send('after path just give symbol');
//     console.log(req.method);
//     console.log(req.headers);
//     console.log()
// })

/*home route learing middleware concept */
// app.get('/home', (req, res, next) => {
//     //query params
//     console.log(req.query);
//     console.log("i am hit 1");
//      req.some_value = "hello"
//     res.send('query params');
//     next();

// }, (req, res, next) => {
//     console.log(req.some_value);
//     console.log(req.query);
//     next();

// }
//     , (req, res) => {
//         console.log("i am hit 3");
//         console.log(req.query);
//     });
//not working check again
// const cb0 = (req, res, next) => {
//     //query params
//     console.log(req.query);
//     console.log("i am hit 1");
//     req.some_value = "hello"
//     res.send('query params');
//     next();
// };

// const cb1 = (req, res, next) => {
//     //query params
//     console.log(req.query);
//     console.log("i am hit 2");
//     req.some_value = "hello"
//     res.send('query params');
//     next();
// };

// const cb2 = (req, res, next) => {
//     //query params
//     console.log(req.query);
//     console.log("i am hit 2");
//     req.some_value = "hello"
//     res.send('query params');
// };
// app.get("/root", cb0, cb1, cb2)
//add two numbers
// app.get('/add/:number1/:number2*', (req, res) => {
//     //query params
//     console.log(parseInt (req.params.number1)+parseInt((req.params.number2)))

//     res.send()
// });


// app.get('/hello', (req, res) => {
//     //query params

//     res.send("hello")
// });

// app.get('/:somepath', (req, res) => {
//     //query params

//     res.send(req.params)
// });

// const pdfpath = path.join(__dirname, 'd.pdf')
// app.get('/download', (req, res) => {
//     //query params
//     console.log(pdfpath)
//     res.download(pdfpath)
// });

// app.get('/redirect', (req, res) => {
//     //query params
//     console.log(pdfpath)
//     res.redirect('/hello')
// });


// app.get('/hello', (req, res) => {
//     //query params

//     res.sendStatus(301)
// });

app.get('/hello', (req, res) => {
    //query params

    res.status(301).json({ "err": "moved" })
});

// http://localhost:3000/flights/Delhi-Amastardam
// { '0': '', from: 'Delhi', to: 'Amastardam' }


//next() example 2

//why express over node.js
//mvc model view controller
//middleware 



app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
