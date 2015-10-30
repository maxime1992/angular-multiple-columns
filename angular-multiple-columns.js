(function () {
	'use strict';

	angular.module('multipleColumns', [])
	.directive('multipleColumns', function ($window) {
		/**
		 * get the current screen size in 'bootstrap format'
		 * for example : 'xs', 'sm', 'md', 'lg'
		 * @param null
		 * @return {String} screen size
		 */
		var getCurrentScreenSize = function () {
			if ($window.innerWidth < 768) {
				return 'xs';
			}

			else if ($window.innerWidth >= 768 && $window.innerWidth < 992) {
				return 'sm';
			}

			else if ($window.innerWidth >= 992 && $window.innerWidth < 1200) {
				return 'md';
			}

			return 'lg';
		};

		/**
		 * set the same height to every columns
		 * @param {Object} element, the element to divide like an article
		 * @return null
		 */
		var setNbCol = function (scope, element) {
			var currentScreenSize = getCurrentScreenSize();
			var currentSize = null;

			for (var i = 1; i <= 4; i++) {
				element.removeClass('col-' + i);
			}

			switch (currentScreenSize) {
				case 'xs':
					currentSize = scope.colXs;
					break;
				case 'sm':
					currentSize = scope.colSm;
					break;
				case 'md':
					currentSize = scope.colMd;
					break;
				default:
					currentSize = scope.colLg;
			}

			element.addClass('col-' + currentSize);
		};

		// return the complete directive
		return {
			restrict: 'EA',
			replace: true,
			transclude: true,
			template: '<div ng-class="{\'text-justify\': justify === \'true\'}">{{ justify }} {{text}}</div>',
			scope: {
				colXs: '@colXs',
				colSm: '@colSm',
				colMd: '@colMd',
				colLg: '@colLg',
				justify: '@justify',
				text: '@text'
			},
			link: function (scope, element) {
				// parse args
				scope.colXs = parseInt(scope.colXs, 10);
				scope.colSm = parseInt(scope.colSm, 10);
				scope.colMd = parseInt(scope.colMd, 10);
				scope.colLg = parseInt(scope.colLg, 10);

				// launch the main script
				setNbCol(scope, element);

				// when the window get resized ...
				angular.element($window).bind('resize', function () {
					// ... launch the main script again to refresh
					setNbCol(scope, element);
				});
			}
		};
	});

	// for test purpose
	// angular.module('app', ['multipleColumns']);

	/*
		How to use it (html) :
		----------------------

		<multiple-columns
	      col-xs="1"
	      col-sm="2"
	      col-md="3"
	      col-lg="4"
	      justify="true"
	      text="">
	    </multiple-columns>
	*/
})();
