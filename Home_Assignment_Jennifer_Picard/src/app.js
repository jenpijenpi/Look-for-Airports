/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'airportslist',
  searchClient: algoliasearch('L9IEEMQKW2', 'bbcf3c8cda512d7e5adcd4daff0c4748'),
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <div class="hit-airport">
            {{#helpers.highlight}}{ "attribute": "airport_id" }{{/helpers.highlight}}
          </div>
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-location">
            {{#helpers.highlight}}{ "attribute": "city" }{{/helpers.highlight}} - 
            {{#helpers.highlight}}{ "attribute": "country" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();
