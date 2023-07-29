const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const app = express()
const port = 7547

app.use(express.json())
const upload = multer()
app.use(bodyParser.urlencoded({ extended: false }))

app.all("/", upload.none(), (req, res) => {
  console.log(`Recebida uma requisição ${req.method} na rota ${req.originalUrl}`)
  console.log(req.body)
  res.send("Recebido com sucesso!")
})

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})
