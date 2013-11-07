beforeEach(function(){
    jasmine.addMatchers({
        toBeWithinDelta: function(_) {
            return {
                compare: function(actual, expected, delta){
                    var result = {};

                    result.pass = actual >= (expected-delta) && actual <= (expected+delta);

                    if(result.pass){
                        result.message = "Expected " + actual + " to not be within [" + (expected-delta) + "/" + (expected+delta) + "]";
                    }
                    else{
                        result.message = "Expected " + actual + " to be within [" + (expected-delta) + "/" + (expected+delta) + "]";
                    }

                    return result;
                }
            };
        }
    });
});
