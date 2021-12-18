(function(global, $){

    // lets 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            return this; // chainable
        },        

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this; // chainable
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded'
            }
            if (!selector) {
                throw 'Selector not specified'
            }

            var msg;
            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);
            
            return this;

        }
    }

    // the constructor function for greeter
    Greetr.init = function(firstName, lastName, language) {
        this.firstName = firstName || '';
        this.lastName = lastName || ''; 
        this.language = language || 'en';
        this.validate();
    }

    // make sure greeter gets all the required functionality
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));