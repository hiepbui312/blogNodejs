class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('hiep max dz');
    }
}

module.exports = new NewsController();
