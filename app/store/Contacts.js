Ext.define('FafaSpike.store.Contacts', {
	extend   : 'Ext.data.Store',
	alias    : 'store.contacts',
	requires : ['FafaSpike.model.Contact'],
	config : {
		model : 'FafaSpike.model.Contact',
		data: [
			{
				id: 1,
				firstname: 'Mel',
				lastname: 'Gibson',
				phone: '12367890'
			},
			{
				id: 2,
				firstname: 'Kelly',
				lastname: 'Clarkson',
				phone: '12367890'				
			}
		]
	}
});