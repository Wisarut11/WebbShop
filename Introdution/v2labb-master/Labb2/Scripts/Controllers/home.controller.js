/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";

            $scope.carouselImages = [
                {
                    url: $scope.categories[0].products[0].largeImageUrl,
                    alt: "alt text",
                    caption: {
                        header: $scope.categories[0].products[0].name,
                        body: $scope.categories[0].products[0].description
                    }
                },
                {
                    url: $scope.categories[1].products[0].largeImageUrl,
                    alt: "alt text",
                    caption: {
                        header: $scope.categories[1].products[0].name,
                        body: $scope.categories[1].products[0].description
                    }
                }
            ];
        }
    ]);