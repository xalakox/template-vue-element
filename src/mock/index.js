import mock from 'mockjs';

mock.mock('/demo', 'get', options => {
  window.console.log(options);
  return {
    A: 1,
    B: 2,
    C: 3,
    D: 4
  };
});