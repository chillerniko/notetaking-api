import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';
import cors from "cors";

const app = express();
const PORT = 4300;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Nodetaking API v1'
    });
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT} >>>> `);
});


