import Vue from 'vue'
import toastr from 'toastr'
import {router} from './../routes/routes'

const requestTypes = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  DELETE: 'delete'
};

var actions = {};

function fetchData({commit, state}, commitType, route, params) {
  makeRequest(commit, state, commitType, route, params, requestTypes.GET)
}

function postData({commit, state}, commitType, route, params) {
  makeRequest(commit, state, commitType, route, params, requestTypes.POST)
}

function putData({commit, state}, commitType, route, params) {
  makeRequest(commit, state, commitType, route, params, requestTypes.PUT)
}
function deleteData({commit, state}, commitType, route, params) {
  makeRequest(commit, state, commitType, route, params, requestTypes.DELETE)
}

function makeRequest(commit, state, commitType, route, params, requestType) {
  if (state.token) {
    Vue.http.headers.common['authorization'] = state.token;
  }
  commit(types.SET_ERROR_MESSAGE, "");
  if (requestType != requestTypes.GET) {
    Vue.http[requestType](route, params.data).then((response) => {
      handleSuccess(response);
    }, (response) => {
      handleError(response, commit, state);
    })
  } else {
    Vue.http[requestType](route).then((response) => {
      handleSuccess(response);
    }, (response) => {
      handleError(response, commit, state);
      if (params && params.errorMessage) {
        var messageHeader = params.messageHeader ? params.messageHeader : 'Something went wrong!';
        toastr.error(messageHeader, params.errorMessage, {timeOut: 1500})
      }
    })
  }

  function handleSuccess(response) {
    if (commitType && commitType !== types.NO_COMMIT) {
      var commitData = requestType == requestTypes.DELETE ? params : response.data;
      commit(commitType, commitData);
    }
    callSuccessCallback(params, response);
    if (params && params.message) {
      var messageHeader = params.messageHeader ? params.messageHeader : params.message;
      toastr.success(params.message, messageHeader, {timeout: 1000})
    }
  }
}

function handleError(response, commit, state) {
  if (response.data && response.data.message) {
    commit(types.SET_ERROR_MESSAGE, response.data.message);
    toastr.error(response.data.message, "Something went wrong!");
  }
  else {
    var msg = "Could not connect to the server";
    if (response.status != 0) {
      msg = response.statusText;
    }
    if (response.status == 401) {
      msg = "It seems that you are not authorized! Logging you out...";
      commit(types.SET_REDIRECT_TO_LOGIN, true);
      setTimeout(() => {
        router.push({path: "/"});
        msg = "Your session has expired. Please login again";
        commit(types.SET_ERROR_MESSAGE, msg)
      }, 1500);
    }
    commit(types.SET_ERROR_MESSAGE, msg);
    toastr.error(msg, "Something went wrong!", {timeOut: 1500});
  }
}
function callSuccessCallback(params, response) {
  if (params && params.successCallback && typeof params.successCallback == 'function')
    params.successCallback(response.data);
}
export {
  actions
}
