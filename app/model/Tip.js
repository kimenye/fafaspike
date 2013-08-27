Ext.define('FafaSpike.model.Tip', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'image_url', type: 'string' },
            { name: 'index', type: 'int' },
            { name: 'description', type: 'string' }
        ]
    }
});