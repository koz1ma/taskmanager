'use strict';

/**
 * @ngdoc service
 * @name appApp.taskService
 * @description
 * # taskService
 * Service in the appApp.
 */
angular.module('appApp')
  .service('taskService', function ($http, HOST) {
    var service = {};

        service.getTasks = function (callback, callbackError) {
            $http.get(HOST.baseUrl+'/tasks.json')
                .then(function (response) {
                    callback(response);
                }, function (response){
                    callbackError(response);
                }
            );
 
        };
 
        service.addTask = function (task , callback, callbackError) {
            $http.post(HOST.baseUrl+'/tasks/add.json', task)
                .then(function (response) {
                    callback(response);
            	}, function (response){
                    callbackError(response);
                }
            );
 
        };

        service.editTask = function (task, callback, callbackError) {
            $http.put(HOST.baseUrl+'/tasks/edit/'+task.id+'.json', task)
                .then(function (response) {
                    callback(response);
                }, function (response){
                    callbackError(response);
                }
            );
 
        };

        service.deleteTask = function (id, callback, callbackError) {
            $http.delete(HOST.baseUrl+'/tasks/delete/'+id+'.json')
                .then(function (response) {
                    callback(response);
                }, function (response){
                    callbackError(response);
                }
            );
 
        };
  
        return service;
  });
  
