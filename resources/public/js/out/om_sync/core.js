// Compiled by ClojureScript 0.0-2156
goog.provide('om_sync.core');
goog.require('cljs.core');
goog.require('om_sync.util');
goog.require('cljs.core.async');
goog.require('om_sync.util');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
om_sync.core.type__GT_method = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",3956577390),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"update","update",4470025275),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"delete","delete",3973413149)], null);
om_sync.core.sync_server = (function sync_server(url,tag,edn){var res_chan = cljs.core.async.chan.call(null);om_sync.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",4231316563),om_sync.core.type__GT_method.call(null,tag),new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"data","data",1016980252),edn,new cljs.core.Keyword(null,"on-error","on-error",1418576908),(function (err){return cljs.core.async.put_BANG_.call(null,res_chan,err);
}),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){return cljs.core.async.put_BANG_.call(null,res_chan,res);
})], null));
return res_chan;
});
om_sync.core.tag_and_edn = (function tag_and_edn(coll_path,path,tag_fn,id_key,tx_data){var tag = ((!((tag_fn == null)))?tag_fn.call(null,tx_data):om_sync.util.tx_tag.call(null,tx_data));var edn = (function (){var pred__9446 = cljs.core._EQ_;var expr__9447 = tag;if(cljs.core.truth_(pred__9446.call(null,new cljs.core.Keyword(null,"create","create",3956577390),expr__9447)))
{return new cljs.core.Keyword(null,"new-value","new-value",3626601078).cljs$core$IFn$_invoke$arity$1(tx_data);
} else
{if(cljs.core.truth_(pred__9446.call(null,new cljs.core.Keyword(null,"update","update",4470025275),expr__9447)))
{var ppath = om_sync.util.popn.call(null,(cljs.core.count.call(null,path) - (cljs.core.count.call(null,coll_path) + 1)),path);var m = cljs.core.select_keys.call(null,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"new-state","new-state",3624385942).cljs$core$IFn$_invoke$arity$1(tx_data),ppath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key], null));var rel = om_sync.util.sub.call(null,path,coll_path);return cljs.core.assoc_in.call(null,m,cljs.core.rest.call(null,rel),new cljs.core.Keyword(null,"new-value","new-value",3626601078).cljs$core$IFn$_invoke$arity$1(tx_data));
} else
{if(cljs.core.truth_(pred__9446.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),expr__9447)))
{return id_key.call(null,new cljs.core.Keyword(null,"old-value","old-value",1451216317).cljs$core$IFn$_invoke$arity$1(tx_data));
} else
{return null;
}
}
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,edn], null);
});
/**
* ALPHA: Creates a reusable sync componet. Data must be a map containing
* :url and :coll keys. :url must identify a server endpoint that can
* takes EDN data via POST for create, PUT for update, and DELETE for
* delete. :coll must be a cursor into the application state. Note the
* first argument could of course just be a cursor itself.
* 
* In order to function you must provide a subscribeable core.async
* channel that will stream all :tx-listen events. This channel must be
* called :tx-chan and provided via the :share option to om.core/root. It
* must be a channel constructed with cljs.core.async/pub with the topic
* :txs.
* 
* Once built om-sync will act on any transactions to the :coll value
* regardless of depth. In order to identiy which transactions to act
* on these transactions must be labeled as :create, :update, or
* :delete.
* 
* om-sync takes a variety of options via the :opts passed to
* om.core/build:
* 
* :view - a required Om component function to render the collection.
* 
* :id-key - which property represents the server id for a item in the
* collection.
* 
* :filter - a function which filters which tagged transaction to actually sync.
* 
* :tag-fn - not all components you might want to interact with may
* have properly tagged their transactions. This function will
* receive the transaction data and return the determined tag.
* 
* :on-success - a callback function that will receive the server
* response and the transaction data on success.
* 
* :on-error - a callback function that will receive the server error
* and the transaction data on failure. The transaction data can
* easily be leveraged to rollback the application state.
* 
* :sync-chan - if given this option, om-sync will not invoke
* sync-server instead it will put a map containing the :listen-path,
* :url, :tag, :edn, :on-success, :on-error, and :tx-data on the
* provided channel. This higher level operations such as server
* request batching and multiple om-sync component coordination.
*/
om_sync.core.om_sync = (function() {
var om_sync__$1 = null;
var om_sync__$1__2 = (function (data,owner){return om_sync__$1.call(null,data,owner,null);
});
var om_sync__$1__3 = (function (p__9449,owner,opts){var map__9574 = p__9449;var map__9574__$1 = ((cljs.core.seq_QMARK_.call(null,map__9574))?cljs.core.apply.call(null,cljs.core.hash_map,map__9574):map__9574);var data = map__9574__$1;var coll = cljs.core.get.call(null,map__9574__$1,new cljs.core.Keyword(null,"coll","coll",1016963678));var url = cljs.core.get.call(null,map__9574__$1,new cljs.core.Keyword(null,"url","url",1014020321));if(!((url == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("om-sync component not given url"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"url","url",-1640415448,null)))))].join('')));
}
if(typeof om_sync.core.t9575 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_sync.core.t9575 = (function (url,coll,data,map__9574,opts,owner,p__9449,om_sync,meta9576){
this.url = url;
this.coll = coll;
this.data = data;
this.map__9574 = map__9574;
this.opts = opts;
this.owner = owner;
this.p__9449 = p__9449;
this.om_sync = om_sync;
this.meta9576 = meta9576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_sync.core.t9575.cljs$lang$type = true;
om_sync.core.t9575.cljs$lang$ctorStr = "om-sync.core/t9575";
om_sync.core.t9575.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-sync.core/t9575");
});
om_sync.core.t9575.prototype.om$core$IRender$ = true;
om_sync.core.t9575.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.build.call(null,new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(self__.opts),self__.coll);
});
om_sync.core.t9575.prototype.om$core$IWillUnmount$ = true;
om_sync.core.t9575.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map__9578 = om.core.get_state.call(null,self__.owner);var map__9578__$1 = ((cljs.core.seq_QMARK_.call(null,map__9578))?cljs.core.apply.call(null,cljs.core.hash_map,map__9578):map__9578);var txs = cljs.core.get.call(null,map__9578__$1,new cljs.core.Keyword(null,"txs","txs",1014019553));var kill_chan = cljs.core.get.call(null,map__9578__$1,new cljs.core.Keyword(null,"kill-chan","kill-chan",3698972627));if(cljs.core.truth_(kill_chan))
{cljs.core.async.put_BANG_.call(null,kill_chan,(new Date()));
} else
{}
if(cljs.core.truth_(txs))
{return cljs.core.async.unsub.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"tx-chan","tx-chan",4365225069)),new cljs.core.Keyword(null,"txs","txs",1014019553),txs);
} else
{return null;
}
});
om_sync.core.t9575.prototype.om$core$IWillMount$ = true;
om_sync.core.t9575.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map__9579 = self__.opts;var map__9579__$1 = ((cljs.core.seq_QMARK_.call(null,map__9579))?cljs.core.apply.call(null,cljs.core.hash_map,map__9579):map__9579);var sync_chan = cljs.core.get.call(null,map__9579__$1,new cljs.core.Keyword(null,"sync-chan","sync-chan",1461778102));var tag_fn = cljs.core.get.call(null,map__9579__$1,new cljs.core.Keyword(null,"tag-fn","tag-fn",4427582285));var filter = cljs.core.get.call(null,map__9579__$1,new cljs.core.Keyword(null,"filter","filter",4034379498));var id_key = cljs.core.get.call(null,map__9579__$1,new cljs.core.Keyword(null,"id-key","id-key",4113763871));var map__9580 = self__.opts;var map__9580__$1 = ((cljs.core.seq_QMARK_.call(null,map__9580))?cljs.core.apply.call(null,cljs.core.hash_map,map__9580):map__9580);var on_error = cljs.core.get.call(null,map__9580__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_success = cljs.core.get.call(null,map__9580__$1,new cljs.core.Keyword(null,"on-success","on-success",2969097607));var kill_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"kill-chan","kill-chan",3698972627));var tx_chan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"tx-chan","tx-chan",4365225069));var txs = cljs.core.async.chan.call(null);var coll_path = om.core.path.call(null,self__.coll);if(!((tx_chan == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("om-sync requires shared :tx-chan pub channel with :txs topic"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"tx-chan","tx-chan",1710789300,null)))))].join('')));
}
cljs.core.async.sub.call(null,tx_chan,new cljs.core.Keyword(null,"txs","txs",1014019553),txs);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"txs","txs",1014019553),txs);
var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9652){var state_val_9653 = (state_9652[1]);if((state_val_9653 === 1))
{var state_9652__$1 = state_9652;var statearr_9654_9698 = state_9652__$1;(statearr_9654_9698[2] = null);
(statearr_9654_9698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 2))
{var inst_9583 = [txs,kill_chan];var inst_9584 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9583,null));var state_9652__$1 = state_9652;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9652__$1,4,inst_9584);
} else
{if((state_val_9653 === 3))
{var inst_9650 = (state_9652[2]);var state_9652__$1 = state_9652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9652__$1,inst_9650);
} else
{if((state_val_9653 === 4))
{var inst_9586 = (state_9652[2]);var inst_9587 = cljs.core.nth.call(null,inst_9586,0,null);var inst_9588 = cljs.core.nth.call(null,inst_9586,1,null);var inst_9589 = cljs.core._EQ_.call(null,inst_9588,kill_chan);var state_9652__$1 = (function (){var statearr_9655 = state_9652;(statearr_9655[7] = inst_9587);
return statearr_9655;
})();if(inst_9589)
{var statearr_9656_9699 = state_9652__$1;(statearr_9656_9699[1] = 5);
} else
{var statearr_9657_9700 = state_9652__$1;(statearr_9657_9700[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 5))
{var state_9652__$1 = state_9652;var statearr_9658_9701 = state_9652__$1;(statearr_9658_9701[2] = new cljs.core.Keyword(null,"done","done",1016993524));
(statearr_9658_9701[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 6))
{var inst_9587 = (state_9652[7]);var inst_9594 = (state_9652[8]);var inst_9594__$1 = cljs.core.nth.call(null,inst_9587,0,null);var inst_9595 = cljs.core.seq_QMARK_.call(null,inst_9594__$1);var state_9652__$1 = (function (){var statearr_9659 = state_9652;(statearr_9659[8] = inst_9594__$1);
return statearr_9659;
})();if(inst_9595)
{var statearr_9660_9702 = state_9652__$1;(statearr_9660_9702[1] = 8);
} else
{var statearr_9661_9703 = state_9652__$1;(statearr_9661_9703[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 7))
{var inst_9648 = (state_9652[2]);var state_9652__$1 = state_9652;var statearr_9662_9704 = state_9652__$1;(statearr_9662_9704[2] = inst_9648);
(statearr_9662_9704[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 8))
{var inst_9594 = (state_9652[8]);var inst_9597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9594);var state_9652__$1 = state_9652;var statearr_9663_9705 = state_9652__$1;(statearr_9663_9705[2] = inst_9597);
(statearr_9663_9705[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 9))
{var inst_9594 = (state_9652[8]);var state_9652__$1 = state_9652;var statearr_9664_9706 = state_9652__$1;(statearr_9664_9706[2] = inst_9594);
(statearr_9664_9706[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 10))
{var inst_9587 = (state_9652[7]);var inst_9600 = (state_9652[9]);var inst_9605 = (state_9652[10]);var inst_9603 = (state_9652[11]);var inst_9600__$1 = (state_9652[2]);var inst_9601 = cljs.core.get.call(null,inst_9600__$1,new cljs.core.Keyword(null,"new-state","new-state",3624385942));var inst_9602 = cljs.core.get.call(null,inst_9600__$1,new cljs.core.Keyword(null,"new-value","new-value",3626601078));var inst_9603__$1 = cljs.core.get.call(null,inst_9600__$1,new cljs.core.Keyword(null,"path","path",1017337751));var inst_9604 = cljs.core.nth.call(null,inst_9587,1,null);var inst_9605__$1 = om_sync.util.subpath_QMARK_.call(null,coll_path,inst_9603__$1);var state_9652__$1 = (function (){var statearr_9665 = state_9652;(statearr_9665[9] = inst_9600__$1);
(statearr_9665[12] = inst_9601);
(statearr_9665[10] = inst_9605__$1);
(statearr_9665[13] = inst_9604);
(statearr_9665[11] = inst_9603__$1);
(statearr_9665[14] = inst_9602);
return statearr_9665;
})();if(inst_9605__$1)
{var statearr_9666_9707 = state_9652__$1;(statearr_9666_9707[1] = 11);
} else
{var statearr_9667_9708 = state_9652__$1;(statearr_9667_9708[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 11))
{var inst_9607 = (state_9652[15]);var inst_9607__$1 = (filter == null);var state_9652__$1 = (function (){var statearr_9668 = state_9652;(statearr_9668[15] = inst_9607__$1);
return statearr_9668;
})();if(cljs.core.truth_(inst_9607__$1))
{var statearr_9669_9709 = state_9652__$1;(statearr_9669_9709[1] = 14);
} else
{var statearr_9670_9710 = state_9652__$1;(statearr_9670_9710[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 12))
{var inst_9605 = (state_9652[10]);var state_9652__$1 = state_9652;var statearr_9671_9711 = state_9652__$1;(statearr_9671_9711[2] = inst_9605);
(statearr_9671_9711[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 13))
{var inst_9615 = (state_9652[2]);var state_9652__$1 = state_9652;if(cljs.core.truth_(inst_9615))
{var statearr_9672_9712 = state_9652__$1;(statearr_9672_9712[1] = 17);
} else
{var statearr_9673_9713 = state_9652__$1;(statearr_9673_9713[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 14))
{var inst_9607 = (state_9652[15]);var state_9652__$1 = state_9652;var statearr_9674_9714 = state_9652__$1;(statearr_9674_9714[2] = inst_9607);
(statearr_9674_9714[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 15))
{var inst_9600 = (state_9652[9]);var inst_9610 = filter.call(null,inst_9600);var state_9652__$1 = state_9652;var statearr_9675_9715 = state_9652__$1;(statearr_9675_9715[2] = inst_9610);
(statearr_9675_9715[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 16))
{var inst_9612 = (state_9652[2]);var state_9652__$1 = state_9652;var statearr_9676_9716 = state_9652__$1;(statearr_9676_9716[2] = inst_9612);
(statearr_9676_9716[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 17))
{var inst_9619 = (state_9652[16]);var inst_9600 = (state_9652[9]);var inst_9603 = (state_9652[11]);var inst_9618 = om_sync.core.tag_and_edn.call(null,coll_path,inst_9603,tag_fn,id_key,inst_9600);var inst_9619__$1 = cljs.core.nth.call(null,inst_9618,0,null);var inst_9620 = cljs.core.nth.call(null,inst_9618,1,null);var inst_9621 = cljs.core.assoc.call(null,inst_9600,new cljs.core.Keyword("om-sync.core","tag","om-sync.core/tag",858767137),inst_9619__$1);var inst_9622 = (sync_chan == null);var inst_9623 = cljs.core.not.call(null,inst_9622);var state_9652__$1 = (function (){var statearr_9677 = state_9652;(statearr_9677[17] = inst_9620);
(statearr_9677[18] = inst_9621);
(statearr_9677[16] = inst_9619__$1);
return statearr_9677;
})();if(inst_9623)
{var statearr_9678_9717 = state_9652__$1;(statearr_9678_9717[1] = 20);
} else
{var statearr_9679_9718 = state_9652__$1;(statearr_9679_9718[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 18))
{var state_9652__$1 = state_9652;var statearr_9680_9719 = state_9652__$1;(statearr_9680_9719[2] = null);
(statearr_9680_9719[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 19))
{var inst_9645 = (state_9652[2]);var state_9652__$1 = (function (){var statearr_9681 = state_9652;(statearr_9681[19] = inst_9645);
return statearr_9681;
})();var statearr_9682_9720 = state_9652__$1;(statearr_9682_9720[2] = null);
(statearr_9682_9720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 20))
{var inst_9620 = (state_9652[17]);var inst_9621 = (state_9652[18]);var inst_9619 = (state_9652[16]);var inst_9625 = [new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"edn","edn",1014004513),new cljs.core.Keyword(null,"listen-path","listen-path",2299064285),new cljs.core.Keyword(null,"on-success","on-success",2969097607),new cljs.core.Keyword(null,"on-error","on-error",1418576908),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709)];var inst_9626 = [self__.url,inst_9619,inst_9620,coll_path,on_success,on_error,inst_9621];var inst_9627 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9625,inst_9626);var state_9652__$1 = state_9652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9652__$1,23,sync_chan,inst_9627);
} else
{if((state_val_9653 === 21))
{var inst_9620 = (state_9652[17]);var inst_9619 = (state_9652[16]);var inst_9631 = om_sync.core.sync_server.call(null,self__.url,inst_9619,inst_9620);var state_9652__$1 = state_9652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9652__$1,24,inst_9631);
} else
{if((state_val_9653 === 22))
{var inst_9642 = (state_9652[2]);var state_9652__$1 = state_9652;var statearr_9683_9721 = state_9652__$1;(statearr_9683_9721[2] = inst_9642);
(statearr_9683_9721[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 23))
{var inst_9629 = (state_9652[2]);var state_9652__$1 = state_9652;var statearr_9684_9722 = state_9652__$1;(statearr_9684_9722[2] = inst_9629);
(statearr_9684_9722[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 24))
{var inst_9633 = (state_9652[20]);var inst_9633__$1 = (state_9652[2]);var inst_9634 = om_sync.util.error_QMARK_.call(null,inst_9633__$1);var state_9652__$1 = (function (){var statearr_9685 = state_9652;(statearr_9685[20] = inst_9633__$1);
return statearr_9685;
})();if(inst_9634)
{var statearr_9686_9723 = state_9652__$1;(statearr_9686_9723[1] = 25);
} else
{var statearr_9687_9724 = state_9652__$1;(statearr_9687_9724[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 25))
{var inst_9621 = (state_9652[18]);var inst_9633 = (state_9652[20]);var inst_9636 = on_error.call(null,inst_9633,inst_9621);var state_9652__$1 = state_9652;var statearr_9688_9725 = state_9652__$1;(statearr_9688_9725[2] = inst_9636);
(statearr_9688_9725[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 26))
{var inst_9621 = (state_9652[18]);var inst_9633 = (state_9652[20]);var inst_9638 = on_success.call(null,inst_9633,inst_9621);var state_9652__$1 = state_9652;var statearr_9689_9726 = state_9652__$1;(statearr_9689_9726[2] = inst_9638);
(statearr_9689_9726[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9653 === 27))
{var inst_9640 = (state_9652[2]);var state_9652__$1 = state_9652;var statearr_9690_9727 = state_9652__$1;(statearr_9690_9727[2] = inst_9640);
(statearr_9690_9727[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9694[0] = state_machine__6138__auto__);
(statearr_9694[1] = 1);
return statearr_9694;
});
var state_machine__6138__auto____1 = (function (state_9652){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9652);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9695){if((e9695 instanceof Object))
{var ex__6141__auto__ = e9695;var statearr_9696_9728 = state_9652;(statearr_9696_9728[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9729 = state_9652;
state_9652 = G__9729;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9652){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9697 = f__6153__auto__.call(null);(statearr_9697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_9697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
om_sync.core.t9575.prototype.om$core$IInitState$ = true;
om_sync.core.t9575.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kill-chan","kill-chan",3698972627),cljs.core.async.chan.call(null)], null);
});
om_sync.core.t9575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9577){var self__ = this;
var _9577__$1 = this;return self__.meta9576;
});
om_sync.core.t9575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9577,meta9576__$1){var self__ = this;
var _9577__$1 = this;return (new om_sync.core.t9575(self__.url,self__.coll,self__.data,self__.map__9574,self__.opts,self__.owner,self__.p__9449,self__.om_sync,meta9576__$1));
});
om_sync.core.__GT_t9575 = (function __GT_t9575(url__$1,coll__$1,data__$1,map__9574__$2,opts__$1,owner__$1,p__9449__$1,om_sync__$2,meta9576){return (new om_sync.core.t9575(url__$1,coll__$1,data__$1,map__9574__$2,opts__$1,owner__$1,p__9449__$1,om_sync__$2,meta9576));
});
}
return (new om_sync.core.t9575(url,coll,data,map__9574__$1,opts,owner,p__9449,om_sync__$1,null));
});
om_sync__$1 = function(p__9449,owner,opts){
switch(arguments.length){
case 2:
return om_sync__$1__2.call(this,p__9449,owner);
case 3:
return om_sync__$1__3.call(this,p__9449,owner,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_sync__$1.cljs$core$IFn$_invoke$arity$2 = om_sync__$1__2;
om_sync__$1.cljs$core$IFn$_invoke$arity$3 = om_sync__$1__3;
return om_sync__$1;
})()
;

//# sourceMappingURL=core.js.map