Ext.define('FafaSpike.view.Main', {
    extend: 'Ext.Carousel',
    xtype: 'main',
    config: {
        fullScreen: true,
		items : [
			{
				src: 'images/models/1.jpg',
				xtype: 'image'
			},
			{
				src: 'images/models/2.jpg',
				xtype: 'image'
			},
			{
				src: 'images/models/3.jpg',
				xtype: 'image'
			},
			{
				src: 'images/models/4.jpg',
				xtype: 'image'
			}
		] 
    }
});
