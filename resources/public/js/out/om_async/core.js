// Compiled by ClojureScript 0.0-2156
goog.provide('om_async.core');
goog.require('cljs.core');
goog.require('om_sync.util');
goog.require('om_sync.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om_sync.util');
goog.require('om.core');
goog.require('om_sync.core');
goog.require('om.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
om_async.core.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
om_async.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",1867525016),cljs.core.PersistentVector.EMPTY], null));
om_async.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
om_async.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
om_async.core.end_edit = (function end_edit(data,edit_key,text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
om.core.transact_BANG_.call(null,data,edit_key,(function (_){return text;
}),new cljs.core.Keyword(null,"update","update",4470025275));
if(cljs.core.truth_(cb))
{return cb.call(null,text);
} else
{return null;
}
});
om_async.core.editable = (function editable(data,owner,p__13144){var map__13151 = p__13144;var map__13151__$1 = ((cljs.core.seq_QMARK_.call(null,map__13151))?cljs.core.apply.call(null,cljs.core.hash_map,map__13151):map__13151);var opts = map__13151__$1;var on_edit = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));var edit_key = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"edit-key","edit-key",2614779790));if(typeof om_async.core.t13152 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t13152 = (function (edit_key,on_edit,opts,map__13151,p__13144,owner,data,editable,meta13153){
this.edit_key = edit_key;
this.on_edit = on_edit;
this.opts = opts;
this.map__13151 = map__13151;
this.p__13144 = p__13144;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta13153 = meta13153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t13152.cljs$lang$type = true;
om_async.core.t13152.cljs$lang$ctorStr = "om-async.core/t13152";
om_async.core.t13152.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-async.core/t13152");
});
om_async.core.t13152.prototype.om$core$IRenderState$ = true;
om_async.core.t13152.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13155){var self__ = this;
var map__13156 = p__13155;var map__13156__$1 = ((cljs.core.seq_QMARK_.call(null,map__13156))?cljs.core.apply.call(null,cljs.core.hash_map,map__13156):map__13156);var editing = cljs.core.get.call(null,map__13156__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__13156__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return React.DOM.li(null,React.DOM.span({"style": om_async.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return om_async.core.end_edit.call(null,self__.data,self__.edit_key,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onKeyPress": (function (p1__13143_SHARP_){if(cljs.core.truth_((function (){var and__3391__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__3391__auto__))
{return (p1__13143_SHARP_.keyCode === 13);
} else
{return and__3391__auto__;
}
})()))
{return om_async.core.end_edit.call(null,self__.data,self__.edit_key,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onChange": (function (p1__13142_SHARP_){return om_async.core.handle_change.call(null,p1__13142_SHARP_,self__.data,self__.edit_key,self__.owner);
}), "value": text, "style": om_async.core.display.call(null,editing)}),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
}), "style": om_async.core.display.call(null,cljs.core.not.call(null,editing))},"Edit"));
});
om_async.core.t13152.prototype.om$core$IInitState$ = true;
om_async.core.t13152.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
om_async.core.t13152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13154){var self__ = this;
var _13154__$1 = this;return self__.meta13153;
});
om_async.core.t13152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13154,meta13153__$1){var self__ = this;
var _13154__$1 = this;return (new om_async.core.t13152(self__.edit_key,self__.on_edit,self__.opts,self__.map__13151,self__.p__13144,self__.owner,self__.data,self__.editable,meta13153__$1));
});
om_async.core.__GT_t13152 = (function __GT_t13152(edit_key__$1,on_edit__$1,opts__$1,map__13151__$2,p__13144__$1,owner__$1,data__$1,editable__$1,meta13153){return (new om_async.core.t13152(edit_key__$1,on_edit__$1,opts__$1,map__13151__$2,p__13144__$1,owner__$1,data__$1,editable__$1,meta13153));
});
}
return (new om_async.core.t13152(edit_key,on_edit,opts,map__13151__$1,p__13144,owner,data,editable,null));
});
om_async.core.create_class = (function create_class(classes,owner){var class_id_el = om.core.get_node.call(null,owner,"class-id");var class_id = class_id_el.value;var class_name_el = om.core.get_node.call(null,owner,"class-name");var class_name = class_name_el.value;var new_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("class","id","class/id",2867224579),class_id,new cljs.core.Keyword("class","title","class/title",2826061520),class_name], null);om.core.transact_BANG_.call(null,classes,cljs.core.PersistentVector.EMPTY,(function (p1__13157_SHARP_){return cljs.core.conj.call(null,p1__13157_SHARP_,new_class);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create","create",3956577390),new_class], null));
class_id_el.value = "";
return class_name_el.value = "";
});
om_async.core.on_edit = (function on_edit(id,title){return om_sync.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),[cljs.core.str("class/"),cljs.core.str(id),cljs.core.str("/update")].join(''),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("class","title","class/title",2826061520),title], null),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){return cljs.core.println.call(null,"server response:",res);
})], null));
});
om_async.core.classes_view = (function classes_view(classes,owner){if(typeof om_async.core.t13161 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t13161 = (function (owner,classes,classes_view,meta13162){
this.owner = owner;
this.classes = classes;
this.classes_view = classes_view;
this.meta13162 = meta13162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t13161.cljs$lang$type = true;
om_async.core.t13161.cljs$lang$ctorStr = "om-async.core/t13161";
om_async.core.t13161.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-async.core/t13161");
});
om_async.core.t13161.prototype.om$core$IRender$ = true;
om_async.core.t13161.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "classes"},React.DOM.h2(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (class$){var id = new cljs.core.Keyword("class","id","class/id",2867224579).cljs$core$IFn$_invoke$arity$1(class$);return om.core.build.call(null,om_async.core.editable,class$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-key","edit-key",2614779790),new cljs.core.Keyword("class","title","class/title",2826061520)], null)], null));
}),self__.classes)),React.DOM.div(null,React.DOM.label(null,"ID:"),om.dom.input.call(null,{"ref": "class-id"}),React.DOM.label(null,"Name:"),om.dom.input.call(null,{"ref": "class-name"}),React.DOM.button({"onClick": (function (e){return om_async.core.create_class.call(null,self__.classes,self__.owner);
})},"Add")));
});
om_async.core.t13161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13163){var self__ = this;
var _13163__$1 = this;return self__.meta13162;
});
om_async.core.t13161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13163,meta13162__$1){var self__ = this;
var _13163__$1 = this;return (new om_async.core.t13161(self__.owner,self__.classes,self__.classes_view,meta13162__$1));
});
om_async.core.__GT_t13161 = (function __GT_t13161(owner__$1,classes__$1,classes_view__$1,meta13162){return (new om_async.core.t13161(owner__$1,classes__$1,classes_view__$1,meta13162));
});
}
return (new om_async.core.t13161(owner,classes,classes_view,null));
});
om_async.core.app_view = (function app_view(app,owner){if(typeof om_async.core.t13169 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t13169 = (function (owner,app,app_view,meta13170){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta13170 = meta13170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t13169.cljs$lang$type = true;
om_async.core.t13169.cljs$lang$ctorStr = "om-async.core/t13169";
om_async.core.t13169.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-async.core/t13169");
});
om_async.core.t13169.prototype.om$core$IRenderState$ = true;
om_async.core.t13169.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13172){var self__ = this;
var map__13173 = p__13172;var map__13173__$1 = ((cljs.core.seq_QMARK_.call(null,map__13173))?cljs.core.apply.call(null,cljs.core.hash_map,map__13173):map__13173);var err_msg = cljs.core.get.call(null,map__13173__$1,new cljs.core.Keyword(null,"err-msg","err-msg",3827916427));var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,om_sync.core.om_sync,new cljs.core.Keyword(null,"classes","classes",1867525016).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"view","view",1017523735),om_async.core.classes_view,new cljs.core.Keyword(null,"filter","filter",4034379498),cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"delete","delete",3973413149),null,new cljs.core.Keyword(null,"update","update",4470025275),null,new cljs.core.Keyword(null,"create","create",3956577390),null], null), null),om_sync.util.tx_tag),new cljs.core.Keyword(null,"id-key","id-key",4113763871),new cljs.core.Keyword("class","id","class/id",2867224579),new cljs.core.Keyword(null,"on-success","on-success",2969097607),(function (res,tx_data){return cljs.core.println.call(null,res);
}),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (err,tx_data){cljs.core.reset_BANG_.call(null,om_async.core.app_state,new cljs.core.Keyword(null,"old-state","old-state",1449001181).cljs$core$IFn$_invoke$arity$1(tx_data));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"err-msg","err-msg",3827916427),"Oops! Sorry, something went wrong.");
})], null)], null)),(cljs.core.truth_(err_msg)?React.DOM.div(null,err_msg):null));
});
om_async.core.t13169.prototype.om$core$IWillUpdate$ = true;
om_async.core.t13169.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"err-msg","err-msg",3827916427).cljs$core$IFn$_invoke$arity$1(next_state)))
{return setTimeout((function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"err-msg","err-msg",3827916427),null);
}),5000);
} else
{return null;
}
});
om_async.core.t13169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13171){var self__ = this;
var _13171__$1 = this;return self__.meta13170;
});
om_async.core.t13169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13171,meta13170__$1){var self__ = this;
var _13171__$1 = this;return (new om_async.core.t13169(self__.owner,self__.app,self__.app_view,meta13170__$1));
});
om_async.core.__GT_t13169 = (function __GT_t13169(owner__$1,app__$1,app_view__$1,meta13170){return (new om_async.core.t13169(owner__$1,app__$1,app_view__$1,meta13170));
});
}
return (new om_async.core.t13169(owner,app,app_view,null));
});
var tx_chan_13174 = cljs.core.async.chan.call(null);var tx_pub_chan_13175 = cljs.core.async.pub.call(null,tx_chan_13174,((function (tx_chan_13174){
return (function (_){return new cljs.core.Keyword(null,"txs","txs",1014019553);
});})(tx_chan_13174))
);om_sync.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"/init",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){cljs.core.reset_BANG_.call(null,om_async.core.app_state,res);
return om.core.root.call(null,om_async.core.app_view,om_async.core.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("classes"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-chan","tx-chan",4365225069),tx_pub_chan_13175], null),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return cljs.core.async.put_BANG_.call(null,tx_chan_13174,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data,root_cursor], null));
})], null));
})], null));

//# sourceMappingURL=core.js.map