myApp.component('componentA', {
    templateUrl: 'app/components/a/a-component.html',
    controller: AController,
    controllerAs: 'ac'
})
function AController() {
    var ac = this;
    ac.test = "Hello again test A"
}