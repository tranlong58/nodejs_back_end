require('dotenv').config();
const express = require('express');
const cors = require('cors');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config CORS middleware
app.use(cors());

//config template engine
configViewEngine(app);

//khai báo route
app.use('/api', apiRoutes);
app.use('/', webRoutes);

//test connection
// connection.query(
//     'select * from Users',
//     function (err, results, fields) {
//         console.log(results);
//     }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});