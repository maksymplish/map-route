;
(function ($) {
    function initMap() {
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        let mapCenter = {
            lat: 48.7610347,
            lng: 31.5052812
        };
		  
        let newMap = new google.maps.Map(document.getElementById('map'), {
            center: mapCenter,
            zoom: 6.52
        });

        directionsDisplay.setMap(newMap);

        let onChangeHandler = function () {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
        };

        document.querySelector('.ba-form').addEventListener('submit', function(e){ e.preventDefault();
        });
        document.querySelector('.ba-form').addEventListener('submit', onChangeHandler);
        
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
            directionsService.route({
                origin: document.getElementById('start').value,
                destination: document.getElementById('finish').value,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });

        }
    }

        $(document).ready(function (e) {
            initMap();
        });
})(jQuery);