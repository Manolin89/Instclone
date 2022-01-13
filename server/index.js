const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolver = require("./gql/resolver")
require("dotenv").config({ path: ".env" });
 
console.log(process.env.BBDD)

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  }, 
  (err, _) => {
    if(err) {
        console.log("Error de conexion");
    } else {
        server();
    }
});

function server() {
    const serverApollo = new ApolloServer ({
        typeDefs,
        resolver,
    });

    serverApollo.listen().then(({url}) => {
        console.log(`Servidor listo en la url ${url}`);
    });
}