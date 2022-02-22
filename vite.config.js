import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path'; // 主要用于alias文件路径别名
import { visualizer } from 'rollup-plugin-visualizer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

function pathResolve(dir) {
  return resolve(__dirname, dir);
}

let plugins = [];
// 打包生产环境才引入的插件
if (process.env.NODE_ENV === 'production') {
  // 打包依赖展示
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  );
}

export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    ...plugins,
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',

      /**
       * custom insert position
       * @default: body-last
       */
      inject: 'body-last' | 'body-first',

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__'
    })
  ],
  // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  build: {
    target: 'modules',
    sourcemap: false,
    outDir: 'dist', //指定输出路径
    assetsDir: 'static', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    },
    // 取消计算文件大小，加快打包速度
    brotliSize: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  // 本地运行配置，及反向代理配置
  server: {
    //  cors: true, // 默认启用并允许任何源
    host: '0.0.0.0',
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    port: 3000,
    strictPort: false, //如果端口占用，是退出，还是尝试其他端口
    https: false, // 是否开启 https
    //反向代理配置，注意rewrite写法
    proxy: {
      '/api': {
        target: process.env.VITE_VUE_APP_ENV, //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
