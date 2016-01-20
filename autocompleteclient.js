
var autocompleteTemplate = $('#autocomplete-template').html();
// use Hogan as templating engine
var template = Hogan.compile(autocompleteTemplate);

$(document).ready(function() {
//api client from Aloglia
  var client = algoliasearch('WK48X2KLKU', '06dc382d90c8a5b0335016ae10b1c23c');
  var index = client.initIndex('bestbuy');

  $('#typeahead-algolia').typeahead({
    hint: false,
    highlight: true,
    minLength: 1
  }, {
    source: client.initIndex('bestbuy').ttAdapter(),
    displayKey: 'name', // attribute displayed once selected
    templates: {
      suggestion: function(hit) {
        console.log(hit);
        return template.render(hit); // moustache template rendered by Hogan
      }
    }
  });
});
