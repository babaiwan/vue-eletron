const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      // 禁用自动安装 Vue Devtools
      disableElectronDevtoolsInstallation: true
    }
  }
});
