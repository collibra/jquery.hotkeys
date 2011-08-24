describe("jquery.hotkeys spec", function() {
  describe("key bindings", function() {
    binder = function(key) {
      $(document).bind("keydown", key, function() {
        binded = false;
        console.log("binded for: "+ key);
      });
    }

    describe("all special keys", function() {
      var keyMap = jQuery.hotkeys.specialKeys; 
      var keyCode, binded;

      beforeEach(function() {
        binded = false;
      });

      function makeExample(keyCode, key) {
        it("be able to bind key: "+ key +" code: "+ keyCode, function() {
          binder(key);
          e = null;
        })
      }

      for(keyCode in keyMap) {
        var key = keyMap[keyCode];
        makeExample(keyCode, key);
      }

      // Struggling on how trigger the event...
        var e = $.Event("keydown", {keyCode:8});
        console.log(e);
        $(document).trigger(e);
    });

  });
});
