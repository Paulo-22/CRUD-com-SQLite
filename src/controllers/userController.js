
export const getAllUsers = (req,res) => {
    res.status(200).json({
        mensagem: "Rota GET users funcionando"
    })
}
export const postAllusers = (req, res) => {
    const {nome,email} = req.body
    res.status(201).json({
        nome:nome,
        email:email
    })
}