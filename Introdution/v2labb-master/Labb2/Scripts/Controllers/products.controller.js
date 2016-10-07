angular.module("mainModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Products";

            $scope.addToCart = function (product) {
                $scope.cart.push({
                    amount: 1,
                    product: product
                });
                console.log($scope.cart);
            };
        }
    ]);