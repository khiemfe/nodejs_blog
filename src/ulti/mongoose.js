// const { default: mongoose } = require("mongoose")

//chuyển courses từ obj property thành obj bình thường(để qua lớp bảo mật)
module.exports = {
    // muốn lấy một mảng (list)
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
