/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        function ($scope, $location, $route) {
            $scope.$route = $route;

            $scope.cart = [];

            $scope.categories = [
                {
                    id: 1,
                    name: "Category 1",
                    products: [
                        {
                            id: 1,
                            name: "Product 1",
                            categoryId: 1,
                            description: "Product 1 description",
                            imageUrl: "http://placehold.it/200x400",
                            thumbnailUrl: "http://placehold.it/80x80",
                            largeImageUrl: "http://placehold.it/1920x500"
                        },
                        {
                            id: 2,
                            name: "Product 2",
                            categoryId: 1,
                            description: "Product 2 description",
                            imageUrl: "http://placehold.it/200x400",
                            thumbnailUrl: "http://placehold.it/80x80",
                            largeImageUrl: "http://placehold.it/1920x500"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Category 2",
                    products: [
                        {
                            id: 3,
                            name: "Product 3",
                            categoryId: 2,
                            description: "Product 3 description",
                            imageUrl: "http://placehold.it/200x400",
                            thumbnailUrl: "http://placehold.it/80x80",
                            largeImageUrl: "http://placehold.it/1920x500"
                        },
                        {
                            id: 4,
                            name: "Product 4",
                            categoryId: 2,
                            description: "Product 4 description",
                            imageUrl: "http://placehold.it/200x400",
                            thumbnailUrl: "http://placehold.it/80x80",
                            largeImageUrl: "http://placehold.it/1920x500"
                        }
                    ]
                }
            ];

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);