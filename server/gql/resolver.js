const userController = require("../controller/user")

const resolver = {
    Query: {
        //User
        getUser: () => {
            console.log("Obteniendo usuario");
            return null;
        },
    },
    Mutation: {
        //User
        register: (_, {input}) => {
            console.log("Registrando usuario");
            userController.register(input);
        },
        //Login
        login: (_, {input}) => {
            userController.login(input);
        }
    },
};

module.exports = resolver;