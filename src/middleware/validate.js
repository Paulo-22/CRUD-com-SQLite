export function validate (schema){
    return (req, res, next) => {
        
        try {
            /*Validar o corpo da requisição contra 
            schema fornecido*/
            const validatedData = schema.parse(req.body)

            /**Substituir o body pelos dados validados */
            req.body = validatedData

            /**Chamo o próximo agente(middleware) */
            next()
        } catch (error) {
            return res.status(400).json({
                mensagem: "Erro de validação",
                erros: error.errors.map(e => ({
                    path: e.path.join('.'),
                    message: e.message
                })) 
            })
        }
    }
}