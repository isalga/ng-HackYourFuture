function navBar() {
  return {
      restrict: 'EA',
      template: `
			<nav class="grey darken-3">
	        <div class="nav-wrapper">
	            <a href="#/" class="brand-logo">newsApp</a>
	            <ul id="nav-mobile" class="right hide-on-med-and-down">
	                <li><a href="#/category/technology">technology</a></li>
	                <li><a href="#/category/science">science</a></li>
	                <li><a href="#/category/sports">sports</a></li>
	                <li><a href="#/category/arts">arts</a></li>
	            </ul>
	        </div>
	    </nav>`,
    };
}
