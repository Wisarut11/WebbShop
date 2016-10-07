angular.module("labb5Kundvagn")
    .controller("CartController", [
        "$scope",
        function ($scope) {
            $scope.title = "Cart";

            $scope.removeFromCart = function (index) {
                $scope.cart.splice(index, 1);
            }

            $scope.changeAmount = function (index, number) {
                if ($scope.cart[index].amount + number > 0)
                    $scope.cart[index].amount += number;
            }
        }
    ]);