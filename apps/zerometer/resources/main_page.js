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
    childViews: 'wrapper bg'.w(),

		bg: SC.PanelPane.design({
			classNames: ['zf-bg']
		}),
		
		wrapper: SC.View.design({
			layout: { centerX: 0, top:0, height:705, width:940 },
			childViews: 'header body footer'.w(),
						
				header: SC.ToolbarView.design({
					layout: { height:80, left:0, right:0 },
					anchorLocation: SC.ANCHOR_TOP,
					childViews: 'zmLogo zfLogo'.w(),
					backgroundColor: 'auto',
					
					zmLogo: SC.ImageView.design({
						layout:{ left:0, bottom:15, width:272, height:41 },
						value: sc_static('zerometerLogo.png')
					}),
					
					zfLogo: SC.ImageView.design({
						layout: { right:0, bottom:15, width:152, height:26 },
						value: sc_static('zerofootprintLogo.png')
					})
				}),
				
				body: SC.SplitView.design({
					canCollapseViews: NO,
					layoutDirection: SC.LAYOUT_HORIZONTAL,
					layout: { left:0, right:0, top: 80, height: 505},
					defaultThickness: 255,
					dividerThickness: 20,
					
					topLeftView: Zerometer.RoundPanel.design({
						backgroundColor: 'white'
					}),
					
					bottomRightView: Zerometer.RoundPanel.design({
						backgroundColor: 'white'
					})
				}),
				
				footer: SC.ToolbarView.design({
					layout: { height:100, left:0, right:0 },
					anchorLocation: SC.ANCHOR_BOTTOM,
					childViews: 'roundPanel'.w(),
					
					roundPanel: Zerometer.RoundPanel.design({
						// backgroundColor: '#fff'
					})
				})
		})
		
  })

});

// SC absolute positioning q
// Normally I'd do something like this:
// 
// <div id="container">
//   <div id="menu"></div>
//   <div id="content"></div>
// </div>
// 
// #container{
//   postion:relative
//   width:900px;
//   margin: 0 auto;  /* Will keep our content floated in the centre */
//   }
//   #menu{
//     position:absolute;
//     left:0;
//     width:200px;
//   }
//   #content{
//     position:absolute;
//     right:0;
//     width:700px;
// }
// 
// So I can position all of the child elements of container absolutely if desired and they're all constrained to that window.
// 
// SproutCore however doesn't seem to enjoy anything positioned relatively which irks me for this particular type of layout.  Can someone suggest how I might achieve what I want?  It seems contrary to simplicity to have to define all my children elements from a centerX: 0 and move them appropriately just to stick within the 'all elements positioned absolutely' paradigm.
// 
