import AdminPluginsChatProvider from 'discourse/plugins/discourse-chat/admin/routes/admin-plugins-chat-provider'

export default Discourse.Route.extend({
	afterModel(model, transition) {    
		this.transitionTo('adminPlugins.chat.provider', model.get('firstObject').name);
  }
});
