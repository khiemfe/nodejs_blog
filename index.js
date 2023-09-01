const express = require('express')
const app = express()
const port = 3000

//route
app.get('/trang-chu', (req, res) => {
    var a = 1
    var b = 2
    var c = a + b
    res.send('Hello World!')
})

//127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/trang-chu`)
})

//nodemon dùng để khi thay đổi tên đường dẫn thì không phải chạy lại (cứ thêm code là nó chạy lại)
//và --inspect sinh ra devTools Nodejs, hiển thị ra phần chạy nodejs
// và debug (có thể rà soát từng dòng để kiểm tra lỗi)