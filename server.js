import express from 'express';
const app = express();


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));


app.listen(4000, ()=> {
    console.log("AL PURO CENTAVO, EL SERVER DEL KEVIN JALA")
})
export default app;