Ext.define('FafaSpike.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        fullScreen: true,
		items : {
            docked : 'top',
            xtype  : 'toolbar',
            title  : 'Fafa Model Search Spike'
        }        
    },
	
	setTitle : function(title) {
        this.down('toolbar').setTitle(title);
	}
});
