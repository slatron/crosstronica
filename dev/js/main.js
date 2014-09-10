var $ = require('jquery');

window.testing = [1, 2, 3];

var $test = $('<p></p>').text('testing...');

$('body').append($test);
