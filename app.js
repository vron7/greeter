$("#login").click( function() {
    // method chaining in action
    G$('Peter', 'Pan').setLang($("#lang").val()).HTMLGreeting('#greeting', true).log();
});