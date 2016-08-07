function movieCard() {
  return {
      restrict: 'EA',
      scope: {
          film: '=',
        },
      template: `<div class="card">
          <div class="card-image">
              <img ng-src="{{ film.Poster }}">
              <span class="card-title" style="background-color: rgba(0,0,0, 0.5); width: 100%;">{{ film.Title }}</span>
          </div>
          <div class="card-content">
              {{ film.Year }} / {{ film.Genre }}
          </div>
          <div class="card-action">
              <a href="#">See more</a>
          </div>
      </div>`,
    };
}
