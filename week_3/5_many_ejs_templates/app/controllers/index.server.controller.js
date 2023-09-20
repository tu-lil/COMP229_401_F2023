exports.render = function (req, res) {
    res.render('index', {
        title: 'Home',
        browserTitle: 'ejs example'
    })
};
