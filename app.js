// 請在下面的 app.js 檔案裡，撰寫你需要的 middleware，讓收到瀏覽器的請求(req) 時，應用程式會把請求的 HTTP 方法、網址(url) 、讓時間戳記(time - stamps) ，顯示到終端機上，像這樣：

// 2019 - 5 - 17 18: 51: 12 | GET from /

const express = require('express')
const app = express()
const port = 3000

let logger = require('./myLogger.js')

app.use(logger())

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
