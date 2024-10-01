const express =require('express') //expressi projeye dahil ettik
const app=express() //insteance ürettik

require('dotenv').config() //dotenv .env paketine erişebilmemizi sağlar
require('./src/config/databaseConnection')

const todoRouter=require("./src/routers/todoRouters")
const port=process.env.PORT || 8080 //porta erişemezse 5001 den başlasın

app.use(express.json())

app.use("/api", todoRouter)

app.get("/", (req, res) => {
    res.send("Hoş Geldiniz ...")
})

app.listen(port, () => {
    console.log(`Server ${port} Portundan Başlatıldı ...` );
})