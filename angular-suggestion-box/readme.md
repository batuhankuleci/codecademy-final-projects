#Suggestion Box
An app to make suggestions with upvotes, written in AngularJS.
*	Tutorial guide here: https://www.codecademy.com/final_project/learn-angularjs
* 	See a demo here: http://people.ku.edu/~sampjon/final-project-suggestion-box/#/

## Updates
1. This application uses $routeParams to route. In the background, this angular module makes AJAX requests, which means to run the app locally, we must start a server. You can find how to start a server with [this article](https://medium.com/@jonsamp/starting-a-server-in-angular-cd3ab7a4e4de#.4j5np7or2).

2. Previously, on the home.html view, the links were created with $index to find which suggestion to select from the service. This caused an issue, where, if you updated the upvotes, and the suggestions changed order, it would cause the incorrect suggestion to display when clicking on suggestions. This is now fixed with adding an property to each suggestion, called `id`. In the suggestions.js service, you'll see an `id` on each item. In addition, in the HomeController in the `addSuggestion()` function, there is now the addition of an `id` property. It is set equal to the length of posts, so that the id is always the next number, like you're adding it onto the end of the list.

3. Added an `ng-if` in the suggestion.html, to display a default message when there are no comments.
