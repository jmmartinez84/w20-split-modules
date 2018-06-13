define(function () {
    var VersionFilter = function () {
        return function (input) {
            if (input) {
                if (input.length == 0) {
                    return input;
                }else{
                    return "v"+input;
                }
            } 
        }
    }
    return [ VersionFilter ]
});