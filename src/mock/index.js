import Mock from 'mockjs';
import homeApi from './home';

// 设置延时
Mock.setup({
    timeout: '200-2000'
});

Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData);
