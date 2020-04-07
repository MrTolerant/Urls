const { Router } = require('express')
const Link = require('../models/Link')
const router = Router()

router.get('/:code', async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code })
    if (link) {
      link.clicks += 1
      await link.save()
      console.log('link.from:', link.from)

      if (!link.from.match(/^[a-zA-Z]+:\/\//)) {
        link.from = 'http://' + link.from
        console.log('redirectto:', link.from)
      }
      console.log(link.from)
      return res.redirect(link.from)
    }
    res.status(404).json({ message: 'URL not found' })
  } catch (error) {
    res.status(500).json({
      message: `something goes wrong, try another way.${error.message}`
    })
  }
})
module.exports = router
