const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

//dùng để cấu hình middleware static cho ứng dụng Express (SCSS)
app.use(express.static(path.join(__dirname, 'public')));

//middleware (có cài này thì req.body ở post mới in ra được (còn req.query thì không cần))
app.use(
    express.urlencoded({
        extended: true,
    }),
); // xử lí submit form
app.use(express.json()); // submit html, hoặc sử dụng các thư viện:
// XMLHttpRequest, fetch, axios, ajax...

app.use(methodOverride('_method')); // dùng để sử dụng phương phức mà mình muốn (PUT,...)

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs', //đổi từ handlebars thành hbs cho ngắn (đổi cả đuôi .handlebars)
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
// app.set('views', './views');
app.set('views', path.join(__dirname, 'resources', 'views')); //'resources', 'views' or 'resources/views'
console.log('PATH', __dirname); //chỉ tới thư mục chứa view (tới src)

// routes init
route(app);

//127.0.0.1 -> localhost
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

//nodemon (npm i nodemon  --save-dev)
//nodemon dùng để khi thay đổi tên đường dẫn thì không phải chạy lại (cứ thêm code là nó chạy lại)
//và --inspect sinh ra devTools Nodejs, hiển thị ra phần chạy nodejs
// và debug (có thể rà soát từng dòng để kiểm tra lỗi)

//morgan (npm i morgan  --save-dev)
// giúp khi reload lại trang web thì sẽ hiển thị ở dưới thanh termaial (mục đích dễ tìm ra nguyên nhân lỗi)

//thay vì ta sử dụng <h1 style="color:red;">Hello World!</h1> thì ta dùng handlebars
