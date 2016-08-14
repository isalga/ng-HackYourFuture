function newCard() {
  return {
      restrict: 'EA',
      scope: {
          new: '=',
          index: '=',
        },
      template: `
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <span class="card-title">{{ new.title }}</span>
              <p>
                <img ng-src='{{ new.multimedia[3].url }}'/>
              </p>
            </div>
            <div class="card-action">
              <span> {{ new.published_date | date:dd-MM-yyyy }}</span>
              <a ng-href="#/new/{{ index }}">see</a>
            </div>
          </div>
        </div>
      </div>`,
    };
}
