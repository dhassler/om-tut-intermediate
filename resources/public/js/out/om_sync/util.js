// Compiled by ClojureScript 0.0-2156
goog.provide('om_sync.util');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
om_sync.util.popn = (function popn(n,v){var n__$1 = n;var res = v;while(true){
if((n__$1 > 0))
{{
var G__9435 = (n__$1 - 1);
var G__9436 = cljs.core.pop.call(null,res);
n__$1 = G__9435;
res = G__9436;
continue;
}
} else
{return res;
}
break;
}
});
om_sync.util.sub = (function sub(p0,p1){return cljs.core.vec.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,p0) - cljs.core.count.call(null,p1)),p0));
});
om_sync.util.tx_tag = (function tx_tag(p__9437){var map__9439 = p__9437;var map__9439__$1 = ((cljs.core.seq_QMARK_.call(null,map__9439))?cljs.core.apply.call(null,cljs.core.hash_map,map__9439):map__9439);var tx_data = map__9439__$1;var tag = cljs.core.get.call(null,map__9439__$1,new cljs.core.Keyword(null,"tag","tag",1014018828));if((tag instanceof cljs.core.Keyword))
{return tag;
} else
{return cljs.core.first.call(null,tag);
}
});
om_sync.util.subpath_QMARK_ = (function subpath_QMARK_(a,b){return cljs.core._EQ_.call(null,a,om_sync.util.popn.call(null,(cljs.core.count.call(null,b) - cljs.core.count.call(null,a)),b));
});
om_sync.util.error_QMARK_ = (function error_QMARK_(res){return cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"error","error",1110689146));
});
om_sync.util.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
om_sync.util.edn_xhr = (function edn_xhr(p__9440){var map__9442 = p__9440;var map__9442__$1 = ((cljs.core.seq_QMARK_.call(null,map__9442))?cljs.core.apply.call(null,cljs.core.hash_map,map__9442):map__9442);var on_error = cljs.core.get.call(null,map__9442__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_complete = cljs.core.get.call(null,map__9442__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__9442__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__9442__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__9442__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.SUCCESS,(function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
}));
goog.events.listen(xhr,goog.net.EventType.ERROR,(function (e){return on_error.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),xhr.getResponseText()], null));
}));
return xhr.send(url,om_sync.util.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Accept": "application/edn", "Content-Type": "application/edn"});
});

//# sourceMappingURL=util.js.map