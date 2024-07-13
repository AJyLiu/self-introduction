import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
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
    })
  ],
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
        additionalData: '@import "./src/assets/style/global.less";',
      },
    }
  }  
})
