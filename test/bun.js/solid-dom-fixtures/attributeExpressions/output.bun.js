const _tmpl = _template$(
  '<div id="main"><h1 class="base" disabled readonly><a href="/">Welcome</a></h1></div>',
  6
);
var _tmpl$2 = _template$(
  '<div><div/><div/><div innerHTML="&lt;div/&gt;"/></div>',
  2
);
var _tmpl$2 = _template$("<div/>", 0);
const _tmpl$3 = _template$('<div class="hi"/>', 0);
var _tmpl$5 = _template$('<div class="a" class="b"/>', 0);
var _tmpl$5 = _template$('<div textContent="Hi"/>', 0);
const _tmpl$6 = _template$("<div use:something use:zero=0/>", 0);
var _tmpl$8 = _template$('<input type="checkbox" checked/>', 0);
var _tmpl$8 = _template$('<input type="checkbox"/>', 0);
var _tmpl$10 = _template$('<div class="`a">`$`</div>', 2);
var _tmpl$10 = _template$(
  '<button class="static" type="button">Write</button>',
  2
);
const _tmpl$11 = _template$("<button>Hi</button>", 2);
const selected = true;
const id = "my-h1";
let link;
const template = () => {
  const _el = _tmpl.cloneNode(true);
  const _el$1 = _el.firstChild;
  const _el$2 = _el$1.nextSibling;
  effect(() => {
    return setAttribute(_el, "classList", { selected: unknown });
  });
  setAttribute(_el$1, "id", id);
  effect(() => {
    return setAttribute(_el$1, "title", welcoming());
  });
  effect(() => {
    return setAttribute(_el$1, "classList", { dynamic: dynamic(), selected });
  });
  setAttribute(_el$2, "ref", link);
  effect(() => {
    return setAttribute(_el$2, "classList", { "ccc ddd": true });
  });
  setAttribute(_el$2, "readonly", value);
  return _el;
};
const template2 = () => {
  const _el = _tmpl$1.cloneNode(true);
  const _el$1 = _el.firstChild;
  setAttribute(_el, "textContent", rowId);
  effect(() => {
    return setAttribute(_el$1, "textContent", row.label);
  });
  return _el;
};
const template3 = () => {
  const _el = _tmpl$2.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "id", state.id);
  });
  effect(() => {
    return setAttribute(_el, "name", state.name);
  });
  effect(() => {
    return setAttribute(_el, "textContent", state.content);
  });
  return _el;
};
const template4 = () => {
  const _el = _tmpl$3.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "className", state.class);
  });
  effect(() => {
    return setAttribute(_el, "classList", { "ccc:ddd": true });
  });
  return _el;
};
const template5 = _tmpl$5.cloneNode(true);
const template6 = () => {
  const _el = _tmpl$5.cloneNode(true);
  return _el;
};
const template7 = () => {
  const _el = _tmpl$2.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "style:padding-top", props.top);
  });
  effect(() => {
    return setAttribute(_el, "class:my-class", props.active);
  });
  return _el;
};
let refTarget;
const template8 = () => {
  const _el = _tmpl$2.cloneNode(true);
  setAttribute(_el, "ref", refTarget);
  return _el;
};
const template9 = () => {
  const _el = _tmpl$2.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "ref", (e) => console.log(e));
  });
  return _el;
};
const template10 = () => {
  const _el = _tmpl$2.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "ref", refFactory());
  });
  return _el;
};
const template11 = () => {
  const _el = _tmpl$6.cloneNode(true);
  setAttribute(_el, "use:another", thing);
  return _el;
};
const template12 = () => {
  const _el = _tmpl$2.cloneNode(true);
  setAttribute(_el, "prop:htmlFor", thing);
  return _el;
};
const template13 = _tmpl$8.cloneNode(true);
const template14 = () => {
  const _el = _tmpl$8.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "checked", state.visible);
  });
  return _el;
};
const template15 = _tmpl$10.cloneNode(true);
const template16 = () => {
  const _el = _tmpl$10.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "classList", {
      hi: "k",
    });
  });
  return _el;
};
const template17 = () => {
  const _el = _tmpl$11.cloneNode(true);
  effect(() => {
    return setAttribute(_el, "classList", {
      a: true,
      b: true,
      c: true,
    });
  });
  effect(() => {
    return (_el.$$click = increment);
  });
  return _el;
};
const template18 = _tmpl$2.cloneNode(true);
