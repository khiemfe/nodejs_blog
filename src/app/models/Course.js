const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator')
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        //   author: ObjectId,
        name: { type: String, default: '', required: true, maxLength: 255 },
        description: { type: String, default: '', maxLength: 600 },
        image: { type: String, default: '', maxLength: 255 },
        videoID: { type: String, default: '', required: true, maxLength: 255 },
        level: { type: String, default: '', maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },

        //lưu thời gian bản ghi được tạo
        // createdAt: { type: Date, default: Date.now },
        //lưu thời gian bản ghi được cập nhật
        // updatedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
//{ overrideMethods: 'all' } là không hiển thị tất cả các database có deleted: true

//default: '' có nghĩa là khi course thứ 2 mà k có name thì nó sẽ hiện ( name: '' )
// required: true bắt buộc nhập
//unique: true: chỉ tồn tại duy nhất 1 cái, tránh trùng slug khi đặt trùng name
module.exports = mongoose.model('Course', Course);
