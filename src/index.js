const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const morgan = require('morgan') 
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined')) 

//Template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs' //đổi từ handlebars thành hbs cho ngắn (đổi cả đuôi .handlebars)
})) 
app.set('view engine', 'hbs');
// app.set('views', './views');
app.set('views', path.join(__dirname, 'resources/views'));
console.log("PATH",__dirname) //chỉ tới thư mục chứa view (tới src)

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

//route
app.get('/trang-chu', (req, res) => {
    res.send('Hello World!')
})
 
//127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/trang-chu`)
})

//nodemon (npm i nodemon  --save-dev)  
//nodemon dùng để khi thay đổi tên đường dẫn thì không phải chạy lại (cứ thêm code là nó chạy lại)
//và --inspect sinh ra devTools Nodejs, hiển thị ra phần chạy nodejs
// và debug (có thể rà soát từng dòng để kiểm tra lỗi)

//morgan (npm i morgan  --save-dev)
// giúp khi reload lại trang web thì sẽ hiển thị ở dưới thanh termaial (mục đích dễ tìm ra nguyên nhân lỗi)

//thay vì ta sử dụng <h1 style="color:red;">Hello World!</h1> thì ta dùng handlebars