const { Router } = require('express')
const router = Router()

router.post('/register', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'something goes wrong, try another way' })
  }
})

router.post('/login', async (req, res) => {
  try {
  } catch (error) {}
})

module.exports = router
