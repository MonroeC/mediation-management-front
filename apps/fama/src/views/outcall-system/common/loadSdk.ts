import {
  webWorkbenchSdkCss,
  webWorkbenchSdkImCss,
  webWorkbenchSdkImJs,
  webWorkbenchSdkJs,
} from '../constants/outCall';

const link = async () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = webWorkbenchSdkCss;
  link.type = 'text/css';
  document.head.append(link);
  await new Promise((resolve) => {
    link.addEventListener('load', () => {
      resolve(true);
    });
  });
};

const script = async () => {
  const script = document.createElement('script');
  script.src = webWorkbenchSdkJs;
  document.body.append(script);
  await new Promise((resolve) => {
    script.addEventListener('load', () => {
      resolve(true);
    });
  });
};

const linkIm = async () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = webWorkbenchSdkImCss;
  link.type = 'text/css';
  document.head.append(link);
  await new Promise((resolve) => {
    link.addEventListener('load', () => {
      resolve(true);
    });
  });
};

const scriptIm = async () => {
  const script = document.createElement('script');
  script.src = webWorkbenchSdkImJs;
  document.body.append(script);
  await new Promise((resolve) => {
    script.addEventListener('load', () => {
      resolve(true);
    });
  });
};

const loadSdk = async () => {
  await link();
  await linkIm();
  await script();
  await scriptIm();
  console.log('CCCWorkbenchSDK loaded');
  window.workbench = new window.CCCWorkbenchSDK({
    ajaxOrigin: 'http://47.96.1.13:8081',
    ajaxPath: '/aliyun/ccc/api',
    dom: 'workbench',
    /* config */
    instanceId: 'demo-1944005556568121',
  });
};

export default loadSdk;
