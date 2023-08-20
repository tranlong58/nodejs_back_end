
const getHomePage = (req, res) => {
    res.send('Hello World with nodejs !!!');
}

const getABC = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage, getABC
}