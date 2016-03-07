var app = angular.module('meetup',['ngResource']);

app.controller('meetupsController', ['$scope','$resource', function($scope, $resource) {

  var Meetup = $resource('/api/meetups');

  $scope.meetups =
  [ {name:"Mean SF developers",speaker:"Mike Moser"},
  {name:"Mean TUC developers", speaker:"Marcos Ocón"} ]

  $scope.createMeetup = function(){
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.speaker = $scope.meetupSpeaker;
    meetup.$save();
  }
}]);
