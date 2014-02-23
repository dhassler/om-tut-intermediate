// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9733 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9733 = (function (f,fn_handler,meta9734){
this.f = f;
this.fn_handler = fn_handler;
this.meta9734 = meta9734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9733.cljs$lang$type = true;
cljs.core.async.t9733.cljs$lang$ctorStr = "cljs.core.async/t9733";
cljs.core.async.t9733.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9733");
});
cljs.core.async.t9733.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9735){var self__ = this;
var _9735__$1 = this;return self__.meta9734;
});
cljs.core.async.t9733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9735,meta9734__$1){var self__ = this;
var _9735__$1 = this;return (new cljs.core.async.t9733(self__.f,self__.fn_handler,meta9734__$1));
});
cljs.core.async.__GT_t9733 = (function __GT_t9733(f__$1,fn_handler__$1,meta9734){return (new cljs.core.async.t9733(f__$1,fn_handler__$1,meta9734));
});
}
return (new cljs.core.async.t9733(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9737 = buff;if(G__9737)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__9737.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9737.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9737);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9738 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9738);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9738);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___9739 = n;var x_9740 = 0;while(true){
if((x_9740 < n__4251__auto___9739))
{(a[x_9740] = 0);
{
var G__9741 = (x_9740 + 1);
x_9740 = G__9741;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9742 = (i + 1);
i = G__9742;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9746 = (function (flag,alt_flag,meta9747){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9747 = meta9747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9746.cljs$lang$type = true;
cljs.core.async.t9746.cljs$lang$ctorStr = "cljs.core.async/t9746";
cljs.core.async.t9746.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9746");
});
cljs.core.async.t9746.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9748){var self__ = this;
var _9748__$1 = this;return self__.meta9747;
});
cljs.core.async.t9746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9748,meta9747__$1){var self__ = this;
var _9748__$1 = this;return (new cljs.core.async.t9746(self__.flag,self__.alt_flag,meta9747__$1));
});
cljs.core.async.__GT_t9746 = (function __GT_t9746(flag__$1,alt_flag__$1,meta9747){return (new cljs.core.async.t9746(flag__$1,alt_flag__$1,meta9747));
});
}
return (new cljs.core.async.t9746(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9752 = (function (cb,flag,alt_handler,meta9753){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9753 = meta9753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9752.cljs$lang$type = true;
cljs.core.async.t9752.cljs$lang$ctorStr = "cljs.core.async/t9752";
cljs.core.async.t9752.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9752");
});
cljs.core.async.t9752.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9754){var self__ = this;
var _9754__$1 = this;return self__.meta9753;
});
cljs.core.async.t9752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9754,meta9753__$1){var self__ = this;
var _9754__$1 = this;return (new cljs.core.async.t9752(self__.cb,self__.flag,self__.alt_handler,meta9753__$1));
});
cljs.core.async.__GT_t9752 = (function __GT_t9752(cb__$1,flag__$1,alt_handler__$1,meta9753){return (new cljs.core.async.t9752(cb__$1,flag__$1,alt_handler__$1,meta9753));
});
}
return (new cljs.core.async.t9752(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9755_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9755_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9756 = (i + 1);
i = G__9756;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9757){var map__9759 = p__9757;var map__9759__$1 = ((cljs.core.seq_QMARK_.call(null,map__9759))?cljs.core.apply.call(null,cljs.core.hash_map,map__9759):map__9759);var opts = map__9759__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9757 = null;if (arguments.length > 1) {
  p__9757 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9757);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9760){
var ports = cljs.core.first(arglist__9760);
var p__9757 = cljs.core.rest(arglist__9760);
return alts_BANG___delegate(ports,p__9757);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9768 = (function (ch,f,map_LT_,meta9769){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9769 = meta9769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9768.cljs$lang$type = true;
cljs.core.async.t9768.cljs$lang$ctorStr = "cljs.core.async/t9768";
cljs.core.async.t9768.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9768");
});
cljs.core.async.t9768.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9768.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9771 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9771 = (function (fn1,_,meta9769,ch,f,map_LT_,meta9772){
this.fn1 = fn1;
this._ = _;
this.meta9769 = meta9769;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9772 = meta9772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9771.cljs$lang$type = true;
cljs.core.async.t9771.cljs$lang$ctorStr = "cljs.core.async/t9771";
cljs.core.async.t9771.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9771");
});
cljs.core.async.t9771.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9771.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9761_SHARP_){return f1.call(null,(((p1__9761_SHARP_ == null))?null:self__.f.call(null,p1__9761_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9773){var self__ = this;
var _9773__$1 = this;return self__.meta9772;
});
cljs.core.async.t9771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9773,meta9772__$1){var self__ = this;
var _9773__$1 = this;return (new cljs.core.async.t9771(self__.fn1,self__._,self__.meta9769,self__.ch,self__.f,self__.map_LT_,meta9772__$1));
});
cljs.core.async.__GT_t9771 = (function __GT_t9771(fn1__$1,___$2,meta9769__$1,ch__$2,f__$2,map_LT___$2,meta9772){return (new cljs.core.async.t9771(fn1__$1,___$2,meta9769__$1,ch__$2,f__$2,map_LT___$2,meta9772));
});
}
return (new cljs.core.async.t9771(fn1,___$1,self__.meta9769,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9768.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9770){var self__ = this;
var _9770__$1 = this;return self__.meta9769;
});
cljs.core.async.t9768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9770,meta9769__$1){var self__ = this;
var _9770__$1 = this;return (new cljs.core.async.t9768(self__.ch,self__.f,self__.map_LT_,meta9769__$1));
});
cljs.core.async.__GT_t9768 = (function __GT_t9768(ch__$1,f__$1,map_LT___$1,meta9769){return (new cljs.core.async.t9768(ch__$1,f__$1,map_LT___$1,meta9769));
});
}
return (new cljs.core.async.t9768(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9777 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9777 = (function (ch,f,map_GT_,meta9778){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9778 = meta9778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9777.cljs$lang$type = true;
cljs.core.async.t9777.cljs$lang$ctorStr = "cljs.core.async/t9777";
cljs.core.async.t9777.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9777");
});
cljs.core.async.t9777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9777.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9779){var self__ = this;
var _9779__$1 = this;return self__.meta9778;
});
cljs.core.async.t9777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9779,meta9778__$1){var self__ = this;
var _9779__$1 = this;return (new cljs.core.async.t9777(self__.ch,self__.f,self__.map_GT_,meta9778__$1));
});
cljs.core.async.__GT_t9777 = (function __GT_t9777(ch__$1,f__$1,map_GT___$1,meta9778){return (new cljs.core.async.t9777(ch__$1,f__$1,map_GT___$1,meta9778));
});
}
return (new cljs.core.async.t9777(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9783 = (function (ch,p,filter_GT_,meta9784){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9784 = meta9784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9783.cljs$lang$type = true;
cljs.core.async.t9783.cljs$lang$ctorStr = "cljs.core.async/t9783";
cljs.core.async.t9783.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9783");
});
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9785){var self__ = this;
var _9785__$1 = this;return self__.meta9784;
});
cljs.core.async.t9783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9785,meta9784__$1){var self__ = this;
var _9785__$1 = this;return (new cljs.core.async.t9783(self__.ch,self__.p,self__.filter_GT_,meta9784__$1));
});
cljs.core.async.__GT_t9783 = (function __GT_t9783(ch__$1,p__$1,filter_GT___$1,meta9784){return (new cljs.core.async.t9783(ch__$1,p__$1,filter_GT___$1,meta9784));
});
}
return (new cljs.core.async.t9783(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___9868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_9847){var state_val_9848 = (state_9847[1]);if((state_val_9848 === 1))
{var state_9847__$1 = state_9847;var statearr_9849_9869 = state_9847__$1;(statearr_9849_9869[2] = null);
(statearr_9849_9869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9848 === 2))
{var state_9847__$1 = state_9847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9847__$1,4,ch);
} else
{if((state_val_9848 === 3))
{var inst_9845 = (state_9847[2]);var state_9847__$1 = state_9847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9847__$1,inst_9845);
} else
{if((state_val_9848 === 4))
{var inst_9829 = (state_9847[7]);var inst_9829__$1 = (state_9847[2]);var inst_9830 = (inst_9829__$1 == null);var state_9847__$1 = (function (){var statearr_9850 = state_9847;(statearr_9850[7] = inst_9829__$1);
return statearr_9850;
})();if(cljs.core.truth_(inst_9830))
{var statearr_9851_9870 = state_9847__$1;(statearr_9851_9870[1] = 5);
} else
{var statearr_9852_9871 = state_9847__$1;(statearr_9852_9871[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9848 === 5))
{var inst_9832 = cljs.core.async.close_BANG_.call(null,out);var state_9847__$1 = state_9847;var statearr_9853_9872 = state_9847__$1;(statearr_9853_9872[2] = inst_9832);
(statearr_9853_9872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9848 === 6))
{var inst_9829 = (state_9847[7]);var inst_9834 = p.call(null,inst_9829);var state_9847__$1 = state_9847;if(cljs.core.truth_(inst_9834))
{var statearr_9854_9873 = state_9847__$1;(statearr_9854_9873[1] = 8);
} else
{var statearr_9855_9874 = state_9847__$1;(statearr_9855_9874[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9848 === 7))
{var inst_9843 = (state_9847[2]);var state_9847__$1 = state_9847;var statearr_9856_9875 = state_9847__$1;(statearr_9856_9875[2] = inst_9843);
(statearr_9856_9875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9848 === 8))
{var inst_9829 = (state_9847[7]);var state_9847__$1 = state_9847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9847__$1,11,out,inst_9829);
} else
{if((state_val_9848 === 9))
{var state_9847__$1 = state_9847;var statearr_9857_9876 = state_9847__$1;(statearr_9857_9876[2] = null);
(statearr_9857_9876[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9848 === 10))
{var inst_9840 = (state_9847[2]);var state_9847__$1 = (function (){var statearr_9858 = state_9847;(statearr_9858[8] = inst_9840);
return statearr_9858;
})();var statearr_9859_9877 = state_9847__$1;(statearr_9859_9877[2] = null);
(statearr_9859_9877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9848 === 11))
{var inst_9837 = (state_9847[2]);var state_9847__$1 = state_9847;var statearr_9860_9878 = state_9847__$1;(statearr_9860_9878[2] = inst_9837);
(statearr_9860_9878[1] = 10);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_9864 = [null,null,null,null,null,null,null,null,null];(statearr_9864[0] = state_machine__6138__auto__);
(statearr_9864[1] = 1);
return statearr_9864;
});
var state_machine__6138__auto____1 = (function (state_9847){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_9847);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e9865){if((e9865 instanceof Object))
{var ex__6141__auto__ = e9865;var statearr_9866_9879 = state_9847;(statearr_9866_9879[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9847);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9880 = state_9847;
state_9847 = G__9880;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_9847){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_9847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_9867 = f__6153__auto__.call(null);(statearr_9867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___9868);
return statearr_9867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10032){var state_val_10033 = (state_10032[1]);if((state_val_10033 === 1))
{var state_10032__$1 = state_10032;var statearr_10034_10071 = state_10032__$1;(statearr_10034_10071[2] = null);
(statearr_10034_10071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 2))
{var state_10032__$1 = state_10032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10032__$1,4,in$);
} else
{if((state_val_10033 === 3))
{var inst_10030 = (state_10032[2]);var state_10032__$1 = state_10032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10032__$1,inst_10030);
} else
{if((state_val_10033 === 4))
{var inst_9978 = (state_10032[7]);var inst_9978__$1 = (state_10032[2]);var inst_9979 = (inst_9978__$1 == null);var state_10032__$1 = (function (){var statearr_10035 = state_10032;(statearr_10035[7] = inst_9978__$1);
return statearr_10035;
})();if(cljs.core.truth_(inst_9979))
{var statearr_10036_10072 = state_10032__$1;(statearr_10036_10072[1] = 5);
} else
{var statearr_10037_10073 = state_10032__$1;(statearr_10037_10073[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 5))
{var inst_9981 = cljs.core.async.close_BANG_.call(null,out);var state_10032__$1 = state_10032;var statearr_10038_10074 = state_10032__$1;(statearr_10038_10074[2] = inst_9981);
(statearr_10038_10074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 6))
{var inst_9978 = (state_10032[7]);var inst_9983 = f.call(null,inst_9978);var inst_9988 = cljs.core.seq.call(null,inst_9983);var inst_9989 = inst_9988;var inst_9990 = null;var inst_9991 = 0;var inst_9992 = 0;var state_10032__$1 = (function (){var statearr_10039 = state_10032;(statearr_10039[8] = inst_9991);
(statearr_10039[9] = inst_9989);
(statearr_10039[10] = inst_9990);
(statearr_10039[11] = inst_9992);
return statearr_10039;
})();var statearr_10040_10075 = state_10032__$1;(statearr_10040_10075[2] = null);
(statearr_10040_10075[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 7))
{var inst_10028 = (state_10032[2]);var state_10032__$1 = state_10032;var statearr_10041_10076 = state_10032__$1;(statearr_10041_10076[2] = inst_10028);
(statearr_10041_10076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 8))
{var inst_9991 = (state_10032[8]);var inst_9992 = (state_10032[11]);var inst_9994 = (inst_9992 < inst_9991);var inst_9995 = inst_9994;var state_10032__$1 = state_10032;if(cljs.core.truth_(inst_9995))
{var statearr_10042_10077 = state_10032__$1;(statearr_10042_10077[1] = 10);
} else
{var statearr_10043_10078 = state_10032__$1;(statearr_10043_10078[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 9))
{var inst_10025 = (state_10032[2]);var state_10032__$1 = (function (){var statearr_10044 = state_10032;(statearr_10044[12] = inst_10025);
return statearr_10044;
})();var statearr_10045_10079 = state_10032__$1;(statearr_10045_10079[2] = null);
(statearr_10045_10079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 10))
{var inst_9990 = (state_10032[10]);var inst_9992 = (state_10032[11]);var inst_9997 = cljs.core._nth.call(null,inst_9990,inst_9992);var state_10032__$1 = state_10032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10032__$1,13,out,inst_9997);
} else
{if((state_val_10033 === 11))
{var inst_10003 = (state_10032[13]);var inst_9989 = (state_10032[9]);var inst_10003__$1 = cljs.core.seq.call(null,inst_9989);var state_10032__$1 = (function (){var statearr_10049 = state_10032;(statearr_10049[13] = inst_10003__$1);
return statearr_10049;
})();if(inst_10003__$1)
{var statearr_10050_10080 = state_10032__$1;(statearr_10050_10080[1] = 14);
} else
{var statearr_10051_10081 = state_10032__$1;(statearr_10051_10081[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 12))
{var inst_10023 = (state_10032[2]);var state_10032__$1 = state_10032;var statearr_10052_10082 = state_10032__$1;(statearr_10052_10082[2] = inst_10023);
(statearr_10052_10082[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 13))
{var inst_9991 = (state_10032[8]);var inst_9989 = (state_10032[9]);var inst_9990 = (state_10032[10]);var inst_9992 = (state_10032[11]);var inst_9999 = (state_10032[2]);var inst_10000 = (inst_9992 + 1);var tmp10046 = inst_9991;var tmp10047 = inst_9989;var tmp10048 = inst_9990;var inst_9989__$1 = tmp10047;var inst_9990__$1 = tmp10048;var inst_9991__$1 = tmp10046;var inst_9992__$1 = inst_10000;var state_10032__$1 = (function (){var statearr_10053 = state_10032;(statearr_10053[14] = inst_9999);
(statearr_10053[8] = inst_9991__$1);
(statearr_10053[9] = inst_9989__$1);
(statearr_10053[10] = inst_9990__$1);
(statearr_10053[11] = inst_9992__$1);
return statearr_10053;
})();var statearr_10054_10083 = state_10032__$1;(statearr_10054_10083[2] = null);
(statearr_10054_10083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 14))
{var inst_10003 = (state_10032[13]);var inst_10005 = cljs.core.chunked_seq_QMARK_.call(null,inst_10003);var state_10032__$1 = state_10032;if(inst_10005)
{var statearr_10055_10084 = state_10032__$1;(statearr_10055_10084[1] = 17);
} else
{var statearr_10056_10085 = state_10032__$1;(statearr_10056_10085[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 15))
{var state_10032__$1 = state_10032;var statearr_10057_10086 = state_10032__$1;(statearr_10057_10086[2] = null);
(statearr_10057_10086[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 16))
{var inst_10021 = (state_10032[2]);var state_10032__$1 = state_10032;var statearr_10058_10087 = state_10032__$1;(statearr_10058_10087[2] = inst_10021);
(statearr_10058_10087[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 17))
{var inst_10003 = (state_10032[13]);var inst_10007 = cljs.core.chunk_first.call(null,inst_10003);var inst_10008 = cljs.core.chunk_rest.call(null,inst_10003);var inst_10009 = cljs.core.count.call(null,inst_10007);var inst_9989 = inst_10008;var inst_9990 = inst_10007;var inst_9991 = inst_10009;var inst_9992 = 0;var state_10032__$1 = (function (){var statearr_10059 = state_10032;(statearr_10059[8] = inst_9991);
(statearr_10059[9] = inst_9989);
(statearr_10059[10] = inst_9990);
(statearr_10059[11] = inst_9992);
return statearr_10059;
})();var statearr_10060_10088 = state_10032__$1;(statearr_10060_10088[2] = null);
(statearr_10060_10088[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 18))
{var inst_10003 = (state_10032[13]);var inst_10012 = cljs.core.first.call(null,inst_10003);var state_10032__$1 = state_10032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10032__$1,20,out,inst_10012);
} else
{if((state_val_10033 === 19))
{var inst_10018 = (state_10032[2]);var state_10032__$1 = state_10032;var statearr_10061_10089 = state_10032__$1;(statearr_10061_10089[2] = inst_10018);
(statearr_10061_10089[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 20))
{var inst_10003 = (state_10032[13]);var inst_10014 = (state_10032[2]);var inst_10015 = cljs.core.next.call(null,inst_10003);var inst_9989 = inst_10015;var inst_9990 = null;var inst_9991 = 0;var inst_9992 = 0;var state_10032__$1 = (function (){var statearr_10062 = state_10032;(statearr_10062[15] = inst_10014);
(statearr_10062[8] = inst_9991);
(statearr_10062[9] = inst_9989);
(statearr_10062[10] = inst_9990);
(statearr_10062[11] = inst_9992);
return statearr_10062;
})();var statearr_10063_10090 = state_10032__$1;(statearr_10063_10090[2] = null);
(statearr_10063_10090[1] = 8);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10067[0] = state_machine__6138__auto__);
(statearr_10067[1] = 1);
return statearr_10067;
});
var state_machine__6138__auto____1 = (function (state_10032){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10068){if((e10068 instanceof Object))
{var ex__6141__auto__ = e10068;var statearr_10069_10091 = state_10032;(statearr_10069_10091[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10092 = state_10032;
state_10032 = G__10092;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10032){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10070 = f__6153__auto__.call(null);(statearr_10070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6152__auto___10173 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10152){var state_val_10153 = (state_10152[1]);if((state_val_10153 === 1))
{var state_10152__$1 = state_10152;var statearr_10154_10174 = state_10152__$1;(statearr_10154_10174[2] = null);
(statearr_10154_10174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10153 === 2))
{var state_10152__$1 = state_10152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10152__$1,4,from);
} else
{if((state_val_10153 === 3))
{var inst_10150 = (state_10152[2]);var state_10152__$1 = state_10152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10152__$1,inst_10150);
} else
{if((state_val_10153 === 4))
{var inst_10135 = (state_10152[7]);var inst_10135__$1 = (state_10152[2]);var inst_10136 = (inst_10135__$1 == null);var state_10152__$1 = (function (){var statearr_10155 = state_10152;(statearr_10155[7] = inst_10135__$1);
return statearr_10155;
})();if(cljs.core.truth_(inst_10136))
{var statearr_10156_10175 = state_10152__$1;(statearr_10156_10175[1] = 5);
} else
{var statearr_10157_10176 = state_10152__$1;(statearr_10157_10176[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10153 === 5))
{var state_10152__$1 = state_10152;if(cljs.core.truth_(close_QMARK_))
{var statearr_10158_10177 = state_10152__$1;(statearr_10158_10177[1] = 8);
} else
{var statearr_10159_10178 = state_10152__$1;(statearr_10159_10178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10153 === 6))
{var inst_10135 = (state_10152[7]);var state_10152__$1 = state_10152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10152__$1,11,to,inst_10135);
} else
{if((state_val_10153 === 7))
{var inst_10148 = (state_10152[2]);var state_10152__$1 = state_10152;var statearr_10160_10179 = state_10152__$1;(statearr_10160_10179[2] = inst_10148);
(statearr_10160_10179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10153 === 8))
{var inst_10139 = cljs.core.async.close_BANG_.call(null,to);var state_10152__$1 = state_10152;var statearr_10161_10180 = state_10152__$1;(statearr_10161_10180[2] = inst_10139);
(statearr_10161_10180[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10153 === 9))
{var state_10152__$1 = state_10152;var statearr_10162_10181 = state_10152__$1;(statearr_10162_10181[2] = null);
(statearr_10162_10181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10153 === 10))
{var inst_10142 = (state_10152[2]);var state_10152__$1 = state_10152;var statearr_10163_10182 = state_10152__$1;(statearr_10163_10182[2] = inst_10142);
(statearr_10163_10182[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10153 === 11))
{var inst_10145 = (state_10152[2]);var state_10152__$1 = (function (){var statearr_10164 = state_10152;(statearr_10164[8] = inst_10145);
return statearr_10164;
})();var statearr_10165_10183 = state_10152__$1;(statearr_10165_10183[2] = null);
(statearr_10165_10183[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10169 = [null,null,null,null,null,null,null,null,null];(statearr_10169[0] = state_machine__6138__auto__);
(statearr_10169[1] = 1);
return statearr_10169;
});
var state_machine__6138__auto____1 = (function (state_10152){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10152);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10170){if((e10170 instanceof Object))
{var ex__6141__auto__ = e10170;var statearr_10171_10184 = state_10152;(statearr_10171_10184[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10170;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10185 = state_10152;
state_10152 = G__10185;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10152){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10172 = f__6153__auto__.call(null);(statearr_10172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___10173);
return statearr_10172;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6152__auto___10272 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10250){var state_val_10251 = (state_10250[1]);if((state_val_10251 === 1))
{var state_10250__$1 = state_10250;var statearr_10252_10273 = state_10250__$1;(statearr_10252_10273[2] = null);
(statearr_10252_10273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 2))
{var state_10250__$1 = state_10250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10250__$1,4,ch);
} else
{if((state_val_10251 === 3))
{var inst_10248 = (state_10250[2]);var state_10250__$1 = state_10250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10250__$1,inst_10248);
} else
{if((state_val_10251 === 4))
{var inst_10231 = (state_10250[7]);var inst_10231__$1 = (state_10250[2]);var inst_10232 = (inst_10231__$1 == null);var state_10250__$1 = (function (){var statearr_10253 = state_10250;(statearr_10253[7] = inst_10231__$1);
return statearr_10253;
})();if(cljs.core.truth_(inst_10232))
{var statearr_10254_10274 = state_10250__$1;(statearr_10254_10274[1] = 5);
} else
{var statearr_10255_10275 = state_10250__$1;(statearr_10255_10275[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 5))
{var inst_10234 = cljs.core.async.close_BANG_.call(null,tc);var inst_10235 = cljs.core.async.close_BANG_.call(null,fc);var state_10250__$1 = (function (){var statearr_10256 = state_10250;(statearr_10256[8] = inst_10234);
return statearr_10256;
})();var statearr_10257_10276 = state_10250__$1;(statearr_10257_10276[2] = inst_10235);
(statearr_10257_10276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 6))
{var inst_10231 = (state_10250[7]);var inst_10237 = p.call(null,inst_10231);var state_10250__$1 = state_10250;if(cljs.core.truth_(inst_10237))
{var statearr_10258_10277 = state_10250__$1;(statearr_10258_10277[1] = 9);
} else
{var statearr_10259_10278 = state_10250__$1;(statearr_10259_10278[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 7))
{var inst_10246 = (state_10250[2]);var state_10250__$1 = state_10250;var statearr_10260_10279 = state_10250__$1;(statearr_10260_10279[2] = inst_10246);
(statearr_10260_10279[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 8))
{var inst_10243 = (state_10250[2]);var state_10250__$1 = (function (){var statearr_10261 = state_10250;(statearr_10261[9] = inst_10243);
return statearr_10261;
})();var statearr_10262_10280 = state_10250__$1;(statearr_10262_10280[2] = null);
(statearr_10262_10280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 9))
{var state_10250__$1 = state_10250;var statearr_10263_10281 = state_10250__$1;(statearr_10263_10281[2] = tc);
(statearr_10263_10281[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 10))
{var state_10250__$1 = state_10250;var statearr_10264_10282 = state_10250__$1;(statearr_10264_10282[2] = fc);
(statearr_10264_10282[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10251 === 11))
{var inst_10231 = (state_10250[7]);var inst_10241 = (state_10250[2]);var state_10250__$1 = state_10250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10250__$1,8,inst_10241,inst_10231);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10268 = [null,null,null,null,null,null,null,null,null,null];(statearr_10268[0] = state_machine__6138__auto__);
(statearr_10268[1] = 1);
return statearr_10268;
});
var state_machine__6138__auto____1 = (function (state_10250){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10250);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10269){if((e10269 instanceof Object))
{var ex__6141__auto__ = e10269;var statearr_10270_10283 = state_10250;(statearr_10270_10283[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10250);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10284 = state_10250;
state_10250 = G__10284;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10250){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10271 = f__6153__auto__.call(null);(statearr_10271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___10272);
return statearr_10271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10331){var state_val_10332 = (state_10331[1]);if((state_val_10332 === 7))
{var inst_10327 = (state_10331[2]);var state_10331__$1 = state_10331;var statearr_10333_10349 = state_10331__$1;(statearr_10333_10349[2] = inst_10327);
(statearr_10333_10349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 6))
{var inst_10320 = (state_10331[7]);var inst_10317 = (state_10331[8]);var inst_10324 = f.call(null,inst_10317,inst_10320);var inst_10317__$1 = inst_10324;var state_10331__$1 = (function (){var statearr_10334 = state_10331;(statearr_10334[8] = inst_10317__$1);
return statearr_10334;
})();var statearr_10335_10350 = state_10331__$1;(statearr_10335_10350[2] = null);
(statearr_10335_10350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 5))
{var inst_10317 = (state_10331[8]);var state_10331__$1 = state_10331;var statearr_10336_10351 = state_10331__$1;(statearr_10336_10351[2] = inst_10317);
(statearr_10336_10351[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 4))
{var inst_10320 = (state_10331[7]);var inst_10320__$1 = (state_10331[2]);var inst_10321 = (inst_10320__$1 == null);var state_10331__$1 = (function (){var statearr_10337 = state_10331;(statearr_10337[7] = inst_10320__$1);
return statearr_10337;
})();if(cljs.core.truth_(inst_10321))
{var statearr_10338_10352 = state_10331__$1;(statearr_10338_10352[1] = 5);
} else
{var statearr_10339_10353 = state_10331__$1;(statearr_10339_10353[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 3))
{var inst_10329 = (state_10331[2]);var state_10331__$1 = state_10331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10331__$1,inst_10329);
} else
{if((state_val_10332 === 2))
{var state_10331__$1 = state_10331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10331__$1,4,ch);
} else
{if((state_val_10332 === 1))
{var inst_10317 = init;var state_10331__$1 = (function (){var statearr_10340 = state_10331;(statearr_10340[8] = inst_10317);
return statearr_10340;
})();var statearr_10341_10354 = state_10331__$1;(statearr_10341_10354[2] = null);
(statearr_10341_10354[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10345 = [null,null,null,null,null,null,null,null,null];(statearr_10345[0] = state_machine__6138__auto__);
(statearr_10345[1] = 1);
return statearr_10345;
});
var state_machine__6138__auto____1 = (function (state_10331){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10331);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10346){if((e10346 instanceof Object))
{var ex__6141__auto__ = e10346;var statearr_10347_10355 = state_10331;(statearr_10347_10355[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10356 = state_10331;
state_10331 = G__10356;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10331){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10348 = f__6153__auto__.call(null);(statearr_10348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10418){var state_val_10419 = (state_10418[1]);if((state_val_10419 === 1))
{var inst_10398 = cljs.core.seq.call(null,coll);var inst_10399 = inst_10398;var state_10418__$1 = (function (){var statearr_10420 = state_10418;(statearr_10420[7] = inst_10399);
return statearr_10420;
})();var statearr_10421_10439 = state_10418__$1;(statearr_10421_10439[2] = null);
(statearr_10421_10439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 2))
{var inst_10399 = (state_10418[7]);var state_10418__$1 = state_10418;if(cljs.core.truth_(inst_10399))
{var statearr_10422_10440 = state_10418__$1;(statearr_10422_10440[1] = 4);
} else
{var statearr_10423_10441 = state_10418__$1;(statearr_10423_10441[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 3))
{var inst_10416 = (state_10418[2]);var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10418__$1,inst_10416);
} else
{if((state_val_10419 === 4))
{var inst_10399 = (state_10418[7]);var inst_10402 = cljs.core.first.call(null,inst_10399);var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10418__$1,7,ch,inst_10402);
} else
{if((state_val_10419 === 5))
{var state_10418__$1 = state_10418;if(cljs.core.truth_(close_QMARK_))
{var statearr_10424_10442 = state_10418__$1;(statearr_10424_10442[1] = 8);
} else
{var statearr_10425_10443 = state_10418__$1;(statearr_10425_10443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 6))
{var inst_10414 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10426_10444 = state_10418__$1;(statearr_10426_10444[2] = inst_10414);
(statearr_10426_10444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 7))
{var inst_10399 = (state_10418[7]);var inst_10404 = (state_10418[2]);var inst_10405 = cljs.core.next.call(null,inst_10399);var inst_10399__$1 = inst_10405;var state_10418__$1 = (function (){var statearr_10427 = state_10418;(statearr_10427[7] = inst_10399__$1);
(statearr_10427[8] = inst_10404);
return statearr_10427;
})();var statearr_10428_10445 = state_10418__$1;(statearr_10428_10445[2] = null);
(statearr_10428_10445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 8))
{var inst_10409 = cljs.core.async.close_BANG_.call(null,ch);var state_10418__$1 = state_10418;var statearr_10429_10446 = state_10418__$1;(statearr_10429_10446[2] = inst_10409);
(statearr_10429_10446[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 9))
{var state_10418__$1 = state_10418;var statearr_10430_10447 = state_10418__$1;(statearr_10430_10447[2] = null);
(statearr_10430_10447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 10))
{var inst_10412 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10431_10448 = state_10418__$1;(statearr_10431_10448[2] = inst_10412);
(statearr_10431_10448[1] = 6);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_10435 = [null,null,null,null,null,null,null,null,null];(statearr_10435[0] = state_machine__6138__auto__);
(statearr_10435[1] = 1);
return statearr_10435;
});
var state_machine__6138__auto____1 = (function (state_10418){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10436){if((e10436 instanceof Object))
{var ex__6141__auto__ = e10436;var statearr_10437_10449 = state_10418;(statearr_10437_10449[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10450 = state_10418;
state_10418 = G__10450;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10418){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10438 = f__6153__auto__.call(null);(statearr_10438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto__);
return statearr_10438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return c__6152__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10452 = {};return obj10452;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10454 = {};return obj10454;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10678 = (function (cs,ch,mult,meta10679){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10679 = meta10679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10678.cljs$lang$type = true;
cljs.core.async.t10678.cljs$lang$ctorStr = "cljs.core.async/t10678";
cljs.core.async.t10678.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10678");
});})(cs))
;
cljs.core.async.t10678.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10678.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10678.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10678.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10678.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10680){var self__ = this;
var _10680__$1 = this;return self__.meta10679;
});})(cs))
;
cljs.core.async.t10678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10680,meta10679__$1){var self__ = this;
var _10680__$1 = this;return (new cljs.core.async.t10678(self__.cs,self__.ch,self__.mult,meta10679__$1));
});})(cs))
;
cljs.core.async.__GT_t10678 = ((function (cs){
return (function __GT_t10678(cs__$1,ch__$1,mult__$1,meta10679){return (new cljs.core.async.t10678(cs__$1,ch__$1,mult__$1,meta10679));
});})(cs))
;
}
return (new cljs.core.async.t10678(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6152__auto___10901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_10815){var state_val_10816 = (state_10815[1]);if((state_val_10816 === 32))
{var inst_10683 = (state_10815[7]);var inst_10759 = (state_10815[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10815,31,Object,null,30);var inst_10766 = cljs.core.async.put_BANG_.call(null,inst_10759,inst_10683,done);var state_10815__$1 = state_10815;var statearr_10817_10902 = state_10815__$1;(statearr_10817_10902[2] = inst_10766);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 1))
{var state_10815__$1 = state_10815;var statearr_10818_10903 = state_10815__$1;(statearr_10818_10903[2] = null);
(statearr_10818_10903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 33))
{var inst_10772 = (state_10815[9]);var inst_10774 = cljs.core.chunked_seq_QMARK_.call(null,inst_10772);var state_10815__$1 = state_10815;if(inst_10774)
{var statearr_10819_10904 = state_10815__$1;(statearr_10819_10904[1] = 36);
} else
{var statearr_10820_10905 = state_10815__$1;(statearr_10820_10905[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 2))
{var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10815__$1,4,ch);
} else
{if((state_val_10816 === 34))
{var state_10815__$1 = state_10815;var statearr_10821_10906 = state_10815__$1;(statearr_10821_10906[2] = null);
(statearr_10821_10906[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 3))
{var inst_10813 = (state_10815[2]);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10815__$1,inst_10813);
} else
{if((state_val_10816 === 35))
{var inst_10797 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10822_10907 = state_10815__$1;(statearr_10822_10907[2] = inst_10797);
(statearr_10822_10907[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 4))
{var inst_10683 = (state_10815[7]);var inst_10683__$1 = (state_10815[2]);var inst_10684 = (inst_10683__$1 == null);var state_10815__$1 = (function (){var statearr_10823 = state_10815;(statearr_10823[7] = inst_10683__$1);
return statearr_10823;
})();if(cljs.core.truth_(inst_10684))
{var statearr_10824_10908 = state_10815__$1;(statearr_10824_10908[1] = 5);
} else
{var statearr_10825_10909 = state_10815__$1;(statearr_10825_10909[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 36))
{var inst_10772 = (state_10815[9]);var inst_10776 = cljs.core.chunk_first.call(null,inst_10772);var inst_10777 = cljs.core.chunk_rest.call(null,inst_10772);var inst_10778 = cljs.core.count.call(null,inst_10776);var inst_10751 = inst_10777;var inst_10752 = inst_10776;var inst_10753 = inst_10778;var inst_10754 = 0;var state_10815__$1 = (function (){var statearr_10826 = state_10815;(statearr_10826[10] = inst_10752);
(statearr_10826[11] = inst_10753);
(statearr_10826[12] = inst_10754);
(statearr_10826[13] = inst_10751);
return statearr_10826;
})();var statearr_10827_10910 = state_10815__$1;(statearr_10827_10910[2] = null);
(statearr_10827_10910[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 5))
{var inst_10690 = cljs.core.deref.call(null,cs);var inst_10691 = cljs.core.seq.call(null,inst_10690);var inst_10692 = inst_10691;var inst_10693 = null;var inst_10694 = 0;var inst_10695 = 0;var state_10815__$1 = (function (){var statearr_10828 = state_10815;(statearr_10828[14] = inst_10695);
(statearr_10828[15] = inst_10694);
(statearr_10828[16] = inst_10693);
(statearr_10828[17] = inst_10692);
return statearr_10828;
})();var statearr_10829_10911 = state_10815__$1;(statearr_10829_10911[2] = null);
(statearr_10829_10911[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 37))
{var inst_10772 = (state_10815[9]);var inst_10781 = cljs.core.first.call(null,inst_10772);var state_10815__$1 = (function (){var statearr_10830 = state_10815;(statearr_10830[18] = inst_10781);
return statearr_10830;
})();var statearr_10831_10912 = state_10815__$1;(statearr_10831_10912[2] = null);
(statearr_10831_10912[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 6))
{var inst_10743 = (state_10815[19]);var inst_10742 = cljs.core.deref.call(null,cs);var inst_10743__$1 = cljs.core.keys.call(null,inst_10742);var inst_10744 = cljs.core.count.call(null,inst_10743__$1);var inst_10745 = cljs.core.reset_BANG_.call(null,dctr,inst_10744);var inst_10750 = cljs.core.seq.call(null,inst_10743__$1);var inst_10751 = inst_10750;var inst_10752 = null;var inst_10753 = 0;var inst_10754 = 0;var state_10815__$1 = (function (){var statearr_10832 = state_10815;(statearr_10832[20] = inst_10745);
(statearr_10832[10] = inst_10752);
(statearr_10832[11] = inst_10753);
(statearr_10832[12] = inst_10754);
(statearr_10832[13] = inst_10751);
(statearr_10832[19] = inst_10743__$1);
return statearr_10832;
})();var statearr_10833_10913 = state_10815__$1;(statearr_10833_10913[2] = null);
(statearr_10833_10913[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 38))
{var inst_10794 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10834_10914 = state_10815__$1;(statearr_10834_10914[2] = inst_10794);
(statearr_10834_10914[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 7))
{var inst_10811 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10835_10915 = state_10815__$1;(statearr_10835_10915[2] = inst_10811);
(statearr_10835_10915[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 39))
{var inst_10772 = (state_10815[9]);var inst_10790 = (state_10815[2]);var inst_10791 = cljs.core.next.call(null,inst_10772);var inst_10751 = inst_10791;var inst_10752 = null;var inst_10753 = 0;var inst_10754 = 0;var state_10815__$1 = (function (){var statearr_10836 = state_10815;(statearr_10836[10] = inst_10752);
(statearr_10836[11] = inst_10753);
(statearr_10836[12] = inst_10754);
(statearr_10836[13] = inst_10751);
(statearr_10836[21] = inst_10790);
return statearr_10836;
})();var statearr_10837_10916 = state_10815__$1;(statearr_10837_10916[2] = null);
(statearr_10837_10916[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 8))
{var inst_10695 = (state_10815[14]);var inst_10694 = (state_10815[15]);var inst_10697 = (inst_10695 < inst_10694);var inst_10698 = inst_10697;var state_10815__$1 = state_10815;if(cljs.core.truth_(inst_10698))
{var statearr_10838_10917 = state_10815__$1;(statearr_10838_10917[1] = 10);
} else
{var statearr_10839_10918 = state_10815__$1;(statearr_10839_10918[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 40))
{var inst_10781 = (state_10815[18]);var inst_10782 = (state_10815[2]);var inst_10783 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10784 = cljs.core.async.untap_STAR_.call(null,m,inst_10781);var state_10815__$1 = (function (){var statearr_10840 = state_10815;(statearr_10840[22] = inst_10783);
(statearr_10840[23] = inst_10782);
return statearr_10840;
})();var statearr_10841_10919 = state_10815__$1;(statearr_10841_10919[2] = inst_10784);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 9))
{var inst_10740 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10842_10920 = state_10815__$1;(statearr_10842_10920[2] = inst_10740);
(statearr_10842_10920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 41))
{var inst_10683 = (state_10815[7]);var inst_10781 = (state_10815[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10815,40,Object,null,39);var inst_10788 = cljs.core.async.put_BANG_.call(null,inst_10781,inst_10683,done);var state_10815__$1 = state_10815;var statearr_10843_10921 = state_10815__$1;(statearr_10843_10921[2] = inst_10788);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 10))
{var inst_10695 = (state_10815[14]);var inst_10693 = (state_10815[16]);var inst_10701 = cljs.core._nth.call(null,inst_10693,inst_10695);var inst_10702 = cljs.core.nth.call(null,inst_10701,0,null);var inst_10703 = cljs.core.nth.call(null,inst_10701,1,null);var state_10815__$1 = (function (){var statearr_10844 = state_10815;(statearr_10844[24] = inst_10702);
return statearr_10844;
})();if(cljs.core.truth_(inst_10703))
{var statearr_10845_10922 = state_10815__$1;(statearr_10845_10922[1] = 13);
} else
{var statearr_10846_10923 = state_10815__$1;(statearr_10846_10923[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 42))
{var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10815__$1,45,dchan);
} else
{if((state_val_10816 === 11))
{var inst_10692 = (state_10815[17]);var inst_10712 = (state_10815[25]);var inst_10712__$1 = cljs.core.seq.call(null,inst_10692);var state_10815__$1 = (function (){var statearr_10847 = state_10815;(statearr_10847[25] = inst_10712__$1);
return statearr_10847;
})();if(inst_10712__$1)
{var statearr_10848_10924 = state_10815__$1;(statearr_10848_10924[1] = 16);
} else
{var statearr_10849_10925 = state_10815__$1;(statearr_10849_10925[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 43))
{var state_10815__$1 = state_10815;var statearr_10850_10926 = state_10815__$1;(statearr_10850_10926[2] = null);
(statearr_10850_10926[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 12))
{var inst_10738 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10851_10927 = state_10815__$1;(statearr_10851_10927[2] = inst_10738);
(statearr_10851_10927[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 44))
{var inst_10808 = (state_10815[2]);var state_10815__$1 = (function (){var statearr_10852 = state_10815;(statearr_10852[26] = inst_10808);
return statearr_10852;
})();var statearr_10853_10928 = state_10815__$1;(statearr_10853_10928[2] = null);
(statearr_10853_10928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 13))
{var inst_10702 = (state_10815[24]);var inst_10705 = cljs.core.async.close_BANG_.call(null,inst_10702);var state_10815__$1 = state_10815;var statearr_10854_10929 = state_10815__$1;(statearr_10854_10929[2] = inst_10705);
(statearr_10854_10929[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 45))
{var inst_10805 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10858_10930 = state_10815__$1;(statearr_10858_10930[2] = inst_10805);
(statearr_10858_10930[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 14))
{var state_10815__$1 = state_10815;var statearr_10859_10931 = state_10815__$1;(statearr_10859_10931[2] = null);
(statearr_10859_10931[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 15))
{var inst_10695 = (state_10815[14]);var inst_10694 = (state_10815[15]);var inst_10693 = (state_10815[16]);var inst_10692 = (state_10815[17]);var inst_10708 = (state_10815[2]);var inst_10709 = (inst_10695 + 1);var tmp10855 = inst_10694;var tmp10856 = inst_10693;var tmp10857 = inst_10692;var inst_10692__$1 = tmp10857;var inst_10693__$1 = tmp10856;var inst_10694__$1 = tmp10855;var inst_10695__$1 = inst_10709;var state_10815__$1 = (function (){var statearr_10860 = state_10815;(statearr_10860[14] = inst_10695__$1);
(statearr_10860[15] = inst_10694__$1);
(statearr_10860[16] = inst_10693__$1);
(statearr_10860[17] = inst_10692__$1);
(statearr_10860[27] = inst_10708);
return statearr_10860;
})();var statearr_10861_10932 = state_10815__$1;(statearr_10861_10932[2] = null);
(statearr_10861_10932[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 16))
{var inst_10712 = (state_10815[25]);var inst_10714 = cljs.core.chunked_seq_QMARK_.call(null,inst_10712);var state_10815__$1 = state_10815;if(inst_10714)
{var statearr_10862_10933 = state_10815__$1;(statearr_10862_10933[1] = 19);
} else
{var statearr_10863_10934 = state_10815__$1;(statearr_10863_10934[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 17))
{var state_10815__$1 = state_10815;var statearr_10864_10935 = state_10815__$1;(statearr_10864_10935[2] = null);
(statearr_10864_10935[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 18))
{var inst_10736 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10865_10936 = state_10815__$1;(statearr_10865_10936[2] = inst_10736);
(statearr_10865_10936[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 19))
{var inst_10712 = (state_10815[25]);var inst_10716 = cljs.core.chunk_first.call(null,inst_10712);var inst_10717 = cljs.core.chunk_rest.call(null,inst_10712);var inst_10718 = cljs.core.count.call(null,inst_10716);var inst_10692 = inst_10717;var inst_10693 = inst_10716;var inst_10694 = inst_10718;var inst_10695 = 0;var state_10815__$1 = (function (){var statearr_10866 = state_10815;(statearr_10866[14] = inst_10695);
(statearr_10866[15] = inst_10694);
(statearr_10866[16] = inst_10693);
(statearr_10866[17] = inst_10692);
return statearr_10866;
})();var statearr_10867_10937 = state_10815__$1;(statearr_10867_10937[2] = null);
(statearr_10867_10937[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 20))
{var inst_10712 = (state_10815[25]);var inst_10722 = cljs.core.first.call(null,inst_10712);var inst_10723 = cljs.core.nth.call(null,inst_10722,0,null);var inst_10724 = cljs.core.nth.call(null,inst_10722,1,null);var state_10815__$1 = (function (){var statearr_10868 = state_10815;(statearr_10868[28] = inst_10723);
return statearr_10868;
})();if(cljs.core.truth_(inst_10724))
{var statearr_10869_10938 = state_10815__$1;(statearr_10869_10938[1] = 22);
} else
{var statearr_10870_10939 = state_10815__$1;(statearr_10870_10939[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 21))
{var inst_10733 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10871_10940 = state_10815__$1;(statearr_10871_10940[2] = inst_10733);
(statearr_10871_10940[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 22))
{var inst_10723 = (state_10815[28]);var inst_10726 = cljs.core.async.close_BANG_.call(null,inst_10723);var state_10815__$1 = state_10815;var statearr_10872_10941 = state_10815__$1;(statearr_10872_10941[2] = inst_10726);
(statearr_10872_10941[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 23))
{var state_10815__$1 = state_10815;var statearr_10873_10942 = state_10815__$1;(statearr_10873_10942[2] = null);
(statearr_10873_10942[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 24))
{var inst_10712 = (state_10815[25]);var inst_10729 = (state_10815[2]);var inst_10730 = cljs.core.next.call(null,inst_10712);var inst_10692 = inst_10730;var inst_10693 = null;var inst_10694 = 0;var inst_10695 = 0;var state_10815__$1 = (function (){var statearr_10874 = state_10815;(statearr_10874[14] = inst_10695);
(statearr_10874[15] = inst_10694);
(statearr_10874[16] = inst_10693);
(statearr_10874[17] = inst_10692);
(statearr_10874[29] = inst_10729);
return statearr_10874;
})();var statearr_10875_10943 = state_10815__$1;(statearr_10875_10943[2] = null);
(statearr_10875_10943[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 25))
{var inst_10753 = (state_10815[11]);var inst_10754 = (state_10815[12]);var inst_10756 = (inst_10754 < inst_10753);var inst_10757 = inst_10756;var state_10815__$1 = state_10815;if(cljs.core.truth_(inst_10757))
{var statearr_10876_10944 = state_10815__$1;(statearr_10876_10944[1] = 27);
} else
{var statearr_10877_10945 = state_10815__$1;(statearr_10877_10945[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 26))
{var inst_10743 = (state_10815[19]);var inst_10801 = (state_10815[2]);var inst_10802 = cljs.core.seq.call(null,inst_10743);var state_10815__$1 = (function (){var statearr_10878 = state_10815;(statearr_10878[30] = inst_10801);
return statearr_10878;
})();if(inst_10802)
{var statearr_10879_10946 = state_10815__$1;(statearr_10879_10946[1] = 42);
} else
{var statearr_10880_10947 = state_10815__$1;(statearr_10880_10947[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 27))
{var inst_10752 = (state_10815[10]);var inst_10754 = (state_10815[12]);var inst_10759 = cljs.core._nth.call(null,inst_10752,inst_10754);var state_10815__$1 = (function (){var statearr_10881 = state_10815;(statearr_10881[8] = inst_10759);
return statearr_10881;
})();var statearr_10882_10948 = state_10815__$1;(statearr_10882_10948[2] = null);
(statearr_10882_10948[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 28))
{var inst_10772 = (state_10815[9]);var inst_10751 = (state_10815[13]);var inst_10772__$1 = cljs.core.seq.call(null,inst_10751);var state_10815__$1 = (function (){var statearr_10886 = state_10815;(statearr_10886[9] = inst_10772__$1);
return statearr_10886;
})();if(inst_10772__$1)
{var statearr_10887_10949 = state_10815__$1;(statearr_10887_10949[1] = 33);
} else
{var statearr_10888_10950 = state_10815__$1;(statearr_10888_10950[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 29))
{var inst_10799 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10889_10951 = state_10815__$1;(statearr_10889_10951[2] = inst_10799);
(statearr_10889_10951[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 30))
{var inst_10752 = (state_10815[10]);var inst_10753 = (state_10815[11]);var inst_10754 = (state_10815[12]);var inst_10751 = (state_10815[13]);var inst_10768 = (state_10815[2]);var inst_10769 = (inst_10754 + 1);var tmp10883 = inst_10752;var tmp10884 = inst_10753;var tmp10885 = inst_10751;var inst_10751__$1 = tmp10885;var inst_10752__$1 = tmp10883;var inst_10753__$1 = tmp10884;var inst_10754__$1 = inst_10769;var state_10815__$1 = (function (){var statearr_10890 = state_10815;(statearr_10890[10] = inst_10752__$1);
(statearr_10890[11] = inst_10753__$1);
(statearr_10890[12] = inst_10754__$1);
(statearr_10890[13] = inst_10751__$1);
(statearr_10890[31] = inst_10768);
return statearr_10890;
})();var statearr_10891_10952 = state_10815__$1;(statearr_10891_10952[2] = null);
(statearr_10891_10952[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 31))
{var inst_10759 = (state_10815[8]);var inst_10760 = (state_10815[2]);var inst_10761 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10762 = cljs.core.async.untap_STAR_.call(null,m,inst_10759);var state_10815__$1 = (function (){var statearr_10892 = state_10815;(statearr_10892[32] = inst_10761);
(statearr_10892[33] = inst_10760);
return statearr_10892;
})();var statearr_10893_10953 = state_10815__$1;(statearr_10893_10953[2] = inst_10762);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815__$1);
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
var state_machine__6138__auto____0 = (function (){var statearr_10897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10897[0] = state_machine__6138__auto__);
(statearr_10897[1] = 1);
return statearr_10897;
});
var state_machine__6138__auto____1 = (function (state_10815){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_10815);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e10898){if((e10898 instanceof Object))
{var ex__6141__auto__ = e10898;var statearr_10899_10954 = state_10815;(statearr_10899_10954[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10955 = state_10815;
state_10815 = G__10955;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_10815){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_10815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_10900 = f__6153__auto__.call(null);(statearr_10900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___10901);
return statearr_10900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10957 = {};return obj10957;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11067 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11068){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11068 = meta11068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11067.cljs$lang$type = true;
cljs.core.async.t11067.cljs$lang$ctorStr = "cljs.core.async/t11067";
cljs.core.async.t11067.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11067");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11067.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11069){var self__ = this;
var _11069__$1 = this;return self__.meta11068;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11069,meta11068__$1){var self__ = this;
var _11069__$1 = this;return (new cljs.core.async.t11067(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11068__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11067 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11067(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11068){return (new cljs.core.async.t11067(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11068));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11067(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6152__auto___11176 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_11134){var state_val_11135 = (state_11134[1]);if((state_val_11135 === 1))
{var inst_11073 = (state_11134[7]);var inst_11073__$1 = calc_state.call(null);var inst_11074 = cljs.core.seq_QMARK_.call(null,inst_11073__$1);var state_11134__$1 = (function (){var statearr_11136 = state_11134;(statearr_11136[7] = inst_11073__$1);
return statearr_11136;
})();if(inst_11074)
{var statearr_11137_11177 = state_11134__$1;(statearr_11137_11177[1] = 2);
} else
{var statearr_11138_11178 = state_11134__$1;(statearr_11138_11178[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 2))
{var inst_11073 = (state_11134[7]);var inst_11076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11073);var state_11134__$1 = state_11134;var statearr_11139_11179 = state_11134__$1;(statearr_11139_11179[2] = inst_11076);
(statearr_11139_11179[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 3))
{var inst_11073 = (state_11134[7]);var state_11134__$1 = state_11134;var statearr_11140_11180 = state_11134__$1;(statearr_11140_11180[2] = inst_11073);
(statearr_11140_11180[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 4))
{var inst_11073 = (state_11134[7]);var inst_11079 = (state_11134[2]);var inst_11080 = cljs.core.get.call(null,inst_11079,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11081 = cljs.core.get.call(null,inst_11079,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11082 = cljs.core.get.call(null,inst_11079,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11083 = inst_11073;var state_11134__$1 = (function (){var statearr_11141 = state_11134;(statearr_11141[8] = inst_11080);
(statearr_11141[9] = inst_11082);
(statearr_11141[10] = inst_11081);
(statearr_11141[11] = inst_11083);
return statearr_11141;
})();var statearr_11142_11181 = state_11134__$1;(statearr_11142_11181[2] = null);
(statearr_11142_11181[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 5))
{var inst_11083 = (state_11134[11]);var inst_11086 = cljs.core.seq_QMARK_.call(null,inst_11083);var state_11134__$1 = state_11134;if(inst_11086)
{var statearr_11143_11182 = state_11134__$1;(statearr_11143_11182[1] = 7);
} else
{var statearr_11144_11183 = state_11134__$1;(statearr_11144_11183[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 6))
{var inst_11132 = (state_11134[2]);var state_11134__$1 = state_11134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11134__$1,inst_11132);
} else
{if((state_val_11135 === 7))
{var inst_11083 = (state_11134[11]);var inst_11088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11083);var state_11134__$1 = state_11134;var statearr_11145_11184 = state_11134__$1;(statearr_11145_11184[2] = inst_11088);
(statearr_11145_11184[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 8))
{var inst_11083 = (state_11134[11]);var state_11134__$1 = state_11134;var statearr_11146_11185 = state_11134__$1;(statearr_11146_11185[2] = inst_11083);
(statearr_11146_11185[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 9))
{var inst_11091 = (state_11134[12]);var inst_11091__$1 = (state_11134[2]);var inst_11092 = cljs.core.get.call(null,inst_11091__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11093 = cljs.core.get.call(null,inst_11091__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11094 = cljs.core.get.call(null,inst_11091__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11134__$1 = (function (){var statearr_11147 = state_11134;(statearr_11147[13] = inst_11093);
(statearr_11147[14] = inst_11094);
(statearr_11147[12] = inst_11091__$1);
return statearr_11147;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11134__$1,10,inst_11092);
} else
{if((state_val_11135 === 10))
{var inst_11098 = (state_11134[15]);var inst_11099 = (state_11134[16]);var inst_11097 = (state_11134[2]);var inst_11098__$1 = cljs.core.nth.call(null,inst_11097,0,null);var inst_11099__$1 = cljs.core.nth.call(null,inst_11097,1,null);var inst_11100 = (inst_11098__$1 == null);var inst_11101 = cljs.core._EQ_.call(null,inst_11099__$1,change);var inst_11102 = (inst_11100) || (inst_11101);var state_11134__$1 = (function (){var statearr_11148 = state_11134;(statearr_11148[15] = inst_11098__$1);
(statearr_11148[16] = inst_11099__$1);
return statearr_11148;
})();if(cljs.core.truth_(inst_11102))
{var statearr_11149_11186 = state_11134__$1;(statearr_11149_11186[1] = 11);
} else
{var statearr_11150_11187 = state_11134__$1;(statearr_11150_11187[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 11))
{var inst_11098 = (state_11134[15]);var inst_11104 = (inst_11098 == null);var state_11134__$1 = state_11134;if(cljs.core.truth_(inst_11104))
{var statearr_11151_11188 = state_11134__$1;(statearr_11151_11188[1] = 14);
} else
{var statearr_11152_11189 = state_11134__$1;(statearr_11152_11189[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 12))
{var inst_11099 = (state_11134[16]);var inst_11094 = (state_11134[14]);var inst_11113 = (state_11134[17]);var inst_11113__$1 = inst_11094.call(null,inst_11099);var state_11134__$1 = (function (){var statearr_11153 = state_11134;(statearr_11153[17] = inst_11113__$1);
return statearr_11153;
})();if(cljs.core.truth_(inst_11113__$1))
{var statearr_11154_11190 = state_11134__$1;(statearr_11154_11190[1] = 17);
} else
{var statearr_11155_11191 = state_11134__$1;(statearr_11155_11191[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 13))
{var inst_11130 = (state_11134[2]);var state_11134__$1 = state_11134;var statearr_11156_11192 = state_11134__$1;(statearr_11156_11192[2] = inst_11130);
(statearr_11156_11192[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 14))
{var inst_11099 = (state_11134[16]);var inst_11106 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11099);var state_11134__$1 = state_11134;var statearr_11157_11193 = state_11134__$1;(statearr_11157_11193[2] = inst_11106);
(statearr_11157_11193[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 15))
{var state_11134__$1 = state_11134;var statearr_11158_11194 = state_11134__$1;(statearr_11158_11194[2] = null);
(statearr_11158_11194[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 16))
{var inst_11109 = (state_11134[2]);var inst_11110 = calc_state.call(null);var inst_11083 = inst_11110;var state_11134__$1 = (function (){var statearr_11159 = state_11134;(statearr_11159[18] = inst_11109);
(statearr_11159[11] = inst_11083);
return statearr_11159;
})();var statearr_11160_11195 = state_11134__$1;(statearr_11160_11195[2] = null);
(statearr_11160_11195[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 17))
{var inst_11113 = (state_11134[17]);var state_11134__$1 = state_11134;var statearr_11161_11196 = state_11134__$1;(statearr_11161_11196[2] = inst_11113);
(statearr_11161_11196[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 18))
{var inst_11099 = (state_11134[16]);var inst_11093 = (state_11134[13]);var inst_11094 = (state_11134[14]);var inst_11116 = cljs.core.empty_QMARK_.call(null,inst_11094);var inst_11117 = inst_11093.call(null,inst_11099);var inst_11118 = cljs.core.not.call(null,inst_11117);var inst_11119 = (inst_11116) && (inst_11118);var state_11134__$1 = state_11134;var statearr_11162_11197 = state_11134__$1;(statearr_11162_11197[2] = inst_11119);
(statearr_11162_11197[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 19))
{var inst_11121 = (state_11134[2]);var state_11134__$1 = state_11134;if(cljs.core.truth_(inst_11121))
{var statearr_11163_11198 = state_11134__$1;(statearr_11163_11198[1] = 20);
} else
{var statearr_11164_11199 = state_11134__$1;(statearr_11164_11199[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 20))
{var inst_11098 = (state_11134[15]);var state_11134__$1 = state_11134;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11134__$1,23,out,inst_11098);
} else
{if((state_val_11135 === 21))
{var state_11134__$1 = state_11134;var statearr_11165_11200 = state_11134__$1;(statearr_11165_11200[2] = null);
(statearr_11165_11200[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 22))
{var inst_11091 = (state_11134[12]);var inst_11127 = (state_11134[2]);var inst_11083 = inst_11091;var state_11134__$1 = (function (){var statearr_11166 = state_11134;(statearr_11166[19] = inst_11127);
(statearr_11166[11] = inst_11083);
return statearr_11166;
})();var statearr_11167_11201 = state_11134__$1;(statearr_11167_11201[2] = null);
(statearr_11167_11201[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 23))
{var inst_11124 = (state_11134[2]);var state_11134__$1 = state_11134;var statearr_11168_11202 = state_11134__$1;(statearr_11168_11202[2] = inst_11124);
(statearr_11168_11202[1] = 22);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_11172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11172[0] = state_machine__6138__auto__);
(statearr_11172[1] = 1);
return statearr_11172;
});
var state_machine__6138__auto____1 = (function (state_11134){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_11134);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e11173){if((e11173 instanceof Object))
{var ex__6141__auto__ = e11173;var statearr_11174_11203 = state_11134;(statearr_11174_11203[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11204 = state_11134;
state_11134 = G__11204;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_11134){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_11134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_11175 = f__6153__auto__.call(null);(statearr_11175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___11176);
return statearr_11175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11206 = {};return obj11206;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__11207_SHARP_){if(cljs.core.truth_(p1__11207_SHARP_.call(null,topic)))
{return p1__11207_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11207_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11332 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11332 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11333){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11333 = meta11333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11332.cljs$lang$type = true;
cljs.core.async.t11332.cljs$lang$ctorStr = "cljs.core.async/t11332";
cljs.core.async.t11332.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11332");
});})(mults,ensure_mult))
;
cljs.core.async.t11332.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11332.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11332.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11332.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11334){var self__ = this;
var _11334__$1 = this;return self__.meta11333;
});})(mults,ensure_mult))
;
cljs.core.async.t11332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11334,meta11333__$1){var self__ = this;
var _11334__$1 = this;return (new cljs.core.async.t11332(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11333__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11332 = ((function (mults,ensure_mult){
return (function __GT_t11332(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11333){return (new cljs.core.async.t11332(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11333));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11332(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6152__auto___11456 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_11408){var state_val_11409 = (state_11408[1]);if((state_val_11409 === 1))
{var state_11408__$1 = state_11408;var statearr_11410_11457 = state_11408__$1;(statearr_11410_11457[2] = null);
(statearr_11410_11457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 2))
{var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11408__$1,4,ch);
} else
{if((state_val_11409 === 3))
{var inst_11406 = (state_11408[2]);var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11408__$1,inst_11406);
} else
{if((state_val_11409 === 4))
{var inst_11337 = (state_11408[7]);var inst_11337__$1 = (state_11408[2]);var inst_11338 = (inst_11337__$1 == null);var state_11408__$1 = (function (){var statearr_11411 = state_11408;(statearr_11411[7] = inst_11337__$1);
return statearr_11411;
})();if(cljs.core.truth_(inst_11338))
{var statearr_11412_11458 = state_11408__$1;(statearr_11412_11458[1] = 5);
} else
{var statearr_11413_11459 = state_11408__$1;(statearr_11413_11459[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 5))
{var inst_11344 = cljs.core.deref.call(null,mults);var inst_11345 = cljs.core.vals.call(null,inst_11344);var inst_11346 = cljs.core.seq.call(null,inst_11345);var inst_11347 = inst_11346;var inst_11348 = null;var inst_11349 = 0;var inst_11350 = 0;var state_11408__$1 = (function (){var statearr_11414 = state_11408;(statearr_11414[8] = inst_11350);
(statearr_11414[9] = inst_11347);
(statearr_11414[10] = inst_11348);
(statearr_11414[11] = inst_11349);
return statearr_11414;
})();var statearr_11415_11460 = state_11408__$1;(statearr_11415_11460[2] = null);
(statearr_11415_11460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 6))
{var inst_11387 = (state_11408[12]);var inst_11337 = (state_11408[7]);var inst_11385 = (state_11408[13]);var inst_11385__$1 = topic_fn.call(null,inst_11337);var inst_11386 = cljs.core.deref.call(null,mults);var inst_11387__$1 = cljs.core.get.call(null,inst_11386,inst_11385__$1);var state_11408__$1 = (function (){var statearr_11416 = state_11408;(statearr_11416[12] = inst_11387__$1);
(statearr_11416[13] = inst_11385__$1);
return statearr_11416;
})();if(cljs.core.truth_(inst_11387__$1))
{var statearr_11417_11461 = state_11408__$1;(statearr_11417_11461[1] = 19);
} else
{var statearr_11418_11462 = state_11408__$1;(statearr_11418_11462[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 7))
{var inst_11404 = (state_11408[2]);var state_11408__$1 = state_11408;var statearr_11419_11463 = state_11408__$1;(statearr_11419_11463[2] = inst_11404);
(statearr_11419_11463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 8))
{var inst_11350 = (state_11408[8]);var inst_11349 = (state_11408[11]);var inst_11352 = (inst_11350 < inst_11349);var inst_11353 = inst_11352;var state_11408__$1 = state_11408;if(cljs.core.truth_(inst_11353))
{var statearr_11423_11464 = state_11408__$1;(statearr_11423_11464[1] = 10);
} else
{var statearr_11424_11465 = state_11408__$1;(statearr_11424_11465[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 9))
{var inst_11383 = (state_11408[2]);var state_11408__$1 = state_11408;var statearr_11425_11466 = state_11408__$1;(statearr_11425_11466[2] = inst_11383);
(statearr_11425_11466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 10))
{var inst_11350 = (state_11408[8]);var inst_11347 = (state_11408[9]);var inst_11348 = (state_11408[10]);var inst_11349 = (state_11408[11]);var inst_11355 = cljs.core._nth.call(null,inst_11348,inst_11350);var inst_11356 = cljs.core.async.muxch_STAR_.call(null,inst_11355);var inst_11357 = cljs.core.async.close_BANG_.call(null,inst_11356);var inst_11358 = (inst_11350 + 1);var tmp11420 = inst_11347;var tmp11421 = inst_11348;var tmp11422 = inst_11349;var inst_11347__$1 = tmp11420;var inst_11348__$1 = tmp11421;var inst_11349__$1 = tmp11422;var inst_11350__$1 = inst_11358;var state_11408__$1 = (function (){var statearr_11426 = state_11408;(statearr_11426[8] = inst_11350__$1);
(statearr_11426[14] = inst_11357);
(statearr_11426[9] = inst_11347__$1);
(statearr_11426[10] = inst_11348__$1);
(statearr_11426[11] = inst_11349__$1);
return statearr_11426;
})();var statearr_11427_11467 = state_11408__$1;(statearr_11427_11467[2] = null);
(statearr_11427_11467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 11))
{var inst_11361 = (state_11408[15]);var inst_11347 = (state_11408[9]);var inst_11361__$1 = cljs.core.seq.call(null,inst_11347);var state_11408__$1 = (function (){var statearr_11428 = state_11408;(statearr_11428[15] = inst_11361__$1);
return statearr_11428;
})();if(inst_11361__$1)
{var statearr_11429_11468 = state_11408__$1;(statearr_11429_11468[1] = 13);
} else
{var statearr_11430_11469 = state_11408__$1;(statearr_11430_11469[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 12))
{var inst_11381 = (state_11408[2]);var state_11408__$1 = state_11408;var statearr_11431_11470 = state_11408__$1;(statearr_11431_11470[2] = inst_11381);
(statearr_11431_11470[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 13))
{var inst_11361 = (state_11408[15]);var inst_11363 = cljs.core.chunked_seq_QMARK_.call(null,inst_11361);var state_11408__$1 = state_11408;if(inst_11363)
{var statearr_11432_11471 = state_11408__$1;(statearr_11432_11471[1] = 16);
} else
{var statearr_11433_11472 = state_11408__$1;(statearr_11433_11472[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 14))
{var state_11408__$1 = state_11408;var statearr_11434_11473 = state_11408__$1;(statearr_11434_11473[2] = null);
(statearr_11434_11473[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 15))
{var inst_11379 = (state_11408[2]);var state_11408__$1 = state_11408;var statearr_11435_11474 = state_11408__$1;(statearr_11435_11474[2] = inst_11379);
(statearr_11435_11474[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 16))
{var inst_11361 = (state_11408[15]);var inst_11365 = cljs.core.chunk_first.call(null,inst_11361);var inst_11366 = cljs.core.chunk_rest.call(null,inst_11361);var inst_11367 = cljs.core.count.call(null,inst_11365);var inst_11347 = inst_11366;var inst_11348 = inst_11365;var inst_11349 = inst_11367;var inst_11350 = 0;var state_11408__$1 = (function (){var statearr_11436 = state_11408;(statearr_11436[8] = inst_11350);
(statearr_11436[9] = inst_11347);
(statearr_11436[10] = inst_11348);
(statearr_11436[11] = inst_11349);
return statearr_11436;
})();var statearr_11437_11475 = state_11408__$1;(statearr_11437_11475[2] = null);
(statearr_11437_11475[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 17))
{var inst_11361 = (state_11408[15]);var inst_11370 = cljs.core.first.call(null,inst_11361);var inst_11371 = cljs.core.async.muxch_STAR_.call(null,inst_11370);var inst_11372 = cljs.core.async.close_BANG_.call(null,inst_11371);var inst_11373 = cljs.core.next.call(null,inst_11361);var inst_11347 = inst_11373;var inst_11348 = null;var inst_11349 = 0;var inst_11350 = 0;var state_11408__$1 = (function (){var statearr_11438 = state_11408;(statearr_11438[16] = inst_11372);
(statearr_11438[8] = inst_11350);
(statearr_11438[9] = inst_11347);
(statearr_11438[10] = inst_11348);
(statearr_11438[11] = inst_11349);
return statearr_11438;
})();var statearr_11439_11476 = state_11408__$1;(statearr_11439_11476[2] = null);
(statearr_11439_11476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 18))
{var inst_11376 = (state_11408[2]);var state_11408__$1 = state_11408;var statearr_11440_11477 = state_11408__$1;(statearr_11440_11477[2] = inst_11376);
(statearr_11440_11477[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 19))
{var state_11408__$1 = state_11408;var statearr_11441_11478 = state_11408__$1;(statearr_11441_11478[2] = null);
(statearr_11441_11478[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 20))
{var state_11408__$1 = state_11408;var statearr_11442_11479 = state_11408__$1;(statearr_11442_11479[2] = null);
(statearr_11442_11479[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 21))
{var inst_11401 = (state_11408[2]);var state_11408__$1 = (function (){var statearr_11443 = state_11408;(statearr_11443[17] = inst_11401);
return statearr_11443;
})();var statearr_11444_11480 = state_11408__$1;(statearr_11444_11480[2] = null);
(statearr_11444_11480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 22))
{var inst_11398 = (state_11408[2]);var state_11408__$1 = state_11408;var statearr_11445_11481 = state_11408__$1;(statearr_11445_11481[2] = inst_11398);
(statearr_11445_11481[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 23))
{var inst_11385 = (state_11408[13]);var inst_11389 = (state_11408[2]);var inst_11390 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11385);var state_11408__$1 = (function (){var statearr_11446 = state_11408;(statearr_11446[18] = inst_11389);
return statearr_11446;
})();var statearr_11447_11482 = state_11408__$1;(statearr_11447_11482[2] = inst_11390);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11408__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11409 === 24))
{var inst_11387 = (state_11408[12]);var inst_11337 = (state_11408[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11408,23,Object,null,22);var inst_11394 = cljs.core.async.muxch_STAR_.call(null,inst_11387);var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11408__$1,25,inst_11394,inst_11337);
} else
{if((state_val_11409 === 25))
{var inst_11396 = (state_11408[2]);var state_11408__$1 = state_11408;var statearr_11448_11483 = state_11408__$1;(statearr_11448_11483[2] = inst_11396);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11408__$1);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_11452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11452[0] = state_machine__6138__auto__);
(statearr_11452[1] = 1);
return statearr_11452;
});
var state_machine__6138__auto____1 = (function (state_11408){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_11408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e11453){if((e11453 instanceof Object))
{var ex__6141__auto__ = e11453;var statearr_11454_11484 = state_11408;(statearr_11454_11484[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11485 = state_11408;
state_11408 = G__11485;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_11408){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_11408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_11455 = f__6153__auto__.call(null);(statearr_11455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___11456);
return statearr_11455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6152__auto___11622 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_11592){var state_val_11593 = (state_11592[1]);if((state_val_11593 === 1))
{var state_11592__$1 = state_11592;var statearr_11594_11623 = state_11592__$1;(statearr_11594_11623[2] = null);
(statearr_11594_11623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 2))
{var inst_11555 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11556 = 0;var state_11592__$1 = (function (){var statearr_11595 = state_11592;(statearr_11595[7] = inst_11555);
(statearr_11595[8] = inst_11556);
return statearr_11595;
})();var statearr_11596_11624 = state_11592__$1;(statearr_11596_11624[2] = null);
(statearr_11596_11624[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 3))
{var inst_11590 = (state_11592[2]);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11592__$1,inst_11590);
} else
{if((state_val_11593 === 4))
{var inst_11556 = (state_11592[8]);var inst_11558 = (inst_11556 < cnt);var state_11592__$1 = state_11592;if(cljs.core.truth_(inst_11558))
{var statearr_11597_11625 = state_11592__$1;(statearr_11597_11625[1] = 6);
} else
{var statearr_11598_11626 = state_11592__$1;(statearr_11598_11626[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 5))
{var inst_11576 = (state_11592[2]);var state_11592__$1 = (function (){var statearr_11599 = state_11592;(statearr_11599[9] = inst_11576);
return statearr_11599;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11592__$1,12,dchan);
} else
{if((state_val_11593 === 6))
{var state_11592__$1 = state_11592;var statearr_11600_11627 = state_11592__$1;(statearr_11600_11627[2] = null);
(statearr_11600_11627[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 7))
{var state_11592__$1 = state_11592;var statearr_11601_11628 = state_11592__$1;(statearr_11601_11628[2] = null);
(statearr_11601_11628[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 8))
{var inst_11574 = (state_11592[2]);var state_11592__$1 = state_11592;var statearr_11602_11629 = state_11592__$1;(statearr_11602_11629[2] = inst_11574);
(statearr_11602_11629[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 9))
{var inst_11556 = (state_11592[8]);var inst_11569 = (state_11592[2]);var inst_11570 = (inst_11556 + 1);var inst_11556__$1 = inst_11570;var state_11592__$1 = (function (){var statearr_11603 = state_11592;(statearr_11603[10] = inst_11569);
(statearr_11603[8] = inst_11556__$1);
return statearr_11603;
})();var statearr_11604_11630 = state_11592__$1;(statearr_11604_11630[2] = null);
(statearr_11604_11630[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 10))
{var inst_11560 = (state_11592[2]);var inst_11561 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11592__$1 = (function (){var statearr_11605 = state_11592;(statearr_11605[11] = inst_11560);
return statearr_11605;
})();var statearr_11606_11631 = state_11592__$1;(statearr_11606_11631[2] = inst_11561);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11592__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 11))
{var inst_11556 = (state_11592[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11592,10,Object,null,9);var inst_11565 = chs__$1.call(null,inst_11556);var inst_11566 = done.call(null,inst_11556);var inst_11567 = cljs.core.async.take_BANG_.call(null,inst_11565,inst_11566);var state_11592__$1 = state_11592;var statearr_11607_11632 = state_11592__$1;(statearr_11607_11632[2] = inst_11567);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11592__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 12))
{var inst_11578 = (state_11592[12]);var inst_11578__$1 = (state_11592[2]);var inst_11579 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11578__$1);var state_11592__$1 = (function (){var statearr_11608 = state_11592;(statearr_11608[12] = inst_11578__$1);
return statearr_11608;
})();if(cljs.core.truth_(inst_11579))
{var statearr_11609_11633 = state_11592__$1;(statearr_11609_11633[1] = 13);
} else
{var statearr_11610_11634 = state_11592__$1;(statearr_11610_11634[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 13))
{var inst_11581 = cljs.core.async.close_BANG_.call(null,out);var state_11592__$1 = state_11592;var statearr_11611_11635 = state_11592__$1;(statearr_11611_11635[2] = inst_11581);
(statearr_11611_11635[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 14))
{var inst_11578 = (state_11592[12]);var inst_11583 = cljs.core.apply.call(null,f,inst_11578);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11592__$1,16,out,inst_11583);
} else
{if((state_val_11593 === 15))
{var inst_11588 = (state_11592[2]);var state_11592__$1 = state_11592;var statearr_11612_11636 = state_11592__$1;(statearr_11612_11636[2] = inst_11588);
(statearr_11612_11636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11593 === 16))
{var inst_11585 = (state_11592[2]);var state_11592__$1 = (function (){var statearr_11613 = state_11592;(statearr_11613[13] = inst_11585);
return statearr_11613;
})();var statearr_11614_11637 = state_11592__$1;(statearr_11614_11637[2] = null);
(statearr_11614_11637[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_11618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11618[0] = state_machine__6138__auto__);
(statearr_11618[1] = 1);
return statearr_11618;
});
var state_machine__6138__auto____1 = (function (state_11592){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_11592);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e11619){if((e11619 instanceof Object))
{var ex__6141__auto__ = e11619;var statearr_11620_11638 = state_11592;(statearr_11620_11638[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11592);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11639 = state_11592;
state_11592 = G__11639;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_11592){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_11592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_11621 = f__6153__auto__.call(null);(statearr_11621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___11622);
return statearr_11621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___11747 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_11723){var state_val_11724 = (state_11723[1]);if((state_val_11724 === 1))
{var inst_11694 = cljs.core.vec.call(null,chs);var inst_11695 = inst_11694;var state_11723__$1 = (function (){var statearr_11725 = state_11723;(statearr_11725[7] = inst_11695);
return statearr_11725;
})();var statearr_11726_11748 = state_11723__$1;(statearr_11726_11748[2] = null);
(statearr_11726_11748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11724 === 2))
{var inst_11695 = (state_11723[7]);var inst_11697 = cljs.core.count.call(null,inst_11695);var inst_11698 = (inst_11697 > 0);var state_11723__$1 = state_11723;if(cljs.core.truth_(inst_11698))
{var statearr_11727_11749 = state_11723__$1;(statearr_11727_11749[1] = 4);
} else
{var statearr_11728_11750 = state_11723__$1;(statearr_11728_11750[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11724 === 3))
{var inst_11721 = (state_11723[2]);var state_11723__$1 = state_11723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11723__$1,inst_11721);
} else
{if((state_val_11724 === 4))
{var inst_11695 = (state_11723[7]);var state_11723__$1 = state_11723;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11723__$1,7,inst_11695);
} else
{if((state_val_11724 === 5))
{var inst_11717 = cljs.core.async.close_BANG_.call(null,out);var state_11723__$1 = state_11723;var statearr_11729_11751 = state_11723__$1;(statearr_11729_11751[2] = inst_11717);
(statearr_11729_11751[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11724 === 6))
{var inst_11719 = (state_11723[2]);var state_11723__$1 = state_11723;var statearr_11730_11752 = state_11723__$1;(statearr_11730_11752[2] = inst_11719);
(statearr_11730_11752[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11724 === 7))
{var inst_11703 = (state_11723[8]);var inst_11702 = (state_11723[9]);var inst_11702__$1 = (state_11723[2]);var inst_11703__$1 = cljs.core.nth.call(null,inst_11702__$1,0,null);var inst_11704 = cljs.core.nth.call(null,inst_11702__$1,1,null);var inst_11705 = (inst_11703__$1 == null);var state_11723__$1 = (function (){var statearr_11731 = state_11723;(statearr_11731[8] = inst_11703__$1);
(statearr_11731[9] = inst_11702__$1);
(statearr_11731[10] = inst_11704);
return statearr_11731;
})();if(cljs.core.truth_(inst_11705))
{var statearr_11732_11753 = state_11723__$1;(statearr_11732_11753[1] = 8);
} else
{var statearr_11733_11754 = state_11723__$1;(statearr_11733_11754[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11724 === 8))
{var inst_11703 = (state_11723[8]);var inst_11702 = (state_11723[9]);var inst_11704 = (state_11723[10]);var inst_11695 = (state_11723[7]);var inst_11707 = (function (){var c = inst_11704;var v = inst_11703;var vec__11700 = inst_11702;var cs = inst_11695;return ((function (c,v,vec__11700,cs,inst_11703,inst_11702,inst_11704,inst_11695,state_val_11724){
return (function (p1__11640_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11640_SHARP_);
});
;})(c,v,vec__11700,cs,inst_11703,inst_11702,inst_11704,inst_11695,state_val_11724))
})();var inst_11708 = cljs.core.filterv.call(null,inst_11707,inst_11695);var inst_11695__$1 = inst_11708;var state_11723__$1 = (function (){var statearr_11734 = state_11723;(statearr_11734[7] = inst_11695__$1);
return statearr_11734;
})();var statearr_11735_11755 = state_11723__$1;(statearr_11735_11755[2] = null);
(statearr_11735_11755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11724 === 9))
{var inst_11703 = (state_11723[8]);var state_11723__$1 = state_11723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11723__$1,11,out,inst_11703);
} else
{if((state_val_11724 === 10))
{var inst_11715 = (state_11723[2]);var state_11723__$1 = state_11723;var statearr_11737_11756 = state_11723__$1;(statearr_11737_11756[2] = inst_11715);
(statearr_11737_11756[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11724 === 11))
{var inst_11695 = (state_11723[7]);var inst_11712 = (state_11723[2]);var tmp11736 = inst_11695;var inst_11695__$1 = tmp11736;var state_11723__$1 = (function (){var statearr_11738 = state_11723;(statearr_11738[7] = inst_11695__$1);
(statearr_11738[11] = inst_11712);
return statearr_11738;
})();var statearr_11739_11757 = state_11723__$1;(statearr_11739_11757[2] = null);
(statearr_11739_11757[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_11743 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11743[0] = state_machine__6138__auto__);
(statearr_11743[1] = 1);
return statearr_11743;
});
var state_machine__6138__auto____1 = (function (state_11723){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_11723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e11744){if((e11744 instanceof Object))
{var ex__6141__auto__ = e11744;var statearr_11745_11758 = state_11723;(statearr_11745_11758[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11759 = state_11723;
state_11723 = G__11759;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_11723){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_11723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_11746 = f__6153__auto__.call(null);(statearr_11746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___11747);
return statearr_11746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___11852 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_11829){var state_val_11830 = (state_11829[1]);if((state_val_11830 === 1))
{var inst_11806 = 0;var state_11829__$1 = (function (){var statearr_11831 = state_11829;(statearr_11831[7] = inst_11806);
return statearr_11831;
})();var statearr_11832_11853 = state_11829__$1;(statearr_11832_11853[2] = null);
(statearr_11832_11853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11830 === 2))
{var inst_11806 = (state_11829[7]);var inst_11808 = (inst_11806 < n);var state_11829__$1 = state_11829;if(cljs.core.truth_(inst_11808))
{var statearr_11833_11854 = state_11829__$1;(statearr_11833_11854[1] = 4);
} else
{var statearr_11834_11855 = state_11829__$1;(statearr_11834_11855[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11830 === 3))
{var inst_11826 = (state_11829[2]);var inst_11827 = cljs.core.async.close_BANG_.call(null,out);var state_11829__$1 = (function (){var statearr_11835 = state_11829;(statearr_11835[8] = inst_11826);
return statearr_11835;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11829__$1,inst_11827);
} else
{if((state_val_11830 === 4))
{var state_11829__$1 = state_11829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11829__$1,7,ch);
} else
{if((state_val_11830 === 5))
{var state_11829__$1 = state_11829;var statearr_11836_11856 = state_11829__$1;(statearr_11836_11856[2] = null);
(statearr_11836_11856[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11830 === 6))
{var inst_11824 = (state_11829[2]);var state_11829__$1 = state_11829;var statearr_11837_11857 = state_11829__$1;(statearr_11837_11857[2] = inst_11824);
(statearr_11837_11857[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11830 === 7))
{var inst_11811 = (state_11829[9]);var inst_11811__$1 = (state_11829[2]);var inst_11812 = (inst_11811__$1 == null);var inst_11813 = cljs.core.not.call(null,inst_11812);var state_11829__$1 = (function (){var statearr_11838 = state_11829;(statearr_11838[9] = inst_11811__$1);
return statearr_11838;
})();if(inst_11813)
{var statearr_11839_11858 = state_11829__$1;(statearr_11839_11858[1] = 8);
} else
{var statearr_11840_11859 = state_11829__$1;(statearr_11840_11859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11830 === 8))
{var inst_11811 = (state_11829[9]);var state_11829__$1 = state_11829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11829__$1,11,out,inst_11811);
} else
{if((state_val_11830 === 9))
{var state_11829__$1 = state_11829;var statearr_11841_11860 = state_11829__$1;(statearr_11841_11860[2] = null);
(statearr_11841_11860[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11830 === 10))
{var inst_11821 = (state_11829[2]);var state_11829__$1 = state_11829;var statearr_11842_11861 = state_11829__$1;(statearr_11842_11861[2] = inst_11821);
(statearr_11842_11861[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11830 === 11))
{var inst_11806 = (state_11829[7]);var inst_11816 = (state_11829[2]);var inst_11817 = (inst_11806 + 1);var inst_11806__$1 = inst_11817;var state_11829__$1 = (function (){var statearr_11843 = state_11829;(statearr_11843[7] = inst_11806__$1);
(statearr_11843[10] = inst_11816);
return statearr_11843;
})();var statearr_11844_11862 = state_11829__$1;(statearr_11844_11862[2] = null);
(statearr_11844_11862[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_11848 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11848[0] = state_machine__6138__auto__);
(statearr_11848[1] = 1);
return statearr_11848;
});
var state_machine__6138__auto____1 = (function (state_11829){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_11829);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e11849){if((e11849 instanceof Object))
{var ex__6141__auto__ = e11849;var statearr_11850_11863 = state_11829;(statearr_11850_11863[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11864 = state_11829;
state_11829 = G__11864;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_11829){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_11829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_11851 = f__6153__auto__.call(null);(statearr_11851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___11852);
return statearr_11851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___11961 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_11936){var state_val_11937 = (state_11936[1]);if((state_val_11937 === 1))
{var inst_11913 = null;var state_11936__$1 = (function (){var statearr_11938 = state_11936;(statearr_11938[7] = inst_11913);
return statearr_11938;
})();var statearr_11939_11962 = state_11936__$1;(statearr_11939_11962[2] = null);
(statearr_11939_11962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 2))
{var state_11936__$1 = state_11936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11936__$1,4,ch);
} else
{if((state_val_11937 === 3))
{var inst_11933 = (state_11936[2]);var inst_11934 = cljs.core.async.close_BANG_.call(null,out);var state_11936__$1 = (function (){var statearr_11940 = state_11936;(statearr_11940[8] = inst_11933);
return statearr_11940;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11936__$1,inst_11934);
} else
{if((state_val_11937 === 4))
{var inst_11916 = (state_11936[9]);var inst_11916__$1 = (state_11936[2]);var inst_11917 = (inst_11916__$1 == null);var inst_11918 = cljs.core.not.call(null,inst_11917);var state_11936__$1 = (function (){var statearr_11941 = state_11936;(statearr_11941[9] = inst_11916__$1);
return statearr_11941;
})();if(inst_11918)
{var statearr_11942_11963 = state_11936__$1;(statearr_11942_11963[1] = 5);
} else
{var statearr_11943_11964 = state_11936__$1;(statearr_11943_11964[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 5))
{var inst_11913 = (state_11936[7]);var inst_11916 = (state_11936[9]);var inst_11920 = cljs.core._EQ_.call(null,inst_11916,inst_11913);var state_11936__$1 = state_11936;if(inst_11920)
{var statearr_11944_11965 = state_11936__$1;(statearr_11944_11965[1] = 8);
} else
{var statearr_11945_11966 = state_11936__$1;(statearr_11945_11966[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 6))
{var state_11936__$1 = state_11936;var statearr_11947_11967 = state_11936__$1;(statearr_11947_11967[2] = null);
(statearr_11947_11967[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 7))
{var inst_11931 = (state_11936[2]);var state_11936__$1 = state_11936;var statearr_11948_11968 = state_11936__$1;(statearr_11948_11968[2] = inst_11931);
(statearr_11948_11968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 8))
{var inst_11913 = (state_11936[7]);var tmp11946 = inst_11913;var inst_11913__$1 = tmp11946;var state_11936__$1 = (function (){var statearr_11949 = state_11936;(statearr_11949[7] = inst_11913__$1);
return statearr_11949;
})();var statearr_11950_11969 = state_11936__$1;(statearr_11950_11969[2] = null);
(statearr_11950_11969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 9))
{var inst_11916 = (state_11936[9]);var state_11936__$1 = state_11936;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11936__$1,11,out,inst_11916);
} else
{if((state_val_11937 === 10))
{var inst_11928 = (state_11936[2]);var state_11936__$1 = state_11936;var statearr_11951_11970 = state_11936__$1;(statearr_11951_11970[2] = inst_11928);
(statearr_11951_11970[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 11))
{var inst_11916 = (state_11936[9]);var inst_11925 = (state_11936[2]);var inst_11913 = inst_11916;var state_11936__$1 = (function (){var statearr_11952 = state_11936;(statearr_11952[7] = inst_11913);
(statearr_11952[10] = inst_11925);
return statearr_11952;
})();var statearr_11953_11971 = state_11936__$1;(statearr_11953_11971[2] = null);
(statearr_11953_11971[1] = 2);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_11957 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11957[0] = state_machine__6138__auto__);
(statearr_11957[1] = 1);
return statearr_11957;
});
var state_machine__6138__auto____1 = (function (state_11936){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_11936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e11958){if((e11958 instanceof Object))
{var ex__6141__auto__ = e11958;var statearr_11959_11972 = state_11936;(statearr_11959_11972[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11973 = state_11936;
state_11936 = G__11973;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_11936){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_11936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_11960 = f__6153__auto__.call(null);(statearr_11960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___11961);
return statearr_11960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___12108 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12078){var state_val_12079 = (state_12078[1]);if((state_val_12079 === 1))
{var inst_12041 = (new Array(n));var inst_12042 = inst_12041;var inst_12043 = 0;var state_12078__$1 = (function (){var statearr_12080 = state_12078;(statearr_12080[7] = inst_12042);
(statearr_12080[8] = inst_12043);
return statearr_12080;
})();var statearr_12081_12109 = state_12078__$1;(statearr_12081_12109[2] = null);
(statearr_12081_12109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 2))
{var state_12078__$1 = state_12078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12078__$1,4,ch);
} else
{if((state_val_12079 === 3))
{var inst_12076 = (state_12078[2]);var state_12078__$1 = state_12078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12078__$1,inst_12076);
} else
{if((state_val_12079 === 4))
{var inst_12046 = (state_12078[9]);var inst_12046__$1 = (state_12078[2]);var inst_12047 = (inst_12046__$1 == null);var inst_12048 = cljs.core.not.call(null,inst_12047);var state_12078__$1 = (function (){var statearr_12082 = state_12078;(statearr_12082[9] = inst_12046__$1);
return statearr_12082;
})();if(inst_12048)
{var statearr_12083_12110 = state_12078__$1;(statearr_12083_12110[1] = 5);
} else
{var statearr_12084_12111 = state_12078__$1;(statearr_12084_12111[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 5))
{var inst_12042 = (state_12078[7]);var inst_12043 = (state_12078[8]);var inst_12046 = (state_12078[9]);var inst_12051 = (state_12078[10]);var inst_12050 = (inst_12042[inst_12043] = inst_12046);var inst_12051__$1 = (inst_12043 + 1);var inst_12052 = (inst_12051__$1 < n);var state_12078__$1 = (function (){var statearr_12085 = state_12078;(statearr_12085[11] = inst_12050);
(statearr_12085[10] = inst_12051__$1);
return statearr_12085;
})();if(cljs.core.truth_(inst_12052))
{var statearr_12086_12112 = state_12078__$1;(statearr_12086_12112[1] = 8);
} else
{var statearr_12087_12113 = state_12078__$1;(statearr_12087_12113[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 6))
{var inst_12043 = (state_12078[8]);var inst_12064 = (inst_12043 > 0);var state_12078__$1 = state_12078;if(cljs.core.truth_(inst_12064))
{var statearr_12089_12114 = state_12078__$1;(statearr_12089_12114[1] = 12);
} else
{var statearr_12090_12115 = state_12078__$1;(statearr_12090_12115[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 7))
{var inst_12074 = (state_12078[2]);var state_12078__$1 = state_12078;var statearr_12091_12116 = state_12078__$1;(statearr_12091_12116[2] = inst_12074);
(statearr_12091_12116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 8))
{var inst_12042 = (state_12078[7]);var inst_12051 = (state_12078[10]);var tmp12088 = inst_12042;var inst_12042__$1 = tmp12088;var inst_12043 = inst_12051;var state_12078__$1 = (function (){var statearr_12092 = state_12078;(statearr_12092[7] = inst_12042__$1);
(statearr_12092[8] = inst_12043);
return statearr_12092;
})();var statearr_12093_12117 = state_12078__$1;(statearr_12093_12117[2] = null);
(statearr_12093_12117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 9))
{var inst_12042 = (state_12078[7]);var inst_12056 = cljs.core.vec.call(null,inst_12042);var state_12078__$1 = state_12078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12078__$1,11,out,inst_12056);
} else
{if((state_val_12079 === 10))
{var inst_12062 = (state_12078[2]);var state_12078__$1 = state_12078;var statearr_12094_12118 = state_12078__$1;(statearr_12094_12118[2] = inst_12062);
(statearr_12094_12118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 11))
{var inst_12058 = (state_12078[2]);var inst_12059 = (new Array(n));var inst_12042 = inst_12059;var inst_12043 = 0;var state_12078__$1 = (function (){var statearr_12095 = state_12078;(statearr_12095[7] = inst_12042);
(statearr_12095[8] = inst_12043);
(statearr_12095[12] = inst_12058);
return statearr_12095;
})();var statearr_12096_12119 = state_12078__$1;(statearr_12096_12119[2] = null);
(statearr_12096_12119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 12))
{var inst_12042 = (state_12078[7]);var inst_12066 = cljs.core.vec.call(null,inst_12042);var state_12078__$1 = state_12078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12078__$1,15,out,inst_12066);
} else
{if((state_val_12079 === 13))
{var state_12078__$1 = state_12078;var statearr_12097_12120 = state_12078__$1;(statearr_12097_12120[2] = null);
(statearr_12097_12120[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 14))
{var inst_12071 = (state_12078[2]);var inst_12072 = cljs.core.async.close_BANG_.call(null,out);var state_12078__$1 = (function (){var statearr_12098 = state_12078;(statearr_12098[13] = inst_12071);
return statearr_12098;
})();var statearr_12099_12121 = state_12078__$1;(statearr_12099_12121[2] = inst_12072);
(statearr_12099_12121[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12079 === 15))
{var inst_12068 = (state_12078[2]);var state_12078__$1 = state_12078;var statearr_12100_12122 = state_12078__$1;(statearr_12100_12122[2] = inst_12068);
(statearr_12100_12122[1] = 14);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_12104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12104[0] = state_machine__6138__auto__);
(statearr_12104[1] = 1);
return statearr_12104;
});
var state_machine__6138__auto____1 = (function (state_12078){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12078);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12105){if((e12105 instanceof Object))
{var ex__6141__auto__ = e12105;var statearr_12106_12123 = state_12078;(statearr_12106_12123[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12124 = state_12078;
state_12078 = G__12124;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12078){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12107 = f__6153__auto__.call(null);(statearr_12107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___12108);
return statearr_12107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6152__auto___12267 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6153__auto__ = (function (){var switch__6137__auto__ = (function (state_12237){var state_val_12238 = (state_12237[1]);if((state_val_12238 === 1))
{var inst_12196 = [];var inst_12197 = inst_12196;var inst_12198 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12237__$1 = (function (){var statearr_12239 = state_12237;(statearr_12239[7] = inst_12198);
(statearr_12239[8] = inst_12197);
return statearr_12239;
})();var statearr_12240_12268 = state_12237__$1;(statearr_12240_12268[2] = null);
(statearr_12240_12268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 2))
{var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,4,ch);
} else
{if((state_val_12238 === 3))
{var inst_12235 = (state_12237[2]);var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12237__$1,inst_12235);
} else
{if((state_val_12238 === 4))
{var inst_12201 = (state_12237[9]);var inst_12201__$1 = (state_12237[2]);var inst_12202 = (inst_12201__$1 == null);var inst_12203 = cljs.core.not.call(null,inst_12202);var state_12237__$1 = (function (){var statearr_12241 = state_12237;(statearr_12241[9] = inst_12201__$1);
return statearr_12241;
})();if(inst_12203)
{var statearr_12242_12269 = state_12237__$1;(statearr_12242_12269[1] = 5);
} else
{var statearr_12243_12270 = state_12237__$1;(statearr_12243_12270[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 5))
{var inst_12198 = (state_12237[7]);var inst_12205 = (state_12237[10]);var inst_12201 = (state_12237[9]);var inst_12205__$1 = f.call(null,inst_12201);var inst_12206 = cljs.core._EQ_.call(null,inst_12205__$1,inst_12198);var inst_12207 = cljs.core.keyword_identical_QMARK_.call(null,inst_12198,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12208 = (inst_12206) || (inst_12207);var state_12237__$1 = (function (){var statearr_12244 = state_12237;(statearr_12244[10] = inst_12205__$1);
return statearr_12244;
})();if(cljs.core.truth_(inst_12208))
{var statearr_12245_12271 = state_12237__$1;(statearr_12245_12271[1] = 8);
} else
{var statearr_12246_12272 = state_12237__$1;(statearr_12246_12272[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 6))
{var inst_12197 = (state_12237[8]);var inst_12222 = inst_12197.length;var inst_12223 = (inst_12222 > 0);var state_12237__$1 = state_12237;if(cljs.core.truth_(inst_12223))
{var statearr_12248_12273 = state_12237__$1;(statearr_12248_12273[1] = 12);
} else
{var statearr_12249_12274 = state_12237__$1;(statearr_12249_12274[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 7))
{var inst_12233 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12250_12275 = state_12237__$1;(statearr_12250_12275[2] = inst_12233);
(statearr_12250_12275[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 8))
{var inst_12197 = (state_12237[8]);var inst_12205 = (state_12237[10]);var inst_12201 = (state_12237[9]);var inst_12210 = inst_12197.push(inst_12201);var tmp12247 = inst_12197;var inst_12197__$1 = tmp12247;var inst_12198 = inst_12205;var state_12237__$1 = (function (){var statearr_12251 = state_12237;(statearr_12251[7] = inst_12198);
(statearr_12251[8] = inst_12197__$1);
(statearr_12251[11] = inst_12210);
return statearr_12251;
})();var statearr_12252_12276 = state_12237__$1;(statearr_12252_12276[2] = null);
(statearr_12252_12276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 9))
{var inst_12197 = (state_12237[8]);var inst_12213 = cljs.core.vec.call(null,inst_12197);var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12237__$1,11,out,inst_12213);
} else
{if((state_val_12238 === 10))
{var inst_12220 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12253_12277 = state_12237__$1;(statearr_12253_12277[2] = inst_12220);
(statearr_12253_12277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 11))
{var inst_12205 = (state_12237[10]);var inst_12201 = (state_12237[9]);var inst_12215 = (state_12237[2]);var inst_12216 = [];var inst_12217 = inst_12216.push(inst_12201);var inst_12197 = inst_12216;var inst_12198 = inst_12205;var state_12237__$1 = (function (){var statearr_12254 = state_12237;(statearr_12254[7] = inst_12198);
(statearr_12254[8] = inst_12197);
(statearr_12254[12] = inst_12215);
(statearr_12254[13] = inst_12217);
return statearr_12254;
})();var statearr_12255_12278 = state_12237__$1;(statearr_12255_12278[2] = null);
(statearr_12255_12278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 12))
{var inst_12197 = (state_12237[8]);var inst_12225 = cljs.core.vec.call(null,inst_12197);var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12237__$1,15,out,inst_12225);
} else
{if((state_val_12238 === 13))
{var state_12237__$1 = state_12237;var statearr_12256_12279 = state_12237__$1;(statearr_12256_12279[2] = null);
(statearr_12256_12279[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 14))
{var inst_12230 = (state_12237[2]);var inst_12231 = cljs.core.async.close_BANG_.call(null,out);var state_12237__$1 = (function (){var statearr_12257 = state_12237;(statearr_12257[14] = inst_12230);
return statearr_12257;
})();var statearr_12258_12280 = state_12237__$1;(statearr_12258_12280[2] = inst_12231);
(statearr_12258_12280[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 15))
{var inst_12227 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12259_12281 = state_12237__$1;(statearr_12259_12281[2] = inst_12227);
(statearr_12259_12281[1] = 14);
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
});return ((function (switch__6137__auto__){
return (function() {
var state_machine__6138__auto__ = null;
var state_machine__6138__auto____0 = (function (){var statearr_12263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12263[0] = state_machine__6138__auto__);
(statearr_12263[1] = 1);
return statearr_12263;
});
var state_machine__6138__auto____1 = (function (state_12237){while(true){
var ret_value__6139__auto__ = (function (){try{while(true){
var result__6140__auto__ = switch__6137__auto__.call(null,state_12237);if(cljs.core.keyword_identical_QMARK_.call(null,result__6140__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6140__auto__;
}
break;
}
}catch (e12264){if((e12264 instanceof Object))
{var ex__6141__auto__ = e12264;var statearr_12265_12282 = state_12237;(statearr_12265_12282[5] = ex__6141__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12283 = state_12237;
state_12237 = G__12283;
continue;
}
} else
{return ret_value__6139__auto__;
}
break;
}
});
state_machine__6138__auto__ = function(state_12237){
switch(arguments.length){
case 0:
return state_machine__6138__auto____0.call(this);
case 1:
return state_machine__6138__auto____1.call(this,state_12237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6138__auto____0;
state_machine__6138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6138__auto____1;
return state_machine__6138__auto__;
})()
;})(switch__6137__auto__))
})();var state__6154__auto__ = (function (){var statearr_12266 = f__6153__auto__.call(null);(statearr_12266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6152__auto___12267);
return statearr_12266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6154__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map