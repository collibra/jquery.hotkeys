describe("jquery.hotkeys spec", function() {
  describe("key bindings", function() {
    function binder(key) {
      $(document).bind("keydown", key, function() {
        binded = true;
      });
    }

    describe("all special keys", function() {
      var keyMap = jQuery.hotkeys.specialKeys; 
      var keyCode, keyMap, key, binded;

      beforeEach(function() {
        binded = false;
      });

      for(keyCode in keyMap) {
        key = keyMap[keyCode];
        it("be able to bind key: "+ key, function() {
          binder(key);
          // TODO: simulate the keydown event for each key
          $(document).keydown();
          expect(binded).toBe(true);
        })
      }
    });

  });
});
