import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
 
export default defineConfig({
  base: './',
  publicDir: 'public',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 按需加载自定义组件
    Components({
      dirs: ['src/components'], // 组件位置
      extensions: ['vue'], // 组件的有效扩展名
      deep: true, // 搜索子目录
      resolvers: [ElementPlusResolver()], // 自定义组件的解析器
    }),
    // gzip压缩
    viteCompression({
      verbose: true, // 默认即可
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 5120, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' // 文件类型
    }) 
  ],
  // 打包配置
  build: {
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    outDir: 'dist', // 指定输出路径
    assetsDir: 'public/assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true, // 打包时删除console
        drop_debugger: true, // 打包时删除debugger
        pure_funcs: ['console.log']
      },
      output: {
        //去掉注释内容
        comments: true
      }
    },
    rollupOptions: {
      output: {
        // chunkFileNames: 'public/assets/js/[name]-[hash].js',
        // entryFileNames: 'public/assets/js/[name]-[hash].js',
        // assetFileNames: 'public/assets/[ext]/[name]-[hash].[ext]',
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
          return;
        } 
      }
    }
  }, 
  server: {
    port: 8080,
  },
  resolve: {
    // 别名
    alias: {
      '@': resolve(__dirname, 'src')
    },
    // 忽略后缀
    extensions: ['.js', '.vue', '.ts', '.less', '.css']
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        math: 'always', // 支持直接使用表达式100% - 30px
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";'
      }
    }
  }
})