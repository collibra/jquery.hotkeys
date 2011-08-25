
describe("jquery.hotkeys spec", function() {
  describe("key bindings", function() {
    function binder(key) {
      $("#bind_fixture").bind("keydown", key, function(e) {
        console.log('aeee! '+ key +' '+ e);
        binded = true;
      });
    }

    describe("all special keys", function() {
      var keyMap = jQuery.hotkeys.specialKeys; 
      var keyCode, key, binded, inputText;
      var allCodes = [];

      for(keyCode in keyMap) {
        allCodes.push(keyCode);
      }

      beforeEach(function() {
        if(!inputText) {
          inputText = $("body").append("<input type='text' id='bind_fixture' />");
        }
        binded = false;
      });

      var i;
      for(i = 0; i < allCodes.length; i++) {
        key = keyMap[allCodes[i]];
        it("be able to bind key: "+ key +"("+ keyCode +")", function() {
          binder(key);
          // TODO: simulate the keydown event for each key
          $("#bind_fixture").trigger($.Event("keydown", {keyCode:keyCode}));
          expect(binded).toBe(true);
        })
      }
    });

  });
});
