function newCard() {
  return {
      restrict: 'EA',
      scope: {
          new: '=',
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
              <a ng-href='{{ new.short_url }}' target='_blank'>external link</a>
            </div>
          </div>
        </div>
      </div>`,
    };
}
