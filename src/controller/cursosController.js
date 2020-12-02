const data = require('../../assets/dataCurso')
const cursoController = {

    index: (req, res) => {
        res.render('index', { data })
    },

    show: (req, res) => {
        const { id } = req.params
        const [course] = data.filter(d => d.id == id)
            // return res.send(course);
        return res.render('descricao', { course })
    },

}

module.exports = cursoController