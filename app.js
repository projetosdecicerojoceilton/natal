const express = require("express")
const app = express()

app.use(express.json())

const port = process.env.PORT || 3000

var nome

app.get("/", (req, res) => {
	nome = req.query.nome
	res.sendFile(__dirname + "/src/index.html")
})

app.get("/nome", (req, res) => {
	res.send(nome)
})

app.get("/img/:imagem", (req, res) => {
	imagem = req.params.imagem
	res.sendFile(__dirname + "/src/img/" + imagem)
})

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})