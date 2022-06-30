/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,   //  purgeするかどうか
    content: ['./src/**/*']  // purge対象のファイル
  },
}
