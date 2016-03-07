var app = angular.module('meetup', []);

app.controller('meetupsController', ['$scope', function($scope) {
  $scope.meetups =
  [ {name:"Mean SF developers",speaker:"Mike Moser"},
  {name:"Mean TUC developers", speaker:"Marcos Ocón"} ]
  $scope.createMeetup = function(){
    $scope.meetups.push({ name: $scope.meetupName, speaker: $scope.meetupSpeaker });
    $scope.meetupName = '';
    $scope.meetupSpeaker = '';

  }

}]);
