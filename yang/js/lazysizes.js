/**
 * @license
 lazysizes - v5.3.2 */
'use strict';
!function(window) {
  var lazySizes = function(window, document, NativeDate) {
    var lazysizes;
    var lazySizesConfig;
    if (function() {
      var prop;
      var lazySizesDefaults = {
        lazyClass : "lazyload",
        loadedClass : "lazyloaded",
        loadingClass : "lazyloading",
        preloadClass : "lazypreload",
        errorClass : "lazyerror",
        autosizesClass : "lazyautosizes",
        fastLoadedClass : "ls-is-cached",
        iframeLoadMode : 0,
        srcAttr : "data-src",
        srcsetAttr : "data-srcset",
        sizesAttr : "data-sizes",
        minSize : 40,
        customMedia : {},
        init : true,
        expFactor : 1.5,
        hFac : .8,
        loadMode : 2,
        loadHidden : true,
        ricTimeout : 0,
        throttleDelay : 125
      };
      lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};
      for (prop in lazySizesDefaults) {
        if (!(prop in lazySizesConfig)) {
          lazySizesConfig[prop] = lazySizesDefaults[prop];
        }
      }
    }(), !document || !document.getElementsByClassName) {
      return {
        init : function() {
        },
        cfg : lazySizesConfig,
        noSupport : true
      };
    }
    var docElem = document.documentElement;
    var supportPicture = window.HTMLPictureElement;
    /** @type {string} */
    var _addEventListener = "addEventListener";
    /** @type {string} */
    var _getAttribute = "getAttribute";
    var addEventListener = window[_addEventListener].bind(window);
    var setTimeout = window.setTimeout;
    var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
    var requestIdleCallback = window.requestIdleCallback;
    /** @type {!RegExp} */
    var opacityRe = /^picture$/i;
    /** @type {!Array} */
    var loadEvents = ["load", "error", "lazyincluded", "_lazyloaded"];
    var regClassCache = {};
    /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): ?|null), S=): undefined} */
    var forEach = Array.prototype.forEach;
    /**
     * @param {!Object} ele
     * @param {string} cls
     * @return {?}
     */
    var hasClass = function(ele, cls) {
      if (!regClassCache[cls]) {
        /** @type {!RegExp} */
        regClassCache[cls] = new RegExp("(\\s|^)" + cls + "(\\s|$)");
      }
      return regClassCache[cls].test(ele[_getAttribute]("class") || "") && regClassCache[cls];
    };
    /**
     * @param {!Object} ele
     * @param {string} cls
     * @return {undefined}
     */
    var addClass = function(ele, cls) {
      if (!hasClass(ele, cls)) {
        ele.setAttribute("class", (ele[_getAttribute]("class") || "").trim() + " " + cls);
      }
    };
    /**
     * @param {!Object} ele
     * @param {string} cls
     * @return {undefined}
     */
    var removeClass = function(ele, cls) {
      var reg;
      if (reg = hasClass(ele, cls)) {
        ele.setAttribute("class", (ele[_getAttribute]("class") || "").replace(reg, " "));
      }
    };
    /**
     * @param {!Object} dom
     * @param {!Function} fn
     * @param {boolean} add
     * @return {undefined}
     */
    var addRemoveLoadEvents = function(dom, fn, add) {
      /** @type {string} */
      var action = add ? _addEventListener : "removeEventListener";
      if (add) {
        addRemoveLoadEvents(dom, fn);
      }
      loadEvents.forEach(function(evt) {
        dom[action](evt, fn);
      });
    };
    /**
     * @param {!Object} elem
     * @param {string} name
     * @param {!Object} detail
     * @param {?} noBubbles
     * @param {?} noCancelable
     * @return {?}
     */
    var triggerEvent = function(elem, name, detail, noBubbles, noCancelable) {
      var event = document.createEvent("Event");
      if (!detail) {
        detail = {};
      }
      detail.instance = lazysizes;
      event.initEvent(name, !noBubbles, !noCancelable);
      /** @type {!Object} */
      event.detail = detail;
      elem.dispatchEvent(event);
      return event;
    };
    /**
     * @param {!Object} el
     * @param {string} data
     * @return {undefined}
     */
    var updatePolyfill = function(el, data) {
      var polyfill;
      if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
        if (data && data.src && !el[_getAttribute]("srcset")) {
          el.setAttribute("srcset", data.src);
        }
        polyfill({
          reevaluate : true,
          elements : [el]
        });
      } else {
        if (data && data.src) {
          el.src = data.src;
        }
      }
    };
    /**
     * @param {!Node} elem
     * @param {string} style
     * @return {?}
     */
    var getCSS = function(elem, style) {
      return (getComputedStyle(elem, null) || {})[style];
    };
    /**
     * @param {!Object} elem
     * @param {!Object} parent
     * @param {string} width
     * @return {?}
     */
    var getWidth = function(elem, parent, width) {
      width = width || elem.offsetWidth;
      for (; width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth;) {
        width = parent.offsetWidth;
        parent = parent.parentNode;
      }
      return width;
    };
    var rAF = function() {
      var running;
      var i;
      /** @type {!Array} */
      var args = [];
      /** @type {!Array} */
      var result = [];
      /** @type {!Array} */
      var cells = args;
      /**
       * @return {undefined}
       */
      var run = function() {
        var after = cells;
        /** @type {!Array} */
        cells = args.length ? result : args;
        /** @type {boolean} */
        running = true;
        /** @type {boolean} */
        i = false;
        for (; after.length;) {
          after.shift()();
        }
        /** @type {boolean} */
        running = false;
      };
      /**
       * @param {!Function} fn
       * @param {?} queue
       * @return {undefined}
       */
      var rafBatch = function(fn, queue) {
        if (running && !queue) {
          fn.apply(this, arguments);
        } else {
          cells.push(fn);
          if (!i) {
            /** @type {boolean} */
            i = true;
            (document.hidden ? setTimeout : requestAnimationFrame)(run);
          }
        }
      };
      /** @type {function(): undefined} */
      rafBatch._lsFlush = run;
      return rafBatch;
    }();
    /**
     * @param {!Function} fn
     * @param {boolean} simple
     * @return {?}
     */
    var rAFIt = function(fn, simple) {
      return simple ? function() {
        rAF(fn);
      } : function() {
        var elem = this;
        /** @type {!Arguments} */
        var originalArguments = arguments;
        rAF(function() {
          fn.apply(elem, originalArguments);
        });
      };
    };
    /**
     * @param {!Function} fn
     * @return {?}
     */
    var throttle = function(fn) {
      var a;
      /** @type {number} */
      var i = 0;
      var end = lazySizesConfig.throttleDelay;
      var loadMode = lazySizesConfig.ricTimeout;
      /**
       * @return {undefined}
       */
      var run = function() {
        /** @type {boolean} */
        a = false;
        /** @type {number} */
        i = NativeDate.now();
        fn();
      };
      var idleCallback = requestIdleCallback && loadMode > 49 ? function() {
        requestIdleCallback(run, {
          timeout : loadMode
        });
        if (loadMode !== lazySizesConfig.ricTimeout) {
          loadMode = lazySizesConfig.ricTimeout;
        }
      } : rAFIt(function() {
        setTimeout(run);
      }, true);
      return function(force) {
        var timeout;
        if (force = force === true) {
          /** @type {number} */
          loadMode = 33;
        }
        if (a) {
          return;
        }
        /** @type {boolean} */
        a = true;
        /** @type {number} */
        timeout = end - (NativeDate.now() - i);
        if (timeout < 0) {
          /** @type {number} */
          timeout = 0;
        }
        if (force || timeout < 9) {
          idleCallback();
        } else {
          setTimeout(idleCallback, timeout);
        }
      };
    };
    /**
     * @param {!Function} func
     * @return {?}
     */
    var debounce = function(func) {
      var timeout;
      var timestamp;
      /** @type {number} */
      var wait = 99;
      /**
       * @return {undefined}
       */
      var run = function() {
        /** @type {null} */
        timeout = null;
        func();
      };
      /**
       * @return {undefined}
       */
      var later = function() {
        /** @type {number} */
        var last = NativeDate.now() - timestamp;
        if (last < wait) {
          setTimeout(later, wait - last);
        } else {
          (requestIdleCallback || run)(run);
        }
      };
      return function() {
        /** @type {number} */
        timestamp = NativeDate.now();
        if (!timeout) {
          timeout = setTimeout(later, wait);
        }
      };
    };
    var loader = function() {
      var preloadElems;
      var isCompleted;
      var _takingTooLongTimeout;
      var loadMode;
      var e;
      var eLvW;
      var elvH;
      var eLtop;
      var eLleft;
      var eLright;
      var eLbottom;
      var isHidden;
      /** @type {!RegExp} */
      var rnoType = /^img$/i;
      /** @type {!RegExp} */
      var rinputs = /^iframe$/i;
      /** @type {boolean} */
      var E = "onscroll" in window && !/(gle|ing)bot/.test(navigator.userAgent);
      /** @type {number} */
      var defaultExpand = 0;
      /** @type {number} */
      var currentExpand = 0;
      /** @type {number} */
      var isLoading = 0;
      /** @type {number} */
      var lowRuns = -1;
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      var separatorContextHandler = function(e) {
        isLoading--;
        if (!e || isLoading < 0 || !e.target) {
          /** @type {number} */
          isLoading = 0;
        }
      };
      /**
       * @param {!Node} elem
       * @return {?}
       */
      var getCSS = function(elem) {
        if (isHidden == null) {
          /** @type {boolean} */
          isHidden = getCSS(document.body, "visibility") == "hidden";
        }
        return isHidden || !(getCSS(elem.parentNode, "visibility") == "hidden" && getCSS(elem, "visibility") == "hidden");
      };
      /**
       * @param {!Node} elem
       * @param {!Object} elemExpand
       * @return {?}
       */
      var isNestedVisible = function(elem, elemExpand) {
        var outerRect;
        /** @type {!Node} */
        var parent = elem;
        var visible = getCSS(elem);
        /** @type {number} */
        eLtop = eLtop - elemExpand;
        eLbottom = eLbottom + elemExpand;
        /** @type {number} */
        eLleft = eLleft - elemExpand;
        eLright = eLright + elemExpand;
        for (; visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem;) {
          /** @type {boolean} */
          visible = (getCSS(parent, "opacity") || 1) > 0;
          if (visible && getCSS(parent, "overflow") != "visible") {
            outerRect = parent.getBoundingClientRect();
            /** @type {boolean} */
            visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
          }
        }
        return visible;
      };
      /**
       * @return {undefined}
       */
      var checkElements = function() {
        var eLlen;
        var i;
        var rect;
        var autoLoadElem;
        var loadedSomething;
        var elemExpand;
        var elemNegativeExpand;
        var elemExpandVal;
        var beforeExpandVal;
        var defaultExpand;
        var preloadExpand;
        var hFac;
        var lazyloadElems = lazysizes.elements;
        if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
          /** @type {number} */
          i = 0;
          lowRuns++;
          for (; i < eLlen; i++) {
            if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
              continue;
            }
            if (!E || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
              unveilElement(lazyloadElems[i]);
              continue;
            }
            if (!(elemExpandVal = lazyloadElems[i][_getAttribute]("data-expand")) || !(elemExpand = elemExpandVal * 1)) {
              elemExpand = currentExpand;
            }
            if (!defaultExpand) {
              defaultExpand = !lazySizesConfig.expand || lazySizesConfig.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesConfig.expand;
              lazysizes._defEx = defaultExpand;
              /** @type {number} */
              preloadExpand = defaultExpand * lazySizesConfig.expFactor;
              hFac = lazySizesConfig.hFac;
              /** @type {null} */
              isHidden = null;
              if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
                /** @type {number} */
                currentExpand = preloadExpand;
                /** @type {number} */
                lowRuns = 0;
              } else {
                if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
                  currentExpand = defaultExpand;
                } else {
                  /** @type {number} */
                  currentExpand = defaultExpand;
                }
              }
            }
            if (beforeExpandVal !== elemExpand) {
              eLvW = innerWidth + elemExpand * hFac;
              elvH = innerHeight + elemExpand;
              /** @type {number} */
              elemNegativeExpand = elemExpand * -1;
              beforeExpandVal = elemExpand;
            }
            rect = lazyloadElems[i].getBoundingClientRect();
            if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
              unveilElement(lazyloadElems[i]);
              /** @type {boolean} */
              loadedSomething = true;
              if (isLoading > 9) {
                break;
              }
            } else {
              if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != "auto"))) {
                autoLoadElem = preloadElems[0] || lazyloadElems[i];
              }
            }
          }
          if (autoLoadElem && !loadedSomething) {
            unveilElement(autoLoadElem);
          }
        }
      };
      var throttledCheckElements = throttle(checkElements);
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      var switchLoadingClass = function(e) {
        var elem = e.target;
        if (elem._lazyCache) {
          delete elem._lazyCache;
          return;
        }
        separatorContextHandler(e);
        addClass(elem, lazySizesConfig.loadedClass);
        removeClass(elem, lazySizesConfig.loadingClass);
        addRemoveLoadEvents(elem, rafSwitchLoadingClass);
        triggerEvent(elem, "lazyloaded");
      };
      var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
      /**
       * @param {!Event} e
       * @return {undefined}
       */
      var rafSwitchLoadingClass = function(e) {
        rafedSwitchLoadingClass({
          target : e.target
        });
      };
      /**
       * @param {!Object} frame
       * @param {string} url
       * @return {undefined}
       */
      var loadFrameFromURL = function(frame, url) {
        var a = frame.getAttribute("data-load-mode") || lazySizesConfig.iframeLoadMode;
        if (a == 0) {
          frame.contentWindow.location.replace(url);
        } else {
          if (a == 1) {
            /** @type {string} */
            frame.src = url;
          }
        }
      };
      /**
       * @param {!Object} source
       * @return {undefined}
       */
      var handleSources = function(source) {
        var customMedia;
        var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);
        if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]("data-media") || source[_getAttribute]("media")]) {
          source.setAttribute("media", customMedia);
        }
        if (sourceSrcset) {
          source.setAttribute("srcset", sourceSrcset);
        }
      };
      var lazyUnveil = rAFIt(function(elem, detail, a, mainWnd, isImg) {
        var src;
        var srcset;
        var parent;
        var isPicture;
        var event;
        var allSelected;
        if (!(event = triggerEvent(elem, "lazybeforeunveil", detail)).defaultPrevented) {
          if (mainWnd) {
            if (a) {
              addClass(elem, lazySizesConfig.autosizesClass);
            } else {
              elem.setAttribute("sizes", mainWnd);
            }
          }
          srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
          src = elem[_getAttribute](lazySizesConfig.srcAttr);
          if (isImg) {
            parent = elem.parentNode;
            isPicture = parent && opacityRe.test(parent.nodeName || "");
          }
          allSelected = detail.firesLoad || "src" in elem && (srcset || src || isPicture);
          event = {
            target : elem
          };
          addClass(elem, lazySizesConfig.loadingClass);
          if (allSelected) {
            clearTimeout(_takingTooLongTimeout);
            _takingTooLongTimeout = setTimeout(separatorContextHandler, 2500);
            addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
          }
          if (isPicture) {
            forEach.call(parent.getElementsByTagName("source"), handleSources);
          }
          if (srcset) {
            elem.setAttribute("srcset", srcset);
          } else {
            if (src && !isPicture) {
              if (rinputs.test(elem.nodeName)) {
                loadFrameFromURL(elem, src);
              } else {
                elem.src = src;
              }
            }
          }
          if (isImg && (srcset || isPicture)) {
            updatePolyfill(elem, {
              src : src
            });
          }
        }
        if (elem._lazyRace) {
          delete elem._lazyRace;
        }
        removeClass(elem, lazySizesConfig.lazyClass);
        rAF(function() {
          var e = elem.complete && elem.naturalWidth > 1;
          if (!allSelected || e) {
            if (e) {
              addClass(elem, lazySizesConfig.fastLoadedClass);
            }
            switchLoadingClass(event);
            /** @type {boolean} */
            elem._lazyCache = true;
            setTimeout(function() {
              if ("_lazyCache" in elem) {
                delete elem._lazyCache;
              }
            }, 9);
          }
          if (elem.loading == "lazy") {
            isLoading--;
          }
        }, true);
      });
      /**
       * @param {!Object} elem
       * @return {undefined}
       */
      var unveilElement = function(elem) {
        if (elem._lazyRace) {
          return;
        }
        var detail;
        /** @type {boolean} */
        var isImg = rnoType.test(elem.nodeName);
        var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]("sizes"));
        /** @type {boolean} */
        var isAuto = sizes == "auto";
        if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]("src") || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
          return;
        }
        detail = triggerEvent(elem, "lazyunveilread").detail;
        if (isAuto) {
          autoSizer.updateElem(elem, true, elem.offsetWidth);
        }
        /** @type {boolean} */
        elem._lazyRace = true;
        isLoading++;
        lazyUnveil(elem, detail, isAuto, sizes, isImg);
      };
      var autosaveFc = debounce(function() {
        /** @type {number} */
        lazySizesConfig.loadMode = 3;
        throttledCheckElements();
      });
      /**
       * @return {undefined}
       */
      var onclickEdition = function() {
        if (lazySizesConfig.loadMode == 3) {
          /** @type {number} */
          lazySizesConfig.loadMode = 2;
        }
        autosaveFc();
      };
      /**
       * @return {undefined}
       */
      var onload = function() {
        if (isCompleted) {
          return;
        }
        if (NativeDate.now() - e < 999) {
          setTimeout(onload, 999);
          return;
        }
        /** @type {boolean} */
        isCompleted = true;
        /** @type {number} */
        lazySizesConfig.loadMode = 3;
        throttledCheckElements();
        addEventListener("scroll", onclickEdition, true);
      };
      return {
        _ : function() {
          /** @type {number} */
          e = NativeDate.now();
          lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
          preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + " " + lazySizesConfig.preloadClass);
          addEventListener("scroll", throttledCheckElements, true);
          addEventListener("resize", throttledCheckElements, true);
          addEventListener("pageshow", function(state) {
            if (state.persisted) {
              var args = document.querySelectorAll("." + lazySizesConfig.loadingClass);
              if (args.length && args.forEach) {
                requestAnimationFrame(function() {
                  args.forEach(function(element) {
                    if (element.complete) {
                      unveilElement(element);
                    }
                  });
                });
              }
            }
          });
          if (window.MutationObserver) {
            (new MutationObserver(throttledCheckElements)).observe(docElem, {
              childList : true,
              subtree : true,
              attributes : true
            });
          } else {
            docElem[_addEventListener]("DOMNodeInserted", throttledCheckElements, true);
            docElem[_addEventListener]("DOMAttrModified", throttledCheckElements, true);
            setInterval(throttledCheckElements, 999);
          }
          addEventListener("hashchange", throttledCheckElements, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(name) {
            document[_addEventListener](name, throttledCheckElements, true);
          });
          if (/d$|^c/.test(document.readyState)) {
            onload();
          } else {
            addEventListener("load", onload);
            document[_addEventListener]("DOMContentLoaded", throttledCheckElements);
            setTimeout(onload, 2E4);
          }
          if (lazysizes.elements.length) {
            checkElements();
            rAF._lsFlush();
          } else {
            throttledCheckElements();
          }
        },
        checkElems : throttledCheckElements,
        unveil : unveilElement,
        _aLSL : onclickEdition
      };
    }();
    var autoSizer = function() {
      var autosizesElems;
      var sizeElement = rAFIt(function(elem, t, event, width) {
        var thisDomEl;
        var j;
        var num_arrays;
        /** @type {string} */
        elem._lazysizesWidth = width;
        /** @type {string} */
        width = width + "px";
        elem.setAttribute("sizes", width);
        if (opacityRe.test(t.nodeName || "")) {
          thisDomEl = t.getElementsByTagName("source");
          /** @type {number} */
          j = 0;
          num_arrays = thisDomEl.length;
          for (; j < num_arrays; j++) {
            thisDomEl[j].setAttribute("sizes", width);
          }
        }
        if (!event.detail.dataAttr) {
          updatePolyfill(elem, event.detail);
        }
      });
      /**
       * @param {!Object} elem
       * @param {boolean} dataAttr
       * @param {string} width
       * @return {undefined}
       */
      var getSizeElement = function(elem, dataAttr, width) {
        var event;
        var parent = elem.parentNode;
        if (parent) {
          width = getWidth(elem, parent, width);
          event = triggerEvent(elem, "lazybeforesizes", {
            width : width,
            dataAttr : !!dataAttr
          });
          if (!event.defaultPrevented) {
            width = event.detail.width;
            if (width && width !== elem._lazysizesWidth) {
              sizeElement(elem, parent, event, width);
            }
          }
        }
      };
      /**
       * @return {undefined}
       */
      var updateElementsSizes = function() {
        var i;
        var len = autosizesElems.length;
        if (len) {
          /** @type {number} */
          i = 0;
          for (; i < len; i++) {
            getSizeElement(autosizesElems[i]);
          }
        }
      };
      var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
      return {
        _ : function() {
          autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
          addEventListener("resize", debouncedUpdateElementsSizes);
        },
        checkElems : debouncedUpdateElementsSizes,
        updateElem : getSizeElement
      };
    }();
    /**
     * @return {undefined}
     */
    var init = function() {
      if (!init.i && document.getElementsByClassName) {
        /** @type {boolean} */
        init.i = true;
        autoSizer._();
        loader._();
      }
    };
    return setTimeout(function() {
      if (lazySizesConfig.init) {
        init();
      }
    }), lazysizes = {
      cfg : lazySizesConfig,
      autoSizer : autoSizer,
      loader : loader,
      init : init,
      uP : updatePolyfill,
      aC : addClass,
      rC : removeClass,
      hC : hasClass,
      fire : triggerEvent,
      gW : getWidth,
      rAF : rAF
    };
  }(window, window.document, Date);
  window.lazySizes = lazySizes;
  if ("object" == typeof module && module.exports) {
    module.exports = lazySizes;
  }
}("undefined" != typeof window ? window : {});
