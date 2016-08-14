function orderBySelect() {
  return {
      restrict: 'EA',
      template: `
			<label>Order by:</label>
			<select ng-model="order" style="display: block">
					<option value="title">title</option>
					<option value="-published_date">date</option>
			</select>`,
    };
}
