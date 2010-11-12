/* >>>>>>>>>> BEGIN source/src/theme.js */

SC.SlickTheme = SC.BaseTheme.extend({
  name: "Slick",
  description: "A bright, Ace-inspired theme",
  version: 'v0.1 alpha',
  classNames: ["slick"]
});


SC.Theme.register("sc-slick", SC.SlickTheme);
SC.SlickTheme.Dark = SC.SlickTheme.subtheme("dark", "dark");

SC.Pane.prototype.baseTheme = "sc-slick";

// Hack for rightclick in test_controls
SC.CONTEXT_MENU_ENABLED = YES;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
/* >>>>>>>>>> BEGIN source/src/controls/buttons/button.js */
require("src/theme");

SC.SlickTheme.PointLeft = SC.SlickTheme.subtheme("point-left", "point-left");
SC.SlickTheme.PointRight = SC.SlickTheme.subtheme("point-right", "point-right");
SC.SlickTheme.PointRight = SC.SlickTheme.subtheme("capsule", "capsule");

SC.SlickTheme.renderers.Button = SC.BaseTheme.renderers.Button.extend({
  renderContents: function(context) {
    // render background slices
    context.push("<span class='button-left'></span>");
    // render inner html
    context.push("<span class='button-middle'>");
    
    context = context.begin("label").addClass("sc-button-label");
    this._titleRenderer.render(context);
    context = context.end();
    
    context.push('</span>');
    context.push("<span class='button-right'></span>");
  }
});

SC.SlickTheme.renderers.button = SC.SlickTheme.renderers.Button.create();; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
/* >>>>>>>>>> BEGIN source/src/controls/slider_view/slider.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

/** @class
  @extends SC.Renderer
  @since SproutCore 1.1
*/

SC.SlickTheme.renderers.Slider = SC.BaseTheme.renderers.Slider.extend({
  renderSlider: function(context) {
    var blankImage = SC.BLANK_IMAGE_URL;
    context.push(
      '<span class="sc-track">',
        '<span class="sc-left"></span>',
        '<span class="sc-middle"></span>',
        '<span class="sc-right"></span>',
      '</span>',
      '<img src="', blankImage, '" class="sc-handle" style="left: ', this.value, '%" />'
    );
  }
});

SC.SlickTheme.renderers.slider = SC.SlickTheme.renderers.Slider.create();; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
/* >>>>>>>>>> BEGIN source/src/dark/buttons/button.js */
SC.SlickTheme.Dark.PointLeft = SC.SlickTheme.Dark.subtheme("point-left", "point-left");
SC.SlickTheme.Dark.PointRight = SC.SlickTheme.Dark.subtheme("point-right", "point-right");
SC.SlickTheme.Dark.PointRight = SC.SlickTheme.Dark.subtheme("capsule", "capsule");; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
/* >>>>>>>>>> BEGIN source/src/panels/picker/picker.js */

; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
/* >>>>>>>>>> BEGIN source/src/panels/picker/popover/popover.js */
SC.SlickTheme.Popover = SC.SlickTheme.Dark.subtheme("popover", "popover");
SC.SlickTheme.register("popover", SC.SlickTheme.Popover);

SC.SlickTheme.SolidPopover = SC.SlickTheme.Popover.subtheme("solid", "solid");
SC.SlickTheme.register("solid-popover", SC.SlickTheme.SolidPopover);; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
/* >>>>>>>>>> BEGIN source/src/panels/picker/popover/picker.js */
require("src/panels/picker/popover/popover");

SC.SlickTheme.Popover.renderers.Picker = SC.BaseTheme.renderers.Picker.extend({
  render: function(context) {
    if (this.contentProvider) this.contentProvider.renderContent(context);
    context.addClass(this.pointerPos);
  },
  
  update: function() {
    this.$().addClass(this.pointerPos);
  }
});

SC.SlickTheme.Popover.renderers.picker = SC.SlickTheme.Popover.renderers.Picker.create();; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
/* >>>>>>>>>> BEGIN source/src/panels/picker/popover/workspace.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

/** @class
  @extends SC.EmptyTheme.renderers.Workspace
  @since SproutCore 1.1
*/

// requires popover theme.
require("src/panels/picker/popover/popover");

var theme = SC.SlickTheme.Popover;

SC.SlickTheme.Popover.renderers.Workspace = SC.BaseTheme.renderers.Workspace.extend({
  computeClassNames: function() {
    var cn = this._TMP_CLASS_NAMES || {};
    cn["top-toolbar"] = this.hasTopToolbar;
    cn["bottom-toolbar"] = this.hasBottomToolbar;
    this._TMP_CLASS_NAMES = cn;
    return cn;
  },
  
  render: function(context) {
    context.setClass(this.computeClassNames());
    
    context.push("<div class='sc-workspace-overlay'>",
      "<div class='middle'></div>",
      "<div class='top-left-edge'></div>",
      "<div class='top-edge'></div>",
      "<div class='top-right-edge'></div>",
      "<div class='right-edge'></div>",
      "<div class='bottom-right-edge'></div>",
      "<div class='bottom-edge'></div>",
      "<div class='bottom-left-edge'></div>",
      "<div class='left-edge'></div>",
      "<div class='sc-pointer'></div>",
    "</div>");
    
    if (this.contentProvider) this.contentProvider.renderContent(context);
  },
  
  update: function() {
    this.$().setClass(this.computeClassNames());
  }
});

SC.SlickTheme.Popover.renderers.workspace = SC.SlickTheme.Popover.renderers.Workspace.create();; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('slick');
