import request from '@/utils/request.js';
import mock from 'mockjs';

export function demoApi(results) {
  return request({
    url: 'https://randomuser.me/api/',
    method: 'get',
    params: {
      results: results
    }
  });
}

export function demoMock() {
  // http://mockjs.com/examples.html
  const _data = mock.mock({
    'A|1-10': '★',
    'B|1-100': 1,
    'C|1-100.1-2': 1,
    'D|1': true,
    'E|2': [{
      a: 1,
      b: 2
    }],
    'F': '@string',
    'G': '@date',
    'H': '@time',
    'I': '@title',
    'J': '@csentence',
    'K': '@name',
    'L': '@domain',
    'M': '@email',
    'N': '@ip',
    'O': '@province',
    'P': '@guid'
  });
  return new Promise(resolve => resolve(_data));
}