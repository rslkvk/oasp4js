angular.module('oasp-security', [])
    .config(function ($httpProvider) {
        'use strict';
        $httpProvider.interceptors.push('oaspSecurityInterceptor');
    })
    .run(function (oaspSecurityService) {
        'use strict';
        oaspSecurityService.checkIfUserIsLoggedInAndIfSoReinitializeAppContext();
    });
