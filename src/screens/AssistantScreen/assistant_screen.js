window.watsonAssistantChatOptions = {
  integrationID: "60a936fa-8144-4807-9dd6-b7afcc4c797f", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "051b08d2-f276-45da-a091-2b619ecdddac", // The ID of your service instance.
  onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
  document.head.appendChild(t);
});