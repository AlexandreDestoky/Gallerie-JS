// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  id: 1,
  title: "Titre Image 1",
  text: "Texte Image 1",
  src: "images/image1.jpg",
  alt: "Alternatif 1"
}, {
  id: 2,
  title: "Titre Image 2",
  text: "Texte Image 2",
  src: "images/image2.jpg",
  alt: "Alternatif 2"
}, {
  id: 3,
  title: "Titre Image 3",
  text: "Texte Image 3",
  src: "images/image3.jpg",
  alt: "Alternatif 3"
}, {
  id: 4,
  title: "Titre Image 4",
  text: "Texte Image 4",
  src: "images/image4.jpg",
  alt: "Alternatif 4"
}, {
  id: 5,
  title: "Titre Image 5",
  text: "Texte Image 5",
  src: "images/image5.jpg",
  alt: "Alternatif 5"
}];
exports.default = _default;
},{}],"js/modules/templates/slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//Template du SLIDER (Grande Image)
var _default = "\n<figure>\n  <img src=\"{{src}}\" alt=\"{{alt}}\"/>\n  <figcaption>\n    <a href=\"#\" class=\"icon icon-info\">\n      <i class=\"material-icons\">add_circle</i>\n    </a>\n    <div>{{text}}</div>\n  </figcaption>\n</figure>\n";
exports.default = _default;
},{}],"js/modules/templates/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//Template MENU (Image sur le cote)
var _default = "\n<a href=\"#\" class=\"\">\n  <img src=\"{{src}}\" alt=\"{{alt}}\" />\n</a>\n";
exports.default = _default;
},{}],"js/modules/Image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slider = _interopRequireDefault(require("./templates/slider"));

var _menu = _interopRequireDefault(require("./templates/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Image = /*#__PURE__*/function () {
  function Image(data) {
    _classCallCheck(this, Image);

    this.parent = data.parent;
    this.elSlider;
    this.elMenu; //Données de data.image

    this.id = data.image.id;
    this.title = data.image.title;
    this.text = data.image.text;
    this.src = data.image.src;
    this.alt = data.image.alt; //Template

    this.sliderTemplate = _slider.default;
    this.menuTemplate = _menu.default;
  }
  /**
   * Met les données dans les emplacement du template
   */


  _createClass(Image, [{
    key: "_replaceInTemplate",
    value: function _replaceInTemplate() {
      for (var propriete in this) {
        this.sliderTemplate = this.sliderTemplate.replace("{{".concat(propriete, "}}"), this[propriete]);
        this.menuTemplate = this.menuTemplate.replace("{{".concat(propriete, "}}"), this[propriete]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      this._replaceInTemplate(); //Pour le Slider


      this.elSlider = document.createElement("li");
      this.elSlider.setAttribute("id", this.id);
      this.elSlider.classList.add("slide");
      this.elSlider.innerHTML = this.sliderTemplate;
      this.parent.elementsSlider.append(this.elSlider); //Pour le menu

      this.elMenu = document.createElement("li");
      this.elMenu.innerHTML = this.menuTemplate;
      this.parent.elementsMenu.append(this.elMenu);

      this._activerBtns();
    }
    /**
     * Toggle d'Affichage du texte de l'image
     */

  }, {
    key: "toggleText",
    value: function toggleText() {
      var text = this.elSlider.querySelector(".slide figcaption");
      var icon = text.querySelector("i");

      if (icon.innerText == "add_circle") {
        text.style.right = "0";
        icon.innerText = "remove_circle";
      } else {
        text.style.right = "-20%";
        icon.innerText = "add_circle";
      }
    }
    /**
     * Activation éléments interactifs
     * (bouton "+" d'affichage de texte de l'image)
     */

  }, {
    key: "_activerBtns",
    value: function _activerBtns() {
      var _this = this;

      this.elSlider.querySelector(".icon-info").addEventListener("click", function () {
        _this.toggleText();
      });
    }
  }]);

  return Image;
}();

exports.default = Image;
},{"./templates/slider":"js/modules/templates/slider.js","./templates/menu":"js/modules/templates/menu.js"}],"js/modules/templates/gallerie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//Template de la gallerie
var _default = "\n<div data-slider=\"slider1\">\n  <div class=\"slider fullsize\">\n\n    <!-- SLIDER (Grande Image) -->\n    <div class=\"slides\">\n      <ul style=\"width: 500%\" class=\"elementsSlider\">\n\n      </ul>\n    </div>\n\n\n    <!-- MENU (Image sur le cote) -->\n    <div class=\"menu\">\n      <div class=\"slider-menu\">\n        <h1>Titre</h1>\n        <ul class=\"slides elementsMenu\">\n          \n        </ul>\n      </div>\n    </div>\n\n\n    <!-- NAVIGATION (Bouton d'action) -->\n    <div class=\"navigation\">\n      <div>\n        <ul class=\"navigation\">\n          <li class=\"previous\">\n            <a href=\"#\"><i class=\"material-icons\">fast_rewind</i></a>\n          </li>\n          <li class=\"stop active\">\n            <a href=\"#\"><i class=\"material-icons\">pause_circle_filled</i></a>\n          </li>\n          <li class=\"play\">\n            <a href=\"#\"><i class=\"material-icons\">play_circle_filled</i></a>\n          </li>\n          <li class=\"next\">\n            <a href=\"#\"><i class=\"material-icons\">fast_forward</i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n";
exports.default = _default;
},{}],"js/modules/Gallerie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Image = _interopRequireDefault(require("./Image"));

var _gallerie = _interopRequireDefault(require("./templates/gallerie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gallerie = /*#__PURE__*/function () {
  function Gallerie(data) {
    _classCallCheck(this, Gallerie);

    this.el = document.querySelector(data.el);
    this.elementsSlider;
    this.elementsMenu;
    this.intervalLength = 1500;
    this.interval;
    this.diapoPlay = false;
    this.cpt = 0;
    this.title;
    this.images = [];
    this.loadImages(data.images);
    this.template = _gallerie.default;
    this.render();
  }
  /**
   *
   * @param {Toutes les images de data.js} images
   * Remplissage de this.image avec toutes les image
   */


  _createClass(Gallerie, [{
    key: "loadImages",
    value: function loadImages(images) {
      var _iterator = _createForOfIteratorHelper(images),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var image = _step.value;
          this.images.push(new _Image.default({
            parent: this,
            image: image
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "render",
    value: function render() {
      //on met le template de la gallerie dans #app
      this.el.innerHTML = this.template; //il existe pour le naviguateur
      //comme this.el existe, on peut faire des querySelector dessus

      this.elementsSlider = this.el.querySelector(".elementsSlider");
      this.elementsMenu = this.el.querySelector(".elementsMenu"); // Rendu de chaque image

      var _iterator2 = _createForOfIteratorHelper(this.images),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var image = _step2.value;
          image.render();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this._titleUpdate();

      this._activerBtns();

      this._menuActivation();
    }
    /**
     * Activation des liens du Menu
     */

  }, {
    key: "_menuActivation",
    value: function _menuActivation() {
      var _this = this;

      var _iterator3 = _createForOfIteratorHelper(this.images),
          _step3;

      try {
        var _loop = function _loop() {
          var image = _step3.value;
          var imageMenu = image.elMenu;
          imageMenu.querySelector("a").addEventListener("click", function () {
            _this.cpt = image.id - 1;
            _this.elementsSlider.style.left = "-".concat(_this.cpt * 100, "%");

            _this._titleUpdate();
          });
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * Met a jour le titre en fonction de l'image
     */

  }, {
    key: "_titleUpdate",
    value: function _titleUpdate() {
      this.title = this.el.querySelector(".slider-menu h1");
      this.title.innerText = this.images[this.cpt].title;
    }
    /**
     * Image suivante
     */

  }, {
    key: "next",
    value: function next() {
      this.cpt++;
      if (this.cpt == this.images.length) this.cpt = 0;
      this.elementsSlider.style.left = "-".concat(this.cpt * 100, "%");

      this._titleUpdate();
    }
    /**
     * Image précédente
     */

  }, {
    key: "previous",
    value: function previous() {
      this.cpt--;
      if (this.cpt == -1) this.cpt = this.images.length - 1;
      this.elementsSlider.style.left = "-".concat(this.cpt * 100, "%");

      this._titleUpdate();
    }
    /**
     * Lancement diaporama
     */

  }, {
    key: "play",
    value: function play() {
      var _this2 = this;

      //si le diapo n'est pas déjà en marche
      if (this.diapoPlay == false) {
        this.next(); // on lance directement une occurence

        this.diapoPlay = true;

        this._toggleActive();

        this.interval = setInterval(function () {
          _this2.next();
        }, this.intervalLength);
      }
    }
    /**
     * Interruption diaporama
     */

  }, {
    key: "pause",
    value: function pause() {
      clearInterval(this.interval);
      if (this.diapoPlay == true) this._toggleActive(); //

      this.diapoPlay = false;
    }
    /**
     * Toggle classes active pour BTN PLAY et BTN STOP
     */

  }, {
    key: "_toggleActive",
    value: function _toggleActive() {
      this.el.querySelector(".play").classList.toggle("active");
      this.el.querySelector(".stop").classList.toggle("active");
    }
    /**
     * Activation éléments interactifs
     * (bouton de naviguation)
     */

  }, {
    key: "_activerBtns",
    value: function _activerBtns() {
      var _this3 = this;

      //Click sur BTN NEXT
      this.el.querySelector(".next").addEventListener("click", function () {
        _this3.next();
      }); //Click sur BTN PREVIOUS

      this.el.querySelector(".previous").addEventListener("click", function () {
        _this3.previous();
      }); //Click sur BTN PLAY

      this.el.querySelector(".play").addEventListener("click", function () {
        _this3.play();
      }); //Click sur BTN STOP

      this.el.querySelector(".stop").addEventListener("click", function () {
        _this3.pause();
      });
    }
  }]);

  return Gallerie;
}();

exports.default = Gallerie;
},{"./Image":"js/modules/Image.js","./templates/gallerie":"js/modules/templates/gallerie.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data"));

var _Gallerie = _interopRequireDefault(require("./modules/Gallerie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Gallerie.default({
  el: "#app",
  images: _data.default
});
},{"./data":"js/data.js","./modules/Gallerie":"js/modules/Gallerie.js"}],"../../../../../../../Users/Asus/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59690" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../Users/Asus/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map