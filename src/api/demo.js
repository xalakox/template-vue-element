import request from '@/utils/request.js';

export function demo(results) {
  return request({
    url: 'https://randomuser.me/api/',
    method: 'get',
    params: {
      results: results
    }
  });
}