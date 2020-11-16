import { registerMicroApps, setDefaultMountApp, start, runAfterFirstMounted } from 'qiankun';

import render from './VueRender';

render({ loading: true });

const loader = loading => render({ loading });

registerMicroApps(
  [
    {
      name: 'bigScreen',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      loader,
      activeRule: '/bigScreen',
    },
    {
      name: 'terryMusic',
      entry: '//localhost:8080',
      container: '#subapp-viewport',
      loader,
      activeRule: '/terryMusic',
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);


/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/bigScreen');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
