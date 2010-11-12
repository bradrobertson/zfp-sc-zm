        ;(function() {
          var target_name = 'slick' ;
          if (!SC.BUNDLE_INFO) throw "SC.BUNDLE_INFO is not defined!" ;
          if (SC.BUNDLE_INFO[target_name]) return ; 

          SC.BUNDLE_INFO[target_name] = {
            requires: ['sproutcore'],
            styles:   ['/static/slick/en/current/stylesheet.css?1289588348'],
            scripts:  ['/static/slick/en/current/source/src/theme.js?1289578553','/static/slick/en/current/source/src/controls/buttons/button.js?1289577155','/static/slick/en/current/source/src/controls/slider_view/slider.js?1289577155','/static/slick/en/current/source/src/dark/buttons/button.js?1289577155','/static/slick/en/current/source/src/panels/picker/picker.js?1289577155','/static/slick/en/current/source/src/panels/picker/popover/popover.js?1289577155','/static/slick/en/current/source/src/panels/picker/popover/picker.js?1289577155','/static/slick/en/current/source/src/panels/picker/popover/workspace.js?1289577156']
          }
        })();
