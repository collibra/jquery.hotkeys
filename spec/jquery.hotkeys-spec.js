describe("jquery.hotkeys spec", function() {
  describe("key bindings", function() {
    function binder(key) {
      //console.log("Binding keydown event for key", key);
      $("#bind_fixture").removeClass(key);
      $("#bind_fixture").bind("keydown", key, function(e) {
        $(this).addClass(key);
        //console.log('after pressing', key, ', class is ', $("#bind_fixture").attr('class'));
      });
    }

    describe("all special keys", function() {
      var keyMap = jQuery.hotkeys.specialKeys;
      var allCodes = [];

      for(var code in keyMap) {
        allCodes.push(code);
      }

      beforeEach(function() {
        if ($('#bind_fixture').length == 0) {
          $("body").append("<input type='text' id='bind_fixture' />");
        }
      });

      /* for loop does not work because of variable scope issue */
      $.each(allCodes, function(i, keyCode){
        var key = keyMap[allCodes[i]];
        it("be able to bind key: "+ key +"("+ keyCode +")", function() {
          binder(key);

          //console.log("BEFORE:", keyCode, $('#bind_fixture').hasClass(key));

          var evt = $.Event("keydown", {which: keyCode});
          //console.log("Simulating pressing", key, " of keycode", evt.which);
          // simulate the keydown event for each key
          $("#bind_fixture").trigger(evt);

          //console.log("AFTER:", keyCode, $('#bind_fixture').hasClass(key));

          expect($('#bind_fixture').hasClass(key)).toBe(true);
        })
      })
    });

  });
});
