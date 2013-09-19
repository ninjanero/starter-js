// polyfill for getComputedStyle
if (!window.getComputedStyle) {
  window.getComputedStyle = function(el, pseudo) {
    this.el = el;
    this.getPropertyValue = function(prop) {
      var re = /(\-([a-z]){1})/g;
      if (prop == 'float') prop = 'styleFloat';
      if (re.test(prop)) {
        prop = prop.replace(re, function () {
          return arguments[2].toUpperCase();
        });
      }
    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
    }
    return this;
  }
}

/* start containing variables and method scope */

;(function() {
  
  'use strict';

  // define the "Project" namespace
  var Project = Project || {};
  
  // Project object
  Project = {
    
    isMobile : function() {
      
      Android: function () {
        // Project.isMobile.Android();
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        // Project.isMobile.BlackBerry();
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        // Project.isMobile.iOS();
        return navigator.userAgent.match(/iPhone|iPod/i);
      },
      Opera: function () {
        // Project.isMobile.Opera();
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        // Project.isMobile.Windows();
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        // Project.isMobile.any();
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
      
    },
    
    placeholderMethod1 : function() {
      
      'use strict';
      
    },
    
    placeholderMethod2 : function() {
      
      'use strict';
      
    }
    
  }
  
  // Get window size for responsive JavaScript
  var size = window.getComputedStyle( document.body,':before' ).getPropertyValue( 'content' );
  
  // Touch detection
  if( Modernizr.touch ) {
  
    // load in JavaScript with touch interactions
    Modernizr.load([{
      load : [ 'assets/js/touch.js' ],
      complete: function () {

      

      } // on complete
    }]); // load
  } // if touch
  
  // resize event for responsive JavaScript
  window.addEventListener("resize", function() {
    
    size = window.getComputedStyle( document.body,':before' ).getPropertyValue( 'content' );
    
    if( size.indexOf("narrow") !=-1 ) {
        
        // execute narrow screen JS
        
    } else {
        
        // execute wide screen JS
        
    } // if
    
  }, false);
    
  
})();

/* end scope container */