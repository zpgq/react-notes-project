const path = require("path");
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      //配置路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  babel: {
    //按需加载antd样式
    plugins: [["import", { libraryName: "antd", style: true }]],
  },
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js']
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       loader: 'ts-loader'
  //     }
  //   ]
  // },
  plugins: [
    {
      //配置antd主题
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};