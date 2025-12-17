var Environment;
(function (Environment) {
    Environment["Local"] = "local";
    Environment["Development"] = "development";
    Environment["Staging"] = "stagig";
    Environment["Production"] = "production";
})(Environment || (Environment = {}));
function runTest(env) {
    console.log("Test scripts runs in ${env}");
}
runTest(Environment.Local);
