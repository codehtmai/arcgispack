(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1970:function(e,r,t){var a,n;a=[t.dj.c(e.i),r,t(18),t(10),t(9),t(228),t(781),t(80),t(812),t(426)],void 0===(n=function(e,r,t,a,n,o,l,i,u,p){function s(e,r){var t,n,o=e.portalItem.type;switch(o){case"Feature Service":t=l.layerLookupMap.FeatureLayer;break;case"Stream Service":t=l.layerLookupMap.StreamLayer;break;case"Scene Service":t=l.layerLookupMap.SceneLayer;break;case"Feature Collection":t=l.layerLookupMap.FeatureLayer;break;default:throw new a("portal:unsupported-item-type-as-group","The item type '"+o+"' is not supported as a 'GroupLayer'")}return t().then(function(e){return n=e,d(r)}).then(function(t){return t&&Array.isArray(t.layers)?y(e,n,t,r):c(e,n,r)})}function c(e,r,a){if(!e.portalItem.url)return n.resolve();return t(e.portalItem.url,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(t){var n=t.data;if(n&&Array.isArray(n.layers)){var o=n.layers.map(function(e){return{id:e.id,name:e.name}});return y(e,r,{layers:o},a)}})}function y(e,r,t,a){var n=t.showLegend,o=t.layers.slice();o.reverse(),o.forEach(function(t){var a=new r({portalItem:e.portalItem,layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var o={origin:"portal-item",portal:e.portalItem.portal||i.getDefault()};a.read(t,o),null!=n&&a.read({showLegend:n},o)}e.add(a)})}function d(e){if(!1===e.supportsData)return n.resolve();var r=e.instance;return r.portalItem.fetchData().catch(function(){return null}).then(function(e){var t,a=e;if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){var n=!0;if(e&&Array.isArray(a.layers)){null==r.layerId&&(r.layerId=a.layers[0].id);for(var o=0;o<a.layers.length;o++)if(a.layers[o].id===r.layerId){t=a.layers[o];break}t&&(1===a.layers.length&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))}return n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e})}Object.defineProperty(r,"__esModule",{value:!0}),r.load=function(e){var r=e.instance.portalItem;return r&&r.id?r.load().then(function(){return function(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}(e)}).then(function(){return function(e){var r=e.instance,t=r.portalItem,a=t.url,n=t.title,l=u.createForItem(t);return r.isInstanceOf(o)?(r.read({title:n},l),s(r,e)):(a&&r.read({url:a},l),d(e).then(function(e){return e&&r.read(e,l),r.read({title:n},l),p.loadStyleRenderer(r,l)}))}(e)}):n.resolve()}}.apply(null,a))||(e.exports=n)}}]),function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/layersLoader":1970})}();