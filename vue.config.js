const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   devServer: {
//     proxy: {
//       '^/api': {
//         target: 'https://cloudinventory.nustrastudio.com',  // Replace with the actual API URL
//         ws: true,
//         changeOrigin: true
//       }
//     }
//   }
// }
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://inventory.cinta-bunda.com', // Change this to your target server
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
