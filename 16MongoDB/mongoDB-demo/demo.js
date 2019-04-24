var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', {name: String});

for (var i = 0; i < 100; i++) {
    var kitty = new Cat({name: 'Zildjian'});

    kitty.save(function (err) {
        if (err) {

        } else {
            console.log('meow');
        }
    });
}