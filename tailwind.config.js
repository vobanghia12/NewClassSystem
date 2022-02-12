console.log(process.env.NODE_ENV);
const purge = process.env.NODE_ENV === 'production' ? true : false;
module.exports = {
  purge: {enabled: true, content: ['./view/**/*.html']},
  theme: {
    extend: {},
  },
  plugins: [],
}
