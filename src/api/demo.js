import request from '@/utils/request.js';
import mock from 'mockjs';

export function demoApi(results) {
  return request.get('https://randomuser.me/api/', {
    params: {
      results
    }
  });
}

export function demoMock1() {
  const _res = mock.mock({
    'A|1-100': 1,
    'B|1-100.1-2': 1,
    'C|1': true,
    'D|2': [{
      a: 1,
      b: 2
    }],
    'E': '@string',
    'F': '@date',
    'G': '@time',
    'H': '@title',
    'I': '@name',
    'J': '@domain',
    'K': '@email',
    'L': '@ip',
    'M': '@guid',
    'N': '@ctitle',
    'O': '@csentence',
    'P': '@region',
    'Q': '@province',
    'R': '@city'
  });
  return new Promise(resolve => resolve(_res));
}

export function demoMock2() {
  return request.get('/demo');
}