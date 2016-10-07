angular.module("labb5Kundvagn")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })
                .when("/Product", {
                    templateUrl: "Views/Product.html",
                    controller: "ProductController",
                    caseInsensitiveMatch: true,
                    activeTab: "Product"
                })
                .when("/Cart", {
                    templateUrl: "Views/Cart.html",
                    controller: "CartController",
                    caseInsensitiveMatch: true,
                    activeTab: "Cart"
                });
        }
    ]);