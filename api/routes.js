const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { show } = req.query // this is the same as const show = req.query.show

        superagent
            .get('https://api.spotify.com/v1/search?q='+ show +'&type=artist')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })

    router.get('/api/details', (req, res) => {
        const { artist } = req.query // this is the same as const show = req.query.show

        superagent
            .get('https://api.spotify.com/v1/artists/'+artist+'/albums?album_type=album&market=US') //I use this one to avoid duplicates




            /*.get('https://api.spotify.com/v1/artists/'+artist+'/albums')*/ //we can also use this spotify api 



           .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
                
            })
    })

  router.get('/api/artimage', (req, res) => {
        const { artist1 } = req.query // this is the same as const show = req.query.show

        superagent
            .get('https://api.spotify.com/v1/artists/'+artist1+'') //I use this 


           .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
                
            })
    })





    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}