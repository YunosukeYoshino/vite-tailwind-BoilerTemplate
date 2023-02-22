import fs from 'fs';

const { resolve } = require('path');

const root = './src';

/*
* htmlファイルのみ抽出
*/
const fileNameList = fs.readdirSync(resolve(__dirname, './src/'));

const htmlFileList = fileNameList.filter(file => /.html$/.test(file));

const inputFiles = {};
for (let i = 0; i < htmlFileList.length; i++) {
  const file = htmlFileList[i]; inputFiles[file.slice(0, -5)] = resolve(__dirname, './src/' + file);
}


module.exports = {
  root: root,
  publicDir: 'public',
  publicPath: './',
  base: "./",
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    //出力場所の指定
    rollupOptions: {
      //ファイル出力設定
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          //Webフォントファイルの振り分け
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = 'fonts';
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          //ビルド時のCSS名を明記してコントロールする
          if (extType === 'css') {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
      input: inputFiles,

    }
  }
};
