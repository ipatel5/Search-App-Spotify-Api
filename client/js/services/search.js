angular.module('TVMazeSrvc', [])
    .factory('TVMazeService', function($resource) {
        return {
            search: $resource('/api/search'),
            details: $resource('/api/details'),
           artimage:$resource('/api/artimage')
            // detail: ???
        }
    })