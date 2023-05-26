const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));  //เรียกใช้ file index_16.html ใน path public/src/index_16.html

app.set("views", "./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) =>{
     res.render("products");
}
);

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'Sapphaya', customers: ["Sapphaya", "Snacknoii", "Thailand"] });

})

app.listen(PORT, () => {
    debug("Listerning on port : " + chalk.yellow(PORT));
})