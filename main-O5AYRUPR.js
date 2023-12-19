import {
  a as ms,
  b as Ii,
  c as hs,
  d as ps,
  e as fs,
  f as Di,
  g as Wt,
  h as Ri,
  i as bs,
  j as gs,
  k as Mi,
  l as _s,
  m as Oi,
  n as vs,
  o as Pi,
  p as We,
  q as ve,
  r as Fi,
  s as Yt,
  t as Ni,
  u as Xn,
  v as ji,
  w as Li,
  x as Ye,
} from "./chunk-B73NRUUQ.js";
import { a as ye } from "./chunk-T3MBQJ4F.js";
import {
  a as Ps,
  e as tn,
  f as Fs,
  g as Ns,
  h as Gt,
  i as en,
  j as js,
  k as nn,
  l as Ls,
  m as on,
  n as rn,
  o as sn,
} from "./chunk-AGHAPIHE.js";
import {
  a as Ds,
  b as Rs,
  c as Yi,
  d as Ki,
  e as Ms,
  f as Os,
  g as Gi,
  h as Lt,
  i as Zi,
  j as qi,
  k as Xi,
  l as Qi,
  m as Ji,
} from "./chunk-PZW6CMPM.js";
import { d as ys } from "./chunk-OXEZHYRO.js";
import { a as Bs } from "./chunk-WPAPV4J4.js";
import {
  a as ws,
  b as Bi,
  c as zi,
  d as Vi,
  e as xs,
  f as Es,
  g as Ss,
  h as Ke,
  i as $i,
  j as Kt,
  k as Hi,
  l as ks,
  m as Ui,
  n as Cs,
  o as Wi,
  p as As,
  q as Ts,
  r as Is,
} from "./chunk-CYDWIF3P.js";
import {
  $ as Un,
  $a as Yr,
  A as Ir,
  Aa as tt,
  Ab as os,
  B as Dr,
  Ba as q,
  C as Vn,
  Ca as wt,
  Cb as Gn,
  D as Rr,
  Da as yi,
  Db as Ai,
  E as $n,
  Ea as Vr,
  Eb as rs,
  F as Mr,
  Fb as ss,
  G as Or,
  Ga as be,
  Gb as as,
  H as Pr,
  Ha as $r,
  Hb as cs,
  I as ue,
  Ia as Ht,
  Ib as ls,
  J as Hn,
  Ja as wi,
  Jb as Zn,
  K as B,
  Ka as ge,
  Kb as Ti,
  L as ft,
  Lb as ds,
  M as pi,
  Ma as Tt,
  Mb as mt,
  Na as Hr,
  Nb as us,
  O as N,
  Oa as xi,
  P as f,
  Q as it,
  Qa as It,
  Qb as qn,
  R as V,
  Rb as x,
  S as u,
  Sa as Ur,
  Sb as Rt,
  T as U,
  Ta as Wr,
  U as bt,
  V as nt,
  Va as Ve,
  W as ut,
  Wa as $e,
  Xa as He,
  Ya as Ue,
  Z as Be,
  _ as ze,
  _a as Ei,
  a as g,
  aa as Fr,
  ab as _e,
  b as y,
  ba as fi,
  c as je,
  ca as jt,
  cb as H,
  d as Nt,
  da as Nr,
  db as Kr,
  e as K,
  ea as yt,
  f as yr,
  fa as jr,
  g as wr,
  ga as bi,
  gb as Gr,
  h as xr,
  ha as rt,
  i as Er,
  ia as Lr,
  ib as Zr,
  j as Sr,
  ka as gi,
  kb as Ut,
  l as T,
  la as At,
  lb as qr,
  m as kr,
  ma as z,
  mb as Si,
  n as et,
  na as Br,
  nb as Dt,
  o as Cr,
  oa as _i,
  ob as Kn,
  p as F,
  pa as Jt,
  pb as Xr,
  q as Ar,
  qa as W,
  qb as Qr,
  ra as te,
  rb as Jr,
  s as Tr,
  sa as me,
  sb as ts,
  t as $t,
  ta as he,
  u as dt,
  ua as Wn,
  ub as es,
  v as Bn,
  va as pe,
  vb as lt,
  w as L,
  wa as zr,
  wb as ki,
  x as zn,
  xa as vi,
  xb as is,
  y as Le,
  ya as fe,
  yb as Ci,
  z as Et,
  za as Yn,
  zb as ns,
} from "./chunk-RVRWXEWA.js";
var vl = { dispatch: !0, functional: !1, useEffectsErrorHandler: !0 },
  an = "__@ngrx/effects_create__";
function D(o, t = {}) {
  let n = t.functional ? o : o(),
    e = g(g({}, vl), t);
  return Object.defineProperty(n, an, { value: e }), n;
}
function yl(o) {
  return Object.getOwnPropertyNames(o)
    .filter((e) =>
      o[e] && o[e].hasOwnProperty(an) ? o[e][an].hasOwnProperty("dispatch") : !1
    )
    .map((e) => {
      let i = o[e][an];
      return g({ propertyName: e }, i);
    });
}
function wl(o) {
  return yl(o);
}
function zs(o) {
  return Object.getPrototypeOf(o);
}
function xl(o) {
  return (
    !!o.constructor &&
    o.constructor.name !== "Object" &&
    o.constructor.name !== "Function"
  );
}
function Vs(o) {
  return typeof o == "function";
}
function El(o) {
  return o.filter(Vs);
}
function Sl(o, t, n) {
  let e = zs(o),
    r = !!e && e.constructor.name !== "Object" ? e.constructor.name : null,
    s = wl(o).map(
      ({ propertyName: a, dispatch: c, useEffectsErrorHandler: l }) => {
        let d = typeof o[a] == "function" ? o[a]() : o[a],
          m = l ? n(d, t) : d;
        return c === !1
          ? m.pipe(Ir())
          : m.pipe(Mr()).pipe(
              et((_) => ({
                effect: o[a],
                notification: _,
                propertyName: a,
                sourceName: r,
                sourceInstance: o,
              }))
            );
      }
    );
  return $t(...s);
}
var kl = 10;
function $s(o, t, n = kl) {
  return o.pipe(
    L((e) => (t && t.handleError(e), n <= 1 ? o : $s(o, t, n - 1)))
  );
}
var R = (() => {
  let t = class t extends Nt {
    constructor(e) {
      super(), e && (this.source = e);
    }
    lift(e) {
      let i = new t();
      return (i.source = this), (i.operator = e), i;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Ti));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
function M(...o) {
  return dt((t) =>
    o.some((n) => (typeof n == "string" ? n === t.type : n.type === t.type))
  );
}
var Jm = new V("@ngrx/effects Internal Root Guard"),
  th = new V("@ngrx/effects User Provided Effects"),
  eh = new V("@ngrx/effects Internal Root Effects"),
  ih = new V("@ngrx/effects Internal Root Effects Instances"),
  nh = new V("@ngrx/effects Internal Feature Effects"),
  oh = new V("@ngrx/effects Internal Feature Effects Instance Groups"),
  Cl = new V("@ngrx/effects Effects Error Handler", {
    providedIn: "root",
    factory: () => $s,
  }),
  Al = "@ngrx/effects/init",
  Tl = os(Al);
function Il(o, t) {
  if (o.notification.kind === "N") {
    let n = o.notification.value;
    !Dl(n) &&
      t.handleError(
        new Error(`Effect ${Rl(o)} dispatched an invalid action: ${Ml(n)}`)
      );
  }
}
function Dl(o) {
  return typeof o != "function" && o && o.type && typeof o.type == "string";
}
function Rl({ propertyName: o, sourceInstance: t, sourceName: n }) {
  let e = typeof t[o] == "function";
  return !!n ? `"${n}.${String(o)}${e ? "()" : ""}"` : `"${String(o)}()"`;
}
function Ml(o) {
  try {
    return JSON.stringify(o);
  } catch {
    return o;
  }
}
var Ol = "ngrxOnIdentifyEffects";
function Pl(o) {
  return Qn(o, Ol);
}
var Fl = "ngrxOnRunEffects";
function Nl(o) {
  return Qn(o, Fl);
}
var jl = "ngrxOnInitEffects";
function Ll(o) {
  return Qn(o, jl);
}
function Qn(o, t) {
  return o && t in o && typeof o[t] == "function";
}
var Hs = (() => {
  let t = class t extends K {
    constructor(e, i) {
      super(), (this.errorHandler = e), (this.effectsErrorHandler = i);
    }
    addEffects(e) {
      this.next(e);
    }
    toActions() {
      return this.pipe(
        $n((e) => (xl(e) ? zs(e) : e)),
        F((e) => e.pipe($n(Bl))),
        F((e) => {
          let i = e.pipe(
              Rr((s) => zl(this.errorHandler, this.effectsErrorHandler)(s)),
              et((s) => (Il(s, this.errorHandler), s.notification)),
              dt((s) => s.kind === "N" && s.value != null),
              Dr()
            ),
            r = e.pipe(
              Et(1),
              dt(Ll),
              et((s) => s.ngrxOnInitEffects())
            );
          return $t(i, r);
        })
      );
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(gi), u(Cl));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
function Bl(o) {
  return Pl(o) ? o.ngrxOnIdentifyEffects() : "";
}
function zl(o, t) {
  return (n) => {
    let e = Sl(n, o, t);
    return Nl(n) ? n.ngrxOnRunEffects(e) : e;
  };
}
var Vl = (() => {
  let t = class t {
    get isStarted() {
      return !!this.effectsSubscription;
    }
    constructor(e, i) {
      (this.effectSources = e),
        (this.store = i),
        (this.effectsSubscription = null);
    }
    start() {
      this.effectsSubscription ||
        (this.effectsSubscription = this.effectSources
          .toActions()
          .subscribe(this.store));
    }
    ngOnDestroy() {
      this.effectsSubscription &&
        (this.effectsSubscription.unsubscribe(),
        (this.effectsSubscription = null));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Hs), u(mt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
function Us(...o) {
  let t = o.flat(),
    n = El(t);
  return fi([
    n,
    {
      provide: Fr,
      multi: !0,
      useValue: () => {
        U(ss), U(as, { optional: !0 });
        let e = U(Vl),
          i = U(Hs),
          r = !e.isStarted;
        r && e.start();
        for (let s of t) {
          let a = Vs(s) ? U(s) : s;
          i.addEffects(a);
        }
        r && U(mt).dispatch(Tl());
      },
    },
  ]);
}
var Ze = "PERFORM_ACTION",
  $l = "REFRESH",
  Qs = "RESET",
  Js = "ROLLBACK",
  ta = "COMMIT",
  ea = "SWEEP",
  ia = "TOGGLE_ACTION",
  na = "SET_ACTIONS_ACTIVE",
  oa = "JUMP_TO_STATE",
  ra = "JUMP_TO_ACTION",
  mo = "IMPORT_STATE",
  sa = "LOCK_CHANGES",
  aa = "PAUSE_RECORDING",
  xe = class {
    constructor(t, n) {
      if (
        ((this.action = t),
        (this.timestamp = n),
        (this.type = Ze),
        typeof t.type > "u")
      )
        throw new Error(
          'Actions may not have an undefined "type" property. Have you misspelled a constant?'
        );
    }
  },
  Jn = class {
    constructor() {
      this.type = $l;
    }
  },
  to = class {
    constructor(t) {
      (this.timestamp = t), (this.type = Qs);
    }
  },
  eo = class {
    constructor(t) {
      (this.timestamp = t), (this.type = Js);
    }
  },
  io = class {
    constructor(t) {
      (this.timestamp = t), (this.type = ta);
    }
  },
  no = class {
    constructor() {
      this.type = ea;
    }
  },
  oo = class {
    constructor(t) {
      (this.id = t), (this.type = ia);
    }
  },
  Ws = class {
    constructor(t, n, e = !0) {
      (this.start = t), (this.end = n), (this.active = e), (this.type = na);
    }
  },
  ro = class {
    constructor(t) {
      (this.index = t), (this.type = oa);
    }
  },
  so = class {
    constructor(t) {
      (this.actionId = t), (this.type = ra);
    }
  },
  ao = class {
    constructor(t) {
      (this.nextLiftedState = t), (this.type = mo);
    }
  },
  co = class {
    constructor(t) {
      (this.status = t), (this.type = sa);
    }
  },
  lo = class {
    constructor(t) {
      (this.status = t), (this.type = aa);
    }
  },
  Ys = class {
    constructor() {
      this.maxAge = !1;
    }
  },
  un = new V("@ngrx/store-devtools Options"),
  Ks = new V("@ngrx/store-devtools Initial Config");
function ca() {
  return null;
}
var Hl = "NgRx Store DevTools";
function Ul(o) {
  let t = {
      maxAge: !1,
      monitor: ca,
      actionSanitizer: void 0,
      stateSanitizer: void 0,
      name: Hl,
      serialize: !1,
      logOnly: !1,
      autoPause: !1,
      trace: !1,
      traceLimit: 75,
      features: {
        pause: !0,
        lock: !0,
        persist: !0,
        export: !0,
        import: "custom",
        jump: !0,
        skip: !0,
        reorder: !0,
        dispatch: !0,
        test: !0,
      },
      connectInZone: !1,
    },
    n = typeof o == "function" ? o() : o,
    e = n.logOnly ? { pause: !0, export: !0, test: !0 } : !1,
    i = n.features || e || t.features;
  i.import === !0 && (i.import = "custom");
  let r = Object.assign({}, t, { features: i }, n);
  if (r.maxAge && r.maxAge < 2)
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${r.maxAge}`);
  return r;
}
function Gs(o, t) {
  return o.filter((n) => t.indexOf(n) < 0);
}
function la(o) {
  let { computedStates: t, currentStateIndex: n } = o;
  if (n >= t.length) {
    let { state: i } = t[t.length - 1];
    return i;
  }
  let { state: e } = t[n];
  return e;
}
function ph(o) {
  return o.actionsById[o.nextActionId - 1];
}
function Ge(o) {
  return new xe(o, +Date.now());
}
function Wl(o, t) {
  return Object.keys(t).reduce((n, e) => {
    let i = Number(e);
    return (n[i] = da(o, t[i], i)), n;
  }, {});
}
function da(o, t, n) {
  return y(g({}, t), { action: o(t.action, n) });
}
function Yl(o, t) {
  return t.map((n, e) => ({ state: ua(o, n.state, e), error: n.error }));
}
function ua(o, t, n) {
  return o(t, n);
}
function ma(o) {
  return o.predicate || o.actionsSafelist || o.actionsBlocklist;
}
function Kl(o, t, n, e) {
  let i = [],
    r = {},
    s = [];
  return (
    o.stagedActionIds.forEach((a, c) => {
      let l = o.actionsById[a];
      l &&
        ((c && ho(o.computedStates[c], l, t, n, e)) ||
          ((r[a] = l), i.push(a), s.push(o.computedStates[c])));
    }),
    y(g({}, o), { stagedActionIds: i, actionsById: r, computedStates: s })
  );
}
function ho(o, t, n, e, i) {
  let r = n && !n(o, t.action),
    s = e && !t.action.type.match(e.map((c) => Zs(c)).join("|")),
    a = i && t.action.type.match(i.map((c) => Zs(c)).join("|"));
  return r || s || a;
}
function Zs(o) {
  return o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ha(o) {
  return { ngZone: o ? U(W) : null, connectInZone: o };
}
var mn = (() => {
    let t = class t extends Ai {};
    (t.ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = Un(t)))(r || t);
      };
    })()),
      (t.ɵprov = f({ token: t, factory: t.ɵfac }));
    let o = t;
    return o;
  })(),
  cn = { START: "START", DISPATCH: "DISPATCH", STOP: "STOP", ACTION: "ACTION" },
  uo = new V("@ngrx/store-devtools Redux Devtools Extension"),
  pa = (() => {
    let _DevtoolsExtension = class _DevtoolsExtension {
      constructor(o, t, n) {
        (this.config = t),
          (this.dispatcher = n),
          (this.zoneConfig = ha(this.config.connectInZone)),
          (this.devtoolsExtension = o),
          this.createActionStreams();
      }
      notify(o, t) {
        if (this.devtoolsExtension)
          if (o.type === Ze) {
            if (t.isLocked || t.isPaused) return;
            let n = la(t);
            if (
              ma(this.config) &&
              ho(
                n,
                o,
                this.config.predicate,
                this.config.actionsSafelist,
                this.config.actionsBlocklist
              )
            )
              return;
            let e = this.config.stateSanitizer
                ? ua(this.config.stateSanitizer, n, t.currentStateIndex)
                : n,
              i = this.config.actionSanitizer
                ? da(this.config.actionSanitizer, o, t.nextActionId)
                : o;
            this.sendToReduxDevtools(() => this.extensionConnection.send(i, e));
          } else {
            let n = y(g({}, t), {
              stagedActionIds: t.stagedActionIds,
              actionsById: this.config.actionSanitizer
                ? Wl(this.config.actionSanitizer, t.actionsById)
                : t.actionsById,
              computedStates: this.config.stateSanitizer
                ? Yl(this.config.stateSanitizer, t.computedStates)
                : t.computedStates,
            });
            this.sendToReduxDevtools(() =>
              this.devtoolsExtension.send(
                null,
                n,
                this.getExtensionConfig(this.config)
              )
            );
          }
      }
      createChangesObservable() {
        return this.devtoolsExtension
          ? new Nt((o) => {
              let t = this.zoneConfig.connectInZone
                ? this.zoneConfig.ngZone.runOutsideAngular(() =>
                    this.devtoolsExtension.connect(
                      this.getExtensionConfig(this.config)
                    )
                  )
                : this.devtoolsExtension.connect(
                    this.getExtensionConfig(this.config)
                  );
              return (
                (this.extensionConnection = t),
                t.init(),
                t.subscribe((n) => o.next(n)),
                t.unsubscribe
              );
            })
          : Er;
      }
      createActionStreams() {
        let o = this.createChangesObservable().pipe(Pr()),
          t = o.pipe(dt((a) => a.type === cn.START)),
          n = o.pipe(dt((a) => a.type === cn.STOP)),
          e = o.pipe(
            dt((a) => a.type === cn.DISPATCH),
            et((a) => this.unwrapAction(a.payload)),
            zn((a) =>
              a.type === mo
                ? this.dispatcher.pipe(
                    dt((c) => c.type === Zn),
                    kr(1e3),
                    Le(1e3),
                    et(() => a),
                    L(() => T(a)),
                    Et(1)
                  )
                : T(a)
            )
          ),
          r = o
            .pipe(
              dt((a) => a.type === cn.ACTION),
              et((a) => this.unwrapAction(a.payload))
            )
            .pipe(ft(n)),
          s = e.pipe(ft(n));
        (this.start$ = t.pipe(ft(n))),
          (this.actions$ = this.start$.pipe(B(() => r))),
          (this.liftedActions$ = this.start$.pipe(B(() => s)));
      }
      unwrapAction(action) {
        return typeof action == "string" ? eval(`(${action})`) : action;
      }
      getExtensionConfig(o) {
        let t = {
          name: o.name,
          features: o.features,
          serialize: o.serialize,
          autoPause: o.autoPause ?? !1,
          trace: o.trace ?? !1,
          traceLimit: o.traceLimit ?? 75,
        };
        return o.maxAge !== !1 && (t.maxAge = o.maxAge), t;
      }
      sendToReduxDevtools(o) {
        try {
          o();
        } catch (t) {
          console.warn(
            "@ngrx/store-devtools: something went wrong inside the redux devtools",
            t
          );
        }
      }
    };
    (_DevtoolsExtension.ɵfac = function (t) {
      return new (t || _DevtoolsExtension)(u(uo), u(un), u(mn));
    }),
      (_DevtoolsExtension.ɵprov = f({
        token: _DevtoolsExtension,
        factory: _DevtoolsExtension.ɵfac,
      }));
    let DevtoolsExtension = _DevtoolsExtension;
    return DevtoolsExtension;
  })(),
  dn = { type: Gn },
  Gl = "@ngrx/store-devtools/recompute",
  Zl = { type: Gl };
function fa(o, t, n, e, i) {
  if (e) return { state: n, error: "Interrupted by an error up the chain" };
  let r = n,
    s;
  try {
    r = o(n, t);
  } catch (a) {
    (s = a.toString()), i.handleError(a);
  }
  return { state: r, error: s };
}
function ln(o, t, n, e, i, r, s, a, c) {
  if (t >= o.length && o.length === r.length) return o;
  let l = o.slice(0, t),
    d = r.length - (c ? 1 : 0);
  for (let m = t; m < d; m++) {
    let b = r[m],
      _ = i[b].action,
      h = l[m - 1],
      p = h ? h.state : e,
      C = h ? h.error : void 0,
      j = s.indexOf(b) > -1 ? h : fa(n, _, p, C, a);
    l.push(j);
  }
  return c && l.push(o[o.length - 1]), l;
}
function ql(o, t) {
  return {
    monitorState: t(void 0, {}),
    nextActionId: 1,
    actionsById: { 0: Ge(dn) },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: o,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: !1,
    isPaused: !1,
  };
}
function Xl(o, t, n, e, i = {}) {
  return (r) => (s, a) => {
    let {
      monitorState: c,
      actionsById: l,
      nextActionId: d,
      stagedActionIds: m,
      skippedActionIds: b,
      committedState: _,
      currentStateIndex: h,
      computedStates: p,
      isLocked: C,
      isPaused: I,
    } = s || t;
    s || (l = Object.create(l));
    function j($) {
      let A = $,
        Y = m.slice(1, A + 1);
      for (let X = 0; X < Y.length; X++)
        if (p[X + 1].error) {
          (A = X), (Y = m.slice(1, A + 1));
          break;
        } else delete l[Y[X]];
      (b = b.filter((X) => Y.indexOf(X) === -1)),
        (m = [0, ...m.slice(A + 1)]),
        (_ = p[A].state),
        (p = p.slice(A)),
        (h = h > A ? h - A : 0);
    }
    function Z() {
      (l = { 0: Ge(dn) }),
        (d = 1),
        (m = [0]),
        (b = []),
        (_ = p[h].state),
        (h = 0),
        (p = []);
    }
    let S = 0;
    switch (a.type) {
      case sa: {
        (C = a.status), (S = 1 / 0);
        break;
      }
      case aa: {
        (I = a.status),
          I
            ? ((m = [...m, d]),
              (l[d] = new xe({ type: "@ngrx/devtools/pause" }, +Date.now())),
              d++,
              (S = m.length - 1),
              (p = p.concat(p[p.length - 1])),
              h === m.length - 2 && h++,
              (S = 1 / 0))
            : Z();
        break;
      }
      case Qs: {
        (l = { 0: Ge(dn) }),
          (d = 1),
          (m = [0]),
          (b = []),
          (_ = o),
          (h = 0),
          (p = []);
        break;
      }
      case ta: {
        Z();
        break;
      }
      case Js: {
        (l = { 0: Ge(dn) }), (d = 1), (m = [0]), (b = []), (h = 0), (p = []);
        break;
      }
      case ia: {
        let { id: $ } = a;
        b.indexOf($) === -1 ? (b = [$, ...b]) : (b = b.filter((Y) => Y !== $)),
          (S = m.indexOf($));
        break;
      }
      case na: {
        let { start: $, end: A, active: Y } = a,
          X = [];
        for (let ht = $; ht < A; ht++) X.push(ht);
        Y ? (b = Gs(b, X)) : (b = [...b, ...X]), (S = m.indexOf($));
        break;
      }
      case oa: {
        (h = a.index), (S = 1 / 0);
        break;
      }
      case ra: {
        let $ = m.indexOf(a.actionId);
        $ !== -1 && (h = $), (S = 1 / 0);
        break;
      }
      case ea: {
        (m = Gs(m, b)), (b = []), (h = Math.min(h, m.length - 1));
        break;
      }
      case Ze: {
        if (C) return s || t;
        if (
          I ||
          (s &&
            ho(
              s.computedStates[h],
              a,
              i.predicate,
              i.actionsSafelist,
              i.actionsBlocklist
            ))
        ) {
          let A = p[p.length - 1];
          (p = [...p.slice(0, -1), fa(r, a.action, A.state, A.error, n)]),
            (S = 1 / 0);
          break;
        }
        i.maxAge && m.length === i.maxAge && j(1), h === m.length - 1 && h++;
        let $ = d++;
        (l[$] = a), (m = [...m, $]), (S = m.length - 1);
        break;
      }
      case mo: {
        ({
          monitorState: c,
          actionsById: l,
          nextActionId: d,
          stagedActionIds: m,
          skippedActionIds: b,
          committedState: _,
          currentStateIndex: h,
          computedStates: p,
          isLocked: C,
          isPaused: I,
        } = a.nextLiftedState);
        break;
      }
      case Gn: {
        (S = 0),
          i.maxAge &&
            m.length > i.maxAge &&
            ((p = ln(p, S, r, _, l, m, b, n, I)),
            j(m.length - i.maxAge),
            (S = 1 / 0));
        break;
      }
      case Zn: {
        if (p.filter((A) => A.error).length > 0)
          (S = 0),
            i.maxAge &&
              m.length > i.maxAge &&
              ((p = ln(p, S, r, _, l, m, b, n, I)),
              j(m.length - i.maxAge),
              (S = 1 / 0));
        else {
          if (!I && !C) {
            h === m.length - 1 && h++;
            let A = d++;
            (l[A] = new xe(a, +Date.now())),
              (m = [...m, A]),
              (S = m.length - 1),
              (p = ln(p, S, r, _, l, m, b, n, I));
          }
          (p = p.map((A) => y(g({}, A), { state: r(A.state, Zl) }))),
            (h = m.length - 1),
            i.maxAge && m.length > i.maxAge && j(m.length - i.maxAge),
            (S = 1 / 0);
        }
        break;
      }
      default: {
        S = 1 / 0;
        break;
      }
    }
    return (
      (p = ln(p, S, r, _, l, m, b, n, I)),
      (c = e(c, a)),
      {
        monitorState: c,
        actionsById: l,
        nextActionId: d,
        stagedActionIds: m,
        skippedActionIds: b,
        committedState: _,
        currentStateIndex: h,
        computedStates: p,
        isLocked: C,
        isPaused: I,
      }
    );
  };
}
var qs = (() => {
  let t = class t {
    constructor(e, i, r, s, a, c, l, d) {
      let m = ql(l, d.monitor),
        b = Xl(l, m, c, d.monitor, d),
        _ = $t(
          $t(i.asObservable().pipe(ue(1)), s.actions$).pipe(et(Ge)),
          e,
          s.liftedActions$
        ).pipe(Sr(xr)),
        h = r.pipe(et(b)),
        p = ha(d.connectInZone),
        C = new wr(1);
      (this.liftedStateSubscription = _.pipe(
        pi(h),
        Xs(p),
        Or(
          ({ state: Z }, [S, $]) => {
            let A = $(Z, S);
            return (
              S.type !== Ze &&
                ma(d) &&
                (A = Kl(A, d.predicate, d.actionsSafelist, d.actionsBlocklist)),
              s.notify(S, A),
              { state: A, action: S }
            );
          },
          { state: m, action: null }
        )
      ).subscribe(({ state: Z, action: S }) => {
        if ((C.next(Z), S.type === Ze)) {
          let $ = S.action;
          a.next($);
        }
      })),
        (this.extensionStartSubscription = s.start$
          .pipe(Xs(p))
          .subscribe(() => {
            this.refresh();
          }));
      let I = C.asObservable(),
        j = I.pipe(et(la));
      Object.defineProperty(j, "state", {
        value: ns(j, { manualCleanup: !0, requireSync: !0 }),
      }),
        (this.dispatcher = e),
        (this.liftedState = I),
        (this.state = j);
    }
    ngOnDestroy() {
      this.liftedStateSubscription.unsubscribe(),
        this.extensionStartSubscription.unsubscribe();
    }
    dispatch(e) {
      this.dispatcher.next(e);
    }
    next(e) {
      this.dispatcher.next(e);
    }
    error(e) {}
    complete() {}
    performAction(e) {
      this.dispatch(new xe(e, +Date.now()));
    }
    refresh() {
      this.dispatch(new Jn());
    }
    reset() {
      this.dispatch(new to(+Date.now()));
    }
    rollback() {
      this.dispatch(new eo(+Date.now()));
    }
    commit() {
      this.dispatch(new io(+Date.now()));
    }
    sweep() {
      this.dispatch(new no());
    }
    toggleAction(e) {
      this.dispatch(new oo(e));
    }
    jumpToAction(e) {
      this.dispatch(new so(e));
    }
    jumpToState(e) {
      this.dispatch(new ro(e));
    }
    importState(e) {
      this.dispatch(new ao(e));
    }
    lockChanges(e) {
      this.dispatch(new co(e));
    }
    pauseRecording(e) {
      this.dispatch(new lo(e));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(mn), u(Ai), u(cs), u(pa), u(Ti), u(gi), u(rs), u(un));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
function Xs({ ngZone: o, connectInZone: t }) {
  return (n) =>
    t
      ? new Nt((e) =>
          n.subscribe({
            next: (i) => o.run(() => e.next(i)),
            error: (i) => o.run(() => e.error(i)),
            complete: () => o.run(() => e.complete()),
          })
        )
      : n;
}
var Ql = new V("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function Jl(o, t) {
  return !!o || t.monitor !== ca;
}
function td() {
  let o = "__REDUX_DEVTOOLS_EXTENSION__";
  return typeof window == "object" && typeof window[o] < "u" ? window[o] : null;
}
function po(o = {}) {
  return fi([
    pa,
    mn,
    qs,
    { provide: Ks, useValue: o },
    { provide: Ql, deps: [uo, un], useFactory: Jl },
    { provide: uo, useFactory: td },
    { provide: un, deps: [Ks], useFactory: Ul },
    { provide: ds, deps: [qs], useFactory: ed },
    { provide: ls, useExisting: mn },
  ]);
}
function ed(o) {
  return o.state;
}
var fh = (() => {
  let t = class t {
    static instrument(e = {}) {
      return { ngModule: t, providers: [po(e)] };
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = nt({ type: t })),
    (t.ɵinj = it({}));
  let o = t;
  return o;
})();
var Mt = "*";
function ba(o, t) {
  return { type: 7, name: o, definitions: t, options: {} };
}
function fo(o, t = null) {
  return { type: 4, styles: t, timings: o };
}
function ga(o, t = null) {
  return { type: 2, steps: o, options: t };
}
function ee(o) {
  return { type: 6, styles: o, offset: null };
}
function bo(o, t, n) {
  return { type: 0, name: o, styles: t, options: n };
}
function go(o, t, n = null) {
  return { type: 1, expr: o, animation: t, options: n };
}
var Zt = class {
    constructor(t = 0, n = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = t + n);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((e) => e()), (n.length = 0);
    }
  },
  qe = class {
    constructor(t) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = t);
      let n = 0,
        e = 0,
        i = 0,
        r = this.players.length;
      r == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            s.onDone(() => {
              ++n == r && this._onFinish();
            }),
              s.onDestroy(() => {
                ++e == r && this._onDestroy();
              }),
              s.onStart(() => {
                ++i == r && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((e) => {
        let i = e.totalTime ? Math.min(1, n / e.totalTime) : 1;
        e.setPosition(i);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, e) => (n === null || e.totalTime > n.totalTime ? e : n),
        null
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((e) => e()), (n.length = 0);
    }
  },
  hn = "!";
function _a(o) {
  return new N(3e3, !1);
}
function id() {
  return new N(3100, !1);
}
function nd() {
  return new N(3101, !1);
}
function od(o) {
  return new N(3001, !1);
}
function rd(o) {
  return new N(3003, !1);
}
function sd(o) {
  return new N(3004, !1);
}
function ad(o, t) {
  return new N(3005, !1);
}
function cd() {
  return new N(3006, !1);
}
function ld() {
  return new N(3007, !1);
}
function dd(o, t) {
  return new N(3008, !1);
}
function ud(o) {
  return new N(3002, !1);
}
function md(o, t, n, e, i) {
  return new N(3010, !1);
}
function hd() {
  return new N(3011, !1);
}
function pd() {
  return new N(3012, !1);
}
function fd() {
  return new N(3200, !1);
}
function bd() {
  return new N(3202, !1);
}
function gd() {
  return new N(3013, !1);
}
function _d(o) {
  return new N(3014, !1);
}
function vd(o) {
  return new N(3015, !1);
}
function yd(o) {
  return new N(3016, !1);
}
function wd(o, t) {
  return new N(3404, !1);
}
function xd(o) {
  return new N(3502, !1);
}
function Ed(o) {
  return new N(3503, !1);
}
function Sd() {
  return new N(3300, !1);
}
function kd(o) {
  return new N(3504, !1);
}
function Cd(o) {
  return new N(3301, !1);
}
function Ad(o, t) {
  return new N(3302, !1);
}
function Td(o) {
  return new N(3303, !1);
}
function Id(o, t) {
  return new N(3400, !1);
}
function Dd(o) {
  return new N(3401, !1);
}
function Rd(o) {
  return new N(3402, !1);
}
function Md(o, t) {
  return new N(3505, !1);
}
function qt(o) {
  switch (o.length) {
    case 0:
      return new Zt();
    case 1:
      return o[0];
    default:
      return new qe(o);
  }
}
function Ma(o, t, n = new Map(), e = new Map()) {
  let i = [],
    r = [],
    s = -1,
    a = null;
  if (
    (t.forEach((c) => {
      let l = c.get("offset"),
        d = l == s,
        m = (d && a) || new Map();
      c.forEach((b, _) => {
        let h = _,
          p = b;
        if (_ !== "offset")
          switch (((h = o.normalizePropertyName(h, i)), p)) {
            case hn:
              p = n.get(_);
              break;
            case Mt:
              p = e.get(_);
              break;
            default:
              p = o.normalizeStyleValue(_, h, p, i);
              break;
          }
        m.set(h, p);
      }),
        d || r.push(m),
        (a = m),
        (s = l);
    }),
    i.length)
  )
    throw xd(i);
  return r;
}
function Bo(o, t, n, e) {
  switch (t) {
    case "start":
      o.onStart(() => e(n && _o(n, "start", o)));
      break;
    case "done":
      o.onDone(() => e(n && _o(n, "done", o)));
      break;
    case "destroy":
      o.onDestroy(() => e(n && _o(n, "destroy", o)));
      break;
  }
}
function _o(o, t, n) {
  let e = n.totalTime,
    i = !!n.disabled,
    r = zo(
      o.element,
      o.triggerName,
      o.fromState,
      o.toState,
      t || o.phaseName,
      e ?? o.totalTime,
      i
    ),
    s = o._data;
  return s != null && (r._data = s), r;
}
function zo(o, t, n, e, i = "", r = 0, s) {
  return {
    element: o,
    triggerName: t,
    fromState: n,
    toState: e,
    phaseName: i,
    totalTime: r,
    disabled: !!s,
  };
}
function _t(o, t, n) {
  let e = o.get(t);
  return e || o.set(t, (e = n)), e;
}
function va(o) {
  let t = o.indexOf(":"),
    n = o.substring(1, t),
    e = o.slice(t + 1);
  return [n, e];
}
var Od = (() => (typeof document > "u" ? null : document.documentElement))();
function Vo(o) {
  let t = o.parentNode || o.host || null;
  return t === Od ? null : t;
}
function Pd(o) {
  return o.substring(1, 6) == "ebkit";
}
var ie = null,
  ya = !1;
function Fd(o) {
  ie ||
    ((ie = Nd() || {}), (ya = ie.style ? "WebkitAppearance" in ie.style : !1));
  let t = !0;
  return (
    ie.style &&
      !Pd(o) &&
      ((t = o in ie.style),
      !t &&
        ya &&
        (t = "Webkit" + o.charAt(0).toUpperCase() + o.slice(1) in ie.style)),
    t
  );
}
function Nd() {
  return typeof document < "u" ? document.body : null;
}
function Oa(o, t) {
  for (; t; ) {
    if (t === o) return !0;
    t = Vo(t);
  }
  return !1;
}
function Pa(o, t, n) {
  if (n) return Array.from(o.querySelectorAll(t));
  let e = o.querySelector(t);
  return e ? [e] : [];
}
var $o = (() => {
    let t = class t {
      validateStyleProperty(e) {
        return Fd(e);
      }
      matchesElement(e, i) {
        return !1;
      }
      containsElement(e, i) {
        return Oa(e, i);
      }
      getParentElement(e) {
        return Vo(e);
      }
      query(e, i, r) {
        return Pa(e, i, r);
      }
      computeStyle(e, i, r) {
        return r || "";
      }
      animate(e, i, r, s, a, c = [], l) {
        return new Zt(r, s);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac }));
    let o = t;
    return o;
  })(),
  ni = (() => {
    let t = class t {};
    t.NOOP = new $o();
    let o = t;
    return o;
  })(),
  re = class {};
var jd = 1e3,
  Fa = "{{",
  Ld = "}}",
  Na = "ng-enter",
  So = "ng-leave",
  pn = "ng-trigger",
  vn = ".ng-trigger",
  wa = "ng-animating",
  ko = ".ng-animating";
function Bt(o) {
  if (typeof o == "number") return o;
  let t = o.match(/^(-?[\.\d]+)(m?s)/);
  return !t || t.length < 2 ? 0 : Co(parseFloat(t[1]), t[2]);
}
function Co(o, t) {
  switch (t) {
    case "s":
      return o * jd;
    default:
      return o;
  }
}
function yn(o, t, n) {
  return o.hasOwnProperty("duration") ? o : Bd(o, t, n);
}
function Bd(o, t, n) {
  let e =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    i,
    r = 0,
    s = "";
  if (typeof o == "string") {
    let a = o.match(e);
    if (a === null) return t.push(_a(o)), { duration: 0, delay: 0, easing: "" };
    i = Co(parseFloat(a[1]), a[2]);
    let c = a[3];
    c != null && (r = Co(parseFloat(c), a[4]));
    let l = a[5];
    l && (s = l);
  } else i = o;
  if (!n) {
    let a = !1,
      c = t.length;
    i < 0 && (t.push(id()), (a = !0)),
      r < 0 && (t.push(nd()), (a = !0)),
      a && t.splice(c, 0, _a(o));
  }
  return { duration: i, delay: r, easing: s };
}
function oi(o, t = {}) {
  return (
    Object.keys(o).forEach((n) => {
      t[n] = o[n];
    }),
    t
  );
}
function ja(o) {
  let t = new Map();
  return (
    Object.keys(o).forEach((n) => {
      let e = o[n];
      t.set(n, e);
    }),
    t
  );
}
function zd(o) {
  return o.length ? (o[0] instanceof Map ? o : o.map((t) => ja(t))) : [];
}
function Se(o, t = new Map(), n) {
  if (n) for (let [e, i] of n) t.set(e, i);
  for (let [e, i] of o) t.set(e, i);
  return t;
}
function Ot(o, t, n) {
  t.forEach((e, i) => {
    let r = Ho(i);
    n && !n.has(i) && n.set(i, o.style[r]), (o.style[r] = e);
  });
}
function oe(o, t) {
  t.forEach((n, e) => {
    let i = Ho(e);
    o.style[i] = "";
  });
}
function Xe(o) {
  return Array.isArray(o) ? (o.length == 1 ? o[0] : ga(o)) : o;
}
function Vd(o, t, n) {
  let e = t.params || {},
    i = La(o);
  i.length &&
    i.forEach((r) => {
      e.hasOwnProperty(r) || n.push(od(r));
    });
}
var Ao = new RegExp(`${Fa}\\s*(.+?)\\s*${Ld}`, "g");
function La(o) {
  let t = [];
  if (typeof o == "string") {
    let n;
    for (; (n = Ao.exec(o)); ) t.push(n[1]);
    Ao.lastIndex = 0;
  }
  return t;
}
function Je(o, t, n) {
  let e = o.toString(),
    i = e.replace(Ao, (r, s) => {
      let a = t[s];
      return a == null && (n.push(rd(s)), (a = "")), a.toString();
    });
  return i == e ? o : i;
}
function wn(o) {
  let t = [],
    n = o.next();
  for (; !n.done; ) t.push(n.value), (n = o.next());
  return t;
}
var $d = /-+([a-z0-9])/g;
function Ho(o) {
  return o.replace($d, (...t) => t[1].toUpperCase());
}
function Hd(o, t) {
  return o === 0 || t === 0;
}
function Ud(o, t, n) {
  if (n.size && t.length) {
    let e = t[0],
      i = [];
    if (
      (n.forEach((r, s) => {
        e.has(s) || i.push(s), e.set(s, r);
      }),
      i.length)
    )
      for (let r = 1; r < t.length; r++) {
        let s = t[r];
        i.forEach((a) => s.set(a, Ba(o, a)));
      }
  }
  return t;
}
function gt(o, t, n) {
  switch (t.type) {
    case 7:
      return o.visitTrigger(t, n);
    case 0:
      return o.visitState(t, n);
    case 1:
      return o.visitTransition(t, n);
    case 2:
      return o.visitSequence(t, n);
    case 3:
      return o.visitGroup(t, n);
    case 4:
      return o.visitAnimate(t, n);
    case 5:
      return o.visitKeyframes(t, n);
    case 6:
      return o.visitStyle(t, n);
    case 8:
      return o.visitReference(t, n);
    case 9:
      return o.visitAnimateChild(t, n);
    case 10:
      return o.visitAnimateRef(t, n);
    case 11:
      return o.visitQuery(t, n);
    case 12:
      return o.visitStagger(t, n);
    default:
      throw sd(t.type);
  }
}
function Ba(o, t) {
  return window.getComputedStyle(o)[t];
}
var Wd = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  xn = class extends re {
    normalizePropertyName(t, n) {
      return Ho(t);
    }
    normalizeStyleValue(t, n, e, i) {
      let r = "",
        s = e.toString().trim();
      if (Wd.has(n) && e !== 0 && e !== "0")
        if (typeof e == "number") r = "px";
        else {
          let a = e.match(/^[+-]?[\d\.]+([a-z]*)$/);
          a && a[1].length == 0 && i.push(ad(t, e));
        }
      return s + r;
    }
  };
var En = "*";
function Yd(o, t) {
  let n = [];
  return (
    typeof o == "string"
      ? o.split(/\s*,\s*/).forEach((e) => Kd(e, n, t))
      : n.push(o),
    n
  );
}
function Kd(o, t, n) {
  if (o[0] == ":") {
    let c = Gd(o, n);
    if (typeof c == "function") {
      t.push(c);
      return;
    }
    o = c;
  }
  let e = o.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (e == null || e.length < 4) return n.push(vd(o)), t;
  let i = e[1],
    r = e[2],
    s = e[3];
  t.push(xa(i, s));
  let a = i == En && s == En;
  r[0] == "<" && !a && t.push(xa(s, i));
}
function Gd(o, t) {
  switch (o) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (n, e) => parseFloat(e) > parseFloat(n);
    case ":decrement":
      return (n, e) => parseFloat(e) < parseFloat(n);
    default:
      return t.push(yd(o)), "* => *";
  }
}
var fn = new Set(["true", "1"]),
  bn = new Set(["false", "0"]);
function xa(o, t) {
  let n = fn.has(o) || bn.has(o),
    e = fn.has(t) || bn.has(t);
  return (i, r) => {
    let s = o == En || o == i,
      a = t == En || t == r;
    return (
      !s && n && typeof i == "boolean" && (s = i ? fn.has(o) : bn.has(o)),
      !a && e && typeof r == "boolean" && (a = r ? fn.has(t) : bn.has(t)),
      s && a
    );
  };
}
var za = ":self",
  Zd = new RegExp(`s*${za}s*,?`, "g");
function Va(o, t, n, e) {
  return new To(o).build(t, n, e);
}
var Ea = "",
  To = class {
    constructor(t) {
      this._driver = t;
    }
    build(t, n, e) {
      let i = new Io(n);
      return this._resetContextStyleTimingState(i), gt(this, Xe(t), i);
    }
    _resetContextStyleTimingState(t) {
      (t.currentQuerySelector = Ea),
        (t.collectedStyles = new Map()),
        t.collectedStyles.set(Ea, new Map()),
        (t.currentTime = 0);
    }
    visitTrigger(t, n) {
      let e = (n.queryCount = 0),
        i = (n.depCount = 0),
        r = [],
        s = [];
      return (
        t.name.charAt(0) == "@" && n.errors.push(cd()),
        t.definitions.forEach((a) => {
          if ((this._resetContextStyleTimingState(n), a.type == 0)) {
            let c = a,
              l = c.name;
            l
              .toString()
              .split(/\s*,\s*/)
              .forEach((d) => {
                (c.name = d), r.push(this.visitState(c, n));
              }),
              (c.name = l);
          } else if (a.type == 1) {
            let c = this.visitTransition(a, n);
            (e += c.queryCount), (i += c.depCount), s.push(c);
          } else n.errors.push(ld());
        }),
        {
          type: 7,
          name: t.name,
          states: r,
          transitions: s,
          queryCount: e,
          depCount: i,
          options: null,
        }
      );
    }
    visitState(t, n) {
      let e = this.visitStyle(t.styles, n),
        i = (t.options && t.options.params) || null;
      if (e.containsDynamicStyles) {
        let r = new Set(),
          s = i || {};
        if (
          (e.styles.forEach((a) => {
            a instanceof Map &&
              a.forEach((c) => {
                La(c).forEach((l) => {
                  s.hasOwnProperty(l) || r.add(l);
                });
              });
          }),
          r.size)
        ) {
          let a = wn(r.values());
          n.errors.push(dd(t.name, a));
        }
      }
      return {
        type: 0,
        name: t.name,
        style: e,
        options: i ? { params: i } : null,
      };
    }
    visitTransition(t, n) {
      (n.queryCount = 0), (n.depCount = 0);
      let e = gt(this, Xe(t.animation), n);
      return {
        type: 1,
        matchers: Yd(t.expr, n.errors),
        animation: e,
        queryCount: n.queryCount,
        depCount: n.depCount,
        options: ne(t.options),
      };
    }
    visitSequence(t, n) {
      return {
        type: 2,
        steps: t.steps.map((e) => gt(this, e, n)),
        options: ne(t.options),
      };
    }
    visitGroup(t, n) {
      let e = n.currentTime,
        i = 0,
        r = t.steps.map((s) => {
          n.currentTime = e;
          let a = gt(this, s, n);
          return (i = Math.max(i, n.currentTime)), a;
        });
      return (n.currentTime = i), { type: 3, steps: r, options: ne(t.options) };
    }
    visitAnimate(t, n) {
      let e = Jd(t.timings, n.errors);
      n.currentAnimateTimings = e;
      let i,
        r = t.styles ? t.styles : ee({});
      if (r.type == 5) i = this.visitKeyframes(r, n);
      else {
        let s = t.styles,
          a = !1;
        if (!s) {
          a = !0;
          let l = {};
          e.easing && (l.easing = e.easing), (s = ee(l));
        }
        n.currentTime += e.duration + e.delay;
        let c = this.visitStyle(s, n);
        (c.isEmptyStep = a), (i = c);
      }
      return (
        (n.currentAnimateTimings = null),
        { type: 4, timings: e, style: i, options: null }
      );
    }
    visitStyle(t, n) {
      let e = this._makeStyleAst(t, n);
      return this._validateStyleAst(e, n), e;
    }
    _makeStyleAst(t, n) {
      let e = [],
        i = Array.isArray(t.styles) ? t.styles : [t.styles];
      for (let a of i)
        typeof a == "string"
          ? a === Mt
            ? e.push(a)
            : n.errors.push(ud(a))
          : e.push(ja(a));
      let r = !1,
        s = null;
      return (
        e.forEach((a) => {
          if (
            a instanceof Map &&
            (a.has("easing") && ((s = a.get("easing")), a.delete("easing")), !r)
          ) {
            for (let c of a.values())
              if (c.toString().indexOf(Fa) >= 0) {
                r = !0;
                break;
              }
          }
        }),
        {
          type: 6,
          styles: e,
          easing: s,
          offset: t.offset,
          containsDynamicStyles: r,
          options: null,
        }
      );
    }
    _validateStyleAst(t, n) {
      let e = n.currentAnimateTimings,
        i = n.currentTime,
        r = n.currentTime;
      e && r > 0 && (r -= e.duration + e.delay),
        t.styles.forEach((s) => {
          typeof s != "string" &&
            s.forEach((a, c) => {
              let l = n.collectedStyles.get(n.currentQuerySelector),
                d = l.get(c),
                m = !0;
              d &&
                (r != i &&
                  r >= d.startTime &&
                  i <= d.endTime &&
                  (n.errors.push(md(c, d.startTime, d.endTime, r, i)),
                  (m = !1)),
                (r = d.startTime)),
                m && l.set(c, { startTime: r, endTime: i }),
                n.options && Vd(a, n.options, n.errors);
            });
        });
    }
    visitKeyframes(t, n) {
      let e = { type: 5, styles: [], options: null };
      if (!n.currentAnimateTimings) return n.errors.push(hd()), e;
      let i = 1,
        r = 0,
        s = [],
        a = !1,
        c = !1,
        l = 0,
        d = t.steps.map((I) => {
          let j = this._makeStyleAst(I, n),
            Z = j.offset != null ? j.offset : Qd(j.styles),
            S = 0;
          return (
            Z != null && (r++, (S = j.offset = Z)),
            (c = c || S < 0 || S > 1),
            (a = a || S < l),
            (l = S),
            s.push(S),
            j
          );
        });
      c && n.errors.push(pd()), a && n.errors.push(fd());
      let m = t.steps.length,
        b = 0;
      r > 0 && r < m ? n.errors.push(bd()) : r == 0 && (b = i / (m - 1));
      let _ = m - 1,
        h = n.currentTime,
        p = n.currentAnimateTimings,
        C = p.duration;
      return (
        d.forEach((I, j) => {
          let Z = b > 0 ? (j == _ ? 1 : b * j) : s[j],
            S = Z * C;
          (n.currentTime = h + p.delay + S),
            (p.duration = S),
            this._validateStyleAst(I, n),
            (I.offset = Z),
            e.styles.push(I);
        }),
        e
      );
    }
    visitReference(t, n) {
      return {
        type: 8,
        animation: gt(this, Xe(t.animation), n),
        options: ne(t.options),
      };
    }
    visitAnimateChild(t, n) {
      return n.depCount++, { type: 9, options: ne(t.options) };
    }
    visitAnimateRef(t, n) {
      return {
        type: 10,
        animation: this.visitReference(t.animation, n),
        options: ne(t.options),
      };
    }
    visitQuery(t, n) {
      let e = n.currentQuerySelector,
        i = t.options || {};
      n.queryCount++, (n.currentQuery = t);
      let [r, s] = qd(t.selector);
      (n.currentQuerySelector = e.length ? e + " " + r : r),
        _t(n.collectedStyles, n.currentQuerySelector, new Map());
      let a = gt(this, Xe(t.animation), n);
      return (
        (n.currentQuery = null),
        (n.currentQuerySelector = e),
        {
          type: 11,
          selector: r,
          limit: i.limit || 0,
          optional: !!i.optional,
          includeSelf: s,
          animation: a,
          originalSelector: t.selector,
          options: ne(t.options),
        }
      );
    }
    visitStagger(t, n) {
      n.currentQuery || n.errors.push(gd());
      let e =
        t.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : yn(t.timings, n.errors, !0);
      return {
        type: 12,
        animation: gt(this, Xe(t.animation), n),
        timings: e,
        options: null,
      };
    }
  };
function qd(o) {
  let t = !!o.split(/\s*,\s*/).find((n) => n == za);
  return (
    t && (o = o.replace(Zd, "")),
    (o = o
      .replace(/@\*/g, vn)
      .replace(/@\w+/g, (n) => vn + "-" + n.slice(1))
      .replace(/:animating/g, ko)),
    [o, t]
  );
}
function Xd(o) {
  return o ? oi(o) : null;
}
var Io = class {
  constructor(t) {
    (this.errors = t),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function Qd(o) {
  if (typeof o == "string") return null;
  let t = null;
  if (Array.isArray(o))
    o.forEach((n) => {
      if (n instanceof Map && n.has("offset")) {
        let e = n;
        (t = parseFloat(e.get("offset"))), e.delete("offset");
      }
    });
  else if (o instanceof Map && o.has("offset")) {
    let n = o;
    (t = parseFloat(n.get("offset"))), n.delete("offset");
  }
  return t;
}
function Jd(o, t) {
  if (o.hasOwnProperty("duration")) return o;
  if (typeof o == "number") {
    let r = yn(o, t).duration;
    return vo(r, 0, "");
  }
  let n = o;
  if (n.split(/\s+/).some((r) => r.charAt(0) == "{" && r.charAt(1) == "{")) {
    let r = vo(0, 0, "");
    return (r.dynamic = !0), (r.strValue = n), r;
  }
  let i = yn(n, t);
  return vo(i.duration, i.delay, i.easing);
}
function ne(o) {
  return o ? ((o = oi(o)), o.params && (o.params = Xd(o.params))) : (o = {}), o;
}
function vo(o, t, n) {
  return { duration: o, delay: t, easing: n };
}
function Uo(o, t, n, e, i, r, s = null, a = !1) {
  return {
    type: 1,
    element: o,
    keyframes: t,
    preStyleProps: n,
    postStyleProps: e,
    duration: i,
    delay: r,
    totalTime: i + r,
    easing: s,
    subTimeline: a,
  };
}
var ti = class {
    constructor() {
      this._map = new Map();
    }
    get(t) {
      return this._map.get(t) || [];
    }
    append(t, n) {
      let e = this._map.get(t);
      e || this._map.set(t, (e = [])), e.push(...n);
    }
    has(t) {
      return this._map.has(t);
    }
    clear() {
      this._map.clear();
    }
  },
  tu = 1,
  eu = ":enter",
  iu = new RegExp(eu, "g"),
  nu = ":leave",
  ou = new RegExp(nu, "g");
function $a(o, t, n, e, i, r = new Map(), s = new Map(), a, c, l = []) {
  return new Do().buildKeyframes(o, t, n, e, i, r, s, a, c, l);
}
var Do = class {
    buildKeyframes(t, n, e, i, r, s, a, c, l, d = []) {
      l = l || new ti();
      let m = new Ro(t, n, l, i, r, d, []);
      m.options = c;
      let b = c.delay ? Bt(c.delay) : 0;
      m.currentTimeline.delayNextStep(b),
        m.currentTimeline.setStyles([s], null, m.errors, c),
        gt(this, e, m);
      let _ = m.timelines.filter((h) => h.containsAnimation());
      if (_.length && a.size) {
        let h;
        for (let p = _.length - 1; p >= 0; p--) {
          let C = _[p];
          if (C.element === n) {
            h = C;
            break;
          }
        }
        h &&
          !h.allowOnlyTimelineStyles() &&
          h.setStyles([a], null, m.errors, c);
      }
      return _.length
        ? _.map((h) => h.buildKeyframes())
        : [Uo(n, [], [], [], 0, b, "", !1)];
    }
    visitTrigger(t, n) {}
    visitState(t, n) {}
    visitTransition(t, n) {}
    visitAnimateChild(t, n) {
      let e = n.subInstructions.get(n.element);
      if (e) {
        let i = n.createSubContext(t.options),
          r = n.currentTimeline.currentTime,
          s = this._visitSubInstructions(e, i, i.options);
        r != s && n.transformIntoNewTimeline(s);
      }
      n.previousNode = t;
    }
    visitAnimateRef(t, n) {
      let e = n.createSubContext(t.options);
      e.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([t.options, t.animation.options], n, e),
        this.visitReference(t.animation, e),
        n.transformIntoNewTimeline(e.currentTimeline.currentTime),
        (n.previousNode = t);
    }
    _applyAnimationRefDelays(t, n, e) {
      for (let i of t) {
        let r = i?.delay;
        if (r) {
          let s =
            typeof r == "number" ? r : Bt(Je(r, i?.params ?? {}, n.errors));
          e.delayNextStep(s);
        }
      }
    }
    _visitSubInstructions(t, n, e) {
      let r = n.currentTimeline.currentTime,
        s = e.duration != null ? Bt(e.duration) : null,
        a = e.delay != null ? Bt(e.delay) : null;
      return (
        s !== 0 &&
          t.forEach((c) => {
            let l = n.appendInstructionToTimeline(c, s, a);
            r = Math.max(r, l.duration + l.delay);
          }),
        r
      );
    }
    visitReference(t, n) {
      n.updateOptions(t.options, !0),
        gt(this, t.animation, n),
        (n.previousNode = t);
    }
    visitSequence(t, n) {
      let e = n.subContextCount,
        i = n,
        r = t.options;
      if (
        r &&
        (r.params || r.delay) &&
        ((i = n.createSubContext(r)),
        i.transformIntoNewTimeline(),
        r.delay != null)
      ) {
        i.previousNode.type == 6 &&
          (i.currentTimeline.snapshotCurrentStyles(), (i.previousNode = Sn));
        let s = Bt(r.delay);
        i.delayNextStep(s);
      }
      t.steps.length &&
        (t.steps.forEach((s) => gt(this, s, i)),
        i.currentTimeline.applyStylesToKeyframe(),
        i.subContextCount > e && i.transformIntoNewTimeline()),
        (n.previousNode = t);
    }
    visitGroup(t, n) {
      let e = [],
        i = n.currentTimeline.currentTime,
        r = t.options && t.options.delay ? Bt(t.options.delay) : 0;
      t.steps.forEach((s) => {
        let a = n.createSubContext(t.options);
        r && a.delayNextStep(r),
          gt(this, s, a),
          (i = Math.max(i, a.currentTimeline.currentTime)),
          e.push(a.currentTimeline);
      }),
        e.forEach((s) => n.currentTimeline.mergeTimelineCollectedStyles(s)),
        n.transformIntoNewTimeline(i),
        (n.previousNode = t);
    }
    _visitTiming(t, n) {
      if (t.dynamic) {
        let e = t.strValue,
          i = n.params ? Je(e, n.params, n.errors) : e;
        return yn(i, n.errors);
      } else return { duration: t.duration, delay: t.delay, easing: t.easing };
    }
    visitAnimate(t, n) {
      let e = (n.currentAnimateTimings = this._visitTiming(t.timings, n)),
        i = n.currentTimeline;
      e.delay && (n.incrementTime(e.delay), i.snapshotCurrentStyles());
      let r = t.style;
      r.type == 5
        ? this.visitKeyframes(r, n)
        : (n.incrementTime(e.duration),
          this.visitStyle(r, n),
          i.applyStylesToKeyframe()),
        (n.currentAnimateTimings = null),
        (n.previousNode = t);
    }
    visitStyle(t, n) {
      let e = n.currentTimeline,
        i = n.currentAnimateTimings;
      !i && e.hasCurrentStyleProperties() && e.forwardFrame();
      let r = (i && i.easing) || t.easing;
      t.isEmptyStep
        ? e.applyEmptyStep(r)
        : e.setStyles(t.styles, r, n.errors, n.options),
        (n.previousNode = t);
    }
    visitKeyframes(t, n) {
      let e = n.currentAnimateTimings,
        i = n.currentTimeline.duration,
        r = e.duration,
        a = n.createSubContext().currentTimeline;
      (a.easing = e.easing),
        t.styles.forEach((c) => {
          let l = c.offset || 0;
          a.forwardTime(l * r),
            a.setStyles(c.styles, c.easing, n.errors, n.options),
            a.applyStylesToKeyframe();
        }),
        n.currentTimeline.mergeTimelineCollectedStyles(a),
        n.transformIntoNewTimeline(i + r),
        (n.previousNode = t);
    }
    visitQuery(t, n) {
      let e = n.currentTimeline.currentTime,
        i = t.options || {},
        r = i.delay ? Bt(i.delay) : 0;
      r &&
        (n.previousNode.type === 6 ||
          (e == 0 && n.currentTimeline.hasCurrentStyleProperties())) &&
        (n.currentTimeline.snapshotCurrentStyles(), (n.previousNode = Sn));
      let s = e,
        a = n.invokeQuery(
          t.selector,
          t.originalSelector,
          t.limit,
          t.includeSelf,
          !!i.optional,
          n.errors
        );
      n.currentQueryTotal = a.length;
      let c = null;
      a.forEach((l, d) => {
        n.currentQueryIndex = d;
        let m = n.createSubContext(t.options, l);
        r && m.delayNextStep(r),
          l === n.element && (c = m.currentTimeline),
          gt(this, t.animation, m),
          m.currentTimeline.applyStylesToKeyframe();
        let b = m.currentTimeline.currentTime;
        s = Math.max(s, b);
      }),
        (n.currentQueryIndex = 0),
        (n.currentQueryTotal = 0),
        n.transformIntoNewTimeline(s),
        c &&
          (n.currentTimeline.mergeTimelineCollectedStyles(c),
          n.currentTimeline.snapshotCurrentStyles()),
        (n.previousNode = t);
    }
    visitStagger(t, n) {
      let e = n.parentContext,
        i = n.currentTimeline,
        r = t.timings,
        s = Math.abs(r.duration),
        a = s * (n.currentQueryTotal - 1),
        c = s * n.currentQueryIndex;
      switch (r.duration < 0 ? "reverse" : r.easing) {
        case "reverse":
          c = a - c;
          break;
        case "full":
          c = e.currentStaggerTime;
          break;
      }
      let d = n.currentTimeline;
      c && d.delayNextStep(c);
      let m = d.currentTime;
      gt(this, t.animation, n),
        (n.previousNode = t),
        (e.currentStaggerTime =
          i.currentTime - m + (i.startTime - e.currentTimeline.startTime));
    }
  },
  Sn = {},
  Ro = class o {
    constructor(t, n, e, i, r, s, a, c) {
      (this._driver = t),
        (this.element = n),
        (this.subInstructions = e),
        (this._enterClassName = i),
        (this._leaveClassName = r),
        (this.errors = s),
        (this.timelines = a),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = Sn),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = c || new kn(this._driver, n, 0)),
        a.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(t, n) {
      if (!t) return;
      let e = t,
        i = this.options;
      e.duration != null && (i.duration = Bt(e.duration)),
        e.delay != null && (i.delay = Bt(e.delay));
      let r = e.params;
      if (r) {
        let s = i.params;
        s || (s = this.options.params = {}),
          Object.keys(r).forEach((a) => {
            (!n || !s.hasOwnProperty(a)) && (s[a] = Je(r[a], s, this.errors));
          });
      }
    }
    _copyOptions() {
      let t = {};
      if (this.options) {
        let n = this.options.params;
        if (n) {
          let e = (t.params = {});
          Object.keys(n).forEach((i) => {
            e[i] = n[i];
          });
        }
      }
      return t;
    }
    createSubContext(t = null, n, e) {
      let i = n || this.element,
        r = new o(
          this._driver,
          i,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(i, e || 0)
        );
      return (
        (r.previousNode = this.previousNode),
        (r.currentAnimateTimings = this.currentAnimateTimings),
        (r.options = this._copyOptions()),
        r.updateOptions(t),
        (r.currentQueryIndex = this.currentQueryIndex),
        (r.currentQueryTotal = this.currentQueryTotal),
        (r.parentContext = this),
        this.subContextCount++,
        r
      );
    }
    transformIntoNewTimeline(t) {
      return (
        (this.previousNode = Sn),
        (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(t, n, e) {
      let i = {
          duration: n ?? t.duration,
          delay: this.currentTimeline.currentTime + (e ?? 0) + t.delay,
          easing: "",
        },
        r = new Mo(
          this._driver,
          t.element,
          t.keyframes,
          t.preStyleProps,
          t.postStyleProps,
          i,
          t.stretchStartingKeyframe
        );
      return this.timelines.push(r), i;
    }
    incrementTime(t) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
    }
    delayNextStep(t) {
      t > 0 && this.currentTimeline.delayNextStep(t);
    }
    invokeQuery(t, n, e, i, r, s) {
      let a = [];
      if ((i && a.push(this.element), t.length > 0)) {
        (t = t.replace(iu, "." + this._enterClassName)),
          (t = t.replace(ou, "." + this._leaveClassName));
        let c = e != 1,
          l = this._driver.query(this.element, t, c);
        e !== 0 &&
          (l = e < 0 ? l.slice(l.length + e, l.length) : l.slice(0, e)),
          a.push(...l);
      }
      return !r && a.length == 0 && s.push(_d(n)), a;
    }
  },
  kn = class o {
    constructor(t, n, e, i) {
      (this._driver = t),
        (this.element = n),
        (this.startTime = e),
        (this._elementTimelineStylesLookup = i),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(t) {
      let n = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || n
        ? (this.forwardTime(this.currentTime + t),
          n && this.snapshotCurrentStyles())
        : (this.startTime += t);
    }
    fork(t, n) {
      return (
        this.applyStylesToKeyframe(),
        new o(
          this._driver,
          t,
          n || this.currentTime,
          this._elementTimelineStylesLookup
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += tu), this._loadKeyframe();
    }
    forwardTime(t) {
      this.applyStylesToKeyframe(), (this.duration = t), this._loadKeyframe();
    }
    _updateStyle(t, n) {
      this._localTimelineStyles.set(t, n),
        this._globalTimelineStyles.set(t, n),
        this._styleSummary.set(t, { time: this.currentTime, value: n });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(t) {
      t && this._previousKeyframe.set("easing", t);
      for (let [n, e] of this._globalTimelineStyles)
        this._backFill.set(n, e || Mt), this._currentKeyframe.set(n, Mt);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(t, n, e, i) {
      n && this._previousKeyframe.set("easing", n);
      let r = (i && i.params) || {},
        s = ru(t, this._globalTimelineStyles);
      for (let [a, c] of s) {
        let l = Je(c, r, e);
        this._pendingStyles.set(a, l),
          this._localTimelineStyles.has(a) ||
            this._backFill.set(a, this._globalTimelineStyles.get(a) ?? Mt),
          this._updateStyle(a, l);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((t, n) => {
          this._currentKeyframe.set(n, t);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((t, n) => {
          this._currentKeyframe.has(n) || this._currentKeyframe.set(n, t);
        }));
    }
    snapshotCurrentStyles() {
      for (let [t, n] of this._localTimelineStyles)
        this._pendingStyles.set(t, n), this._updateStyle(t, n);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let t = [];
      for (let n in this._currentKeyframe) t.push(n);
      return t;
    }
    mergeTimelineCollectedStyles(t) {
      t._styleSummary.forEach((n, e) => {
        let i = this._styleSummary.get(e);
        (!i || n.time > i.time) && this._updateStyle(e, n.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let t = new Set(),
        n = new Set(),
        e = this._keyframes.size === 1 && this.duration === 0,
        i = [];
      this._keyframes.forEach((a, c) => {
        let l = Se(a, new Map(), this._backFill);
        l.forEach((d, m) => {
          d === hn ? t.add(m) : d === Mt && n.add(m);
        }),
          e || l.set("offset", c / this.duration),
          i.push(l);
      });
      let r = t.size ? wn(t.values()) : [],
        s = n.size ? wn(n.values()) : [];
      if (e) {
        let a = i[0],
          c = new Map(a);
        a.set("offset", 0), c.set("offset", 1), (i = [a, c]);
      }
      return Uo(
        this.element,
        i,
        r,
        s,
        this.duration,
        this.startTime,
        this.easing,
        !1
      );
    }
  },
  Mo = class extends kn {
    constructor(t, n, e, i, r, s, a = !1) {
      super(t, n, s.delay),
        (this.keyframes = e),
        (this.preStyleProps = i),
        (this.postStyleProps = r),
        (this._stretchStartingKeyframe = a),
        (this.timings = {
          duration: s.duration,
          delay: s.delay,
          easing: s.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let t = this.keyframes,
        { delay: n, duration: e, easing: i } = this.timings;
      if (this._stretchStartingKeyframe && n) {
        let r = [],
          s = e + n,
          a = n / s,
          c = Se(t[0]);
        c.set("offset", 0), r.push(c);
        let l = Se(t[0]);
        l.set("offset", Sa(a)), r.push(l);
        let d = t.length - 1;
        for (let m = 1; m <= d; m++) {
          let b = Se(t[m]),
            _ = b.get("offset"),
            h = n + _ * e;
          b.set("offset", Sa(h / s)), r.push(b);
        }
        (e = s), (n = 0), (i = ""), (t = r);
      }
      return Uo(
        this.element,
        t,
        this.preStyleProps,
        this.postStyleProps,
        e,
        n,
        i,
        !0
      );
    }
  };
function Sa(o, t = 3) {
  let n = Math.pow(10, t - 1);
  return Math.round(o * n) / n;
}
function ru(o, t) {
  let n = new Map(),
    e;
  return (
    o.forEach((i) => {
      if (i === "*") {
        e = e || t.keys();
        for (let r of e) n.set(r, Mt);
      } else Se(i, n);
    }),
    n
  );
}
function ka(o, t, n, e, i, r, s, a, c, l, d, m, b) {
  return {
    type: 0,
    element: o,
    triggerName: t,
    isRemovalTransition: i,
    fromState: n,
    fromStyles: r,
    toState: e,
    toStyles: s,
    timelines: a,
    queriedElements: c,
    preStyleProps: l,
    postStyleProps: d,
    totalTime: m,
    errors: b,
  };
}
var yo = {},
  Cn = class {
    constructor(t, n, e) {
      (this._triggerName = t), (this.ast = n), (this._stateStyles = e);
    }
    match(t, n, e, i) {
      return su(this.ast.matchers, t, n, e, i);
    }
    buildStyles(t, n, e) {
      let i = this._stateStyles.get("*");
      return (
        t !== void 0 && (i = this._stateStyles.get(t?.toString()) || i),
        i ? i.buildStyles(n, e) : new Map()
      );
    }
    build(t, n, e, i, r, s, a, c, l, d) {
      let m = [],
        b = (this.ast.options && this.ast.options.params) || yo,
        _ = (a && a.params) || yo,
        h = this.buildStyles(e, _, m),
        p = (c && c.params) || yo,
        C = this.buildStyles(i, p, m),
        I = new Set(),
        j = new Map(),
        Z = new Map(),
        S = i === "void",
        $ = { params: au(p, b), delay: this.ast.options?.delay },
        A = d ? [] : $a(t, n, this.ast.animation, r, s, h, C, $, l, m),
        Y = 0;
      if (
        (A.forEach((ht) => {
          Y = Math.max(ht.duration + ht.delay, Y);
        }),
        m.length)
      )
        return ka(n, this._triggerName, e, i, S, h, C, [], [], j, Z, Y, m);
      A.forEach((ht) => {
        let Ft = ht.element,
          br = _t(j, Ft, new Set());
        ht.preStyleProps.forEach((Xt) => br.add(Xt));
        let Ne = _t(Z, Ft, new Set());
        ht.postStyleProps.forEach((Xt) => Ne.add(Xt)), Ft !== n && I.add(Ft);
      });
      let X = wn(I.values());
      return ka(n, this._triggerName, e, i, S, h, C, A, X, j, Z, Y);
    }
  };
function su(o, t, n, e, i) {
  return o.some((r) => r(t, n, e, i));
}
function au(o, t) {
  let n = oi(t);
  for (let e in o) o.hasOwnProperty(e) && o[e] != null && (n[e] = o[e]);
  return n;
}
var Oo = class {
  constructor(t, n, e) {
    (this.styles = t), (this.defaultParams = n), (this.normalizer = e);
  }
  buildStyles(t, n) {
    let e = new Map(),
      i = oi(this.defaultParams);
    return (
      Object.keys(t).forEach((r) => {
        let s = t[r];
        s !== null && (i[r] = s);
      }),
      this.styles.styles.forEach((r) => {
        typeof r != "string" &&
          r.forEach((s, a) => {
            s && (s = Je(s, i, n));
            let c = this.normalizer.normalizePropertyName(a, n);
            (s = this.normalizer.normalizeStyleValue(a, c, s, n)), e.set(a, s);
          });
      }),
      e
    );
  }
};
function cu(o, t, n) {
  return new Po(o, t, n);
}
var Po = class {
  constructor(t, n, e) {
    (this.name = t),
      (this.ast = n),
      (this._normalizer = e),
      (this.transitionFactories = []),
      (this.states = new Map()),
      n.states.forEach((i) => {
        let r = (i.options && i.options.params) || {};
        this.states.set(i.name, new Oo(i.style, r, e));
      }),
      Ca(this.states, "true", "1"),
      Ca(this.states, "false", "0"),
      n.transitions.forEach((i) => {
        this.transitionFactories.push(new Cn(t, i, this.states));
      }),
      (this.fallbackTransition = lu(t, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(t, n, e, i) {
    return this.transitionFactories.find((s) => s.match(t, n, e, i)) || null;
  }
  matchStyles(t, n, e) {
    return this.fallbackTransition.buildStyles(t, n, e);
  }
};
function lu(o, t, n) {
  let r = {
    type: 1,
    animation: { type: 2, steps: [], options: null },
    matchers: [(s, a) => !0],
    options: null,
    queryCount: 0,
    depCount: 0,
  };
  return new Cn(o, r, t);
}
function Ca(o, t, n) {
  o.has(t) ? o.has(n) || o.set(n, o.get(t)) : o.has(n) && o.set(t, o.get(n));
}
var du = new ti(),
  Fo = class {
    constructor(t, n, e) {
      (this.bodyNode = t),
        (this._driver = n),
        (this._normalizer = e),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(t, n) {
      let e = [],
        i = [],
        r = Va(this._driver, n, e, i);
      if (e.length) throw Ed(e);
      i.length && void 0, this._animations.set(t, r);
    }
    _buildPlayer(t, n, e) {
      let i = t.element,
        r = Ma(this._normalizer, t.keyframes, n, e);
      return this._driver.animate(i, r, t.duration, t.delay, t.easing, [], !0);
    }
    create(t, n, e = {}) {
      let i = [],
        r = this._animations.get(t),
        s,
        a = new Map();
      if (
        (r
          ? ((s = $a(
              this._driver,
              n,
              r,
              Na,
              So,
              new Map(),
              new Map(),
              e,
              du,
              i
            )),
            s.forEach((d) => {
              let m = _t(a, d.element, new Map());
              d.postStyleProps.forEach((b) => m.set(b, null));
            }))
          : (i.push(Sd()), (s = [])),
        i.length)
      )
        throw kd(i);
      a.forEach((d, m) => {
        d.forEach((b, _) => {
          d.set(_, this._driver.computeStyle(m, _, Mt));
        });
      });
      let c = s.map((d) => {
          let m = a.get(d.element);
          return this._buildPlayer(d, new Map(), m);
        }),
        l = qt(c);
      return (
        this._playersById.set(t, l),
        l.onDestroy(() => this.destroy(t)),
        this.players.push(l),
        l
      );
    }
    destroy(t) {
      let n = this._getPlayer(t);
      n.destroy(), this._playersById.delete(t);
      let e = this.players.indexOf(n);
      e >= 0 && this.players.splice(e, 1);
    }
    _getPlayer(t) {
      let n = this._playersById.get(t);
      if (!n) throw Cd(t);
      return n;
    }
    listen(t, n, e, i) {
      let r = zo(n, "", "", "");
      return Bo(this._getPlayer(t), e, r, i), () => {};
    }
    command(t, n, e, i) {
      if (e == "register") {
        this.register(t, i[0]);
        return;
      }
      if (e == "create") {
        let s = i[0] || {};
        this.create(t, n, s);
        return;
      }
      let r = this._getPlayer(t);
      switch (e) {
        case "play":
          r.play();
          break;
        case "pause":
          r.pause();
          break;
        case "reset":
          r.reset();
          break;
        case "restart":
          r.restart();
          break;
        case "finish":
          r.finish();
          break;
        case "init":
          r.init();
          break;
        case "setPosition":
          r.setPosition(parseFloat(i[0]));
          break;
        case "destroy":
          this.destroy(t);
          break;
      }
    }
  },
  Aa = "ng-animate-queued",
  uu = ".ng-animate-queued",
  wo = "ng-animate-disabled",
  mu = ".ng-animate-disabled",
  hu = "ng-star-inserted",
  pu = ".ng-star-inserted",
  fu = [],
  Ha = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  bu = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  St = "__ng_removed",
  ei = class {
    get params() {
      return this.options.params;
    }
    constructor(t, n = "") {
      this.namespaceId = n;
      let e = t && t.hasOwnProperty("value"),
        i = e ? t.value : t;
      if (((this.value = _u(i)), e)) {
        let r = oi(t);
        delete r.value, (this.options = r);
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(t) {
      let n = t.params;
      if (n) {
        let e = this.options.params;
        Object.keys(n).forEach((i) => {
          e[i] == null && (e[i] = n[i]);
        });
      }
    }
  },
  Qe = "void",
  xo = new ei(Qe),
  No = class {
    constructor(t, n, e) {
      (this.id = t),
        (this.hostElement = n),
        (this._engine = e),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + t),
        xt(n, this._hostClassName);
    }
    listen(t, n, e, i) {
      if (!this._triggers.has(n)) throw Ad(e, n);
      if (e == null || e.length == 0) throw Td(n);
      if (!vu(e)) throw Id(e, n);
      let r = _t(this._elementListeners, t, []),
        s = { name: n, phase: e, callback: i };
      r.push(s);
      let a = _t(this._engine.statesByElement, t, new Map());
      return (
        a.has(n) || (xt(t, pn), xt(t, pn + "-" + n), a.set(n, xo)),
        () => {
          this._engine.afterFlush(() => {
            let c = r.indexOf(s);
            c >= 0 && r.splice(c, 1), this._triggers.has(n) || a.delete(n);
          });
        }
      );
    }
    register(t, n) {
      return this._triggers.has(t) ? !1 : (this._triggers.set(t, n), !0);
    }
    _getTrigger(t) {
      let n = this._triggers.get(t);
      if (!n) throw Dd(t);
      return n;
    }
    trigger(t, n, e, i = !0) {
      let r = this._getTrigger(n),
        s = new ii(this.id, n, t),
        a = this._engine.statesByElement.get(t);
      a ||
        (xt(t, pn),
        xt(t, pn + "-" + n),
        this._engine.statesByElement.set(t, (a = new Map())));
      let c = a.get(n),
        l = new ei(e, this.id);
      if (
        (!(e && e.hasOwnProperty("value")) && c && l.absorbOptions(c.options),
        a.set(n, l),
        c || (c = xo),
        !(l.value === Qe) && c.value === l.value)
      ) {
        if (!xu(c.params, l.params)) {
          let p = [],
            C = r.matchStyles(c.value, c.params, p),
            I = r.matchStyles(l.value, l.params, p);
          p.length
            ? this._engine.reportError(p)
            : this._engine.afterFlush(() => {
                oe(t, C), Ot(t, I);
              });
        }
        return;
      }
      let b = _t(this._engine.playersByElement, t, []);
      b.forEach((p) => {
        p.namespaceId == this.id &&
          p.triggerName == n &&
          p.queued &&
          p.destroy();
      });
      let _ = r.matchTransition(c.value, l.value, t, l.params),
        h = !1;
      if (!_) {
        if (!i) return;
        (_ = r.fallbackTransition), (h = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: t,
          triggerName: n,
          transition: _,
          fromState: c,
          toState: l,
          player: s,
          isFallbackTransition: h,
        }),
        h ||
          (xt(t, Aa),
          s.onStart(() => {
            Ee(t, Aa);
          })),
        s.onDone(() => {
          let p = this.players.indexOf(s);
          p >= 0 && this.players.splice(p, 1);
          let C = this._engine.playersByElement.get(t);
          if (C) {
            let I = C.indexOf(s);
            I >= 0 && C.splice(I, 1);
          }
        }),
        this.players.push(s),
        b.push(s),
        s
      );
    }
    deregister(t) {
      this._triggers.delete(t),
        this._engine.statesByElement.forEach((n) => n.delete(t)),
        this._elementListeners.forEach((n, e) => {
          this._elementListeners.set(
            e,
            n.filter((i) => i.name != t)
          );
        });
    }
    clearElementCache(t) {
      this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
      let n = this._engine.playersByElement.get(t);
      n &&
        (n.forEach((e) => e.destroy()),
        this._engine.playersByElement.delete(t));
    }
    _signalRemovalForInnerTriggers(t, n) {
      let e = this._engine.driver.query(t, vn, !0);
      e.forEach((i) => {
        if (i[St]) return;
        let r = this._engine.fetchNamespacesByElement(i);
        r.size
          ? r.forEach((s) => s.triggerLeaveAnimation(i, n, !1, !0))
          : this.clearElementCache(i);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          e.forEach((i) => this.clearElementCache(i))
        );
    }
    triggerLeaveAnimation(t, n, e, i) {
      let r = this._engine.statesByElement.get(t),
        s = new Map();
      if (r) {
        let a = [];
        if (
          (r.forEach((c, l) => {
            if ((s.set(l, c.value), this._triggers.has(l))) {
              let d = this.trigger(t, l, Qe, i);
              d && a.push(d);
            }
          }),
          a.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, t, !0, n, s),
            e && qt(a).onDone(() => this._engine.processLeaveNode(t)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(t) {
      let n = this._elementListeners.get(t),
        e = this._engine.statesByElement.get(t);
      if (n && e) {
        let i = new Set();
        n.forEach((r) => {
          let s = r.name;
          if (i.has(s)) return;
          i.add(s);
          let c = this._triggers.get(s).fallbackTransition,
            l = e.get(s) || xo,
            d = new ei(Qe),
            m = new ii(this.id, s, t);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: s,
              transition: c,
              fromState: l,
              toState: d,
              player: m,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(t, n) {
      let e = this._engine;
      if (
        (t.childElementCount && this._signalRemovalForInnerTriggers(t, n),
        this.triggerLeaveAnimation(t, n, !0))
      )
        return;
      let i = !1;
      if (e.totalAnimations) {
        let r = e.players.length ? e.playersByQueriedElement.get(t) : [];
        if (r && r.length) i = !0;
        else {
          let s = t;
          for (; (s = s.parentNode); )
            if (e.statesByElement.get(s)) {
              i = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(t), i))
        e.markElementAsRemoved(this.id, t, !1, n);
      else {
        let r = t[St];
        (!r || r === Ha) &&
          (e.afterFlush(() => this.clearElementCache(t)),
          e.destroyInnerAnimations(t),
          e._onRemovalComplete(t, n));
      }
    }
    insertNode(t, n) {
      xt(t, this._hostClassName);
    }
    drainQueuedTransitions(t) {
      let n = [];
      return (
        this._queue.forEach((e) => {
          let i = e.player;
          if (i.destroyed) return;
          let r = e.element,
            s = this._elementListeners.get(r);
          s &&
            s.forEach((a) => {
              if (a.name == e.triggerName) {
                let c = zo(
                  r,
                  e.triggerName,
                  e.fromState.value,
                  e.toState.value
                );
                (c._data = t), Bo(e.player, a.phase, c, a.callback);
              }
            }),
            i.markedForDestroy
              ? this._engine.afterFlush(() => {
                  i.destroy();
                })
              : n.push(e);
        }),
        (this._queue = []),
        n.sort((e, i) => {
          let r = e.transition.ast.depCount,
            s = i.transition.ast.depCount;
          return r == 0 || s == 0
            ? r - s
            : this._engine.driver.containsElement(e.element, i.element)
              ? 1
              : -1;
        })
      );
    }
    destroy(t) {
      this.players.forEach((n) => n.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, t);
    }
  },
  jo = class {
    _onRemovalComplete(t, n) {
      this.onRemovalComplete(t, n);
    }
    constructor(t, n, e) {
      (this.bodyNode = t),
        (this.driver = n),
        (this._normalizer = e),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (i, r) => {});
    }
    get queuedPlayers() {
      let t = [];
      return (
        this._namespaceList.forEach((n) => {
          n.players.forEach((e) => {
            e.queued && t.push(e);
          });
        }),
        t
      );
    }
    createNamespace(t, n) {
      let e = new No(t, n, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, n)
          ? this._balanceNamespaceList(e, n)
          : (this.newHostElements.set(n, e), this.collectEnterElement(n)),
        (this._namespaceLookup[t] = e)
      );
    }
    _balanceNamespaceList(t, n) {
      let e = this._namespaceList,
        i = this.namespacesByHostElement;
      if (e.length - 1 >= 0) {
        let s = !1,
          a = this.driver.getParentElement(n);
        for (; a; ) {
          let c = i.get(a);
          if (c) {
            let l = e.indexOf(c);
            e.splice(l + 1, 0, t), (s = !0);
            break;
          }
          a = this.driver.getParentElement(a);
        }
        s || e.unshift(t);
      } else e.push(t);
      return i.set(n, t), t;
    }
    register(t, n) {
      let e = this._namespaceLookup[t];
      return e || (e = this.createNamespace(t, n)), e;
    }
    registerTrigger(t, n, e) {
      let i = this._namespaceLookup[t];
      i && i.register(n, e) && this.totalAnimations++;
    }
    destroy(t, n) {
      t &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let e = this._fetchNamespace(t);
          this.namespacesByHostElement.delete(e.hostElement);
          let i = this._namespaceList.indexOf(e);
          i >= 0 && this._namespaceList.splice(i, 1),
            e.destroy(n),
            delete this._namespaceLookup[t];
        }));
    }
    _fetchNamespace(t) {
      return this._namespaceLookup[t];
    }
    fetchNamespacesByElement(t) {
      let n = new Set(),
        e = this.statesByElement.get(t);
      if (e) {
        for (let i of e.values())
          if (i.namespaceId) {
            let r = this._fetchNamespace(i.namespaceId);
            r && n.add(r);
          }
      }
      return n;
    }
    trigger(t, n, e, i) {
      if (gn(n)) {
        let r = this._fetchNamespace(t);
        if (r) return r.trigger(n, e, i), !0;
      }
      return !1;
    }
    insertNode(t, n, e, i) {
      if (!gn(n)) return;
      let r = n[St];
      if (r && r.setForRemoval) {
        (r.setForRemoval = !1), (r.setForMove = !0);
        let s = this.collectedLeaveElements.indexOf(n);
        s >= 0 && this.collectedLeaveElements.splice(s, 1);
      }
      if (t) {
        let s = this._fetchNamespace(t);
        s && s.insertNode(n, e);
      }
      i && this.collectEnterElement(n);
    }
    collectEnterElement(t) {
      this.collectedEnterElements.push(t);
    }
    markElementAsDisabled(t, n) {
      n
        ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), xt(t, wo))
        : this.disabledNodes.has(t) &&
          (this.disabledNodes.delete(t), Ee(t, wo));
    }
    removeNode(t, n, e) {
      if (gn(n)) {
        let i = t ? this._fetchNamespace(t) : null;
        i ? i.removeNode(n, e) : this.markElementAsRemoved(t, n, !1, e);
        let r = this.namespacesByHostElement.get(n);
        r && r.id !== t && r.removeNode(n, e);
      } else this._onRemovalComplete(n, e);
    }
    markElementAsRemoved(t, n, e, i, r) {
      this.collectedLeaveElements.push(n),
        (n[St] = {
          namespaceId: t,
          setForRemoval: i,
          hasAnimation: e,
          removedBeforeQueried: !1,
          previousTriggersValues: r,
        });
    }
    listen(t, n, e, i, r) {
      return gn(n) ? this._fetchNamespace(t).listen(n, e, i, r) : () => {};
    }
    _buildInstruction(t, n, e, i, r) {
      return t.transition.build(
        this.driver,
        t.element,
        t.fromState.value,
        t.toState.value,
        e,
        i,
        t.fromState.options,
        t.toState.options,
        n,
        r
      );
    }
    destroyInnerAnimations(t) {
      let n = this.driver.query(t, vn, !0);
      n.forEach((e) => this.destroyActiveAnimationsForElement(e)),
        this.playersByQueriedElement.size != 0 &&
          ((n = this.driver.query(t, ko, !0)),
          n.forEach((e) => this.finishActiveQueriedAnimationOnElement(e)));
    }
    destroyActiveAnimationsForElement(t) {
      let n = this.playersByElement.get(t);
      n &&
        n.forEach((e) => {
          e.queued ? (e.markedForDestroy = !0) : e.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(t) {
      let n = this.playersByQueriedElement.get(t);
      n && n.forEach((e) => e.finish());
    }
    whenRenderingDone() {
      return new Promise((t) => {
        if (this.players.length) return qt(this.players).onDone(() => t());
        t();
      });
    }
    processLeaveNode(t) {
      let n = t[St];
      if (n && n.setForRemoval) {
        if (((t[St] = Ha), n.namespaceId)) {
          this.destroyInnerAnimations(t);
          let e = this._fetchNamespace(n.namespaceId);
          e && e.clearElementCache(t);
        }
        this._onRemovalComplete(t, n.setForRemoval);
      }
      t.classList?.contains(wo) && this.markElementAsDisabled(t, !1),
        this.driver.query(t, mu, !0).forEach((e) => {
          this.markElementAsDisabled(e, !1);
        });
    }
    flush(t = -1) {
      let n = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((e, i) =>
            this._balanceNamespaceList(e, i)
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let e = 0; e < this.collectedEnterElements.length; e++) {
          let i = this.collectedEnterElements[e];
          xt(i, hu);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let e = [];
        try {
          n = this._flushAnimations(e, t);
        } finally {
          for (let i = 0; i < e.length; i++) e[i]();
        }
      } else
        for (let e = 0; e < this.collectedLeaveElements.length; e++) {
          let i = this.collectedLeaveElements[e];
          this.processLeaveNode(i);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((e) => e()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let e = this._whenQuietFns;
        (this._whenQuietFns = []),
          n.length
            ? qt(n).onDone(() => {
                e.forEach((i) => i());
              })
            : e.forEach((i) => i());
      }
    }
    reportError(t) {
      throw Rd(t);
    }
    _flushAnimations(t, n) {
      let e = new ti(),
        i = [],
        r = new Map(),
        s = [],
        a = new Map(),
        c = new Map(),
        l = new Map(),
        d = new Set();
      this.disabledNodes.forEach((v) => {
        d.add(v);
        let w = this.driver.query(v, uu, !0);
        for (let E = 0; E < w.length; E++) d.add(w[E]);
      });
      let m = this.bodyNode,
        b = Array.from(this.statesByElement.keys()),
        _ = Da(b, this.collectedEnterElements),
        h = new Map(),
        p = 0;
      _.forEach((v, w) => {
        let E = Na + p++;
        h.set(w, E), v.forEach((P) => xt(P, E));
      });
      let C = [],
        I = new Set(),
        j = new Set();
      for (let v = 0; v < this.collectedLeaveElements.length; v++) {
        let w = this.collectedLeaveElements[v],
          E = w[St];
        E &&
          E.setForRemoval &&
          (C.push(w),
          I.add(w),
          E.hasAnimation
            ? this.driver.query(w, pu, !0).forEach((P) => I.add(P))
            : j.add(w));
      }
      let Z = new Map(),
        S = Da(b, Array.from(I));
      S.forEach((v, w) => {
        let E = So + p++;
        Z.set(w, E), v.forEach((P) => xt(P, E));
      }),
        t.push(() => {
          _.forEach((v, w) => {
            let E = h.get(w);
            v.forEach((P) => Ee(P, E));
          }),
            S.forEach((v, w) => {
              let E = Z.get(w);
              v.forEach((P) => Ee(P, E));
            }),
            C.forEach((v) => {
              this.processLeaveNode(v);
            });
        });
      let $ = [],
        A = [];
      for (let v = this._namespaceList.length - 1; v >= 0; v--)
        this._namespaceList[v].drainQueuedTransitions(n).forEach((E) => {
          let P = E.player,
            ot = E.element;
          if (($.push(P), this.collectedEnterElements.length)) {
            let ct = ot[St];
            if (ct && ct.setForMove) {
              if (
                ct.previousTriggersValues &&
                ct.previousTriggersValues.has(E.triggerName)
              ) {
                let Qt = ct.previousTriggersValues.get(E.triggerName),
                  vt = this.statesByElement.get(E.element);
                if (vt && vt.has(E.triggerName)) {
                  let hi = vt.get(E.triggerName);
                  (hi.value = Qt), vt.set(E.triggerName, hi);
                }
              }
              P.destroy();
              return;
            }
          }
          let Ct = !m || !this.driver.containsElement(m, ot),
            pt = Z.get(ot),
            Vt = h.get(ot),
            G = this._buildInstruction(E, e, Vt, pt, Ct);
          if (G.errors && G.errors.length) {
            A.push(G);
            return;
          }
          if (Ct) {
            P.onStart(() => oe(ot, G.fromStyles)),
              P.onDestroy(() => Ot(ot, G.toStyles)),
              i.push(P);
            return;
          }
          if (E.isFallbackTransition) {
            P.onStart(() => oe(ot, G.fromStyles)),
              P.onDestroy(() => Ot(ot, G.toStyles)),
              i.push(P);
            return;
          }
          let vr = [];
          G.timelines.forEach((ct) => {
            (ct.stretchStartingKeyframe = !0),
              this.disabledNodes.has(ct.element) || vr.push(ct);
          }),
            (G.timelines = vr),
            e.append(ot, G.timelines);
          let _l = { instruction: G, player: P, element: ot };
          s.push(_l),
            G.queriedElements.forEach((ct) => _t(a, ct, []).push(P)),
            G.preStyleProps.forEach((ct, Qt) => {
              if (ct.size) {
                let vt = c.get(Qt);
                vt || c.set(Qt, (vt = new Set())),
                  ct.forEach((hi, Ln) => vt.add(Ln));
              }
            }),
            G.postStyleProps.forEach((ct, Qt) => {
              let vt = l.get(Qt);
              vt || l.set(Qt, (vt = new Set())),
                ct.forEach((hi, Ln) => vt.add(Ln));
            });
        });
      if (A.length) {
        let v = [];
        A.forEach((w) => {
          v.push(Md(w.triggerName, w.errors));
        }),
          $.forEach((w) => w.destroy()),
          this.reportError(v);
      }
      let Y = new Map(),
        X = new Map();
      s.forEach((v) => {
        let w = v.element;
        e.has(w) &&
          (X.set(w, w),
          this._beforeAnimationBuild(v.player.namespaceId, v.instruction, Y));
      }),
        i.forEach((v) => {
          let w = v.element;
          this._getPreviousPlayers(
            w,
            !1,
            v.namespaceId,
            v.triggerName,
            null
          ).forEach((P) => {
            _t(Y, w, []).push(P), P.destroy();
          });
        });
      let ht = C.filter((v) => Ra(v, c, l)),
        Ft = new Map();
      Ia(Ft, this.driver, j, l, Mt).forEach((v) => {
        Ra(v, c, l) && ht.push(v);
      });
      let Ne = new Map();
      _.forEach((v, w) => {
        Ia(Ne, this.driver, new Set(v), c, hn);
      }),
        ht.forEach((v) => {
          let w = Ft.get(v),
            E = Ne.get(v);
          Ft.set(
            v,
            new Map([...(w?.entries() ?? []), ...(E?.entries() ?? [])])
          );
        });
      let Xt = [],
        gr = [],
        _r = {};
      s.forEach((v) => {
        let { element: w, player: E, instruction: P } = v;
        if (e.has(w)) {
          if (d.has(w)) {
            E.onDestroy(() => Ot(w, P.toStyles)),
              (E.disabled = !0),
              E.overrideTotalTime(P.totalTime),
              i.push(E);
            return;
          }
          let ot = _r;
          if (X.size > 1) {
            let pt = w,
              Vt = [];
            for (; (pt = pt.parentNode); ) {
              let G = X.get(pt);
              if (G) {
                ot = G;
                break;
              }
              Vt.push(pt);
            }
            Vt.forEach((G) => X.set(G, ot));
          }
          let Ct = this._buildAnimation(E.namespaceId, P, Y, r, Ne, Ft);
          if ((E.setRealPlayer(Ct), ot === _r)) Xt.push(E);
          else {
            let pt = this.playersByElement.get(ot);
            pt && pt.length && (E.parentPlayer = qt(pt)), i.push(E);
          }
        } else
          oe(w, P.fromStyles),
            E.onDestroy(() => Ot(w, P.toStyles)),
            gr.push(E),
            d.has(w) && i.push(E);
      }),
        gr.forEach((v) => {
          let w = r.get(v.element);
          if (w && w.length) {
            let E = qt(w);
            v.setRealPlayer(E);
          }
        }),
        i.forEach((v) => {
          v.parentPlayer ? v.syncPlayerEvents(v.parentPlayer) : v.destroy();
        });
      for (let v = 0; v < C.length; v++) {
        let w = C[v],
          E = w[St];
        if ((Ee(w, So), E && E.hasAnimation)) continue;
        let P = [];
        if (a.size) {
          let Ct = a.get(w);
          Ct && Ct.length && P.push(...Ct);
          let pt = this.driver.query(w, ko, !0);
          for (let Vt = 0; Vt < pt.length; Vt++) {
            let G = a.get(pt[Vt]);
            G && G.length && P.push(...G);
          }
        }
        let ot = P.filter((Ct) => !Ct.destroyed);
        ot.length ? yu(this, w, ot) : this.processLeaveNode(w);
      }
      return (
        (C.length = 0),
        Xt.forEach((v) => {
          this.players.push(v),
            v.onDone(() => {
              v.destroy();
              let w = this.players.indexOf(v);
              this.players.splice(w, 1);
            }),
            v.play();
        }),
        Xt
      );
    }
    afterFlush(t) {
      this._flushFns.push(t);
    }
    afterFlushAnimationsDone(t) {
      this._whenQuietFns.push(t);
    }
    _getPreviousPlayers(t, n, e, i, r) {
      let s = [];
      if (n) {
        let a = this.playersByQueriedElement.get(t);
        a && (s = a);
      } else {
        let a = this.playersByElement.get(t);
        if (a) {
          let c = !r || r == Qe;
          a.forEach((l) => {
            l.queued || (!c && l.triggerName != i) || s.push(l);
          });
        }
      }
      return (
        (e || i) &&
          (s = s.filter(
            (a) => !((e && e != a.namespaceId) || (i && i != a.triggerName))
          )),
        s
      );
    }
    _beforeAnimationBuild(t, n, e) {
      let i = n.triggerName,
        r = n.element,
        s = n.isRemovalTransition ? void 0 : t,
        a = n.isRemovalTransition ? void 0 : i;
      for (let c of n.timelines) {
        let l = c.element,
          d = l !== r,
          m = _t(e, l, []);
        this._getPreviousPlayers(l, d, s, a, n.toState).forEach((_) => {
          let h = _.getRealPlayer();
          h.beforeDestroy && h.beforeDestroy(), _.destroy(), m.push(_);
        });
      }
      oe(r, n.fromStyles);
    }
    _buildAnimation(t, n, e, i, r, s) {
      let a = n.triggerName,
        c = n.element,
        l = [],
        d = new Set(),
        m = new Set(),
        b = n.timelines.map((h) => {
          let p = h.element;
          d.add(p);
          let C = p[St];
          if (C && C.removedBeforeQueried) return new Zt(h.duration, h.delay);
          let I = p !== c,
            j = wu((e.get(p) || fu).map((Y) => Y.getRealPlayer())).filter(
              (Y) => {
                let X = Y;
                return X.element ? X.element === p : !1;
              }
            ),
            Z = r.get(p),
            S = s.get(p),
            $ = Ma(this._normalizer, h.keyframes, Z, S),
            A = this._buildPlayer(h, $, j);
          if ((h.subTimeline && i && m.add(p), I)) {
            let Y = new ii(t, a, p);
            Y.setRealPlayer(A), l.push(Y);
          }
          return A;
        });
      l.forEach((h) => {
        _t(this.playersByQueriedElement, h.element, []).push(h),
          h.onDone(() => gu(this.playersByQueriedElement, h.element, h));
      }),
        d.forEach((h) => xt(h, wa));
      let _ = qt(b);
      return (
        _.onDestroy(() => {
          d.forEach((h) => Ee(h, wa)), Ot(c, n.toStyles);
        }),
        m.forEach((h) => {
          _t(i, h, []).push(_);
        }),
        _
      );
    }
    _buildPlayer(t, n, e) {
      return n.length > 0
        ? this.driver.animate(t.element, n, t.duration, t.delay, t.easing, e)
        : new Zt(t.duration, t.delay);
    }
  },
  ii = class {
    constructor(t, n, e) {
      (this.namespaceId = t),
        (this.triggerName = n),
        (this.element = e),
        (this._player = new Zt()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(t) {
      this._containsRealPlayer ||
        ((this._player = t),
        this._queuedCallbacks.forEach((n, e) => {
          n.forEach((i) => Bo(t, e, void 0, i));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(t.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(t) {
      this.totalTime = t;
    }
    syncPlayerEvents(t) {
      let n = this._player;
      n.triggerCallback && t.onStart(() => n.triggerCallback("start")),
        t.onDone(() => this.finish()),
        t.onDestroy(() => this.destroy());
    }
    _queueEvent(t, n) {
      _t(this._queuedCallbacks, t, []).push(n);
    }
    onDone(t) {
      this.queued && this._queueEvent("done", t), this._player.onDone(t);
    }
    onStart(t) {
      this.queued && this._queueEvent("start", t), this._player.onStart(t);
    }
    onDestroy(t) {
      this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(t) {
      this.queued || this._player.setPosition(t);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(t) {
      let n = this._player;
      n.triggerCallback && n.triggerCallback(t);
    }
  };
function gu(o, t, n) {
  let e = o.get(t);
  if (e) {
    if (e.length) {
      let i = e.indexOf(n);
      e.splice(i, 1);
    }
    e.length == 0 && o.delete(t);
  }
  return e;
}
function _u(o) {
  return o ?? null;
}
function gn(o) {
  return o && o.nodeType === 1;
}
function vu(o) {
  return o == "start" || o == "done";
}
function Ta(o, t) {
  let n = o.style.display;
  return (o.style.display = t ?? "none"), n;
}
function Ia(o, t, n, e, i) {
  let r = [];
  n.forEach((c) => r.push(Ta(c)));
  let s = [];
  e.forEach((c, l) => {
    let d = new Map();
    c.forEach((m) => {
      let b = t.computeStyle(l, m, i);
      d.set(m, b), (!b || b.length == 0) && ((l[St] = bu), s.push(l));
    }),
      o.set(l, d);
  });
  let a = 0;
  return n.forEach((c) => Ta(c, r[a++])), s;
}
function Da(o, t) {
  let n = new Map();
  if ((o.forEach((a) => n.set(a, [])), t.length == 0)) return n;
  let e = 1,
    i = new Set(t),
    r = new Map();
  function s(a) {
    if (!a) return e;
    let c = r.get(a);
    if (c) return c;
    let l = a.parentNode;
    return n.has(l) ? (c = l) : i.has(l) ? (c = e) : (c = s(l)), r.set(a, c), c;
  }
  return (
    t.forEach((a) => {
      let c = s(a);
      c !== e && n.get(c).push(a);
    }),
    n
  );
}
function xt(o, t) {
  o.classList?.add(t);
}
function Ee(o, t) {
  o.classList?.remove(t);
}
function yu(o, t, n) {
  qt(n).onDone(() => o.processLeaveNode(t));
}
function wu(o) {
  let t = [];
  return Ua(o, t), t;
}
function Ua(o, t) {
  for (let n = 0; n < o.length; n++) {
    let e = o[n];
    e instanceof qe ? Ua(e.players, t) : t.push(e);
  }
}
function xu(o, t) {
  let n = Object.keys(o),
    e = Object.keys(t);
  if (n.length != e.length) return !1;
  for (let i = 0; i < n.length; i++) {
    let r = n[i];
    if (!t.hasOwnProperty(r) || o[r] !== t[r]) return !1;
  }
  return !0;
}
function Ra(o, t, n) {
  let e = n.get(o);
  if (!e) return !1;
  let i = t.get(o);
  return i ? e.forEach((r) => i.add(r)) : t.set(o, e), n.delete(o), !0;
}
var ke = class {
  constructor(t, n, e) {
    (this._driver = n),
      (this._normalizer = e),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (i, r) => {}),
      (this._transitionEngine = new jo(t.body, n, e)),
      (this._timelineEngine = new Fo(t.body, n, e)),
      (this._transitionEngine.onRemovalComplete = (i, r) =>
        this.onRemovalComplete(i, r));
  }
  registerTrigger(t, n, e, i, r) {
    let s = t + "-" + i,
      a = this._triggerCache[s];
    if (!a) {
      let c = [],
        l = [],
        d = Va(this._driver, r, c, l);
      if (c.length) throw wd(i, c);
      l.length && void 0,
        (a = cu(i, d, this._normalizer)),
        (this._triggerCache[s] = a);
    }
    this._transitionEngine.registerTrigger(n, i, a);
  }
  register(t, n) {
    this._transitionEngine.register(t, n);
  }
  destroy(t, n) {
    this._transitionEngine.destroy(t, n);
  }
  onInsert(t, n, e, i) {
    this._transitionEngine.insertNode(t, n, e, i);
  }
  onRemove(t, n, e) {
    this._transitionEngine.removeNode(t, n, e);
  }
  disableAnimations(t, n) {
    this._transitionEngine.markElementAsDisabled(t, n);
  }
  process(t, n, e, i) {
    if (e.charAt(0) == "@") {
      let [r, s] = va(e),
        a = i;
      this._timelineEngine.command(r, n, s, a);
    } else this._transitionEngine.trigger(t, n, e, i);
  }
  listen(t, n, e, i, r) {
    if (e.charAt(0) == "@") {
      let [s, a] = va(e);
      return this._timelineEngine.listen(s, n, a, r);
    }
    return this._transitionEngine.listen(t, n, e, i, r);
  }
  flush(t = -1) {
    this._transitionEngine.flush(t);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(t) {
    this._transitionEngine.afterFlushAnimationsDone(t);
  }
};
function Eu(o, t) {
  let n = null,
    e = null;
  return (
    Array.isArray(t) && t.length
      ? ((n = Eo(t[0])), t.length > 1 && (e = Eo(t[t.length - 1])))
      : t instanceof Map && (n = Eo(t)),
    n || e ? new Su(o, n, e) : null
  );
}
var Su = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this._element = e),
        (this._startStyles = i),
        (this._endStyles = r),
        (this._state = 0);
      let s = t.initialStylesByElement.get(e);
      s || t.initialStylesByElement.set(e, (s = new Map())),
        (this._initialStyles = s);
    }
    start() {
      this._state < 1 &&
        (this._startStyles &&
          Ot(this._element, this._startStyles, this._initialStyles),
        (this._state = 1));
    }
    finish() {
      this.start(),
        this._state < 2 &&
          (Ot(this._element, this._initialStyles),
          this._endStyles &&
            (Ot(this._element, this._endStyles), (this._endStyles = null)),
          (this._state = 1));
    }
    destroy() {
      this.finish(),
        this._state < 3 &&
          (t.initialStylesByElement.delete(this._element),
          this._startStyles &&
            (oe(this._element, this._startStyles), (this._endStyles = null)),
          this._endStyles &&
            (oe(this._element, this._endStyles), (this._endStyles = null)),
          Ot(this._element, this._initialStyles),
          (this._state = 3));
    }
  };
  t.initialStylesByElement = new WeakMap();
  let o = t;
  return o;
})();
function Eo(o) {
  let t = null;
  return (
    o.forEach((n, e) => {
      ku(e) && ((t = t || new Map()), t.set(e, n));
    }),
    t
  );
}
function ku(o) {
  return o === "display" || o === "position";
}
var An = class {
    constructor(t, n, e, i) {
      (this.element = t),
        (this.keyframes = n),
        (this.options = e),
        (this._specialStyles = i),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = e.duration),
        (this._delay = e.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let t = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        t,
        this.options
      )),
        (this._finalKeyframe = t.length ? t[t.length - 1] : new Map());
      let n = () => this._onFinish();
      this.domPlayer.addEventListener("finish", n),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", n);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(t) {
      let n = [];
      return (
        t.forEach((e) => {
          n.push(Object.fromEntries(e));
        }),
        n
      );
    }
    _triggerWebAnimation(t, n, e) {
      return t.animate(this._convertKeyframesToObject(n), e);
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((t) => t()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    setPosition(t) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = t * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let t = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((e, i) => {
          i !== "offset" && t.set(i, this._finished ? e : Ba(this.element, i));
        }),
        (this.currentSnapshot = t);
    }
    triggerCallback(t) {
      let n = t === "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((e) => e()), (n.length = 0);
    }
  },
  Tn = class {
    validateStyleProperty(t) {
      return !0;
    }
    validateAnimatableStyleProperty(t) {
      return !0;
    }
    matchesElement(t, n) {
      return !1;
    }
    containsElement(t, n) {
      return Oa(t, n);
    }
    getParentElement(t) {
      return Vo(t);
    }
    query(t, n, e) {
      return Pa(t, n, e);
    }
    computeStyle(t, n, e) {
      return window.getComputedStyle(t)[n];
    }
    animate(t, n, e, i, r, s = []) {
      let a = i == 0 ? "both" : "forwards",
        c = { duration: e, delay: i, fill: a };
      r && (c.easing = r);
      let l = new Map(),
        d = s.filter((_) => _ instanceof An);
      Hd(e, i) &&
        d.forEach((_) => {
          _.currentSnapshot.forEach((h, p) => l.set(p, h));
        });
      let m = zd(n).map((_) => Se(_));
      m = Ud(t, m, l);
      let b = Eu(t, m);
      return new An(t, m, c, b);
    }
  };
var _n = "@",
  Wa = "@.disabled",
  In = class {
    constructor(t, n, e, i) {
      (this.namespaceId = t),
        (this.delegate = n),
        (this.engine = e),
        (this._onDestroy = i),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(t) {
      this.delegate.destroyNode?.(t);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(t, n) {
      return this.delegate.createElement(t, n);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    appendChild(t, n) {
      this.delegate.appendChild(t, n),
        this.engine.onInsert(this.namespaceId, n, t, !1);
    }
    insertBefore(t, n, e, i = !0) {
      this.delegate.insertBefore(t, n, e),
        this.engine.onInsert(this.namespaceId, n, t, i);
    }
    removeChild(t, n, e) {
      this.engine.onRemove(this.namespaceId, n, this.delegate);
    }
    selectRootElement(t, n) {
      return this.delegate.selectRootElement(t, n);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, n, e, i) {
      this.delegate.setAttribute(t, n, e, i);
    }
    removeAttribute(t, n, e) {
      this.delegate.removeAttribute(t, n, e);
    }
    addClass(t, n) {
      this.delegate.addClass(t, n);
    }
    removeClass(t, n) {
      this.delegate.removeClass(t, n);
    }
    setStyle(t, n, e, i) {
      this.delegate.setStyle(t, n, e, i);
    }
    removeStyle(t, n, e) {
      this.delegate.removeStyle(t, n, e);
    }
    setProperty(t, n, e) {
      n.charAt(0) == _n && n == Wa
        ? this.disableAnimations(t, !!e)
        : this.delegate.setProperty(t, n, e);
    }
    setValue(t, n) {
      this.delegate.setValue(t, n);
    }
    listen(t, n, e) {
      return this.delegate.listen(t, n, e);
    }
    disableAnimations(t, n) {
      this.engine.disableAnimations(t, n);
    }
  },
  Lo = class extends In {
    constructor(t, n, e, i, r) {
      super(n, e, i, r), (this.factory = t), (this.namespaceId = n);
    }
    setProperty(t, n, e) {
      n.charAt(0) == _n
        ? n.charAt(1) == "." && n == Wa
          ? ((e = e === void 0 ? !0 : !!e), this.disableAnimations(t, e))
          : this.engine.process(this.namespaceId, t, n.slice(1), e)
        : this.delegate.setProperty(t, n, e);
    }
    listen(t, n, e) {
      if (n.charAt(0) == _n) {
        let i = Cu(t),
          r = n.slice(1),
          s = "";
        return (
          r.charAt(0) != _n && ([r, s] = Au(r)),
          this.engine.listen(this.namespaceId, i, r, s, (a) => {
            let c = a._data || -1;
            this.factory.scheduleListenerCallback(c, e, a);
          })
        );
      }
      return this.delegate.listen(t, n, e);
    }
  };
function Cu(o) {
  switch (o) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return o;
  }
}
function Au(o) {
  let t = o.indexOf("."),
    n = o.substring(0, t),
    e = o.slice(t + 1);
  return [n, e];
}
var Dn = class {
  constructor(t, n, e) {
    (this.delegate = t),
      (this.engine = n),
      (this._zone = e),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (n.onRemovalComplete = (i, r) => {
        let s = r?.parentNode(i);
        s && r.removeChild(s, i);
      });
  }
  createRenderer(t, n) {
    let e = "",
      i = this.delegate.createRenderer(t, n);
    if (!t || !n?.data?.animation) {
      let l = this._rendererCache,
        d = l.get(i);
      if (!d) {
        let m = () => l.delete(i);
        (d = new In(e, i, this.engine, m)), l.set(i, d);
      }
      return d;
    }
    let r = n.id,
      s = n.id + "-" + this._currentId;
    this._currentId++, this.engine.register(s, t);
    let a = (l) => {
      Array.isArray(l)
        ? l.forEach(a)
        : this.engine.registerTrigger(r, s, t, l.name, l);
    };
    return n.data.animation.forEach(a), new Lo(this, s, i, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(t, n, e) {
    if (t >= 0 && t < this._microtaskId) {
      this._zone.run(() => n(e));
      return;
    }
    let i = this._animationCallbacksBuffer;
    i.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          i.forEach((r) => {
            let [s, a] = r;
            s(a);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      i.push([n, e]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var Iu = (() => {
  let t = class t extends ke {
    constructor(e, i, r, s) {
      super(e, i, r);
    }
    ngOnDestroy() {
      this.flush();
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(H), u(ni), u(re), u(Ei));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
function Du() {
  return new xn();
}
function Ru(o, t, n) {
  return new Dn(o, t, n);
}
var Ya = [
    { provide: re, useFactory: Du },
    { provide: ke, useClass: Iu },
    { provide: Lr, useFactory: Ru, deps: [Jr, ke, W] },
  ],
  Mu = [
    { provide: ni, useFactory: () => new Tn() },
    { provide: yt, useValue: "BrowserAnimations" },
    ...Ya,
  ],
  Dh = [
    { provide: ni, useClass: $o },
    { provide: yt, useValue: "NoopAnimations" },
    ...Ya,
  ];
function Ka() {
  return [...Mu];
}
var Ce = (o, t) => {
  let n = U(lt);
  return localStorage.getItem("currentUser")
    ? t.url === "/signin" || t.url === "/signout"
      ? n.navigate(["/"])
      : !0
    : t.url === "/signin" || t.url === "/signout"
      ? !0
      : n.navigate(["/signin"]);
};
var Ga = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = bt({
      type: t,
      selectors: [["app-not-found"]],
      standalone: !0,
      features: [It],
      decls: 10,
      vars: 0,
      consts: [
        [1, "wrapper"],
        [1, "not-found"],
        [1, "not-found-title"],
        [1, "not-found-descr"],
        ["routerLink", "/", 1, "not-found-link"],
        [1, "not-found-link-descr"],
      ],
      template: function (i, r) {
        i & 1 &&
          (tt(0, "div", 0)(1, "div", 1)(2, "h1", 2),
          Tt(3, "404 - Not Found"),
          q(),
          tt(4, "p", 3),
          Tt(5, "The page you are looking for does not exist."),
          q(),
          tt(6, "p")(7, "a", 4)(8, "div", 5),
          Tt(9, "Go to the Home page"),
          q()()()()());
      },
      dependencies: [Ut, Ci, ki],
      styles: [
        ".not-found[_ngcontent-%COMP%]{width:600px;min-height:200px;margin:100px auto 0;padding:100px}.not-found-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-style:normal;font-weight:700;line-height:normal;color:#797979;text-align:center;margin-bottom:20px}.not-found-descr[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-style:normal;font-weight:400;line-height:normal;color:#797979;text-align:center;margin-bottom:40px}.not-found-link[_ngcontent-%COMP%]{display:block}.not-found-link-descr[_ngcontent-%COMP%]{display:block;width:140px;margin:0 auto;font-family:Roboto,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;color:#27ae60;text-align:center}.not-found-link-descr[_ngcontent-%COMP%]:hover{border-bottom:1px solid #27AE60}",
      ],
    }));
  let o = t;
  return o;
})();
var Za = [
  {
    path: "",
    loadComponent: () =>
      import("./chunk-ZWGNPPJB.js").then((o) => o.MainComponent),
    canActivate: [Ce],
  },
  {
    path: "signin",
    loadComponent: () =>
      import("./chunk-2KPRB6DL.js").then((o) => o.LoginComponent),
    canActivate: [Ce],
  },
  {
    path: "signout",
    loadComponent: () =>
      import("./chunk-ZO52COO3.js").then((o) => o.RegistrationComponent),
    canActivate: [Ce],
  },
  {
    path: "profile",
    loadComponent: () =>
      import("./chunk-U7ZYNOTE.js").then((o) => o.ProfileComponent),
    canActivate: [Ce],
  },
  {
    path: "conversation/:conversationID",
    loadComponent: () =>
      import("./chunk-4EWB7Z2C.js").then((o) => o.ConversationComponent),
    canActivate: [Ce],
  },
  { path: "**", component: Ga, pathMatch: "full" },
];
var qa = (() => {
  let t = class t {
    constructor() {
      this.baseUrl = "https://tasks.app.rs.school/angular";
    }
    intercept(e, i) {
      let r = e.clone({ url: this.baseUrl + e.url });
      return i.handle(r);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Xa = {
    isSubmitInProgress: !1,
    duplicatedEmails: [],
    currentUser: null,
    isLogged: null,
    errors: null,
  },
  Qa = Rt(
    Xa,
    x(Rs, (o) => y(g({}, o), { isSubmitInProgress: !0 })),
    x(Qi, (o) => y(g({}, o), { isSubmitInProgress: !0 })),
    x(Ki, (o) => y(g({}, o), { isSubmitInProgress: !1, errors: null })),
    x(Lt, (o, { errorType: t, errorMessage: n, email: e }) =>
      e
        ? y(g({}, o), {
            isSubmitInProgress: !1,
            duplicatedEmails: [...o.duplicatedEmails, e],
            errors: { type: t, message: n },
          })
        : y(g({}, o), {
            isSubmitInProgress: !1,
            errors: { type: t, message: n },
          })
    ),
    x(Gi, (o, { payload: t }) =>
      y(g({}, o), {
        isSubmitInProgress: !1,
        isLogged: !0,
        errors: null,
        currentUser: {
          "rs-email": t["rs-email"],
          "rs-uid": t["rs-uid"],
          Authorization: t.Authorization,
        },
      })
    ),
    x(Xi, (o) => Xa),
    x(Ji, (o) => y(g({}, o), { isLogged: !0 }))
  );
var Ae = (() => {
  let t = class t {
    constructor(e) {
      this.http = e;
    }
    registration(e) {
      return this.http.post("/registration", e);
    }
    login(e) {
      return this.http.post("/login", e);
    }
    logout() {
      return this.http.delete("/logout");
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Dt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var Ko;
try {
  Ko = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Ko = !1;
}
var Q = (() => {
  let t = class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? qr(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Ko) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Nr));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var ri;
function Ou() {
  if (ri == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (ri = !0) })
      );
    } finally {
      ri = ri || !1;
    }
  return ri;
}
function Te(o) {
  return Ou() ? o : !!o.capture;
}
var ae;
function Ja() {
  if (ae == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (ae = !1), ae;
    if ("scrollBehavior" in document.documentElement.style) ae = !0;
    else {
      let o = Element.prototype.scrollTo;
      o ? (ae = !/\{\s*\[native code\]\s*\}/.test(o.toString())) : (ae = !1);
    }
  }
  return ae;
}
var Yo;
function Pu() {
  if (Yo == null) {
    let o = typeof document < "u" ? document.head : null;
    Yo = !!(o && (o.createShadowRoot || o.attachShadow));
  }
  return Yo;
}
function tc(o) {
  if (Pu()) {
    let t = o.getRootNode ? o.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function kt(o) {
  return o.composedPath ? o.composedPath()[0] : o.target;
}
function si() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function Ie(o) {
  return Array.isArray(o) ? o : [o];
}
function J(o) {
  return o == null ? "" : typeof o == "string" ? o : `${o}px`;
}
function zt(o) {
  return o instanceof rt ? o.nativeElement : o;
}
var ec = new Set(),
  le,
  Fu = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : ju);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Nu(e, this._nonce),
          this._matchMedia(e)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Q), u(jr, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
function Nu(o, t) {
  if (!ec.has(o))
    try {
      le ||
        ((le = document.createElement("style")),
        t && (le.nonce = t),
        le.setAttribute("type", "text/css"),
        document.head.appendChild(le)),
        le.sheet &&
          (le.sheet.insertRule(`@media ${o} {body{ }}`, 0), ec.add(o));
    } catch (n) {
      console.error(n);
    }
}
function ju(o) {
  return {
    matches: o === "all" || o === "",
    media: o,
    addListener: () => {},
    removeListener: () => {},
  };
}
var Mn = (() => {
  let t = class t {
    constructor(e, i) {
      (this._mediaMatcher = e),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new K());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return ic(Ie(e)).some((r) => this._registerQuery(r).mql.matches);
    }
    observe(e) {
      let r = ic(Ie(e)).map((a) => this._registerQuery(a).observable),
        s = Cr(r);
      return (
        (s = Ar(s.pipe(Et(1)), s.pipe(ue(1), Le(0)))),
        s.pipe(
          et((a) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              a.forEach(({ matches: l, query: d }) => {
                (c.matches = c.matches || l), (c.breakpoints[d] = l);
              }),
              c
            );
          })
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let i = this._mediaMatcher.matchMedia(e),
        s = {
          observable: new Nt((a) => {
            let c = (l) => this._zone.run(() => a.next(l));
            return (
              i.addListener(c),
              () => {
                i.removeListener(c);
              }
            );
          }).pipe(
            Hn(i),
            et(({ matches: a }) => ({ query: e, matches: a })),
            ft(this._destroySubject)
          ),
          mql: i,
        };
      return this._queries.set(e, s), s;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Fu), u(W));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
function ic(o) {
  return o
    .map((t) => t.split(","))
    .reduce((t, n) => t.concat(n))
    .map((t) => t.trim());
}
var nc = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset:
    "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape:
    "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)",
};
function Zo(o) {
  return o.buttons === 0 || o.detail === 0;
}
function qo(o) {
  let t =
    (o.touches && o.touches[0]) || (o.changedTouches && o.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var Bu = new V("cdk-input-modality-detector-options"),
  zu = { ignoreKeys: [18, 17, 224, 91, 16] },
  ac = 650,
  De = Te({ passive: !0, capture: !0 }),
  Vu = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, i, r, s) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new yr(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (a) => {
            this._options?.ignoreKeys?.some((c) => c === a.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = kt(a)));
          }),
          (this._onMousedown = (a) => {
            Date.now() - this._lastTouchMs < ac ||
              (this._modality.next(Zo(a) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = kt(a)));
          }),
          (this._onTouchstart = (a) => {
            if (qo(a)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = kt(a));
          }),
          (this._options = g(g({}, zu), s)),
          (this.modalityDetected = this._modality.pipe(ue(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Vn())),
          e.isBrowser &&
            i.runOutsideAngular(() => {
              r.addEventListener("keydown", this._onKeydown, De),
                r.addEventListener("mousedown", this._onMousedown, De),
                r.addEventListener("touchstart", this._onTouchstart, De);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, De),
            document.removeEventListener("mousedown", this._onMousedown, De),
            document.removeEventListener("touchstart", this._onTouchstart, De));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Q), u(W), u(H), u(Bu, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })(),
  $u = new V("liveAnnouncerElement", { providedIn: "root", factory: Hu });
function Hu() {
  return null;
}
var Uu = new V("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),
  Wu = 0,
  cc = (() => {
    let t = class t {
      constructor(e, i, r, s) {
        (this._ngZone = i),
          (this._defaultOptions = s),
          (this._document = r),
          (this._liveElement = e || this._createLiveElement());
      }
      announce(e, ...i) {
        let r = this._defaultOptions,
          s,
          a;
        return (
          i.length === 1 && typeof i[0] == "number" ? (a = i[0]) : ([s, a] = i),
          this.clear(),
          clearTimeout(this._previousTimeout),
          s || (s = r && r.politeness ? r.politeness : "polite"),
          a == null && r && (a = r.duration),
          this._liveElement.setAttribute("aria-live", s),
          this._liveElement.id &&
            this._exposeAnnouncerToModals(this._liveElement.id),
          this._ngZone.runOutsideAngular(
            () => (
              this._currentPromise ||
                (this._currentPromise = new Promise(
                  (c) => (this._currentResolve = c)
                )),
              clearTimeout(this._previousTimeout),
              (this._previousTimeout = setTimeout(() => {
                (this._liveElement.textContent = e),
                  typeof a == "number" &&
                    (this._previousTimeout = setTimeout(() => this.clear(), a)),
                  this._currentResolve(),
                  (this._currentPromise = this._currentResolve = void 0);
              }, 100)),
              this._currentPromise
            )
          )
        );
      }
      clear() {
        this._liveElement && (this._liveElement.textContent = "");
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout),
          this._liveElement?.remove(),
          (this._liveElement = null),
          this._currentResolve?.(),
          (this._currentPromise = this._currentResolve = void 0);
      }
      _createLiveElement() {
        let e = "cdk-live-announcer-element",
          i = this._document.getElementsByClassName(e),
          r = this._document.createElement("div");
        for (let s = 0; s < i.length; s++) i[s].remove();
        return (
          r.classList.add(e),
          r.classList.add("cdk-visually-hidden"),
          r.setAttribute("aria-atomic", "true"),
          r.setAttribute("aria-live", "polite"),
          (r.id = `cdk-live-announcer-${Wu++}`),
          this._document.body.appendChild(r),
          r
        );
      }
      _exposeAnnouncerToModals(e) {
        let i = this._document.querySelectorAll(
          'body > .cdk-overlay-container [aria-modal="true"]'
        );
        for (let r = 0; r < i.length; r++) {
          let s = i[r],
            a = s.getAttribute("aria-owns");
          a
            ? a.indexOf(e) === -1 && s.setAttribute("aria-owns", a + " " + e)
            : s.setAttribute("aria-owns", e);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u($u, 8), u(W), u(H), u(Uu, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
var Yu = new V("cdk-focus-monitor-default-options"),
  On = Te({ passive: !0, capture: !0 }),
  lc = (() => {
    let t = class t {
      constructor(e, i, r, s, a) {
        (this._ngZone = e),
          (this._platform = i),
          (this._inputModalityDetector = r),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1)
              ));
          }),
          (this._stopInputModalityDetector = new K()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let l = kt(c);
            for (let d = l; d; d = d.parentElement)
              c.type === "focus" ? this._onFocus(c, d) : this._onBlur(c, d);
          }),
          (this._document = s),
          (this._detectionMode = a?.detectionMode || 0);
      }
      monitor(e, i = !1) {
        let r = zt(e);
        if (!this._platform.isBrowser || r.nodeType !== 1) return T();
        let s = tc(r) || this._getDocument(),
          a = this._elementInfo.get(r);
        if (a) return i && (a.checkChildren = !0), a.subject;
        let c = { checkChildren: i, subject: new K(), rootNode: s };
        return (
          this._elementInfo.set(r, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(e) {
        let i = zt(e),
          r = this._elementInfo.get(i);
        r &&
          (r.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(r));
      }
      focusVia(e, i, r) {
        let s = zt(e),
          a = this._getDocument().activeElement;
        s === a
          ? this._getClosestElementsInfo(s).forEach(([c, l]) =>
              this._originChanged(c, i, l)
            )
          : (this._setOrigin(i), typeof s.focus == "function" && s.focus(r));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : e && this._isLastInteractionFromInputLabel(e)
              ? "mouse"
              : "program";
      }
      _shouldBeAttributedToTouch(e) {
        return (
          this._detectionMode === 1 ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, i) {
        e.classList.toggle("cdk-focused", !!i),
          e.classList.toggle("cdk-touch-focused", i === "touch"),
          e.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", i === "mouse"),
          e.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(e, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === "touch" && i),
            this._detectionMode === 0)
          ) {
            clearTimeout(this._originTimeoutId);
            let r = this._originFromTouchInteraction ? ac : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), r);
          }
        });
      }
      _onFocus(e, i) {
        let r = this._elementInfo.get(i),
          s = kt(e);
        !r ||
          (!r.checkChildren && i !== s) ||
          this._originChanged(i, this._getFocusOrigin(s), r);
      }
      _onBlur(e, i) {
        let r = this._elementInfo.get(i);
        !r ||
          (r.checkChildren &&
            e.relatedTarget instanceof Node &&
            i.contains(e.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(r, null));
      }
      _emitOrigin(e, i) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(i));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let i = e.rootNode,
          r = this._rootNodeFocusListenerCount.get(i) || 0;
        r ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, On),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                On
              );
          }),
          this._rootNodeFocusListenerCount.set(i, r + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(ft(this._stopInputModalityDetector))
              .subscribe((s) => {
                this._setOrigin(s, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let i = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let r = this._rootNodeFocusListenerCount.get(i);
          r > 1
            ? this._rootNodeFocusListenerCount.set(i, r - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                On
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                On
              ),
              this._rootNodeFocusListenerCount.delete(i));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, i, r) {
        this._setClasses(e, i),
          this._emitOrigin(r, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(e) {
        let i = [];
        return (
          this._elementInfo.forEach((r, s) => {
            (s === e || (r.checkChildren && s.contains(e))) && i.push([s, r]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: i, mostRecentModality: r } =
          this._inputModalityDetector;
        if (
          r !== "mouse" ||
          !i ||
          i === e ||
          (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
          e.disabled
        )
          return !1;
        let s = e.labels;
        if (s) {
          for (let a = 0; a < s.length; a++) if (s[a].contains(i)) return !0;
        }
        return !1;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(W), u(Q), u(Vu), u(H, 8), u(Yu, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
var oc = "cdk-high-contrast-black-on-white",
  rc = "cdk-high-contrast-white-on-black",
  Go = "cdk-high-contrast-active",
  dc = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._document = i),
          (this._breakpointSubscription = U(Mn)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return 0;
        let e = this._document.createElement("div");
        (e.style.backgroundColor = "rgb(1,2,3)"),
          (e.style.position = "absolute"),
          this._document.body.appendChild(e);
        let i = this._document.defaultView || window,
          r = i && i.getComputedStyle ? i.getComputedStyle(e) : null,
          s = ((r && r.backgroundColor) || "").replace(/ /g, "");
        switch ((e.remove(), s)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return 2;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return 1;
        }
        return 0;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let e = this._document.body.classList;
          e.remove(Go, oc, rc), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === 1 ? e.add(Go, oc) : i === 2 && e.add(Go, rc);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Q), u(H));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
var Ku = new V("cdk-dir-doc", { providedIn: "root", factory: Gu });
function Gu() {
  return U(H);
}
var Zu =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function qu(o) {
  let t = o?.toLowerCase() || "";
  return t === "auto" && typeof navigator < "u" && navigator?.language
    ? Zu.test(navigator.language)
      ? "rtl"
      : "ltr"
    : t === "rtl"
      ? "rtl"
      : "ltr";
}
var mc = (() => {
  let t = class t {
    constructor(e) {
      if (((this.value = "ltr"), (this.change = new Jt()), e)) {
        let i = e.body ? e.body.dir : null,
          r = e.documentElement ? e.documentElement.dir : null;
        this.value = qu(i || r || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Ku, 8));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var Qo = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = nt({ type: t })),
    (t.ɵinj = it({}));
  let o = t;
  return o;
})();
function Ju() {
  return !0;
}
var tm = new V("mat-sanity-checks", { providedIn: "root", factory: Ju }),
  ci = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._sanityChecks = i),
          (this._document = r),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return si()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[e];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(dc), u(tm, 8), u(H));
    }),
      (t.ɵmod = nt({ type: t })),
      (t.ɵinj = it({ imports: [Qo, Qo] }));
    let o = t;
    return o;
  })();
var er = class {
    constructor(t, n, e, i = !1) {
      (this._renderer = t),
        (this.element = n),
        (this.config = e),
        (this._animationForciblyDisabledThroughCss = i),
        (this.state = 3);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  hc = Te({ passive: !0, capture: !0 }),
  ir = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let n = kt(t);
          n &&
            this._events.get(t.type)?.forEach((e, i) => {
              (i === n || i.contains(n)) && e.forEach((r) => r.handleEvent(t));
            });
        });
    }
    addHandler(t, n, e, i) {
      let r = this._events.get(n);
      if (r) {
        let s = r.get(e);
        s ? s.add(i) : r.set(e, new Set([i]));
      } else
        this._events.set(n, new Map([[e, new Set([i])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(n, this._delegateEventHandler, hc);
          });
    }
    removeHandler(t, n, e) {
      let i = this._events.get(t);
      if (!i) return;
      let r = i.get(n);
      r &&
        (r.delete(e),
        r.size === 0 && i.delete(n),
        i.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, hc)));
    }
  },
  pc = { enterDuration: 225, exitDuration: 150 },
  em = 800,
  fc = Te({ passive: !0, capture: !0 }),
  bc = ["mousedown", "touchstart"],
  gc = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  ai = class ai {
    constructor(t, n, e, i) {
      (this._target = t),
        (this._ngZone = n),
        (this._platform = i),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        i.isBrowser && (this._containerElement = zt(e));
    }
    fadeInRipple(t, n, e = {}) {
      let i = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        r = g(g({}, pc), e.animation);
      e.centered && ((t = i.left + i.width / 2), (n = i.top + i.height / 2));
      let s = e.radius || im(t, n, i),
        a = t - i.left,
        c = n - i.top,
        l = r.enterDuration,
        d = document.createElement("div");
      d.classList.add("mat-ripple-element"),
        (d.style.left = `${a - s}px`),
        (d.style.top = `${c - s}px`),
        (d.style.height = `${s * 2}px`),
        (d.style.width = `${s * 2}px`),
        e.color != null && (d.style.backgroundColor = e.color),
        (d.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(d);
      let m = window.getComputedStyle(d),
        b = m.transitionProperty,
        _ = m.transitionDuration,
        h =
          b === "none" ||
          _ === "0s" ||
          _ === "0s, 0s" ||
          (i.width === 0 && i.height === 0),
        p = new er(this, d, e, h);
      (d.style.transform = "scale3d(1, 1, 1)"),
        (p.state = 0),
        e.persistent || (this._mostRecentTransientRipple = p);
      let C = null;
      return (
        !h &&
          (l || r.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let I = () => this._finishRippleTransition(p),
              j = () => this._destroyRipple(p);
            d.addEventListener("transitionend", I),
              d.addEventListener("transitioncancel", j),
              (C = { onTransitionEnd: I, onTransitionCancel: j });
          }),
        this._activeRipples.set(p, C),
        (h || !l) && this._finishRippleTransition(p),
        p
      );
    }
    fadeOutRipple(t) {
      if (t.state === 2 || t.state === 3) return;
      let n = t.element,
        e = g(g({}, pc), t.config.animation);
      (n.style.transitionDuration = `${e.exitDuration}ms`),
        (n.style.opacity = "0"),
        (t.state = 2),
        (t._animationForciblyDisabledThroughCss || !e.exitDuration) &&
          this._finishRippleTransition(t);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((t) => t.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((t) => {
        t.config.persistent || t.fadeOut();
      });
    }
    setupTriggerEvents(t) {
      let n = zt(t);
      !this._platform.isBrowser ||
        !n ||
        n === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = n),
        bc.forEach((e) => {
          ai._eventManager.addHandler(this._ngZone, e, n, this);
        }));
    }
    handleEvent(t) {
      t.type === "mousedown"
        ? this._onMousedown(t)
        : t.type === "touchstart"
          ? this._onTouchStart(t)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            gc.forEach((n) => {
              this._triggerElement.addEventListener(n, this, fc);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === 0
        ? this._startFadeOutTransition(t)
        : t.state === 2 && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let n = t === this._mostRecentTransientRipple,
        { persistent: e } = t.config;
      (t.state = 1), !e && (!n || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let n = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = 3),
        n !== null &&
          (t.element.removeEventListener("transitionend", n.onTransitionEnd),
          t.element.removeEventListener(
            "transitioncancel",
            n.onTransitionCancel
          )),
        t.element.remove();
    }
    _onMousedown(t) {
      let n = Zo(t),
        e =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + em;
      !this._target.rippleDisabled &&
        !n &&
        !e &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !qo(t)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let n = t.changedTouches;
        if (n)
          for (let e = 0; e < n.length; e++)
            this.fadeInRipple(
              n[e].clientX,
              n[e].clientY,
              this._target.rippleConfig
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((t) => {
          let n =
            t.state === 1 || (t.config.terminateOnPointerUp && t.state === 0);
          !t.config.persistent && n && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (bc.forEach((n) => ai._eventManager.removeHandler(n, t, this)),
        this._pointerUpEventsRegistered &&
          gc.forEach((n) => t.removeEventListener(n, this, fc)));
    }
  };
ai._eventManager = new ir();
var nr = ai;
function im(o, t, n) {
  let e = Math.max(Math.abs(o - n.left), Math.abs(o - n.right)),
    i = Math.max(Math.abs(t - n.top), Math.abs(t - n.bottom));
  return Math.sqrt(e * e + i * i);
}
var wc = new V("mat-ripple-global-options"),
  nm = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e && this.fadeOutAllNonPersistent(),
          (this._disabled = e),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(e) {
        (this._trigger = e), this._setupTriggerEventsIfEnabled();
      }
      constructor(e, i, r, s, a) {
        (this._elementRef = e),
          (this._animationMode = a),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = s || {}),
          (this._rippleRenderer = new nr(this, i, e, r));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: g(
            g(
              g({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {}
            ),
            this.animation
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(e, i = 0, r) {
        return typeof e == "number"
          ? this._rippleRenderer.fadeInRipple(
              e,
              i,
              g(g({}, this.rippleConfig), r)
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              g(g({}, this.rippleConfig), e)
            );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(z(rt), z(W), z(Q), z(wc, 8), z(yt, 8));
    }),
      (t.ɵdir = ut({
        type: t,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 2 && pe("mat-ripple-unbounded", r.unbounded);
        },
        inputs: {
          color: ["matRippleColor", "color"],
          unbounded: ["matRippleUnbounded", "unbounded"],
          centered: ["matRippleCentered", "centered"],
          radius: ["matRippleRadius", "radius"],
          animation: ["matRippleAnimation", "animation"],
          disabled: ["matRippleDisabled", "disabled"],
          trigger: ["matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
      }));
    let o = t;
    return o;
  })(),
  xc = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = nt({ type: t })),
      (t.ɵinj = it({ imports: [ci, ci] }));
    let o = t;
    return o;
  })();
var _c = { capture: !0 },
  vc = ["focus", "click", "mouseenter", "touchstart"],
  Jo = "mat-ripple-loader-uninitialized",
  tr = "mat-ripple-loader-class-name",
  yc = "mat-ripple-loader-centered",
  Pn = "mat-ripple-loader-disabled",
  Ec = (() => {
    let t = class t {
      constructor() {
        (this._document = U(H, { optional: !0 })),
          (this._animationMode = U(yt, { optional: !0 })),
          (this._globalRippleOptions = U(wc, { optional: !0 })),
          (this._platform = U(Q)),
          (this._ngZone = U(W)),
          (this._onInteraction = (e) => {
            if (!(e.target instanceof HTMLElement)) return;
            let r = e.target.closest(`[${Jo}]`);
            r && this.createRipple(r);
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let e of vc)
              this._document?.addEventListener(e, this._onInteraction, _c);
          });
      }
      ngOnDestroy() {
        for (let e of vc)
          this._document?.removeEventListener(e, this._onInteraction, _c);
      }
      configureRipple(e, i) {
        e.setAttribute(Jo, ""),
          (i.className || !e.hasAttribute(tr)) &&
            e.setAttribute(tr, i.className || ""),
          i.centered && e.setAttribute(yc, ""),
          i.disabled && e.setAttribute(Pn, "");
      }
      getRipple(e) {
        return e.matRipple ? e.matRipple : this.createRipple(e);
      }
      setDisabled(e, i) {
        let r = e.matRipple;
        if (r) {
          r.disabled = i;
          return;
        }
        i ? e.setAttribute(Pn, "") : e.removeAttribute(Pn);
      }
      createRipple(e) {
        if (!this._document) return;
        e.querySelector(".mat-ripple")?.remove();
        let i = this._document.createElement("span");
        i.classList.add("mat-ripple", e.getAttribute(tr)), e.append(i);
        let r = new nm(
          new rt(i),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0
        );
        return (
          (r._isInitialized = !0),
          (r.trigger = e),
          (r.centered = e.hasAttribute(yc)),
          (r.disabled = e.hasAttribute(Pn)),
          this.attachRipple(e, r),
          r
        );
      }
      attachRipple(e, i) {
        e.removeAttribute(Jo), (e.matRipple = i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
var om = ["mat-button", ""],
  rm = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  sm = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ];
var am = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    { attribute: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab"] },
    {
      attribute: "mat-mini-fab",
      mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  cm = (() => {
    let t = class t {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(e) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, e);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(e) {
        (this._disableRipple = e), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._updateRippleDisabled();
      }
      constructor(e, i, r, s) {
        (this._elementRef = e),
          (this._platform = i),
          (this._ngZone = r),
          (this._animationMode = s),
          (this._focusMonitor = U(lc)),
          (this._rippleLoader = U(Ec)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1),
          this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
            className: "mat-mdc-button-ripple",
          });
        let a = this._elementRef.nativeElement,
          c = a.classList;
        for (let { attribute: l, mdcClasses: d } of am)
          a.hasAttribute(l) && c.add(...d);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      focus(e = "program", i) {
        e
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, i)
          : this._elementRef.nativeElement.focus(i);
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled
        );
      }
    };
    (t.ɵfac = function (i) {
      Br();
    }),
      (t.ɵdir = ut({
        type: t,
        inputs: {
          color: "color",
          disableRipple: ["disableRipple", "disableRipple", _e],
          disabled: ["disabled", "disabled", _e],
        },
        features: [me],
      }));
    let o = t;
    return o;
  })();
var Sc = (() => {
  let t = class t extends cm {
    constructor(e, i, r, s) {
      super(e, i, r, s);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(z(rt), z(Q), z(W), z(yt, 8));
  }),
    (t.ɵcmp = bt({
      type: t,
      selectors: [
        ["button", "mat-button", ""],
        ["button", "mat-raised-button", ""],
        ["button", "mat-flat-button", ""],
        ["button", "mat-stroked-button", ""],
      ],
      hostVars: 9,
      hostBindings: function (i, r) {
        i & 2 &&
          (he("disabled", r.disabled || null),
          zr(r.color ? "mat-" + r.color : ""),
          pe("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
            "mat-unthemed",
            !r.color
          )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      features: [te],
      attrs: om,
      ngContentSelectors: sm,
      decls: 7,
      vars: 4,
      consts: [
        [1, "mat-mdc-button-persistent-ripple"],
        [1, "mdc-button__label"],
        [1, "mat-mdc-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (i, r) {
        i & 1 &&
          (wi(rm),
          wt(0, "span", 0),
          ge(1),
          tt(2, "span", 1),
          ge(3, 1),
          q(),
          ge(4, 2),
          wt(5, "span", 2)(6, "span", 3)),
          i & 2 &&
            pe("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab);
      },
      styles: [
        '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);--mdc-text-button-container-shape:4px;--mdc-text-button-container-height:36px;--mdc-text-button-keep-touch-target:false}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button[disabled]{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-unelevated-button{height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);--mdc-filled-button-container-shape:4px;--mdc-filled-button-container-elevation:0;--mdc-filled-button-disabled-container-elevation:0;--mdc-filled-button-focus-container-elevation:0;--mdc-filled-button-hover-container-elevation:0;--mdc-filled-button-keep-touch-target:false;--mdc-filled-button-pressed-container-elevation:0}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button[disabled]{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-raised-button{height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);--mdc-protected-button-container-shape:4px;--mdc-protected-button-keep-touch-target:false}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button[disabled]{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled][disabled]{box-shadow:none}.mat-mdc-outlined-button{height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);--mdc-outlined-button-keep-touch-target:false;--mdc-outlined-button-outline-width:1px;--mdc-outlined-button-container-shape:4px}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button .mat-mdc-button-touch-target,.mat-mdc-unelevated-button .mat-mdc-button-touch-target,.mat-mdc-raised-button .mat-mdc-button-touch-target,.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .mat-mdc-button>.mat-icon,.mat-mdc-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}.mat-mdc-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon,.mat-mdc-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem;margin-left:-4px;margin-right:8px}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon,.mat-mdc-unelevated-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-raised-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-outlined-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
        ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let o = t;
  return o;
})();
var kc = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = nt({ type: t })),
    (t.ɵinj = it({ imports: [ci, xc, ci] }));
  let o = t;
  return o;
})();
var li = class {
    attach(t) {
      return (this._attachedHost = t), t.attach(this);
    }
    detach() {
      let t = this._attachedHost;
      t != null && ((this._attachedHost = null), t.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(t) {
      this._attachedHost = t;
    }
  },
  Re = class extends li {
    constructor(t, n, e, i, r) {
      super(),
        (this.component = t),
        (this.viewContainerRef = n),
        (this.injector = e),
        (this.componentFactoryResolver = i),
        (this.projectableNodes = r);
    }
  },
  Me = class extends li {
    constructor(t, n, e, i) {
      super(),
        (this.templateRef = t),
        (this.viewContainerRef = n),
        (this.context = e),
        (this.injector = i);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(t, n = this.context) {
      return (this.context = n), super.attach(t);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  or = class extends li {
    constructor(t) {
      super(), (this.element = t instanceof rt ? t.nativeElement : t);
    }
  },
  Oe = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(t) {
      if (t instanceof Re)
        return (this._attachedPortal = t), this.attachComponentPortal(t);
      if (t instanceof Me)
        return (this._attachedPortal = t), this.attachTemplatePortal(t);
      if (this.attachDomPortal && t instanceof or)
        return (this._attachedPortal = t), this.attachDomPortal(t);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(t) {
      this._disposeFn = t;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var Fn = class extends Oe {
  constructor(t, n, e, i, r) {
    super(),
      (this.outletElement = t),
      (this._componentFactoryResolver = n),
      (this._appRef = e),
      (this._defaultInjector = i),
      (this.attachDomPortal = (s) => {
        this._document;
        let a = s.element;
        a.parentNode;
        let c = this._document.createComment("dom-portal");
        a.parentNode.insertBefore(c, a),
          this.outletElement.appendChild(a),
          (this._attachedPortal = s),
          super.setDisposeFn(() => {
            c.parentNode && c.parentNode.replaceChild(a, c);
          });
      }),
      (this._document = r);
  }
  attachComponentPortal(t) {
    let e = (
        t.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(t.component),
      i;
    return (
      t.viewContainerRef
        ? ((i = t.viewContainerRef.createComponent(
            e,
            t.viewContainerRef.length,
            t.injector || t.viewContainerRef.injector,
            t.projectableNodes || void 0
          )),
          this.setDisposeFn(() => i.destroy()))
        : ((i = e.create(t.injector || this._defaultInjector || jt.NULL)),
          this._appRef.attachView(i.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(i.hostView),
              i.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(i)),
      (this._attachedPortal = t),
      i
    );
  }
  attachTemplatePortal(t) {
    let n = t.viewContainerRef,
      e = n.createEmbeddedView(t.templateRef, t.context, {
        injector: t.injector,
      });
    return (
      e.rootNodes.forEach((i) => this.outletElement.appendChild(i)),
      e.detectChanges(),
      this.setDisposeFn(() => {
        let i = n.indexOf(e);
        i !== -1 && n.remove(i);
      }),
      (this._attachedPortal = t),
      e
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(t) {
    return t.hostView.rootNodes[0];
  }
};
var Nn = (() => {
  let t = class t extends Oe {
    constructor(e, i, r) {
      super(),
        (this._componentFactoryResolver = e),
        (this._viewContainerRef = i),
        (this._isInitialized = !1),
        (this.attached = new Jt()),
        (this.attachDomPortal = (s) => {
          this._document;
          let a = s.element;
          a.parentNode;
          let c = this._document.createComment("dom-portal");
          s.setAttachedHost(this),
            a.parentNode.insertBefore(c, a),
            this._getRootNode().appendChild(a),
            (this._attachedPortal = s),
            super.setDisposeFn(() => {
              c.parentNode && c.parentNode.replaceChild(a, c);
            });
        }),
        (this._document = r);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(e) {
      (this.hasAttached() && !e && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        e && super.attach(e),
        (this._attachedPortal = e || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(e) {
      e.setAttachedHost(this);
      let i =
          e.viewContainerRef != null
            ? e.viewContainerRef
            : this._viewContainerRef,
        s = (
          e.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(e.component),
        a = i.createComponent(
          s,
          i.length,
          e.injector || i.injector,
          e.projectableNodes || void 0
        );
      return (
        i !== this._viewContainerRef &&
          this._getRootNode().appendChild(a.hostView.rootNodes[0]),
        super.setDisposeFn(() => a.destroy()),
        (this._attachedPortal = e),
        (this._attachedRef = a),
        this.attached.emit(a),
        a
      );
    }
    attachTemplatePortal(e) {
      e.setAttachedHost(this);
      let i = this._viewContainerRef.createEmbeddedView(
        e.templateRef,
        e.context,
        { injector: e.injector }
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = e),
        (this._attachedRef = i),
        this.attached.emit(i),
        i
      );
    }
    _getRootNode() {
      let e = this._viewContainerRef.element.nativeElement;
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(z(bi), z(vi), z(H));
  }),
    (t.ɵdir = ut({
      type: t,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: ["cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      features: [te],
    }));
  let o = t;
  return o;
})();
var rr = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = nt({ type: t })),
    (t.ɵinj = it({}));
  let o = t;
  return o;
})();
var um = 20,
  Cc = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._ngZone = e),
          (this._platform = i),
          (this._scrolled = new K()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = r);
      }
      register(e) {
        this.scrollContainers.has(e) ||
          this.scrollContainers.set(
            e,
            e.elementScrolled().subscribe(() => this._scrolled.next(e))
          );
      }
      deregister(e) {
        let i = this.scrollContainers.get(e);
        i && (i.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = um) {
        return this._platform.isBrowser
          ? new Nt((i) => {
              this._globalSubscription || this._addGlobalListener();
              let r =
                e > 0
                  ? this._scrolled.pipe(Bn(e)).subscribe(i)
                  : this._scrolled.subscribe(i);
              return (
                this._scrolledCount++,
                () => {
                  r.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : T();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((e, i) => this.deregister(i)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, i) {
        let r = this.getAncestorScrollContainers(e);
        return this.scrolled(i).pipe(dt((s) => !s || r.indexOf(s) > -1));
      }
      getAncestorScrollContainers(e) {
        let i = [];
        return (
          this.scrollContainers.forEach((r, s) => {
            this._scrollableContainsElement(s, e) && i.push(s);
          }),
          i
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(e, i) {
        let r = zt(i),
          s = e.getElementRef().nativeElement;
        do if (r == s) return !0;
        while ((r = r.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let e = this._getWindow();
          return Tr(e.document, "scroll").subscribe(() =>
            this._scrolled.next()
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(W), u(Q), u(H, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
var mm = 20,
  sr = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._platform = e),
          (this._change = new K()),
          (this._changeListener = (s) => {
            this._change.next(s);
          }),
          (this._document = r),
          i.runOutsideAngular(() => {
            if (e.isBrowser) {
              let s = this._getWindow();
              s.addEventListener("resize", this._changeListener),
                s.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let e = this._getWindow();
          e.removeEventListener("resize", this._changeListener),
            e.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let e = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), e;
      }
      getViewportRect() {
        let e = this.getViewportScrollPosition(),
          { width: i, height: r } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + r,
          right: e.left + i,
          height: r,
          width: i,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          i = this._getWindow(),
          r = e.documentElement,
          s = r.getBoundingClientRect(),
          a = -s.top || e.body.scrollTop || i.scrollY || r.scrollTop || 0,
          c = -s.left || e.body.scrollLeft || i.scrollX || r.scrollLeft || 0;
        return { top: a, left: c };
      }
      change(e = mm) {
        return e > 0 ? this._change.pipe(Bn(e)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let e = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: e.innerWidth, height: e.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Q), u(W), u(H, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
var Ac = Ja(),
  ar = class {
    constructor(t, n) {
      (this._viewportRuler = t),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = n);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let t = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = t.style.left || ""),
          (this._previousHTMLStyles.top = t.style.top || ""),
          (t.style.left = J(-this._previousScrollPosition.left)),
          (t.style.top = J(-this._previousScrollPosition.top)),
          t.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let t = this._document.documentElement,
          n = this._document.body,
          e = t.style,
          i = n.style,
          r = e.scrollBehavior || "",
          s = i.scrollBehavior || "";
        (this._isEnabled = !1),
          (e.left = this._previousHTMLStyles.left),
          (e.top = this._previousHTMLStyles.top),
          t.classList.remove("cdk-global-scrollblock"),
          Ac && (e.scrollBehavior = i.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top
          ),
          Ac && ((e.scrollBehavior = r), (i.scrollBehavior = s));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock"
        ) ||
        this._isEnabled
      )
        return !1;
      let n = this._document.body,
        e = this._viewportRuler.getViewportSize();
      return n.scrollHeight > e.height || n.scrollWidth > e.width;
    }
  };
var cr = class {
    constructor(t, n, e, i) {
      (this._scrollDispatcher = t),
        (this._ngZone = n),
        (this._viewportRuler = e),
        (this._config = i),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (this._scrollSubscription) return;
      let t = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          dt(
            (n) =>
              !n ||
              !this._overlayRef.overlayElement.contains(
                n.getElementRef().nativeElement
              )
          )
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = t.subscribe(() => {
            let n = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(n - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = t.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  jn = class {
    enable() {}
    disable() {}
    attach() {}
  };
function lr(o, t) {
  return t.some((n) => {
    let e = o.bottom < n.top,
      i = o.top > n.bottom,
      r = o.right < n.left,
      s = o.left > n.right;
    return e || i || r || s;
  });
}
function Tc(o, t) {
  return t.some((n) => {
    let e = o.top < n.top,
      i = o.bottom > n.bottom,
      r = o.left < n.left,
      s = o.right > n.right;
    return e || i || r || s;
  });
}
var dr = class {
    constructor(t, n, e, i) {
      (this._scrollDispatcher = t),
        (this._viewportRuler = n),
        (this._ngZone = e),
        (this._config = i),
        (this._scrollSubscription = null);
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (!this._scrollSubscription) {
        let t = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(t)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let n = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: e, height: i } = this._viewportRuler.getViewportSize();
              lr(n, [
                { width: e, height: i, bottom: i, right: e, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  fm = (() => {
    let t = class t {
      constructor(e, i, r, s) {
        (this._scrollDispatcher = e),
          (this._viewportRuler = i),
          (this._ngZone = r),
          (this.noop = () => new jn()),
          (this.close = (a) =>
            new cr(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              a
            )),
          (this.block = () => new ar(this._viewportRuler, this._document)),
          (this.reposition = (a) =>
            new dr(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              a
            )),
          (this._document = s);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Cc), u(sr), u(W), u(H));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })(),
  di = class {
    constructor(t) {
      if (
        ((this.scrollStrategy = new jn()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        t)
      ) {
        let n = Object.keys(t);
        for (let e of n) t[e] !== void 0 && (this[e] = t[e]);
      }
    }
  };
var ur = class {
  constructor(t, n) {
    (this.connectionPair = t), (this.scrollableViewProperties = n);
  }
};
var Oc = (() => {
    let t = class t {
      constructor(e) {
        (this._attachedOverlays = []), (this._document = e);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(e) {
        this.remove(e), this._attachedOverlays.push(e);
      }
      remove(e) {
        let i = this._attachedOverlays.indexOf(e);
        i > -1 && this._attachedOverlays.splice(i, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(H));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })(),
  bm = (() => {
    let t = class t extends Oc {
      constructor(e, i) {
        super(e),
          (this._ngZone = i),
          (this._keydownListener = (r) => {
            let s = this._attachedOverlays;
            for (let a = s.length - 1; a > -1; a--)
              if (s[a]._keydownEvents.observers.length > 0) {
                let c = s[a]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => c.next(r)) : c.next(r);
                break;
              }
          });
      }
      add(e) {
        super.add(e),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener
                  )
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener
          ),
          (this._isAttached = !1));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(H), u(W, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })(),
  gm = (() => {
    let t = class t extends Oc {
      constructor(e, i, r) {
        super(e),
          (this._platform = i),
          (this._ngZone = r),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (s) => {
            this._pointerDownEventTarget = kt(s);
          }),
          (this._clickListener = (s) => {
            let a = kt(s),
              c =
                s.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : a;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let d = l.length - 1; d > -1; d--) {
              let m = l[d];
              if (
                m._outsidePointerEvents.observers.length < 1 ||
                !m.hasAttached()
              )
                continue;
              if (m.overlayElement.contains(a) || m.overlayElement.contains(c))
                break;
              let b = m._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => b.next(s)) : b.next(s);
            }
          });
      }
      add(e) {
        if ((super.add(e), !this._isAttached)) {
          let i = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(i))
            : this._addEventListeners(i),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = i.style.cursor),
              (i.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let e = this._document.body;
          e.removeEventListener("pointerdown", this._pointerDownListener, !0),
            e.removeEventListener("click", this._clickListener, !0),
            e.removeEventListener("auxclick", this._clickListener, !0),
            e.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((e.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(e) {
        e.addEventListener("pointerdown", this._pointerDownListener, !0),
          e.addEventListener("click", this._clickListener, !0),
          e.addEventListener("auxclick", this._clickListener, !0),
          e.addEventListener("contextmenu", this._clickListener, !0);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(H), u(Q), u(W, 8));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })(),
  Pc = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = i), (this._document = e);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let e = "cdk-overlay-container";
        if (this._platform.isBrowser || si()) {
          let r = this._document.querySelectorAll(
            `.${e}[platform="server"], .${e}[platform="test"]`
          );
          for (let s = 0; s < r.length; s++) r[s].remove();
        }
        let i = this._document.createElement("div");
        i.classList.add(e),
          si()
            ? i.setAttribute("platform", "test")
            : this._platform.isBrowser || i.setAttribute("platform", "server"),
          this._document.body.appendChild(i),
          (this._containerElement = i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(H), u(Q));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })(),
  mr = class {
    constructor(t, n, e, i, r, s, a, c, l, d = !1) {
      (this._portalOutlet = t),
        (this._host = n),
        (this._pane = e),
        (this._config = i),
        (this._ngZone = r),
        (this._keyboardDispatcher = s),
        (this._document = a),
        (this._location = c),
        (this._outsideClickDispatcher = l),
        (this._animationsDisabled = d),
        (this._backdropElement = null),
        (this._backdropClick = new K()),
        (this._attachments = new K()),
        (this._detachments = new K()),
        (this._locationChanges = je.EMPTY),
        (this._backdropClickHandler = (m) => this._backdropClick.next(m)),
        (this._backdropTransitionendHandler = (m) => {
          this._disposeBackdrop(m.target);
        }),
        (this._keydownEvents = new K()),
        (this._outsidePointerEvents = new K()),
        i.scrollStrategy &&
          ((this._scrollStrategy = i.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = i.positionStrategy);
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(t) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let n = this._portalOutlet.attach(t);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._ngZone.onStable.pipe(Et(1)).subscribe(() => {
          this.hasAttached() && this.updatePosition();
        }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose()
          )),
        this._outsideClickDispatcher.add(this),
        typeof n?.onDestroy == "function" &&
          n.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach())
              );
          }),
        n
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let t = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenStable(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        t
      );
    }
    dispose() {
      let t = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        (this._previousHostParent = this._pane = this._host = null),
        t && this._detachments.next(),
        this._detachments.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(t) {
      t !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = t),
        this.hasAttached() && (t.attach(this), this.updatePosition()));
    }
    updateSize(t) {
      (this._config = g(g({}, this._config), t)), this._updateElementSize();
    }
    setDirection(t) {
      (this._config = y(g({}, this._config), { direction: t })),
        this._updateElementDirection();
    }
    addPanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !0);
    }
    removePanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !1);
    }
    getDirection() {
      let t = this._config.direction;
      return t ? (typeof t == "string" ? t : t.value) : "ltr";
    }
    updateScrollStrategy(t) {
      t !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = t),
        this.hasAttached() && (t.attach(this), t.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let t = this._pane.style;
      (t.width = J(this._config.width)),
        (t.height = J(this._config.height)),
        (t.minWidth = J(this._config.minWidth)),
        (t.minHeight = J(this._config.minHeight)),
        (t.maxWidth = J(this._config.maxWidth)),
        (t.maxHeight = J(this._config.maxHeight));
    }
    _togglePointerEvents(t) {
      this._pane.style.pointerEvents = t ? "" : "none";
    }
    _attachBackdrop() {
      let t = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation"
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(t);
              });
            })
          : this._backdropElement.classList.add(t);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let t = this._backdropElement;
      if (t) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(t);
          return;
        }
        t.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            t.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler
            );
          }),
          (t.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(t);
            }, 500)
          ));
      }
    }
    _toggleClasses(t, n, e) {
      let i = Ie(n || []).filter((r) => !!r);
      i.length && (e ? t.classList.add(...i) : t.classList.remove(...i));
    }
    _detachContentWhenStable() {
      this._ngZone.runOutsideAngular(() => {
        let t = this._ngZone.onStable
          .pipe(ft($t(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              t.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let t = this._scrollStrategy;
      t && (t.disable(), t.detach && t.detach());
    }
    _disposeBackdrop(t) {
      t &&
        (t.removeEventListener("click", this._backdropClickHandler),
        t.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler
        ),
        t.remove(),
        this._backdropElement === t && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  Ic = "cdk-overlay-connected-position-bounding-box",
  _m = /([A-Za-z%]+)$/,
  hr = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(t, n, e, i, r) {
      (this._viewportRuler = n),
        (this._document = e),
        (this._platform = i),
        (this._overlayContainer = r),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new K()),
        (this._resizeSubscription = je.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(t);
    }
    attach(t) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        t.hostElement.classList.add(Ic),
        (this._overlayRef = t),
        (this._boundingBox = t.hostElement),
        (this._pane = t.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let t = this._originRect,
        n = this._overlayRect,
        e = this._viewportRect,
        i = this._containerRect,
        r = [],
        s;
      for (let a of this._preferredPositions) {
        let c = this._getOriginPoint(t, i, a),
          l = this._getOverlayPoint(c, n, a),
          d = this._getOverlayFit(l, n, e, a);
        if (d.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(a, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(d, l, e)) {
          r.push({
            position: a,
            origin: c,
            overlayRect: n,
            boundingBoxRect: this._calculateBoundingBoxRect(c, a),
          });
          continue;
        }
        (!s || s.overlayFit.visibleArea < d.visibleArea) &&
          (s = {
            overlayFit: d,
            overlayPoint: l,
            originPoint: c,
            position: a,
            overlayRect: n,
          });
      }
      if (r.length) {
        let a = null,
          c = -1;
        for (let l of r) {
          let d =
            l.boundingBoxRect.width *
            l.boundingBoxRect.height *
            (l.position.weight || 1);
          d > c && ((c = d), (a = l));
        }
        (this._isPushed = !1), this._applyPosition(a.position, a.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(s.position, s.originPoint);
        return;
      }
      this._applyPosition(s.position, s.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          de(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(Ic),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let t = this._lastPosition;
      if (t) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let n = this._getOriginPoint(this._originRect, this._containerRect, t);
        this._applyPosition(t, n);
      } else this.apply();
    }
    withScrollableContainers(t) {
      return (this._scrollables = t), this;
    }
    withPositions(t) {
      return (
        (this._preferredPositions = t),
        t.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(t) {
      return (this._viewportMargin = t), this;
    }
    withFlexibleDimensions(t = !0) {
      return (this._hasFlexibleDimensions = t), this;
    }
    withGrowAfterOpen(t = !0) {
      return (this._growAfterOpen = t), this;
    }
    withPush(t = !0) {
      return (this._canPush = t), this;
    }
    withLockedPosition(t = !0) {
      return (this._positionLocked = t), this;
    }
    setOrigin(t) {
      return (this._origin = t), this;
    }
    withDefaultOffsetX(t) {
      return (this._offsetX = t), this;
    }
    withDefaultOffsetY(t) {
      return (this._offsetY = t), this;
    }
    withTransformOriginOn(t) {
      return (this._transformOriginSelector = t), this;
    }
    _getOriginPoint(t, n, e) {
      let i;
      if (e.originX == "center") i = t.left + t.width / 2;
      else {
        let s = this._isRtl() ? t.right : t.left,
          a = this._isRtl() ? t.left : t.right;
        i = e.originX == "start" ? s : a;
      }
      n.left < 0 && (i -= n.left);
      let r;
      return (
        e.originY == "center"
          ? (r = t.top + t.height / 2)
          : (r = e.originY == "top" ? t.top : t.bottom),
        n.top < 0 && (r -= n.top),
        { x: i, y: r }
      );
    }
    _getOverlayPoint(t, n, e) {
      let i;
      e.overlayX == "center"
        ? (i = -n.width / 2)
        : e.overlayX === "start"
          ? (i = this._isRtl() ? -n.width : 0)
          : (i = this._isRtl() ? 0 : -n.width);
      let r;
      return (
        e.overlayY == "center"
          ? (r = -n.height / 2)
          : (r = e.overlayY == "top" ? 0 : -n.height),
        { x: t.x + i, y: t.y + r }
      );
    }
    _getOverlayFit(t, n, e, i) {
      let r = Rc(n),
        { x: s, y: a } = t,
        c = this._getOffset(i, "x"),
        l = this._getOffset(i, "y");
      c && (s += c), l && (a += l);
      let d = 0 - s,
        m = s + r.width - e.width,
        b = 0 - a,
        _ = a + r.height - e.height,
        h = this._subtractOverflows(r.width, d, m),
        p = this._subtractOverflows(r.height, b, _),
        C = h * p;
      return {
        visibleArea: C,
        isCompletelyWithinViewport: r.width * r.height === C,
        fitsInViewportVertically: p === r.height,
        fitsInViewportHorizontally: h == r.width,
      };
    }
    _canFitWithFlexibleDimensions(t, n, e) {
      if (this._hasFlexibleDimensions) {
        let i = e.bottom - n.y,
          r = e.right - n.x,
          s = Dc(this._overlayRef.getConfig().minHeight),
          a = Dc(this._overlayRef.getConfig().minWidth),
          c = t.fitsInViewportVertically || (s != null && s <= i),
          l = t.fitsInViewportHorizontally || (a != null && a <= r);
        return c && l;
      }
      return !1;
    }
    _pushOverlayOnScreen(t, n, e) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: t.x + this._previousPushAmount.x,
          y: t.y + this._previousPushAmount.y,
        };
      let i = Rc(n),
        r = this._viewportRect,
        s = Math.max(t.x + i.width - r.width, 0),
        a = Math.max(t.y + i.height - r.height, 0),
        c = Math.max(r.top - e.top - t.y, 0),
        l = Math.max(r.left - e.left - t.x, 0),
        d = 0,
        m = 0;
      return (
        i.width <= r.width
          ? (d = l || -s)
          : (d = t.x < this._viewportMargin ? r.left - e.left - t.x : 0),
        i.height <= r.height
          ? (m = c || -a)
          : (m = t.y < this._viewportMargin ? r.top - e.top - t.y : 0),
        (this._previousPushAmount = { x: d, y: m }),
        { x: t.x + d, y: t.y + m }
      );
    }
    _applyPosition(t, n) {
      if (
        (this._setTransformOrigin(t),
        this._setOverlayElementStyles(n, t),
        this._setBoundingBoxStyles(n, t),
        t.panelClass && this._addPanelClasses(t.panelClass),
        (this._lastPosition = t),
        this._positionChanges.observers.length)
      ) {
        let e = this._getScrollVisibility(),
          i = new ur(t, e);
        this._positionChanges.next(i);
      }
      this._isInitialRender = !1;
    }
    _setTransformOrigin(t) {
      if (!this._transformOriginSelector) return;
      let n = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        e,
        i = t.overlayY;
      t.overlayX === "center"
        ? (e = "center")
        : this._isRtl()
          ? (e = t.overlayX === "start" ? "right" : "left")
          : (e = t.overlayX === "start" ? "left" : "right");
      for (let r = 0; r < n.length; r++)
        n[r].style.transformOrigin = `${e} ${i}`;
    }
    _calculateBoundingBoxRect(t, n) {
      let e = this._viewportRect,
        i = this._isRtl(),
        r,
        s,
        a;
      if (n.overlayY === "top")
        (s = t.y), (r = e.height - s + this._viewportMargin);
      else if (n.overlayY === "bottom")
        (a = e.height - t.y + this._viewportMargin * 2),
          (r = e.height - a + this._viewportMargin);
      else {
        let _ = Math.min(e.bottom - t.y + e.top, t.y),
          h = this._lastBoundingBoxSize.height;
        (r = _ * 2),
          (s = t.y - _),
          r > h &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (s = t.y - h / 2);
      }
      let c = (n.overlayX === "start" && !i) || (n.overlayX === "end" && i),
        l = (n.overlayX === "end" && !i) || (n.overlayX === "start" && i),
        d,
        m,
        b;
      if (l)
        (b = e.width - t.x + this._viewportMargin),
          (d = t.x - this._viewportMargin);
      else if (c) (m = t.x), (d = e.right - t.x);
      else {
        let _ = Math.min(e.right - t.x + e.left, t.x),
          h = this._lastBoundingBoxSize.width;
        (d = _ * 2),
          (m = t.x - _),
          d > h &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (m = t.x - h / 2);
      }
      return { top: s, left: m, bottom: a, right: b, width: d, height: r };
    }
    _setBoundingBoxStyles(t, n) {
      let e = this._calculateBoundingBoxRect(t, n);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((e.height = Math.min(e.height, this._lastBoundingBoxSize.height)),
        (e.width = Math.min(e.width, this._lastBoundingBoxSize.width)));
      let i = {};
      if (this._hasExactPosition())
        (i.top = i.left = "0"),
          (i.bottom = i.right = i.maxHeight = i.maxWidth = ""),
          (i.width = i.height = "100%");
      else {
        let r = this._overlayRef.getConfig().maxHeight,
          s = this._overlayRef.getConfig().maxWidth;
        (i.height = J(e.height)),
          (i.top = J(e.top)),
          (i.bottom = J(e.bottom)),
          (i.width = J(e.width)),
          (i.left = J(e.left)),
          (i.right = J(e.right)),
          n.overlayX === "center"
            ? (i.alignItems = "center")
            : (i.alignItems = n.overlayX === "end" ? "flex-end" : "flex-start"),
          n.overlayY === "center"
            ? (i.justifyContent = "center")
            : (i.justifyContent =
                n.overlayY === "bottom" ? "flex-end" : "flex-start"),
          r && (i.maxHeight = J(r)),
          s && (i.maxWidth = J(s));
      }
      (this._lastBoundingBoxSize = e), de(this._boundingBox.style, i);
    }
    _resetBoundingBoxStyles() {
      de(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      de(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(t, n) {
      let e = {},
        i = this._hasExactPosition(),
        r = this._hasFlexibleDimensions,
        s = this._overlayRef.getConfig();
      if (i) {
        let d = this._viewportRuler.getViewportScrollPosition();
        de(e, this._getExactOverlayY(n, t, d)),
          de(e, this._getExactOverlayX(n, t, d));
      } else e.position = "static";
      let a = "",
        c = this._getOffset(n, "x"),
        l = this._getOffset(n, "y");
      c && (a += `translateX(${c}px) `),
        l && (a += `translateY(${l}px)`),
        (e.transform = a.trim()),
        s.maxHeight &&
          (i ? (e.maxHeight = J(s.maxHeight)) : r && (e.maxHeight = "")),
        s.maxWidth &&
          (i ? (e.maxWidth = J(s.maxWidth)) : r && (e.maxWidth = "")),
        de(this._pane.style, e);
    }
    _getExactOverlayY(t, n, e) {
      let i = { top: "", bottom: "" },
        r = this._getOverlayPoint(n, this._overlayRect, t);
      if (
        (this._isPushed &&
          (r = this._pushOverlayOnScreen(r, this._overlayRect, e)),
        t.overlayY === "bottom")
      ) {
        let s = this._document.documentElement.clientHeight;
        i.bottom = `${s - (r.y + this._overlayRect.height)}px`;
      } else i.top = J(r.y);
      return i;
    }
    _getExactOverlayX(t, n, e) {
      let i = { left: "", right: "" },
        r = this._getOverlayPoint(n, this._overlayRect, t);
      this._isPushed &&
        (r = this._pushOverlayOnScreen(r, this._overlayRect, e));
      let s;
      if (
        (this._isRtl()
          ? (s = t.overlayX === "end" ? "left" : "right")
          : (s = t.overlayX === "end" ? "right" : "left"),
        s === "right")
      ) {
        let a = this._document.documentElement.clientWidth;
        i.right = `${a - (r.x + this._overlayRect.width)}px`;
      } else i.left = J(r.x);
      return i;
    }
    _getScrollVisibility() {
      let t = this._getOriginRect(),
        n = this._pane.getBoundingClientRect(),
        e = this._scrollables.map((i) =>
          i.getElementRef().nativeElement.getBoundingClientRect()
        );
      return {
        isOriginClipped: Tc(t, e),
        isOriginOutsideView: lr(t, e),
        isOverlayClipped: Tc(n, e),
        isOverlayOutsideView: lr(n, e),
      };
    }
    _subtractOverflows(t, ...n) {
      return n.reduce((e, i) => e - Math.max(i, 0), t);
    }
    _getNarrowedViewportRect() {
      let t = this._document.documentElement.clientWidth,
        n = this._document.documentElement.clientHeight,
        e = this._viewportRuler.getViewportScrollPosition();
      return {
        top: e.top + this._viewportMargin,
        left: e.left + this._viewportMargin,
        right: e.left + t - this._viewportMargin,
        bottom: e.top + n - this._viewportMargin,
        width: t - 2 * this._viewportMargin,
        height: n - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(t, n) {
      return n === "x"
        ? t.offsetX == null
          ? this._offsetX
          : t.offsetX
        : t.offsetY == null
          ? this._offsetY
          : t.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(t) {
      this._pane &&
        Ie(t).forEach((n) => {
          n !== "" &&
            this._appliedPanelClasses.indexOf(n) === -1 &&
            (this._appliedPanelClasses.push(n), this._pane.classList.add(n));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((t) => {
          this._pane.classList.remove(t);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let t = this._origin;
      if (t instanceof rt) return t.nativeElement.getBoundingClientRect();
      if (t instanceof Element) return t.getBoundingClientRect();
      let n = t.width || 0,
        e = t.height || 0;
      return {
        top: t.y,
        bottom: t.y + e,
        left: t.x,
        right: t.x + n,
        height: e,
        width: n,
      };
    }
  };
function de(o, t) {
  for (let n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
  return o;
}
function Dc(o) {
  if (typeof o != "number" && o != null) {
    let [t, n] = o.split(_m);
    return !n || n === "px" ? parseFloat(t) : null;
  }
  return o || null;
}
function Rc(o) {
  return {
    top: Math.floor(o.top),
    right: Math.floor(o.right),
    bottom: Math.floor(o.bottom),
    left: Math.floor(o.left),
    width: Math.floor(o.width),
    height: Math.floor(o.height),
  };
}
var Mc = "cdk-global-overlay-wrapper",
  pr = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(t) {
      let n = t.getConfig();
      (this._overlayRef = t),
        this._width && !n.width && t.updateSize({ width: this._width }),
        this._height && !n.height && t.updateSize({ height: this._height }),
        t.hostElement.classList.add(Mc),
        (this._isDisposed = !1);
    }
    top(t = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = t),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(t = "") {
      return (this._xOffset = t), (this._xPosition = "left"), this;
    }
    bottom(t = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = t),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(t = "") {
      return (this._xOffset = t), (this._xPosition = "right"), this;
    }
    start(t = "") {
      return (this._xOffset = t), (this._xPosition = "start"), this;
    }
    end(t = "") {
      return (this._xOffset = t), (this._xPosition = "end"), this;
    }
    width(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: t })
          : (this._width = t),
        this
      );
    }
    height(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: t })
          : (this._height = t),
        this
      );
    }
    centerHorizontally(t = "") {
      return this.left(t), (this._xPosition = "center"), this;
    }
    centerVertically(t = "") {
      return this.top(t), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let t = this._overlayRef.overlayElement.style,
        n = this._overlayRef.hostElement.style,
        e = this._overlayRef.getConfig(),
        { width: i, height: r, maxWidth: s, maxHeight: a } = e,
        c =
          (i === "100%" || i === "100vw") &&
          (!s || s === "100%" || s === "100vw"),
        l =
          (r === "100%" || r === "100vh") &&
          (!a || a === "100%" || a === "100vh"),
        d = this._xPosition,
        m = this._xOffset,
        b = this._overlayRef.getConfig().direction === "rtl",
        _ = "",
        h = "",
        p = "";
      c
        ? (p = "flex-start")
        : d === "center"
          ? ((p = "center"), b ? (h = m) : (_ = m))
          : b
            ? d === "left" || d === "end"
              ? ((p = "flex-end"), (_ = m))
              : (d === "right" || d === "start") &&
                ((p = "flex-start"), (h = m))
            : d === "left" || d === "start"
              ? ((p = "flex-start"), (_ = m))
              : (d === "right" || d === "end") && ((p = "flex-end"), (h = m)),
        (t.position = this._cssPosition),
        (t.marginLeft = c ? "0" : _),
        (t.marginTop = l ? "0" : this._topOffset),
        (t.marginBottom = this._bottomOffset),
        (t.marginRight = c ? "0" : h),
        (n.justifyContent = p),
        (n.alignItems = l ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let t = this._overlayRef.overlayElement.style,
        n = this._overlayRef.hostElement,
        e = n.style;
      n.classList.remove(Mc),
        (e.justifyContent =
          e.alignItems =
          t.marginTop =
          t.marginBottom =
          t.marginLeft =
          t.marginRight =
          t.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  vm = (() => {
    let t = class t {
      constructor(e, i, r, s) {
        (this._viewportRuler = e),
          (this._document = i),
          (this._platform = r),
          (this._overlayContainer = s);
      }
      global() {
        return new pr();
      }
      flexibleConnectedTo(e) {
        return new hr(
          e,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(sr), u(H), u(Q), u(Pc));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })(),
  ym = 0,
  Fc = (() => {
    let t = class t {
      constructor(e, i, r, s, a, c, l, d, m, b, _, h) {
        (this.scrollStrategies = e),
          (this._overlayContainer = i),
          (this._componentFactoryResolver = r),
          (this._positionBuilder = s),
          (this._keyboardDispatcher = a),
          (this._injector = c),
          (this._ngZone = l),
          (this._document = d),
          (this._directionality = m),
          (this._location = b),
          (this._outsideClickDispatcher = _),
          (this._animationsModuleType = h);
      }
      create(e) {
        let i = this._createHostElement(),
          r = this._createPaneElement(i),
          s = this._createPortalOutlet(r),
          a = new di(e);
        return (
          (a.direction = a.direction || this._directionality.value),
          new mr(
            s,
            i,
            r,
            a,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations"
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(e) {
        let i = this._document.createElement("div");
        return (
          (i.id = `cdk-overlay-${ym++}`),
          i.classList.add("cdk-overlay-pane"),
          e.appendChild(i),
          i
        );
      }
      _createHostElement() {
        let e = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(e), e;
      }
      _createPortalOutlet(e) {
        return (
          this._appRef || (this._appRef = this._injector.get(Ei)),
          new Fn(
            e,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document
          )
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        u(fm),
        u(Pc),
        u(bi),
        u(vm),
        u(bm),
        u(jt),
        u(W),
        u(H),
        u(mc),
        u(Kr),
        u(gm),
        u(yt, 8)
      );
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
function xm(o, t) {
  if (o & 1) {
    let n = yi();
    tt(0, "div", 1)(1, "button", 2),
      be("click", function () {
        Be(n);
        let i = Ht();
        return ze(i.action());
      }),
      Tt(2),
      q()();
  }
  if (o & 2) {
    let n = Ht();
    At(2), xi(" ", n.data.action, " ");
  }
}
var Em = ["label"];
function Sm(o, t) {}
var km = Math.pow(2, 31) - 1,
  ui = class {
    constructor(t, n) {
      (this._overlayRef = n),
        (this._afterDismissed = new K()),
        (this._afterOpened = new K()),
        (this._onAction = new K()),
        (this._dismissedByAction = !1),
        (this.containerInstance = t),
        t._onExit.subscribe(() => this._finishDismiss());
    }
    dismiss() {
      this._afterDismissed.closed || this.containerInstance.exit(),
        clearTimeout(this._durationTimeoutId);
    }
    dismissWithAction() {
      this._onAction.closed ||
        ((this._dismissedByAction = !0),
        this._onAction.next(),
        this._onAction.complete(),
        this.dismiss()),
        clearTimeout(this._durationTimeoutId);
    }
    closeWithAction() {
      this.dismissWithAction();
    }
    _dismissAfter(t) {
      this._durationTimeoutId = setTimeout(
        () => this.dismiss(),
        Math.min(t, km)
      );
    }
    _open() {
      this._afterOpened.closed ||
        (this._afterOpened.next(), this._afterOpened.complete());
    }
    _finishDismiss() {
      this._overlayRef.dispose(),
        this._onAction.closed || this._onAction.complete(),
        this._afterDismissed.next({
          dismissedByAction: this._dismissedByAction,
        }),
        this._afterDismissed.complete(),
        (this._dismissedByAction = !1);
    }
    afterDismissed() {
      return this._afterDismissed;
    }
    afterOpened() {
      return this.containerInstance._onEnter;
    }
    onAction() {
      return this._onAction;
    }
  },
  Nc = new V("MatSnackBarData"),
  Pe = class {
    constructor() {
      (this.politeness = "assertive"),
        (this.announcementMessage = ""),
        (this.duration = 0),
        (this.data = null),
        (this.horizontalPosition = "center"),
        (this.verticalPosition = "bottom");
    }
  },
  Cm = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = ut({
        type: t,
        selectors: [["", "matSnackBarLabel", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
        standalone: !0,
      }));
    let o = t;
    return o;
  })(),
  Am = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = ut({
        type: t,
        selectors: [["", "matSnackBarActions", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
        standalone: !0,
      }));
    let o = t;
    return o;
  })(),
  Tm = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = ut({
        type: t,
        selectors: [["", "matSnackBarAction", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
        standalone: !0,
      }));
    let o = t;
    return o;
  })(),
  Im = (() => {
    let t = class t {
      constructor(e, i) {
        (this.snackBarRef = e), (this.data = i);
      }
      action() {
        this.snackBarRef.dismissWithAction();
      }
      get hasAction() {
        return !!this.data.action;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(z(ui), z(Nc));
    }),
      (t.ɵcmp = bt({
        type: t,
        selectors: [["simple-snack-bar"]],
        hostAttrs: [1, "mat-mdc-simple-snack-bar"],
        exportAs: ["matSnackBar"],
        standalone: !0,
        features: [It],
        decls: 3,
        vars: 2,
        consts: [
          ["matSnackBarLabel", ""],
          ["matSnackBarActions", ""],
          ["mat-button", "", "matSnackBarAction", "", 3, "click"],
        ],
        template: function (i, r) {
          i & 1 && (tt(0, "div", 0), Tt(1), q(), fe(2, xm, 3, 1, "div", 1)),
            i & 2 &&
              (At(1),
              xi(
                " ",
                r.data.message,
                `
`
              ),
              At(1),
              Yn(2, r.hasAction ? 2 : -1));
        },
        dependencies: [kc, Sc, Cm, Am, Tm, Ut],
        styles: [".mat-mdc-simple-snack-bar{display:flex}"],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let o = t;
    return o;
  })(),
  Dm = {
    snackBarState: ba("state", [
      bo("void, hidden", ee({ transform: "scale(0.8)", opacity: 0 })),
      bo("visible", ee({ transform: "scale(1)", opacity: 1 })),
      go("* => visible", fo("150ms cubic-bezier(0, 0, 0.2, 1)")),
      go(
        "* => void, * => hidden",
        fo("75ms cubic-bezier(0.4, 0.0, 1, 1)", ee({ opacity: 0 }))
      ),
    ]),
  },
  Rm = 0,
  Mm = (() => {
    let t = class t extends Oe {
      constructor(e, i, r, s, a) {
        super(),
          (this._ngZone = e),
          (this._elementRef = i),
          (this._changeDetectorRef = r),
          (this._platform = s),
          (this.snackBarConfig = a),
          (this._document = U(H)),
          (this._trackedModals = new Set()),
          (this._announceDelay = 150),
          (this._destroyed = !1),
          (this._onAnnounce = new K()),
          (this._onExit = new K()),
          (this._onEnter = new K()),
          (this._animationState = "void"),
          (this._liveElementId = `mat-snack-bar-container-live-${Rm++}`),
          (this.attachDomPortal = (c) => {
            this._assertNotAttached();
            let l = this._portalOutlet.attachDomPortal(c);
            return this._afterPortalAttached(), l;
          }),
          a.politeness === "assertive" && !a.announcementMessage
            ? (this._live = "assertive")
            : a.politeness === "off"
              ? (this._live = "off")
              : (this._live = "polite"),
          this._platform.FIREFOX &&
            (this._live === "polite" && (this._role = "status"),
            this._live === "assertive" && (this._role = "alert"));
      }
      attachComponentPortal(e) {
        this._assertNotAttached();
        let i = this._portalOutlet.attachComponentPortal(e);
        return this._afterPortalAttached(), i;
      }
      attachTemplatePortal(e) {
        this._assertNotAttached();
        let i = this._portalOutlet.attachTemplatePortal(e);
        return this._afterPortalAttached(), i;
      }
      onAnimationEnd(e) {
        let { fromState: i, toState: r } = e;
        if (
          (((r === "void" && i !== "void") || r === "hidden") &&
            this._completeExit(),
          r === "visible")
        ) {
          let s = this._onEnter;
          this._ngZone.run(() => {
            s.next(), s.complete();
          });
        }
      }
      enter() {
        this._destroyed ||
          ((this._animationState = "visible"),
          this._changeDetectorRef.detectChanges(),
          this._screenReaderAnnounce());
      }
      exit() {
        return (
          this._ngZone.run(() => {
            (this._animationState = "hidden"),
              this._elementRef.nativeElement.setAttribute("mat-exit", ""),
              clearTimeout(this._announceTimeoutId);
          }),
          this._onExit
        );
      }
      ngOnDestroy() {
        (this._destroyed = !0), this._clearFromModals(), this._completeExit();
      }
      _completeExit() {
        this._ngZone.onMicrotaskEmpty.pipe(Et(1)).subscribe(() => {
          this._ngZone.run(() => {
            this._onExit.next(), this._onExit.complete();
          });
        });
      }
      _afterPortalAttached() {
        let e = this._elementRef.nativeElement,
          i = this.snackBarConfig.panelClass;
        i &&
          (Array.isArray(i)
            ? i.forEach((a) => e.classList.add(a))
            : e.classList.add(i)),
          this._exposeToModals();
        let r = this._label.nativeElement,
          s = "mdc-snackbar__label";
        r.classList.toggle(s, !r.querySelector(`.${s}`));
      }
      _exposeToModals() {
        let e = this._liveElementId,
          i = this._document.querySelectorAll(
            'body > .cdk-overlay-container [aria-modal="true"]'
          );
        for (let r = 0; r < i.length; r++) {
          let s = i[r],
            a = s.getAttribute("aria-owns");
          this._trackedModals.add(s),
            a
              ? a.indexOf(e) === -1 && s.setAttribute("aria-owns", a + " " + e)
              : s.setAttribute("aria-owns", e);
        }
      }
      _clearFromModals() {
        this._trackedModals.forEach((e) => {
          let i = e.getAttribute("aria-owns");
          if (i) {
            let r = i.replace(this._liveElementId, "").trim();
            r.length > 0
              ? e.setAttribute("aria-owns", r)
              : e.removeAttribute("aria-owns");
          }
        }),
          this._trackedModals.clear();
      }
      _assertNotAttached() {
        this._portalOutlet.hasAttached();
      }
      _screenReaderAnnounce() {
        this._announceTimeoutId ||
          this._ngZone.runOutsideAngular(() => {
            this._announceTimeoutId = setTimeout(() => {
              let e =
                  this._elementRef.nativeElement.querySelector("[aria-hidden]"),
                i = this._elementRef.nativeElement.querySelector("[aria-live]");
              if (e && i) {
                let r = null;
                this._platform.isBrowser &&
                  document.activeElement instanceof HTMLElement &&
                  e.contains(document.activeElement) &&
                  (r = document.activeElement),
                  e.removeAttribute("aria-hidden"),
                  i.appendChild(e),
                  r?.focus(),
                  this._onAnnounce.next(),
                  this._onAnnounce.complete();
              }
            }, this._announceDelay);
          });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(z(W), z(rt), z(_i), z(Q), z(Pe));
    }),
      (t.ɵcmp = bt({
        type: t,
        selectors: [["mat-snack-bar-container"]],
        viewQuery: function (i, r) {
          if ((i & 1 && (He(Nn, 7), He(Em, 7)), i & 2)) {
            let s;
            $e((s = Ue())) && (r._portalOutlet = s.first),
              $e((s = Ue())) && (r._label = s.first);
          }
        },
        hostAttrs: [
          1,
          "mdc-snackbar",
          "mat-mdc-snack-bar-container",
          "mdc-snackbar--open",
        ],
        hostVars: 1,
        hostBindings: function (i, r) {
          i & 1 &&
            $r("@state.done", function (a) {
              return r.onAnimationEnd(a);
            }),
            i & 2 && Vr("@state", r._animationState);
        },
        standalone: !0,
        features: [te, It],
        decls: 6,
        vars: 3,
        consts: [
          [1, "mdc-snackbar__surface"],
          [1, "mat-mdc-snack-bar-label"],
          ["label", ""],
          ["aria-hidden", "true"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (i, r) {
          i & 1 &&
            (tt(0, "div", 0)(1, "div", 1, 2)(3, "div", 3),
            fe(4, Sm, 0, 0, "ng-template", 4),
            q(),
            wt(5, "div"),
            q()()),
            i & 2 &&
              (At(5),
              he("aria-live", r._live)("role", r._role)(
                "id",
                r._liveElementId
              ));
        },
        dependencies: [rr, Nn],
        styles: [
          '.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}',
        ],
        encapsulation: 2,
        data: { animation: [Dm.snackBarState] },
      }));
    let o = t;
    return o;
  })();
function Om() {
  return new Pe();
}
var Pm = new V("mat-snack-bar-default-options", {
    providedIn: "root",
    factory: Om,
  }),
  jc = (() => {
    let t = class t {
      get _openedSnackBarRef() {
        let e = this._parentSnackBar;
        return e ? e._openedSnackBarRef : this._snackBarRefAtThisLevel;
      }
      set _openedSnackBarRef(e) {
        this._parentSnackBar
          ? (this._parentSnackBar._openedSnackBarRef = e)
          : (this._snackBarRefAtThisLevel = e);
      }
      constructor(e, i, r, s, a, c) {
        (this._overlay = e),
          (this._live = i),
          (this._injector = r),
          (this._breakpointObserver = s),
          (this._parentSnackBar = a),
          (this._defaultConfig = c),
          (this._snackBarRefAtThisLevel = null),
          (this.simpleSnackBarComponent = Im),
          (this.snackBarContainerComponent = Mm),
          (this.handsetCssClass = "mat-mdc-snack-bar-handset");
      }
      openFromComponent(e, i) {
        return this._attach(e, i);
      }
      openFromTemplate(e, i) {
        return this._attach(e, i);
      }
      open(e, i = "", r) {
        let s = g(g({}, this._defaultConfig), r);
        return (
          (s.data = { message: e, action: i }),
          s.announcementMessage === e && (s.announcementMessage = void 0),
          this.openFromComponent(this.simpleSnackBarComponent, s)
        );
      }
      dismiss() {
        this._openedSnackBarRef && this._openedSnackBarRef.dismiss();
      }
      ngOnDestroy() {
        this._snackBarRefAtThisLevel && this._snackBarRefAtThisLevel.dismiss();
      }
      _attachSnackBarContainer(e, i) {
        let r = i && i.viewContainerRef && i.viewContainerRef.injector,
          s = jt.create({
            parent: r || this._injector,
            providers: [{ provide: Pe, useValue: i }],
          }),
          a = new Re(this.snackBarContainerComponent, i.viewContainerRef, s),
          c = e.attach(a);
        return (c.instance.snackBarConfig = i), c.instance;
      }
      _attach(e, i) {
        let r = g(g(g({}, new Pe()), this._defaultConfig), i),
          s = this._createOverlay(r),
          a = this._attachSnackBarContainer(s, r),
          c = new ui(a, s);
        if (e instanceof Ve) {
          let l = new Me(e, null, { $implicit: r.data, snackBarRef: c });
          c.instance = a.attachTemplatePortal(l);
        } else {
          let l = this._createInjector(r, c),
            d = new Re(e, void 0, l),
            m = a.attachComponentPortal(d);
          c.instance = m.instance;
        }
        return (
          this._breakpointObserver
            .observe(nc.HandsetPortrait)
            .pipe(ft(s.detachments()))
            .subscribe((l) => {
              s.overlayElement.classList.toggle(
                this.handsetCssClass,
                l.matches
              );
            }),
          r.announcementMessage &&
            a._onAnnounce.subscribe(() => {
              this._live.announce(r.announcementMessage, r.politeness);
            }),
          this._animateSnackBar(c, r),
          (this._openedSnackBarRef = c),
          this._openedSnackBarRef
        );
      }
      _animateSnackBar(e, i) {
        e.afterDismissed().subscribe(() => {
          this._openedSnackBarRef == e && (this._openedSnackBarRef = null),
            i.announcementMessage && this._live.clear();
        }),
          this._openedSnackBarRef
            ? (this._openedSnackBarRef.afterDismissed().subscribe(() => {
                e.containerInstance.enter();
              }),
              this._openedSnackBarRef.dismiss())
            : e.containerInstance.enter(),
          i.duration &&
            i.duration > 0 &&
            e.afterOpened().subscribe(() => e._dismissAfter(i.duration));
      }
      _createOverlay(e) {
        let i = new di();
        i.direction = e.direction;
        let r = this._overlay.position().global(),
          s = e.direction === "rtl",
          a =
            e.horizontalPosition === "left" ||
            (e.horizontalPosition === "start" && !s) ||
            (e.horizontalPosition === "end" && s),
          c = !a && e.horizontalPosition !== "center";
        return (
          a ? r.left("0") : c ? r.right("0") : r.centerHorizontally(),
          e.verticalPosition === "top" ? r.top("0") : r.bottom("0"),
          (i.positionStrategy = r),
          this._overlay.create(i)
        );
      }
      _createInjector(e, i) {
        let r = e && e.viewContainerRef && e.viewContainerRef.injector;
        return jt.create({
          parent: r || this._injector,
          providers: [
            { provide: ui, useValue: i },
            { provide: Nc, useValue: e.data },
          ],
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Fc), u(cc), u(jt), u(Mn), u(t, 12), u(Pm));
    }),
      (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let o = t;
    return o;
  })();
var O = (() => {
  let t = class t {
    constructor(e) {
      this.snackBar = e;
    }
    showSuccess(e) {
      this.snackBar.open(e, "Close", {
        duration: 1500,
        panelClass: ["success-toasts"],
      });
    }
    showError(e) {
      this.snackBar.open(e, "Close", {
        duration: 2e3,
        panelClass: ["error-toast"],
      });
    }
    showPersonSuccess(e) {
      setTimeout(() => {
        this.snackBar.open(e, "Close", {
          duration: 1500,
          panelClass: ["success-toasts"],
        });
      }, 1600);
    }
    showPersonError(e) {
      setTimeout(() => {
        this.snackBar.open(e, "Close", {
          duration: 2e3,
          panelClass: ["error-toast"],
        });
      }, 1600);
    }
    showConversationsSuccess(e) {
      setTimeout(() => {
        this.snackBar.open(e, "Close", {
          duration: 1500,
          panelClass: ["success-toasts"],
        });
      }, 3200);
    }
    showConversationsError(e) {
      setTimeout(() => {
        this.snackBar.open(e, "Close", {
          duration: 2e3,
          panelClass: ["error-toast"],
        });
      }, 3200);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(jc));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var Lc = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.authService = i),
        (this.toastService = r),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(Ds),
            B((s) =>
              this.authService.registration(s).pipe(
                F((a) => [Ki({ payload: a }), Yi()]),
                L((a) => {
                  let c = a.error && a.error.type ? a.error.type : a.type,
                    l =
                      a.error && a.error.message ? a.error.message : a.message;
                  return (
                    this.toastService.showError(l),
                    c === ye.DUPLICATED_EMAILS
                      ? T(Lt({ errorType: c, errorMessage: l, email: s.email }))
                      : T(Lt({ errorType: c, errorMessage: l, email: null }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(Ae), u(O));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Bc = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.router = r),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(Yi),
            F(
              () => (
                this.router.navigate(["/signin"]),
                this.toastService.showSuccess("Registration successful"),
                [Ms()]
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(lt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var zc = (() => {
  let t = class t {
    constructor(e, i, r, s) {
      (this.actions$ = e),
        (this.authService = i),
        (this.toastService = r),
        (this.router = s),
        (this.login$ = D(() =>
          this.actions$.pipe(
            M(Os),
            B((a) =>
              this.authService.login(a).pipe(
                et((c) => {
                  if (c) {
                    let l = {
                        Authorization: `Bearer ${c.token}`,
                        "rs-uid": c.uid,
                        "rs-email": a.email,
                      },
                      d = JSON.stringify(l);
                    return (
                      localStorage.setItem("currentUser", d),
                      this.toastService.showSuccess("Login successful"),
                      this.router.navigate(["/"]),
                      Gi({ payload: l })
                    );
                  }
                  return Lt({
                    errorType: ye.UNKNOWN_ERROR,
                    errorMessage: ye.UNKNOWN_ERROR,
                    email: null,
                  });
                }),
                L((c) => {
                  let l = c.error && c.error.type ? c.error.type : c.type,
                    d =
                      c.error && c.error.message ? c.error.message : c.message;
                  return (
                    this.toastService.showError(d),
                    l === ye.LOGIN_NOT_FOUND
                      ? T(Lt({ errorType: l, errorMessage: d, email: a.email }))
                      : T(Lt({ errorType: l, errorMessage: d, email: null }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(Ae), u(O), u(lt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Vc = {
    isNameSet: !1,
    isSubmitInProgress: !1,
    userProfile: null,
    errors: null,
  },
  $c = Rt(
    Vc,
    x(Gt, (o, { errorType: t, errorMessage: n }) =>
      y(g({}, o), {
        isNameSet: !1,
        errors: { type: t, message: n },
        isSubmitInProgress: !1,
      })
    ),
    x(en, (o, t) =>
      y(g({}, o), {
        isNameSet: !1,
        userProfile: {
          email: t.email,
          uid: t.uid,
          name: t.name,
          createdAt: t.createdAt,
        },
        errors: null,
      })
    ),
    x(js, (o) => y(g({}, o), { isSubmitInProgress: !0 })),
    x(nn, (o, { name: t }) =>
      y(g({}, o), {
        isNameSet: !1,
        isSubmitInProgress: !1,
        userProfile: {
          email: o.userProfile.email,
          uid: o.userProfile.uid,
          name: t,
          createdAt: o.userProfile.createdAt,
        },
        errors: null,
      })
    ),
    x(Ls, (o) => y(g({}, o), { isNameSet: !0 })),
    x(on, (o) => y(g({}, o), { isNameSet: !1 })),
    x(sn, (o) => Vc)
  );
var Hc = (() => {
  let t = class t {
    constructor(e) {
      this.http = e;
    }
    loadProfile() {
      return this.http.get("/profile");
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Dt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var Uc = (() => {
  let t = class t {
    constructor(e, i, r, s, a) {
      (this.actions$ = e),
        (this.loadUserProfileService = i),
        (this.toastService = r),
        (this.router = s),
        (this.store = a),
        (this.profile$ = D(() =>
          this.actions$.pipe(
            M(tn),
            pi(this.store.pipe(us(Ps))),
            B(([c, l]) =>
              l
                ? (this.toastService.showSuccess("Profile Load Successful"),
                  this.router.navigate(["/profile"]),
                  T(Fs()))
                : this.loadUserProfileService.loadProfile().pipe(
                    et((d) => {
                      this.toastService.showSuccess("Profile Load Successful"),
                        this.router.navigate(["/profile"]);
                      let m = {
                        email: d.email.S,
                        uid: d.uid.S,
                        name: d.name.S,
                        createdAt: d.createdAt.S,
                      };
                      return en(m);
                    }),
                    L((d) => {
                      let m = d.error && d.error.type ? d.error.type : d.type,
                        b =
                          d.error && d.error.message
                            ? d.error.message
                            : d.message;
                      return (
                        this.toastService.showError(b),
                        T(Gt({ errorType: m, errorMessage: b }))
                      );
                    })
                  )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(Hc), u(O), u(lt), u(mt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Wc = (() => {
  let t = class t {
    intercept(e, i) {
      let r = localStorage.getItem("currentUser");
      if (r) {
        let s = JSON.parse(r);
        e = e.clone({
          setHeaders: {
            "rs-uid": s["rs-uid"] || "",
            "rs-email": s["rs-email"] || "",
            Authorization: s.Authorization || "",
          },
        });
      }
      return i.handle(e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Yc = (() => {
  let t = class t {
    constructor(e) {
      this.http = e;
    }
    updateName(e) {
      return this.http.put("/profile", e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Dt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var Kc = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.UpdateProfileService = i),
        (this.toastService = r),
        (this.profile$ = D(() =>
          this.actions$.pipe(
            M(Ns),
            B(({ payload: s }) =>
              this.UpdateProfileService.updateName({ name: s }).pipe(
                F(() => [rn({ name: s }), on()]),
                L((a) => {
                  let c = a.error && a.error.type ? a.error.type : a.type,
                    l =
                      a.error && a.error.message ? a.error.message : a.message;
                  return (
                    this.toastService.showError(l),
                    T(Gt({ errorType: c, errorMessage: l }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(Yc), u(O));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Gc = (() => {
  let t = class t {
    constructor(e, i) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(rn),
            F(
              (r) => (
                this.toastService.showSuccess("Name Updated Success"), [nn(r)]
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Zc = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.authService = i),
        (this.toastService = r),
        (this.logout$ = D(() =>
          this.actions$.pipe(
            M(Zi),
            B(() =>
              this.authService.logout().pipe(
                F(() => [qi()]),
                L((s) => {
                  let a = s.error && s.error.type ? s.error.type : s.type,
                    c =
                      s.error && s.error.message ? s.error.message : s.message;
                  return (
                    this.toastService.showError(c),
                    T(Gt({ errorType: a, errorMessage: c }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(Ae), u(O));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var qc = (() => {
  let t = class t {
    constructor() {}
    getAllCookies() {
      let e = document.cookie.split(";"),
        i = {};
      for (let r = 0; r < e.length; r++) {
        let s = e[r].trim(),
          a = s.indexOf("="),
          c = a > -1 ? s.substring(0, a) : s,
          l = a > -1 ? s.substring(a + 1) : "";
      }
      return i;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var Xc = (() => {
  let t = class t {
    constructor(e, i, r, s) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.router = r),
        (this.delCookiesSrv = s),
        (this.logout$ = D(() =>
          this.actions$.pipe(
            M(qi),
            F(
              () => (
                localStorage.clear(),
                sessionStorage.clear(),
                this.toastService.showSuccess("Logout Success"),
                this.router.navigate(["/signin"]),
                [Xi(), sn(), Di(), Li(), Hi()]
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(lt), u(qc));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Qc = {
    isNewGroupSubmitInProgress: !1,
    isRefreshGroupsInProgress: !1,
    isShowForm: !1,
    isShowDeletePopup: !1,
    delGroupId: null,
    groupList: [],
    errors: null,
    groupsTimerValue: null,
  },
  Jc = Rt(
    Qc,
    x(ms, (o) => y(g({}, o), { isShowForm: !0 })),
    x(Ii, (o) => y(g({}, o), { isShowForm: !1 })),
    x(hs, (o, { delGroupId: t }) =>
      y(g({}, o), { isShowDeletePopup: !0, delGroupId: t })
    ),
    x(ps, (o) =>
      y(g({}, o), {
        isNewGroupSubmitInProgress: !1,
        isShowDeletePopup: !1,
        delGroupId: null,
      })
    ),
    x(Di, (o) => Qc),
    x(Wt, (o, { errorType: t, errorMessage: n }) =>
      y(g({}, o), {
        isNewGroupSubmitInProgress: !1,
        isRefreshGroupsInProgress: !1,
        isNameSet: !1,
        errors: { type: t, message: n },
      })
    ),
    x(Ri, (o, { groups: t }) =>
      y(g({}, o), { isNewGroupSubmitInProgress: !1, groupList: t })
    ),
    x(bs, (o) => y(g({}, o), { isNewGroupSubmitInProgress: !0 })),
    x(gs, (o) => y(g({}, o), { isRefreshGroupsInProgress: !0 })),
    x(Mi, (o) => y(g({}, o), { isRefreshGroupsInProgress: !1 })),
    x(Oi, (o, { payload: t }) => {
      let n = {
        id: t.id,
        name: t.name,
        createdAt: t.createdAt,
        createdBy: t.createdBy,
      };
      return y(g({}, o), {
        groupList: [...o.groupList, n],
        isNewGroupSubmitInProgress: !1,
      });
    }),
    x(Pi, (o, { groupID: t }) =>
      y(g({}, o), {
        isNewGroupSubmitInProgress: !1,
        isRefreshGroupsInProgress: !1,
        isShowDeletePopup: !1,
        delGroupId: null,
        groupList: o.groupList.filter((n) => n.id !== t),
        errors: null,
      })
    ),
    x(We, (o, { value: t }) => y(g({}, o), { groupsTimerValue: t }))
  );
var Fe = (() => {
  let t = class t {
    constructor(e) {
      (this.store = e),
        (this.groupstimerValue = 60),
        (this.peopleTimerValue = 60),
        (this.conversationTimerValue = 60);
    }
    startGroupsTimer() {
      let e = setInterval(() => {
        this.store.dispatch(We({ value: this.groupstimerValue })),
          this.groupstimerValue
            ? (this.groupstimerValue -= 1)
            : (clearInterval(e),
              this.store.dispatch(We({ value: null })),
              this.store.dispatch(Mi()),
              (this.groupstimerValue = 60));
      }, 1e3);
    }
    startPeopleTimer() {
      let e = setInterval(() => {
        this.store.dispatch(Ye({ value: this.peopleTimerValue })),
          this.peopleTimerValue
            ? (this.peopleTimerValue -= 1)
            : (clearInterval(e),
              this.store.dispatch(Ye({ value: null })),
              this.store.dispatch(ji()),
              (this.peopleTimerValue = 60));
      }, 1e3);
    }
    startConversationTimer() {
      let e = setInterval(() => {
        this.store.dispatch(Ke({ value: this.conversationTimerValue })),
          this.conversationTimerValue
            ? (this.conversationTimerValue -= 1)
            : (clearInterval(e),
              this.store.dispatch(Ke({ value: null })),
              this.store.dispatch(Ui()),
              (this.conversationTimerValue = 60));
      }, 1e3);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(mt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var el = (() => {
  let t = class t {
    constructor(e, i, r, s) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.manageGroupsSrv = r),
        (this.timerSrv = s),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(fs),
            B(({ isLoadManual: a }) =>
              this.manageGroupsSrv.loadGroups().pipe(
                F((c) => {
                  let l = c.Items.map((d) =>
                    this.manageGroupsSrv.modifyGroup(d)
                  );
                  return (
                    c && this.toastService.showSuccess("Groups Loaded Success"),
                    a && this.timerSrv.startGroupsTimer(),
                    [Ri({ groups: l })]
                  );
                }),
                L((c) => {
                  let l = c.error && c.error.type ? c.error.type : c.type,
                    d =
                      c.error && c.error.message ? c.error.message : c.message;
                  return (
                    this.toastService.showError(d),
                    T(Wt({ errorType: l, errorMessage: d }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(ve), u(Fe));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var il = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.manageGroupsSrv = r),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(_s),
            B(({ payload: s }) =>
              this.manageGroupsSrv.createNewGroup({ name: s.name }).pipe(
                F((a) => {
                  a && this.toastService.showSuccess("Group Created Success");
                  let c = this.manageGroupsSrv.createNewGroupObject(a, s.name);
                  return [Oi({ payload: c }), Ii()];
                }),
                L((a) => {
                  let c = a.error && a.error.type ? a.error.type : a.type,
                    l =
                      a.error && a.error.message ? a.error.message : a.message;
                  return (
                    this.toastService.showError(l),
                    T(Wt({ errorType: c, errorMessage: l }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(ve));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var nl = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.manageGroupsSrv = r),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(vs),
            B((s) =>
              this.manageGroupsSrv.deleteGroup(s).pipe(
                F(
                  () => (
                    this.toastService.showSuccess("Group Deleted Success"),
                    [Pi(s)]
                  )
                ),
                L((a) => {
                  let c = a.error && a.error.type ? a.error.type : a.type,
                    l =
                      a.error && a.error.message ? a.error.message : a.message;
                  return (
                    this.toastService.showError(l),
                    T(Wt({ errorType: c, errorMessage: l }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(ve));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var ol = {
    isRefreshPeopleInProgress: !1,
    peopleList: [],
    errors: null,
    peopleTimerValue: null,
  },
  rl = Rt(
    ol,
    x(Li, (o) => ol),
    x(Yt, (o, { errorType: t, errorMessage: n }) =>
      y(g({}, o), { errors: { type: t, message: n } })
    ),
    x(Ni, (o, { people: t }) => y(g({}, o), { peopleList: t })),
    x(Xn, (o) => y(g({}, o), { isRefreshPeopleInProgress: !0 })),
    x(Xn, (o) => y(g({}, o), { isRefreshPeopleInProgress: !0 })),
    x(ji, (o) => y(g({}, o), { isRefreshPeopleInProgress: !1 })),
    x(Ye, (o, { value: t }) => y(g({}, o), { peopleTimerValue: t }))
  );
var sl = (() => {
  let t = class t {
    constructor(e) {
      this.http = e;
    }
    loadPeople() {
      return this.http.get("/users");
    }
    loadConversations() {
      return this.http.get("/conversations/list");
    }
    loadConversationHistory(e) {
      return this.http.get("/conversations/read");
    }
    modifyPerson(e) {
      return { name: e.name.S, uid: e.uid.S };
    }
    isNotCurrentUser(e) {
      return JSON.parse(localStorage.getItem("currentUser"))["rs-uid"] !== e;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Dt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var al = (() => {
  let t = class t {
    constructor(e, i, r, s, a) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.managePeopleSrv = r),
        (this.timerSrv = s),
        (this.store = a),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(Fi),
            B(({ isLoadManual: c }) =>
              this.managePeopleSrv.loadPeople().pipe(
                F((l) => {
                  let d = l.Items.map((m) =>
                    this.managePeopleSrv.modifyPerson(m)
                  );
                  return (
                    l &&
                      this.toastService.showPersonSuccess(
                        "People Loaded Success"
                      ),
                    c &&
                      (this.store.dispatch(ws()),
                      this.timerSrv.startPeopleTimer()),
                    [Ni({ people: d })]
                  );
                }),
                L((l) => {
                  let d = l.error && l.error.type ? l.error.type : l.type,
                    m =
                      l.error && l.error.message ? l.error.message : l.message;
                  return (
                    this.toastService.showPersonError(m),
                    T(Yt({ errorType: d, errorMessage: m }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(sl), u(Fe), u(mt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var Pt = (() => {
  let t = class t {
    constructor(e) {
      this.http = e;
    }
    modifyConversation(e) {
      return { id: e.id.S, companionID: e.companionID.S };
    }
    modifyMessage(e) {
      return {
        authorID: e.authorID.S,
        message: e.message.S,
        createdAt: e.createdAt.S,
      };
    }
    createConversation(e) {
      return this.http.post("/conversations/create", { companion: e });
    }
    loadConversations() {
      return this.http.get("/conversations/list");
    }
    loadConversationHistory(e, i) {
      let r = i
        ? new Si().set("conversationID", e).set("since", i)
        : new Si().set("conversationID", e);
      return this.http.get("/conversations/read", { params: r });
    }
    deleteConversation(e) {
      let i = new Si().set("conversationID", e);
      return this.http.delete("/conversations/delete", { params: i });
    }
    sendMessage(e) {
      return this.http.post("/conversations/append", e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(Dt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let o = t;
  return o;
})();
var cl = (() => {
  let t = class t {
    constructor(e, i, r, s) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.conversationsSrv = r),
        (this.router = s),
        (this.conversation$ = D(() =>
          this.actions$.pipe(
            M(xs),
            B(({ payload: a }) =>
              this.conversationsSrv.createConversation(a).pipe(
                F(
                  ({ conversationID: c }) => (
                    c &&
                      (this.toastService.showSuccess(
                        "Conversation Created Success"
                      ),
                      this.router.navigate(["conversation", c])),
                    [Es({ payload: { id: c, companionID: a } })]
                  )
                ),
                L((c) => {
                  let l = c.error && c.error.type ? c.error.type : c.type,
                    d =
                      c.error && c.error.message ? c.error.message : c.message;
                  return (
                    this.toastService.showError(d),
                    T(Yt({ errorType: l, errorMessage: d }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(Pt), u(lt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var ll = {
    isRefreshMessagesInProgress: !1,
    wasAttemptToLoadConversations: !1,
    conversationsList: [],
    conversationsHistory: [],
    errors: null,
    conversationTimerValue: null,
    isShowPopup: !1,
    isSubmitInProgress: !1,
  },
  dl = Rt(
    ll,
    x(Hi, (o) => ll),
    x(Kt, (o, { errorType: t, errorMessage: n }) =>
      y(g({}, o), { errors: { type: t, message: n } })
    ),
    x(Vi, (o, { conversations: t }) =>
      y(g({}, o), { conversationsList: t, wasAttemptToLoadConversations: !0 })
    ),
    x(zi, (o, { payload: t }) => {
      let n = o.conversationsHistory.find(
          (i) => i[t.conversationID] !== void 0
        ),
        e = { [t.conversationID]: t.messages };
      return n
        ? y(g({}, o), {
            conversationsHistory: o.conversationsHistory.map((i) =>
              i[t.conversationID]
                ? y(g({}, i), {
                    [t.conversationID]: [
                      ...(i[t.conversationID] || []),
                      ...t.messages,
                    ],
                  })
                : i
            ),
          })
        : y(g({}, o), { conversationsHistory: [...o.conversationsHistory, e] });
    }),
    x(Ke, (o, { value: t }) => y(g({}, o), { conversationTimerValue: t })),
    x($i, (o) => y(g({}, o), { wasAttemptToLoadConversations: !0 })),
    x(Ui, (o) => y(g({}, o), { isRefreshMessagesInProgress: !1 })),
    x(ks, (o) => y(g({}, o), { isRefreshMessagesInProgress: !0 })),
    x(As, (o) => y(g({}, o), { isSubmitInProgress: !0 })),
    x(Is, (o) => y(g({}, o), { isShowPopup: !0 })),
    x(Ts, (o) => y(g({}, o), { isShowPopup: !1 })),
    x(Wi, (o, { conversationID: t }) =>
      y(g({}, o), {
        conversationsList: o.conversationsList.filter((n) => n.id !== t),
        isShowPopup: !1,
        isSubmitInProgress: !1,
      })
    )
  );
var ul = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.conversationsSrv = r),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(Ss),
            B(({ payload: s }) =>
              this.conversationsSrv
                .sendMessage({
                  conversationID: s.conversationID,
                  message: s.message,
                })
                .pipe(
                  F(() => [
                    Bi({
                      payload: {
                        conversationID: s.conversationID,
                        since: s.since,
                        isLoadManual: !1,
                      },
                    }),
                  ]),
                  L((a) => {
                    let c = a.error && a.error.type ? a.error.type : a.type,
                      l =
                        a.error && a.error.message
                          ? a.error.message
                          : a.message;
                    return (
                      this.toastService.showConversationsError(l),
                      T(Kt({ errorType: c, errorMessage: l }))
                    );
                  })
                )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(Pt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var ml = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.conversationsSrv = r),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(Fi),
            B(() =>
              this.conversationsSrv.loadConversations().pipe(
                F((s) => {
                  let a = s.Items.map((c) =>
                    this.conversationsSrv.modifyConversation(c)
                  );
                  return (
                    s &&
                      this.toastService.showConversationsSuccess(
                        "Active Conversations Loaded Success"
                      ),
                    [Vi({ conversations: a }), $i()]
                  );
                }),
                L((s) => {
                  let a = s.error && s.error.type ? s.error.type : s.type,
                    c =
                      s.error && s.error.message ? s.error.message : s.message;
                  return (
                    this.toastService.showConversationsError(c),
                    T(Yt({ errorType: a, errorMessage: c }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(Pt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var hl = (() => {
  let t = class t {
    constructor(e, i, r, s) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.conversationsSrv = r),
        (this.timerSrv = s),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(Bi),
            B(({ payload: a }) =>
              this.conversationsSrv
                .loadConversationHistory(a.conversationID, a.since)
                .pipe(
                  F((c) => {
                    let l = c.Items.map((d) =>
                      this.conversationsSrv.modifyMessage(d)
                    );
                    return (
                      a.isLoadManual && this.timerSrv.startConversationTimer(),
                      [
                        zi({
                          payload: {
                            conversationID: a.conversationID,
                            messages: l,
                          },
                        }),
                      ]
                    );
                  }),
                  L((c) => {
                    let l = c.error && c.error.type ? c.error.type : c.type,
                      d =
                        c.error && c.error.message
                          ? c.error.message
                          : c.message;
                    return (
                      this.toastService.showConversationsError(d),
                      T(Kt({ errorType: l, errorMessage: d }))
                    );
                  })
                )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(Pt), u(Fe));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var pl = (() => {
  let t = class t {
    constructor(e, i, r, s) {
      (this.actions$ = e),
        (this.toastService = i),
        (this.conversationsSrv = r),
        (this.router = s),
        (this.reg$ = D(() =>
          this.actions$.pipe(
            M(Cs),
            B(({ conversationID: a }) =>
              this.conversationsSrv.deleteConversation(a).pipe(
                F(
                  () => (
                    this.toastService.showSuccess(
                      "Conversation Deleted Success"
                    ),
                    this.router.navigate(["/"]),
                    [Wi({ conversationID: a })]
                  )
                ),
                L((c) => {
                  let l = c.error && c.error.type ? c.error.type : c.type,
                    d =
                      c.error && c.error.message ? c.error.message : c.message;
                  return (
                    this.toastService.showError(d),
                    T(Kt({ errorType: l, errorMessage: d }))
                  );
                })
              )
            )
          )
        ));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(u(R), u(O), u(Pt), u(lt));
  }),
    (t.ɵprov = f({ token: t, factory: t.ɵfac }));
  let o = t;
  return o;
})();
var fl = {
  providers: [
    is(Za),
    qn(),
    Us(Lc, Bc, zc, Uc, Kc, Gc, Zc, Xc, el, il, nl, al, cl, ul, ml, hl, pl),
    Xr(Qr()),
    { provide: Kn, useClass: qa, multi: !0 },
    { provide: Kn, useClass: Wc, multi: !0 },
    qn({
      authState: Qa,
      userProfileState: $c,
      groupsState: Jc,
      peopleState: rl,
      conversationsState: dl,
    }),
    po({
      maxAge: 25,
      logOnly: !Yr(),
      autoPause: !0,
      trace: !1,
      traceLimit: 75,
      connectInZone: !0,
    }),
    Ka(),
  ],
};
function zm(o, t) {
  if (o & 1) {
    let n = yi();
    tt(0, "div", 5)(1, "div", 6),
      Tt(2),
      q(),
      tt(3, "button", 7),
      be("click", function () {
        Be(n);
        let i = Ht();
        return ze(i.goToUserProfile());
      }),
      q(),
      tt(4, "button", 8),
      be("click", function () {
        Be(n);
        let i = Ht();
        return ze(i.logout());
      }),
      q()();
  }
  if (o & 2) {
    let n = Ht();
    At(2), Hr(n.currentUser);
  }
}
var bl = (() => {
  let t = class t {
    constructor(e, i) {
      (this.store = e),
        (this.router = i),
        // (this.currentUser = Bs.currentUser["rs-email"] || undefined);
        (this.currentUser = "userName");
    }
    ngOnInit() {
      this.isLogged$ = this.store.select(ys);
    }
    goToUserProfile() {
      this.store.dispatch(tn());
    }
    logout() {
      this.store.dispatch(Zi()), this.store.dispatch(Qi());
    }
    ngOnDestroy() {
      this.router.navigate(["/"]);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(z(mt), z(lt));
  }),
    (t.ɵcmp = bt({
      type: t,
      selectors: [["app-header"]],
      standalone: !0,
      features: [It],
      decls: 6,
      vars: 3,
      consts: [
        [1, "wrapper"],
        [1, "header-elements-container"],
        ["routerLink", "/", 1, "header-logo-link"],
        [1, "header-logo"],
        ["class", "user-block", 4, "ngIf"],
        [1, "user-block"],
        [1, "user-block-username"],
        ["type", "button", 1, "user-block-settings", 3, "click"],
        ["type", "button", 1, "user-block-logout", 3, "click"],
      ],
      template: function (i, r) {
        i & 1 &&
          (tt(0, "div", 0)(1, "div", 1)(2, "a", 2),
          wt(3, "div", 3),
          q(),
          fe(4, zm, 5, 1, "div", 4),
          Ur(5, "async"),
          q()()),
          i & 2 && (At(4), Wn("ngIf", Wr(5, 1, r.isLogged$)));
      },
      dependencies: [Ut, Gr, Zr, Ci, ki],
      styles: [
        '[_nghost-%COMP%]{display:block;margin:0 auto;height:54px;width:100%;background-color:#f4f4f7;padding:6px 40px}.header-elements-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.header-logo[_ngcontent-%COMP%]{width:42px;height:42px;background-color:#27ae60;padding:10px;border-radius:16px;box-shadow:0 4px 4px #27ae6040;background:#27AE60 url("./media/logo-6ZJ7UY44.png") no-repeat center center/20px}.user-block[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;gap:10px}.user-block-username[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;color:#27ae60}.user-block-settings[_ngcontent-%COMP%]{width:18px;height:18px;padding:10px;border:none;background:url("./media/settings-FSAP6V6L.png") no-repeat center center/18px;cursor:pointer}.user-block-logout[_ngcontent-%COMP%]{width:18px;height:18px;padding:10px;border:none;background:url("./media/logout-6DYHO6XE.png") no-repeat center center/18px;cursor:pointer}',
      ],
    }));
  let o = t;
  return o;
})();
var gl = (() => {
  let t = class t {
    constructor(e) {
      this.store = e;
    }
    ngOnInit() {
      this.getUserFromLacalStorage();
    }
    getUserFromLacalStorage() {
      localStorage.getItem("currentUser") && this.store.dispatch(Ji());
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(z(mt));
  }),
    (t.ɵcmp = bt({
      type: t,
      selectors: [["app-root"]],
      standalone: !0,
      features: [It],
      decls: 4,
      vars: 0,
      consts: [[1, "header"]],
      template: function (i, r) {
        i & 1 &&
          (tt(0, "header", 0),
          wt(1, "app-header"),
          q(),
          tt(2, "main"),
          wt(3, "router-outlet"),
          q());
      },
      dependencies: [Ut, es, bl],
    }));
  let o = t;
  return o;
})();
ts(gl, fl).catch((o) => console.error(o));
