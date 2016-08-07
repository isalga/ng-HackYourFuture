function movieDetails() {
  return {
      restrict: 'EA',
      scope: {
          film: '=',
        },
      template: `<div class="col s12 m7">
    <h2 class="header">{{ film.Title }}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img ng-src="{{ film.Poster }}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{{ film.Plot }}</p>
        </div>
      </div>
    </div>
  </div>`,
    };
}
