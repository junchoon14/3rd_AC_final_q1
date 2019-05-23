module.exports = logger = (options) => {
  return logger = (req, res, next) => {
    let date = new Date()
    console.log(date.toLocaleString(), '|', req.method, 'from', req.url)
    next()
  }
}
