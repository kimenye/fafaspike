Ext.define('FafaSpike.view.Main', {
    extend: 'Ext.Carousel',
    xtype: 'main',
	requires: [
		'Ext.Img'
	],
    config: {
        fullScreen: true,
		// items : [
// 			{
// 				src: 'images/models/1.jpg',
// 				xtype: 'image'
// 			},
// 			{
// 				src: 'images/models/2.jpg',
// 				xtype: 'image'
// 			},
// 			{
// 				src: 'images/models/3.jpg',
// 				xtype: 'image'
// 			},
// 			{
// 				src: 'images/models/4.jpg',
// 				xtype: 'image'
// 			}
// 		]
		items: []
    },
	
	initialize: function() {
		this.callParent(arguments);
		
		var store = Ext.create('FafaSpike.store.Tips');
		console.log("Created store");
	}
});
