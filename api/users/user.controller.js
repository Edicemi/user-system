const bcrypt = require('bcrypt');
const db = require("../../db")

module.exports = {
    createUser: async(req, res) => {

        try {

            const body = req.body;
            const salt = await bcrypt.genSaltSync(10);
            const password = await bcrypt.hashSync(body.password, salt);

            const result = await db.execute("insert into register(firstname, lastname, email, password)values(?,?,?,?)", [
                body.first_name,
                body.last_name,
                body.email,
                password
            ])

            return res.json({
                result
            })

        } catch (err) {

            console.log(err)
        }
    },
    login: async(req, res) => {

        try {
            const email = req.body.email;
            const password = req.body.password;
            const result = await db.execute(`SELECT  *  FROM register WHERE register.email = "${email}"`);
            console.log(result[0][0].password)
            const doMatch = await bcrypt.compareSync(password, result[0][0].password);
            if (!doMatch) {

                throw new Error("Incorrect password")
                const jsontoke = sign({ results: result }, );
            }


        } catch (error) {
            console.log(error)
        }
    }

};