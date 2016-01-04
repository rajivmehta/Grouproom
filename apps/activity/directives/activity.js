(function () {
    'use strict';
/**
 * @ngdoc directive
 * @name groupRoom.Module.directive:activityCell
 * @element div
 * @function
 *
 * @description
 * It hold the container of all Group room related activities.
 *User need to pass two parameter 
 *area->Which represent the title
 *bgcolor->set the back ground color of Activity cell
 * @example
 * <activity-cell area="Area 1" bgcolor="#ffffff"></activity-cell>
 */    
    angular.module('grouproom.acitivity', [])
        /**
         * @ngdoc directive
         * @name groupRoom.Module:activityCell
         * 
         * @description
         * Directive of activity cell
         */
        .directive('activityCell', function (trackState) {
            return {
                restrict: "E",
                templateUrl: 'apps/activity/partials/activityCell.tpl.html',
                controllerAs: "cell",
                bindToController: true,
                replace: true,
                scope: {
                    area: '@',
                    bgcolor: '@'
                },
                link: function (scope, element, attri) {
                    element.css("background-color", scope.cell.bgcolor);
                },
                /**
                 * @ngdoc controller
                 * @name gapp.controller:Anonymous
                 * 
                 * @description
                 * This In-Built Controller is use as Controller of Activity Cell directives
                 */
                controller: function () {
                    var self = this;
                    self.state = 0;
		          /**
					 * @ngdoc method
					 * @name onclose
					 * @methodOf GroupRoom.controller:Anonymous
					 * @description
					 * This method will fire when user click on Collasp button
					 *
					*/

                    self.onclose = function (event) {
                        var closeButton = angular.element(event.target);
                        self.rootElement = angular.element(event.target).parent().parent();
                        self.closeButonContainer = angular.element(event.target).parent();
                        self.title = closeButton.parent().find('div');
                        var sectionTitle = self.rootElement.find('section');

                        if (self.state == 0) {
                            if (trackState.stateCounter < 2) {
                                closeButton.css("background-image", "url('assets/images/menu.png')");
                                closeButton.css("background-repeat", "no-repeat");
                                self.closeButonContainer.addClass('apply-Flex-Container');
                                self.state = 1;
                                self.rootElement.removeClass('applyWidth');
                                self.rootElement.addClass('reduceWidth');
                                self.title.css("display", "none");
                                sectionTitle.removeClass('Activity-expand-title');
                                sectionTitle.addClass('Activity-collasp-title');
                                trackState.stateCounter++;
                            } else {
                                console.log('Now Allow operate')
                            }
                        } else {
                            trackState.stateCounter--;
                            closeButton.css("background-image", "");
                            closeButton.css("background-repeat", "");
                            self.closeButonContainer.removeClass('apply-Flex-Container');
                            self.state = 0;
                            self.rootElement.removeClass('reduceWidth');
                            self.rootElement.addClass('applyWidth');
                            self.title.css("display", "");
                            sectionTitle.removeClass('Activity-collasp-title');
                            sectionTitle.addClass('Activity-expand-title');
                        }
                    }
                },
            }
        });
})();
