function categoryPicker() {
  return {
      restrict: 'EA',
      template: `
			<label>Category:</label>
			<select ng-model="category" style="display: block">
				<option value="technology">technology</option>
				<option value="science">science</option>
				<option value="arts">arts</option>
				<option value="sports">sports</option>
			</select>`,
    };
}
