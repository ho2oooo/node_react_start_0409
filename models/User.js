/* Mongoose 스키마 정의하기 */
/* 몽구스 모듈에서 Schema 생성자를 사용해 스키마를 만듭니다.
  몽구스는 알아서 _id를 기본 키로 생성하므로 _id 필드는 적어줄 필요가 없습니다.  */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unuque: true,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
