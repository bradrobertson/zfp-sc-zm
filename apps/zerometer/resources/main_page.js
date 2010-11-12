// ==========================================================================
// Project:   Zerometer - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Zerometer */

// This page describes the main user interface for your application.  
Zerometer.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'header iFrameView localIframeView'.w(),
    
		header: SC.ToolbarView.design({
			childViews: 'b1 b2'.w(),
			layout: {top:0, left:0, right:0, height:40},
			anchorLocation: SC.ANCHOR_TOP,
			
			b1: SC.LabelView.design({
				layout:{ top:10, left:0, width:100, height:20},
				value: "Some Label"
			}),
			
			b2: SC.ButtonView.design({
				layout:{ top:10, left:110, width:100, height:20},
				title: "Some Button"
			})
		}),

    iFrameView: SC.WebView.design({
      layout: { left: 0, centerY: 0, width: 400, height: 400 },
      value: "http://www.zerofootprint.net/about-zerofootprint-software"
    }),
		
		localIframeView: SC.WebView.design({
			layout: { right:0, centerY: 0, width:400, height: 400 },
			value: '/about-zerofootprint-software'
		})
  })

});
