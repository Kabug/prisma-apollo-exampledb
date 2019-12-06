const {ApolloServer, gql} = require("apollo-server");
const {importSchema} = require("graphql-import")
const {Prisma} = require("prisma-binding")
const typeDefsApollo = importSchema("./src/schema.graphql");
const typeDefsPrisma = importSchema("./src/generated/prisma.graphql")

const resolvers = {
  Query: {
    orders(parent, args, ctx, info){
      return ctx.db.query.orders({}, info)
    },
    order(parent, args, ctx, info){
      return ctx.db.query.order({where: {id: args.id}}, info)
    },
  },
  Mutation:{
    createOrder(parent, {createdby, createdbyemail, recipient, approvalmanager, businessunit, attention, shippingaddress, items, total, comments, itemtype, userstartdate, sla}, ctx, info){
      return ctx.db.mutation.createOrder(
        {
          data:{
            createdby, createdbyemail, recipient, approvalmanager, businessunit, attention, shippingaddress, items, total, comments, itemtype, userstartdate, sla
          },
        },
        info,
      )
    },
    deleteOrder(parent, {id}, ctx, info){
      return ctx.db.mutation.deleteOrder({where: {id}}, info)
    },
  },
}

const server = new ApolloServer({
  typeDefs: typeDefsApollo,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: typeDefsPrisma, // generated prisma db schema
      endpoint: "http://localhost:4466", // endpoint of prisma db service
      secret: "supahsecret123", // specified in database/prisma.yml
      debug: true,
    }),
  }),
});

server.listen().then(({url}) => {
  console.log(`Server is ready at ${url}`);
})
