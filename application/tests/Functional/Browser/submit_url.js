require('../parameters');
casper.test.begin('Url submitting', 2, function suite(test) {
    casper.start('http://google.lt/', function() {
// search for 'casperjs' from google form
        this.fill('form[action="/search"]', { q: 'casperjs' },
            true);
    });casper.then(function () {
        this.capture('google.png');
    });
    casper.run(function () {
        test.done();
    });
});
