function newDetails() {
  return {
      restrict: 'EA',
      scope: {
          new: '=',
        },
      template: `
      <div class="row">
        <div class="col s12">
          <h2>{{ new.title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col s4">
            <img ng-src='{{ new.multimedia[3].url }}'/>
        </div>
        <div class="col s8">
          <p>{{ new.abstract }}</p>
          <p><a ng-href='{{ new.short_url }}' target='_blank'>external link</a></p>
        </div>
      </div>`,
    };
}
