const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    //   author: ObjectId,
    name: { type: String, default: '', maxLength: 255 },
    description: { type: String, default: '', maxLength: 600 },
    image: { type: String, default: '', maxLength: 255 },
    //lưu thời gian bản ghi được tạo
    createdAt: { type: Date, default: Date.now },
    //lưu thời gian bản ghi được cập nhật
    updatedAt: { type: Date, default: Date.now },
});

//default: '' có nghĩa là khi course thứ 2 mà k có name thì nó sẽ hiện ( name: '' )

module.exports = mongoose.model('Course', Course);
