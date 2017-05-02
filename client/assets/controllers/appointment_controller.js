
      
      


app.controller('appointment_controller', function($scope, $routeParams, $location, user_factory, appointment_factory, dashboard_factory)
{


    user_factory.getUser(function(data)
    {
		$scope.user = data;
		// got user, now create poll with user info
		// console.log($scope.user);
	})

	function setAppointment(data)
    {
        $scope.appointment = data;
        console.log('$scope.appointment',$scope.appointment)
    }


      $scope.create_appointment = function()
      {
        console.log('inside create_appointment')
        console.log('$scope.newAppointment',$scope.newAppointment)
        if($scope.newAppointment.complain.length>10)
        {
        	console.log('greater than 10 complain')
        	$scope.error = {};
        	var user = $scope.user
        	console.log('user',user)
        	appointment_factory.create_appointment($scope.newAppointment,user,setAppointment)
        	$scope.newAppointment = {};
        	$location.url('/dashboard')

        }
        else
        {
        	$scope.error = {complain_length: 'Your complain must be at least 10 characters long'}
        }
        
      }


      
    })
      



