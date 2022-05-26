const router = require('express').Router();
const sequelize = require('../config/connection');

//to GET all blog posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: Post,
                    attributes: []
                },
            ],
        });

        const blogPosts = dbPostData.map((Post) => 
        this.post.get({ plain: true })
        );

        // sends in the loggedIn session variable to the 'homepage' template
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;