<script lang="ts" setup>
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { Spin } from 'ant-design-vue';

import loadSdk from './common/loadSdk';

const loading = ref(true);

// 加载 sdk，加载完成后隐藏 loading
loadSdk().then(() => {
  loading.value = false;
  // window.workbench.changeUIConfig();
  // window.workbench.setKeyboardValue('1820363867', '182****3867');
});
</script>

<template>
  <Page description="外呼系统" title="外呼系统">
    <Spin v-show="loading" class="spin" />
    <div v-show="!loading" id="workbench">外呼系统</div>
  </Page>
</template>

<style lang="less">
.spin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.workbench {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
