angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, TVMazeService) {

        $scope.searchShow = () => {
            TVMazeService.search.get({
                show: $scope.showname
            }, (response) => {
                /*console.log(response)*/
                $scope.albumdetail = null
                $scope.aa = response
            })
        }





$scope.bbbb = (aid) => {
            TVMazeService.details.get({
                artist: aid

               
            }, (response) => {
                console.log(response)

                $scope.aa = null
                $scope.albumdetail= response
            })
        }


$scope.artfimage = (atid) => {

            TVMazeService.artimage.get({
                artist1: atid

               
            }, (response) => {
                console.log(response)

                $scope.aa = null
                $scope.resultart= response


            })
        }




    })