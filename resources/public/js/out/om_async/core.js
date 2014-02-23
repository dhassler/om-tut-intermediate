// Compiled by ClojureScript 0.0-2156
goog.provide('om_async.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('goog.events.EventType');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
om_async.core.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
om_async.core.edn_xhr = (function edn_xhr(p__6915){var map__6917 = p__6915;var map__6917__$1 = ((cljs.core.seq_QMARK_.call(null,map__6917))?cljs.core.apply.call(null,cljs.core.hash_map,map__6917):map__6917);var on_complete = cljs.core.get.call(null,map__6917__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__6917__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__6917__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__6917__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());return goog.events.listen(xhr,goog.net.EventType.COMPLETE,(function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
}),xhr.send(url,om_async.core.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"}));
});
om_async.core.app_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",1867525016),cljs.core.PersistentVector.EMPTY], null);
om_async.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
om_async.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
om_async.core.end_edit = (function end_edit(text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
return cb.call(null,text);
});
om_async.core.editable = (function editable(data,owner,p__6920){var map__6927 = p__6920;var map__6927__$1 = ((cljs.core.seq_QMARK_.call(null,map__6927))?cljs.core.apply.call(null,cljs.core.hash_map,map__6927):map__6927);var opts = map__6927__$1;var on_edit = cljs.core.get.call(null,map__6927__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));var edit_key = cljs.core.get.call(null,map__6927__$1,new cljs.core.Keyword(null,"edit-key","edit-key",2614779790));if(typeof om_async.core.t6928 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t6928 = (function (edit_key,on_edit,opts,map__6927,p__6920,owner,data,editable,meta6929){
this.edit_key = edit_key;
this.on_edit = on_edit;
this.opts = opts;
this.map__6927 = map__6927;
this.p__6920 = p__6920;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta6929 = meta6929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t6928.cljs$lang$type = true;
om_async.core.t6928.cljs$lang$ctorStr = "om-async.core/t6928";
om_async.core.t6928.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-async.core/t6928");
});
om_async.core.t6928.prototype.om$core$IRenderState$ = true;
om_async.core.t6928.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__6931){var self__ = this;
var map__6932 = p__6931;var map__6932__$1 = ((cljs.core.seq_QMARK_.call(null,map__6932))?cljs.core.apply.call(null,cljs.core.hash_map,map__6932):map__6932);var editing = cljs.core.get.call(null,map__6932__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__6932__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return React.DOM.li(null,React.DOM.span({"style": om_async.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return om_async.core.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onKeyPress": (function (p1__6919_SHARP_){if(cljs.core.truth_((function (){var and__3391__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__3391__auto__))
{return (p1__6919_SHARP_.keyCode === 13);
} else
{return and__3391__auto__;
}
})()))
{return om_async.core.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onChange": (function (p1__6918_SHARP_){return om_async.core.handle_change.call(null,p1__6918_SHARP_,self__.data,self__.edit_key,self__.owner);
}), "value": text, "style": om_async.core.display.call(null,editing)}),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
}), "style": om_async.core.display.call(null,cljs.core.not.call(null,editing))},"Edit"));
});
om_async.core.t6928.prototype.om$core$IInitState$ = true;
om_async.core.t6928.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
om_async.core.t6928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6930){var self__ = this;
var _6930__$1 = this;return self__.meta6929;
});
om_async.core.t6928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6930,meta6929__$1){var self__ = this;
var _6930__$1 = this;return (new om_async.core.t6928(self__.edit_key,self__.on_edit,self__.opts,self__.map__6927,self__.p__6920,self__.owner,self__.data,self__.editable,meta6929__$1));
});
om_async.core.__GT_t6928 = (function __GT_t6928(edit_key__$1,on_edit__$1,opts__$1,map__6927__$2,p__6920__$1,owner__$1,data__$1,editable__$1,meta6929){return (new om_async.core.t6928(edit_key__$1,on_edit__$1,opts__$1,map__6927__$2,p__6920__$1,owner__$1,data__$1,editable__$1,meta6929));
});
}
return (new om_async.core.t6928(edit_key,on_edit,opts,map__6927__$1,p__6920,owner,data,editable,null));
});
om_async.core.on_edit = (function on_edit(id,title){return om_async.core.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),[cljs.core.str("class/"),cljs.core.str(id),cljs.core.str("/update")].join(''),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("class","title","class/title",2826061520),title], null),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){return cljs.core.println.call(null,"server response:",res);
})], null));
});
om_async.core.classes_view = (function classes_view(app,owner){if(typeof om_async.core.t6938 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t6938 = (function (owner,app,classes_view,meta6939){
this.owner = owner;
this.app = app;
this.classes_view = classes_view;
this.meta6939 = meta6939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t6938.cljs$lang$type = true;
om_async.core.t6938.cljs$lang$ctorStr = "om-async.core/t6938";
om_async.core.t6938.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-async.core/t6938");
});
om_async.core.t6938.prototype.om$core$IRender$ = true;
om_async.core.t6938.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "classes"},React.DOM.h2(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (class$){var id = new cljs.core.Keyword("class","id","class/id",2867224579).cljs$core$IFn$_invoke$arity$1(class$);return om.core.build.call(null,om_async.core.editable,class$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-key","edit-key",2614779790),new cljs.core.Keyword("class","title","class/title",2826061520),new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),(function (p1__6934_SHARP_){return om_async.core.on_edit.call(null,id,p1__6934_SHARP_);
})], null)], null));
}),new cljs.core.Keyword(null,"classes","classes",1867525016).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
om_async.core.t6938.prototype.om$core$IWillMount$ = true;
om_async.core.t6938.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om_async.core.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"classes",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__6933_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"classes","classes",1867525016),(function (___$2){return p1__6933_SHARP_;
}));
})], null));
});
om_async.core.t6938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6940){var self__ = this;
var _6940__$1 = this;return self__.meta6939;
});
om_async.core.t6938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6940,meta6939__$1){var self__ = this;
var _6940__$1 = this;return (new om_async.core.t6938(self__.owner,self__.app,self__.classes_view,meta6939__$1));
});
om_async.core.__GT_t6938 = (function __GT_t6938(owner__$1,app__$1,classes_view__$1,meta6939){return (new om_async.core.t6938(owner__$1,app__$1,classes_view__$1,meta6939));
});
}
return (new om_async.core.t6938(owner,app,classes_view,null));
});
om.core.root.call(null,om_async.core.classes_view,om_async.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("classes")], null));

//# sourceMappingURL=core.js.map