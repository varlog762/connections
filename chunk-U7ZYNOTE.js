import {
  a as Q,
  b as W,
  c as X,
  d as Y,
  g as Z,
  j as ee,
  l as te,
} from "./chunk-AGHAPIHE.js";
import { a as K } from "./chunk-AGG2RDLJ.js";
import { i as q, l as J } from "./chunk-PZW6CMPM.js";
import { b as L } from "./chunk-TKZEV6Y5.js";
import "./chunk-OXEZHYRO.js";
import {
  a as A,
  b as S,
  c as B,
  d as j,
  e as z,
  f as H,
  g as R,
  h as U,
  i as G,
} from "./chunk-72AFM3JC.js";
import {
  Aa as r,
  Ba as o,
  Ca as C,
  Da as x,
  Ga as g,
  Ia as c,
  La as E,
  Ma as s,
  Mb as D,
  Na as f,
  Qa as F,
  Ra as y,
  Sa as u,
  Ta as _,
  U as I,
  Ua as w,
  Z as v,
  _ as h,
  eb as N,
  gb as M,
  hb as O,
  ib as k,
  jb as T,
  kb as V,
  la as n,
  ma as b,
  ua as p,
  vb as $,
  ya as d,
} from "./chunk-RVRWXEWA.js";
function ie(e, a) {
  e & 1 && (r(0, "div"), s(1, "Please enter a name."), o());
}
function ne(e, a) {
  e & 1 && (r(0, "div"), s(1, "The name is too long."), o());
}
function oe(e, a) {
  e & 1 && (r(0, "div"), s(1, "Only letters and spaces are allowed."), o());
}
function re(e, a) {
  if (
    (e & 1 &&
      (r(0, "div", 17),
      d(1, ie, 2, 0, "div", 18)(2, ne, 2, 0, "div", 18)(3, oe, 2, 0, "div", 18),
      o()),
    e & 2)
  ) {
    let t = c(2);
    n(1),
      p("ngIf", t.isFieldHasError(t.nameForm, "name", "required")),
      n(1),
      p("ngIf", t.isFieldHasError(t.nameForm, "name", "maxlength")),
      n(1),
      p("ngIf", t.isFieldHasError(t.nameForm, "name", "nameErr"));
  }
}
function ae(e, a) {
  if (e & 1) {
    let t = x();
    r(0, "div", 19)(1, "button", 20),
      u(2, "async"),
      s(3, "Save"),
      o(),
      r(4, "button", 21),
      g("click", function () {
        v(t);
        let l = c(2);
        return h(l.cancelEditing());
      }),
      u(5, "async"),
      s(6, "Cancel"),
      o()();
  }
  if (e & 2) {
    let t = c(2);
    n(1),
      p("disabled", t.nameForm.invalid || _(2, 2, t.isSubmitInProgress$)),
      n(3),
      p("disabled", _(5, 4, t.isSubmitInProgress$));
  }
}
var se = (e) => ({ "name-input-editable": e }),
  le = (e) => ({ "border-color": e });
function pe(e, a) {
  if (e & 1) {
    let t = x();
    r(0, "div", 6)(1, "figure", 7),
      C(2, "img", 8),
      r(3, "form", 9),
      g("submit", function (l) {
        v(t);
        let m = c();
        return h(m.onSubmit(l));
      }),
      C(4, "input", 10),
      d(5, re, 4, 3, "div", 11)(6, ae, 7, 6, "div", 12),
      o()(),
      r(7, "div", 13)(8, "div", 14)(9, "span"),
      s(10, "User Email: "),
      o(),
      s(11),
      o(),
      r(12, "div", 15)(13, "span"),
      s(14, "User ID: "),
      o(),
      s(15),
      o(),
      r(16, "div", 16)(17, "span"),
      s(18, "Creation Date: "),
      o(),
      s(19),
      u(20, "date"),
      o()()();
  }
  if (e & 2) {
    let t = a.ngIf,
      i = c();
    n(2),
      E("alt", t.name),
      n(1),
      p("formGroup", i.nameForm),
      n(1),
      p("readonly", !i.isNameEditable)("ngClass", y(13, se, i.isNameEditable))(
        "ngStyle",
        y(15, le, i.isFieldInvalid(i.nameForm, "email") ? "red" : "")
      ),
      n(1),
      p("ngIf", i.isFieldInvalid(i.nameForm, "name")),
      n(1),
      p("ngIf", i.isNameEditable),
      n(5),
      f(t.email),
      n(4),
      f(t.uid),
      n(4),
      f(w(20, 10, t.createdAt, "medium"));
  }
}
function me(e, a) {
  if (e & 1) {
    let t = x();
    r(0, "button", 22),
      g("click", function () {
        v(t);
        let l = c();
        return h(l.editName());
      }),
      s(1, "Edit Name"),
      o();
  }
}
function ce(e, a) {
  if (
    (e & 1 &&
      (r(0, "div", 23)(1, "h1", 24), s(2), o(), r(3, "p", 25), s(4), o()()),
    e & 2)
  ) {
    let t = a.ngIf;
    n(2), f(t.type), n(2), f(t.message);
  }
}
var Pe = (() => {
  let a = class a {
    constructor(i, l, m, P) {
      (this.store = i),
        (this.router = l),
        (this.fb = m),
        (this.checkFieldSrv = P),
        (this.isNameEditable = !1),
        (this.isFieldInvalid = this.checkFieldSrv.isFieldInvalid),
        (this.isFieldHasError = this.checkFieldSrv.isFieldHasError);
    }
    ngOnInit() {
      (this.profile$ = this.store.select(Q)),
        (this.error$ = this.store.select(X)),
        (this.isSubmitInProgress$ = this.store.select(Y)),
        this.initializeForm(),
        this.subscribeProfileState();
    }
    initializeForm() {
      this.nameForm = this.fb.group({
        name: ["", [S.required, S.maxLength(40), K()]],
      });
    }
    subscribeProfileState() {
      this.profileSubscription$ = this.profile$.subscribe((i) => {
        i || this.router.navigate(["/"]),
          (this.isNameSetSubscription$ = this.store.select(W).subscribe((l) => {
            l ||
              (this.nameForm.get("name")?.setValue(i?.name),
              this.store.dispatch(te()));
          }));
      });
    }
    editName() {
      this.isNameEditable = !0;
    }
    onSubmit(i) {
      i.preventDefault(),
        this.nameForm.invalid ||
          (this.store.dispatch(
            Z({ payload: this.nameForm.get("name")?.value })
          ),
          this.store.dispatch(ee()),
          (this.isNameEditable = !1));
    }
    cancelEditing() {
      (this.isNameEditable = !1),
        this.profileSubscription$.unsubscribe(),
        this.subscribeProfileState();
    }
    logout() {
      this.store.dispatch(q()), this.store.dispatch(J());
    }
    ngOnDestroy() {
      this.profileSubscription$.unsubscribe(),
        this.isNameSetSubscription$.unsubscribe();
    }
  };
  (a.ɵfac = function (l) {
    return new (l || a)(b(D), b($), b(U), b(L));
  }),
    (a.ɵcmp = I({
      type: a,
      selectors: [["app-profile"]],
      standalone: !0,
      features: [F],
      decls: 9,
      vars: 7,
      consts: [
        [1, "wrapper"],
        [1, "container"],
        ["class", "profile", 4, "ngIf"],
        [
          "type",
          "button",
          "class",
          "green-button shadow-button profile-edit-button profile-button",
          3,
          "click",
          4,
          "ngIf",
        ],
        [
          "type",
          "button",
          1,
          "green-button",
          "shadow-button",
          "profile-logout-button",
          "profile-button",
          3,
          "click",
        ],
        ["class", "error", 4, "ngIf"],
        [1, "profile"],
        [1, "profile-logo"],
        [
          "src",
          "assets/icons/user-logo.png",
          "width",
          "223",
          1,
          "profile-img",
          3,
          "alt",
        ],
        [1, "name-form", 3, "formGroup", "submit"],
        [
          "formControlName",
          "name",
          "name",
          "name",
          "type",
          "text",
          1,
          "name-input",
          3,
          "readonly",
          "ngClass",
          "ngStyle",
        ],
        ["class", "invalid-feedback", 4, "ngIf"],
        ["class", "buttons-container", 4, "ngIf"],
        [1, "profile-info"],
        [1, "profile-info-email"],
        [1, "profile-info-uid"],
        [1, "profile-info-createdAt"],
        [1, "invalid-feedback"],
        [4, "ngIf"],
        [1, "buttons-container"],
        [
          "type",
          "submit",
          1,
          "save-new-name",
          "green-button",
          "shadow-button",
          "edit-profile-button",
          3,
          "disabled",
        ],
        [
          "type",
          "button",
          1,
          "cancel-editing",
          "green-button",
          "shadow-button",
          "edit-profile-button",
          3,
          "disabled",
          "click",
        ],
        [
          "type",
          "button",
          1,
          "green-button",
          "shadow-button",
          "profile-edit-button",
          "profile-button",
          3,
          "click",
        ],
        [1, "error"],
        [1, "error-type"],
        [1, "error-message"],
      ],
      template: function (l, m) {
        l & 1 &&
          (r(0, "div", 0)(1, "div", 1),
          d(2, pe, 21, 17, "div", 2),
          u(3, "async"),
          d(4, me, 2, 0, "button", 3),
          r(5, "button", 4),
          g("click", function () {
            return m.logout();
          }),
          s(6, "Logout"),
          o(),
          d(7, ce, 5, 2, "div", 5),
          u(8, "async"),
          o()()),
          l & 2 &&
            (n(2),
            p("ngIf", _(3, 3, m.profile$)),
            n(2),
            p("ngIf", !m.isNameEditable),
            n(3),
            p("ngIf", _(8, 5, m.error$)));
      },
      dependencies: [V, N, M, O, k, T, G, z, A, B, j, H, R],
      styles: [
        ".wrapper[_ngcontent-%COMP%]{width:800px;min-height:280px;position:relative;margin:50px auto 0;padding:20px;background-color:#eee;border-radius:5px}.profile[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.profile-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;font-family:Roboto,sans-serif;font-size:18px;font-style:normal;font-weight:700;line-height:normal;color:#27ae60}.profile-info-email[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .profile-info-uid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .profile-info-createdAt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#797979;font-family:Roboto,sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:normal}.name-form[_ngcontent-%COMP%]{margin:15px 0 30px}.name-input[_ngcontent-%COMP%]{margin-bottom:5px;border:none;font-family:Roboto,sans-serif;font-size:22px;font-style:normal;font-weight:700;line-height:normal;color:#797979;text-align:center;background-color:#eee}.name-input-editable[_ngcontent-%COMP%]{background-color:#fff}.profile-button[_ngcontent-%COMP%]{width:120px;height:30px;position:absolute}.profile-logout-button[_ngcontent-%COMP%]{position:absolute;top:25px;right:25px}.profile-edit-button[_ngcontent-%COMP%]{position:absolute;bottom:13px;left:130px}.buttons-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:10px;position:absolute;left:125px;bottom:10px}.edit-profile-button[_ngcontent-%COMP%]{width:60px;height:25px}",
      ],
    }));
  let e = a;
  return e;
})();
export { Pe as ProfileComponent };
