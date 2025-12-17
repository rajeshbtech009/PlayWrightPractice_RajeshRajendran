enum Environment{
    Local= "local",
    Development = "development",
    Staging = "stagig",
    Production = "production"
};

function runTest(env:Environment):void{
console.log('Test scripts runs in ${env}');
}

runTest(Environment.Local)