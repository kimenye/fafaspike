Ext.define('FafaSpike.store.Tips', {
	extend   : 'Ext.data.Store',
	alias    : 'store.tips',
	requires : ['FafaSpike.model.Tip'],
	config : {
		model : 'FafaSpike.model.Tip',
		data: [
			{
				img_url: "images/models/1.jpg",
				index: 0,
				description: 'A full facial pic'
			},
			{
				img_url: "images/models/2.jpg",
				index: 1,
				description: 'A sideways pic'
			},
			{
				img_url: "images/models/3.jpg",
				index: 2,
				description: 'A close up pic'
			},
			{
				img_url: "images/models/4.jpg",
				index: 3,
				description: 'A faraway pic'
			}
		]
	}
});