
var http;
var q;

function request(method, url, params={}) {
  return http({
    method,
    url,
    params
  });
}

export function setHttp(_http) {
  http = _http;
}

export function getPromise() {
  return q.defer();
}

export function setQ(_q) {
  q = _q;
}

export function get(url, params) {
  return request('get', url, params);
}

export function post(url, params) {
  return request('post', url, params);
}