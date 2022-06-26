

// TimelineMax skeleton TimelineMax 模板
let myTweenMax = new TimelineMax({
		defaults: {
			duration: 1,
			ease: Power2.easeOut,
		},
	})
	// .to( target:Object, duration:Number, vars:Object, position:* )
	.to('.element-1', 1, {
		y: '100%',
	}, 0)
	// 等待 10 s 的距离
	.set({}, {}, '+=10')
	// 直接设置 css 属性值
	.set(element, {
		alpha: 0,
	})
	// 在这里调用 someFun
	.call(someFun(1))
	// eleArr 中每个元素分步来做动画，持续 1s 间隔 0.5s
	.staggerTo(eleArr, 1, {
		alpha: 1,
	}, 0.5)
	// .fromTo( target:Object, duration:Number, fromVars:Object, toVars:Object, position:* )
	.fromTo('.element-3', 1, {
		scale: 1
	}, {
		scale: 1.3
	}, 0);

// ScrollMagic skeleton ScrollMagic 模板
let controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
		triggerElement: '#magic-trigger',
		duration: '100%',
		triggerHook: 0,
	})
	.setTween(myTweenMax)
	// .addIndicators({
	//     name: 'my indicators',
	// })
	.addTo(controller);
// ScrollMagic skeleton ScrollMagic 模板
// lazysize 懒加载 简单的设置
window.lazySizesConfig = window.lazySizesConfig || {},
	// use class-name lazy instead of lazyload
	window.lazySizesConfig.lazyClass = 'lazy',
	// use data-original instead of data-src
	lazySizesConfig.srcAttr = 'data-original',
	lazySizesConfig.expand = 1000,
	lazySizesConfig.expFactor = 1.5,
	//  0 = don't load, 1 = only visible elements, 2 = load also very near(expand option), 3 = load also not so near (expand * expFactor option)
	lazySizesConfig.loadMode = 1;
// lazysize 懒加载 简单的设置
// 简写原生的方法，方便使用
// window.requestAnimationFrame(callback) 会给callback传递精度为1ms的时间戳
let thRAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	window.setTimeout(callback, 1000 / 60);
};
let forEach = Array.prototype.forEach;
// 简写原生的方法，方便使用
// 扩展原生对象 数组等方法
Object.defineProperties(Array.prototype, {
	method1: {
		writable: true,
		enumerable: false,
		configurable: true,
		value: function () {
			console.log('I am an user defined method 1!');
		}
	},
	method2: {
		writable: true,
		enumerable: false,
		configurable: true,
		value: function () {
			console.log('I am an user defined method 2!');
		}
	}
});
// 扩展原生对象 数组等方法
// js 参考模板
(function () {
	const UA = navigator.userAgent,
		KERNELLIST = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
		MEDIASTR = '(max-aspect-ratio: 11/10)',
		SHELL = document.getElementById('cez-container');
	let thRAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		},
		wechatImg = 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/monitors/cezanne/imgs/huawei-matestation-x-wechat-share.jpg',
		wechatTxt = '谢谢分享。',
		gaClass = 'cmn-ga-21',
		popVideo = '.cmn-pop-video',
		triggerVideo = '.cmn-trigger-video',
		noVideo = 'cmn-notrg-video',
		scrollSelector = '.cmn-click-scroll',
		scrollClass = 'click-scroll-active',
		stickySelector = '.cmn-sticky',
		obDOMSelector = '.cmn-ob-class',
		obAddClass = 'cmn-trigger',
		willChangeClass = 'will-change',
		fbClass = 'static-fb',
		ctlr = !!window.ScrollMagic ? new ScrollMagic.Controller() : null;

	function Glean(c) {
		window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
		this.d = {
			isIE: !!window.ActiveXObject || 'ActiveXObject' in window,
			isOEdge: /Edge\//i.test(UA),
			isNEdge: /Edg\//i.test(UA),
			isUC: /UCBrowser/i.test(UA),
			isOpera: /Opera/i.test(UA),
			isSafari: /Safari/i.test(UA),
			isFirefox: /Firefox/i.test(UA),
			isChrome: /Chrome/i.test(UA),
			isWechat: /micromessenger/i.test(UA),
			isHW: /HuaweiBrowser/i.test(UA),
			isAndroid: /android|mobile/i.test(UA),
			isWindows: /win32|wow32|win64|wow64/i.test(UA),
			isIOS: /iPad|iPhone|iPod/.test(UA) && !window.MSStream,
			isMAC: /macintosh|mac os x/i.test(UA) && !window.MSStream,
			isIpad: /(?:iPad|PlayBook)/.test(UA),
			isTouch: 'ontouchstart' in document.documentElement,
		};
		this.c = {
			hasWebp: document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0,
			hasIO: 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype,
			hasMO: !!window.MutationObserver || !!window.WebKitMutationObserver || !!window.MozMutationObserver,
			hasCSS: !!window.CSS && !!window.CSS.supports,
			hasCSSVar: !!window.CSS && !!window.CSS.supports && (window.CSS.supports('--a', 0) || window.CSS.supports('(--a: 0)')),
			hasSticky: !!document.querySelector(stickySelector) ? /sticky/i.test(window.getComputedStyle(document.querySelector(stickySelector)).position) : (function () {
				let len = KERNELLIST.length,
					el = document.createElement('div');
				for (let i = 0; i < len; i++) {
					el.style.position = KERNELLIST[i] + 'sticky';
					if (el.style.position !== '') {
						return true;
					}
				}
				return false;
			})(),
			hasAsync: (function () {
				let func;
				try {
					eval("func = async function(){};");
				} catch (e) {
					return false;
				}
				return Object.getPrototypeOf(func).constructor != null;
			})(),
			hasPromise: typeof Promise !== "undefined" && Promise.toString().indexOf("[native code]") !== -1,
		};
		this.p = {};
		this.custom = !!c ? c : null;
	}
	Glean.prototype = {
		constructor: Glean,
		_getStatus: function () {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.vw = window.innerWidth / 100;
			this.vh = window.innerHeight / 100;
			this.cw = document.documentElement.clientWidth;
			this.ch = document.documentElement.clientHeight;
			this.isPortrait = window.matchMedia(MEDIASTR).matches;
			this.navH = !!document.getElementById('second-navigation-v4') ? document.getElementById('second-navigation-v4').getBoundingClientRect().height : !!document.querySelector('.huawei-v3 .second-navigation') ? document.querySelector('.huawei-v3 .second-navigation').getBoundingClientRect().height : 0;
			this.pixelRatio = window.devicePixelRatio || 1;
			if (this.c.hasCSSVar) {
				SHELL.style.setProperty('--cez-nav', this.navH + 'px');
			}
		},
		_fallback: function () {
			(this.d.isIE || this.d.isOEdge) && SHELL.classList.add(fbClass);
		},
		_popVideo: function (s) {
			$(s).on('click', function (e) {
				e.preventDefault();
				$(this).initH5player({
					'path': '',
					'target': 'fancybox',
					'autostart': true,
					'beforeShow': '',
					'afterClose': '',
				});
			});
		},
		_triggerVideo: function (c, s) {
			let m = this.isPortrait;
			let u = this.d.isUC || this.d.isWechat;
			$(s).each(function () {
				if (u) {
					c.classList.add(noVideo);
				} else {
					let t = $(this);
					let a = t.find('source');
					t.attr('poster', m ? t.attr('data-xs-poster') : t.attr('data-lg-poster'));
					a.attr('src', m ? a.attr('data-xs-src') : a.attr('data-lg-src'));
					setTimeout(function () {
						t.trigger('load');
						new ScrollMagic.Scene({
								triggerElement: t[0],
								duration: '100%',
								triggerHook: .5,
							}).on('enter', function (e) {
								let f = t.attr('hasPlayed');
								if (t[0].paused && !f) {
									t.attr('hasPlayed', true);
									t[0].play();
								}
							})
							.addTo(ctlr);
					}, 100);
				}
			});
		},
		_initWechat: function (is, img, t) {
			if (is) {
				$.getScript('//res.wx.qq.com/open/js/jweixin-1.2.0.js', function (res, status) {
					if (status == 'success') {
						$.getScript('//consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/js/cbgwechatv1.js', function (r, s) {
							if (s == 'success') {
								let wxShare = setInterval(function () {
									if (typeof (WechatShare) != 'undefined') {
										WechatShare({
											url: window.location.href,
											img: img,
											title: $(document).attr('title'),
											descript: document.querySelector('meta[name=\'description\']').getAttribute('content'),
										}, function () {
											alert(t);
										});
										clearInterval(wxShare);
									}
								}, 150);
							}
						});
					}
				});
			}
		},
		_addGa: function (s) {
			$('.' + s).on('click', function () {
				let attrs = this.attributes,
					data = {};
				for (let i = 0; i < attrs.length; i++) {
					if (attrs[i].name.substring(0, 8) === 'data-ga-') {
						let key = attrs[i].name.substring(8).replace(/\-(\w)/g, function (a, b) {
							return b.toUpperCase();
						});
						data[key] = attrs[i].value;
					}
				}
				window.dataLayer && window.dataLayer.push(data);
			});
		},
		_clickScorll: function (s, offset, speed) {
			let t = this,
				ofst = Math.floor(typeof offset == 'number' ? offset || 0 : parseFloat(offset) * (/vw/.test(offset) ? t.vw : t.vh)),
				spd = speed || 10,
				flag = true;
			SHELL.querySelectorAll(s).forEach(function (e) {
				e.addEventListener('click', function (e) {
					let time = performance.now();
					e.preventDefault();
					e.stopPropagation();
					let target = t._getDataset(this)['target'];
					if (!!target && flag) {
						let et = SHELL.querySelector(target),
							cTop,
							tTop,
							dis,
							max = (document.body.clientHeight || document.documentElement.scrollHeight) - window.innerHeight - 1;
						flag = false;
						t._toArray(et.parentElement.children).forEach(function (e) {
							e.classList.remove(scrollClass);
						});
						et.classList.add(scrollClass);

						function steps() {
							cTop = document.documentElement.scrollTop || document.body.scrollTop;
							tTop = Math.floor(t._getOffsetTop(et)) - t.navH - ofst;
							tTop = tTop > max ? max : tTop;
							dis = tTop - cTop;
							if (Math.abs(dis) > 5) {
								let addNumb = cTop > tTop ? -2 : 2;
								window.scrollTo(0, cTop + dis / spd + addNumb);
								thRAF(steps);
							} else {
								window.scrollTo(0, tTop);
								flag = true;
								et = null;
							}
						}
						thRAF(steps);
					}
				})
			});
		},
		_obAddClass: function (s, m, t, c) {
			if (this.c.hasIO) {
				let ob = new IntersectionObserver(function (changes) {
					changes.forEach(function (d) {
						if (0 < d.intersectionRatio && d.target.className.indexOf(c) < 0) {
							d.target.classList.add(c);
						}
					});
				}, {
					rootMargin: m,
					threshold: t,
				});
				SHELL.querySelectorAll(s).forEach(function (e) {
					ob.observe(e);
				});
				ob = null;
			}
		},
		_zoom: function (s) {
			return Math.max(this.width / SHELL.querySelector(s).getBoundingClientRect().width, this.height / SHELL.querySelector(s).getBoundingClientRect().height) + (this.isPortrait ? .3 : .03);
		},
		_float: function (numb, n) {
			return Math.floor(numb * Math.pow(10, n)) / Math.pow(10, n);
		},
		_prefixNumb: function (num, n) {
			return (Array(n).join(0) + num).slice(-n);
		},
		_getOffsetTop: function (t) {
			let top = 0;
			while (t.offsetParent) {
				top += t.offsetTop
				t = t.offsetParent
			}
			return top;
		},
		_getDataset: function (ele) {
			if (!!ele) {
				if (ele.dataset) {
					return ele.dataset;
				} else {
					let attrs = ele.attributes,
						dataset = {},
						name,
						matchStr;
					for (let i = 0; i < attrs.length; i++) {
						matchStr = attrs[i].name.match(/^data-(.+)/);
						if (matchStr) {
							name = matchStr[1].replace(/-([\da-z])/gi, function (all, l) {
								return l.toUpperCase();
							});
							dataset[name] = attrs[i].value;
						}
					}
					return dataset;
				}
			}
		},
		_getMaxHeight: function (s) {
			return this._float([].slice.call(document.querySelectorAll(s)).reduce(function (p, n) {
				return p.getBoundingClientRect().height > n.getBoundingClientRect().height ? p : n;
			}).getBoundingClientRect().height, 2);
		},
		_toArray: function (a) {
			return Array.prototype.slice.call(a);
		},
		_willchange: function (s1) {
			if (this.c.hasIO) {
				let ob = new IntersectionObserver(function (changes) {
					changes.forEach(function (d) {
						if (0 < d.intersectionRatio) {
							SHELL.querySelector('.' + willChangeClass) && SHELL.querySelector('.' + willChangeClass).classList.remove(willChangeClass);
							d.target.classList.add(willChangeClass);
						}
					});
				}, {
					rootMargin: '-49% 0% -49% 0%',
					threshold: [0],
				});
				SHELL.querySelectorAll(s1).forEach(function (e) {
					ob.observe(e);
				});
				ob = null;
			}
		},
		_ease: {
			oneBezier: function () {
				return function (t) {
					let y = t;
					return y;
				}
			},
			twoBezier: function (cp) {
				if (cp instanceof Array) {
					const cx = cp[0] || 0,
						cy = cp[1] || 0;
					return function (t) {
						let y = 2 * t * (1 - t) * cy + t * t;
						return y;
					}
				}
			},
			threeBezier: function (cp1, cp2) {
				if (cp1 instanceof Array && cp2 instanceof Array) {
					const cx1 = cp1[0] || 0,
						cy1 = cp1[1] || 0,
						cx2 = cp2[0] || 0,
						cy2 = cp2[1] || 0;
					return function (t) {
						let y = 3 * cy1 * t * (1 - t) * (1 - t) + 3 * cy2 * t * t * (1 - t) + t * t * t;
						return y;
					}
				}
			},
		},
		_getTiming: function () {
			let t = window.performance.timing;
			return [{
					key: "Redirect",
					desc: "网页重定向的耗时",
					"value(ms)": t.redirectEnd - t.redirectStart
				},
				{
					key: "AppCache",
					desc: "检查本地缓存的耗时",
					"value(ms)": t.domainLookupStart - t.fetchStart
				},
				{
					key: "DNS",
					desc: "DNS查询的耗时",
					"value(ms)": t.domainLookupEnd - t.domainLookupStart
				},
				{
					key: "TCP",
					desc: "TCP链接的耗时",
					"value(ms)": t.connectEnd - t.connectStart
				},
				{
					key: "Waiting(TTFB)",
					desc: "从客户端发起请求到接收响应的时间",
					"value(ms)": t.responseStart - t.requestStart
				}, {
					key: "Content Download",
					desc: "下载服务端返回数据的时间",
					"value(ms)": t.responseEnd - t.responseStart
				},
				{
					key: "HTTP Total Time",
					desc: "http请求总耗时",
					"value(ms)": t.responseEnd - t.requestStart
				},
				{
					key: "First Time",
					desc: "首包时间",
					"value(ms)": t.responseStart - t.domainLookupStart
				},
				{
					key: "White screen time",
					desc: "白屏时间",
					"value(ms)": t.responseEnd - t.fetchStart
				},
				{
					key: "Time to Interactive(TTI)",
					desc: "首次可交互时间",
					"value(ms)": t.domInteractive - t.fetchStart
				},
				{
					key: "DOM Parsing",
					desc: "DOM 解析耗时",
					"value(ms)": t.domInteractive - t.responseEnd
				},
				{
					key: "DOMContentLoaded",
					desc: "DOM 加载完成的时间",
					"value(ms)": t.domInteractive - t.navigationStart
				},
				{
					key: "Loaded",
					desc: "页面load的总耗时",
					"value(ms)": t.loadEventEnd - t.navigationStart
				}
			];
		},
	};
	let McGlean = new Glean();
	// sections
	gsap.defaults({
		duration: 1,
		ease: Power2.easeOut,
	});
	McGlean.switchIndex = function (s1, s2, t, p) {
		SHELL.querySelectorAll(s1).forEach(function (e, i) {
			e.addEventListener('click', function () {
				if (!!t && !!p) {
					clearTimeout(t[p]);
				}
				SHELL.querySelector(s2).dataset.index = i + 1;
			});
		});
	};
	McGlean.mutationObIndex = function (s1, btns, time, obj, p) {
		let obed = SHELL.querySelector(s1);
		let numb = SHELL.querySelectorAll(btns).length;
		let muOb = new MutationObserver(function (list, observer) {
			list.forEach(function (e) {
				if (e.type === 'attributes') {
					obj[p] = setTimeout(function () {
						let i = Number(e.target.dataset.index) + 1;
						e.target.dataset.index = i > numb ? 1 : i;
					}, time);
				}
			});
		});
		muOb.observe(obed, {
			attributes: true,
			attributeFilter: ['class', 'data-index'],
			childList: false,
			subtree: false,
		});
	};
	McGlean.flsc = function () {
		let zoomout = this._float(this._zoom('#flsc-cntr .flsc-trigger-video'), 3);
		let zoomin = this._float(Math.min((this.height - this.navH) / (1.3 * this.width), this.isPortrait ? .8501 : .441), 3);
		let frameH = Math.floor((this.isPortrait ? 1.063 : 1.05625) * this.width * zoomin);
		if (this.c.hasCSSVar) {
			SHELL.querySelector('#flsc-cntr').style.setProperty('--flsc-scale', zoomout);
			SHELL.querySelector('#flsc-cntr').style.setProperty('--flsc-frameH', frameH + 'px');
		}
		let flsc = gsap.timeline().set('.flsc-content-cntr', {
			overflow: 'hidden',
		}).to('.flsc-content-cntr', {
			y: 0,
		}).set('.flsc-cntr', {
			backgroundColor: '#000',
		}).set('.flsc-img-frame, .flsc-bg-cntr', {
			autoAlpha: 1,
		}).set('.flsc-title', {
			autoAlpha: 0,
		}).to('.flsc-content', {
			scale: zoomin,
		}).set('.flsc-content-cntr', {
			overflow: 'visible',
		}).to('.flsc-img-shadow', {
			autoAlpha: 1,
		});
		new ScrollMagic.Scene({
				triggerElement: '.flsc-cntr',
				duration: '300%',
				triggerHook: 0,
			})
			.setTween(flsc)
			.addTo(ctlr);
	};
	McGlean.idv = function () {
		let v = SHELL.querySelector('.idv-trigger-video video');
		let btn = SHELL.querySelector('.idv-play-inner');
		v.addEventListener('ended', function () {
			btn.classList.add('video-ended');
		});
		btn.addEventListener('click', function () {
			this.classList.remove('video-ended');
			v.play();
		});
	};
	McGlean.idimg = function () {
		new Swiper('.idimg-swiper-cntr', {
			speed: 1000,
			autoplay: false,
			effect: 'fade',
			loop: true,
			pagination: {
				el: '.idimg-swiper-navs',
				clickable: true,
				renderBullet: function (i, c) {
					let id = i + 1;
					let txt = $('.idimg-swiper-navs').attr('data-pagination-' + id);
					return '<div class="idimg-pagination ' + c + '"><span class="' + gaClass + ' idimg-icon-cntr idimg-icon-cntr-' + id + '" data-ga-event="productBtnClicks" data-ga-button-name="' + txt + '" data-ga-product-mkt-name="HUAWEI MateStation X"><span class="idimg-icon idimg-icon-' + id + '"></span></span><p class="idimg-icon-txt idimg-icon-txt-' + id + '">' + txt + '</p></div>';
				},
			},
		});
	};
	McGlean.adjus = function () {
		let adjus = gsap.timeline().to('.adjus-video-cntr', {
			autoAlpha: this._getDataset(SHELL.querySelector('.adjus-video-cntr'))['opacity'] || .25,
		}, '1').to('.adjus-title', {
			autoAlpha: 1,
			y: 0,
		}, '-=1');
		new ScrollMagic.Scene({
				triggerElement: '.adjus-inner',
				duration: '100%',
				triggerHook: 0,
			})
			.setTween(adjus)
			.addTo(ctlr);
	};
	McGlean.galle = function () {
		new Swiper('.galle-swiper-cntr', {
			speed: 1000,
			autoplay: {
				disableOnInteraction: false,
			},
			loop: true,
			loopAdditionalSlides: 3,
			slidesPerView: this.isPortrait ? 1 : 1.464,
			centeredSlides: true,
			navigation: {
				nextEl: '.galle-btn-right',
				prevEl: '.galle-btn-left',
			},
			pagination: {
				el: '.galle-pagination',
				clickable: true,
			},
		});
	};
	McGlean.sharet = function () {
		this['sharetid'] = null;
		this._obAddClass('.sharet-inner', '0% 0% -70% 0%', [0], obAddClass);
		this.switchIndex('.sharet-desc', '.sharet-inner', this, 'sharetid');
		if (this.c.hasMO) {
			this.mutationObIndex('.sharet-inner', '.sharet-dynamic-inner .sharet-desc-item', 5000, this, 'sharetid');
		}
		if (this.c.hasCSSVar) {
			SHELL.querySelector('#sharet-cntr').style.setProperty('--typing-width', Math.floor(SHELL.querySelector('.sharet-txt-2').getBoundingClientRect().width) + 'px');
		}
		if (this.isPortrait) {
			SHELL.querySelector('.sharet-desc-cntr').style.marginBottom = this._getMaxHeight('.sharet-desc-t') + 'px';
		}
	};
	McGlean.smtcn = function () {
		SHELL.querySelector('.smtcn-btntxt').style.height = this._getMaxHeight('.smtcn-btntxt') + 'px';
		this['smtcnid'] = null;
		this._obAddClass('.smtcn-imgs-cntr-2', '0% 0% -70% 0%', [0], obAddClass);
		this.switchIndex('.smtcn-btn', '.smtcn-imgs-cntr-2', this, 'smtcnid');
		if (this.c.hasMO) {
			this.mutationObIndex('.smtcn-imgs-cntr-2', '.smtcn-imgs-dynamic-2 .smtcn-btn', 5000, this, 'smtcnid');
		}
	};
	McGlean.servc = function () {
		let h = this._getMaxHeight('.servc-icon-desc');
		SHELL.querySelectorAll('.servc-icon-desc').forEach(function (e) {
			e.style.height = h + 'px';
		});
	};
	McGlean._init = function () {
		// common
		this._getStatus();
		this._fallback();
		this._popVideo(popVideo);
		this._triggerVideo(SHELL, triggerVideo);
		this._initWechat(McGlean.d.isWechat, wechatImg, wechatTxt);
		this._clickScorll(scrollSelector, 0, 7);
		this._obAddClass(obDOMSelector, '0% 0% -50% 0%', [0], obAddClass);
		this._willchange('.sec-cntr');
		// sections
		this.idv();
		this.idimg();
		this.galle();
		this.servc();
		if (this.d.isIE || this.d.isOEdge) {

		} else {
			this.flsc();
			this.adjus();
			this.sharet();
			this.smtcn();
		}
		this._addGa(gaClass);
		// clear memery
		this.flsc = null;
		this.idv = null;
		this.idimg = null;
		this.adjus = null;
		this.galle = null;
		this.sharet = null
		this.smtcn = null;
		this.servc = null;
		this.switchIndex = null;
		this.mutationObIndex = null;
	}
	McGlean._init();
	window.addEventListener('resize', function (t) {
		return function () {}
	}(McGlean));
})();
// 图片模板
{
	/* <picture>
	    <source type="image/webp" media="(max-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_xs.webp">
	    <source type="image/webp" media="(min-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.webp 1x , /content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx@2x.webp 1.5x">
	    <source type="image/png" media="(max-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_xs.png">
	    <source type="image/png" media="(min-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.png 1x , /content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx@2x.png 1.5x">
	    <source type="image/jpeg" media="(max-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_xs.jpg">
	    <source type="image/jpeg" media="(min-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.jpg 1x , /content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx@2x.jpg 1.5x">
	    <img src=“/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_thumb.jpg” data-src="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.jpg" alt="xxx" />
	</picture> */
}
// 图片模板
// IntersectionObserver
function thCreateTransOb() {
	let thCanOb = new IntersectionObserver(function (changes) {
		changes.forEach(function (d) {
			if (0 < d.intersectionRatio) {
				console.info('entering');
			} else {
				console.info('outside');
			}
		});
	}, {
		rootMargin: '600% 0% 500% 0%',
		threshold: [0, 1],
	});
	let thObedEles = document.querySelectorAll('.thales-observer');
	thObedEles.forEach(function (e) {
		thCanOb.observe(e);
	});
}
// 阻止冒泡
function xxx(e) {
	e.stopPropagation();
}
// 阻止冒泡
// 华为 AEM 播放弹窗视频
$('.x0-play-video').on('click', function (e) {
	e.preventDefault();
	$(this).initH5player({
		'path': '',
		'target': 'fancybox',
		'autostart': true,
		'beforeShow': '',
		'afterClose': '',
	});
}); {
	/* <a class="x0-body x0-play-video" href="/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-x2/img/interaction/huawei-mate-x2-interactive-experience-full.mp4"
	    data-video-image="/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-x2/img/interaction/huawei-mate-x2-interactive-experience-full-poster.jpg" data-video-id="videoPlayer" data-video-ratio="30:17"
	    data-t-ignore-link="true" data-t-viewtimes="true" data-t-label="高性能电驱轿跑 SUV 视频" title="观看视频">
	    <span>观看视频</span>
	    <img class="kv-play-btn" src="/content/dam/huawei-cbg-site/greate-china/cn/mkt/campaign/seres-huawei-select-sf5/imgs/svg/kv-play-btn.svg" alt="">
	</a> */
}
// 华为 AEM 播放弹窗视频
// 视频播放后返回一个 promise
var promise = document.querySelector('video').play();
if (promise !== undefined) {
	promise.then(_ => {
		// Autoplay started!
	}).catch(error => {
		// Autoplay was prevented.
		// Show a "Play" button so that user can start playback.
	});
}
// 视频播放后返回一个 promise
// 新浪分享 个性化定制
$('.share-main-sina').on('click', function () {
	let url = location.href;
	console.dir(url)
	let text = $(this).attr('t');
	console.info(text);
	window.open('http://v.t.sina.com.cn/share/share.php?url=' + url + '&title=' + text, 'sina share', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=500,location=1');
});
// 新浪分享 个性化定制
// 华为 AEM 微信 wechat 分享 JS
function thWechatShare() {
	let isWeixin = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1;
	if (isWeixin) {
		$.getScript('//res.wx.qq.com/open/js/jweixin-1.2.0.js', function (response, status) {
			if (status == 'success') {
				$.getScript('//consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/js/cbgwechatv1.js', function (r, s) {
					if (s == 'success') {
						let wxShare = setInterval(function () {
							if (typeof (WechatShare) != 'undefined') {
								WechatShare({
									url: window.location.href,
									img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/v-2021/img/intro/th-wechat.jpg',
									title: $(document).attr('title'),
									descript: document.querySelector('meta[name=\'description\']').getAttribute('content')
								}, function () {
									alert('谢谢分享。');
								});
								clearInterval(wxShare)
							}
						}, 150);
					}
				});
			}
		});
	}
}
// 华为 AEM 微信 wechat 分享 JS
// 华为 EN Back to Top
/* back to top */
// .cbg-backtotop a.hidden {
// 	opacity: 0;
// 	cursor: default;
//   }

//   .cbg-backtotop {
// 	position: fixed;
// 	z-index: 200;
// 	bottom: 50px;
// 	right: 50px;
//   }

//   .cbg-backtotop a.cbg-icon-backtotop {
// 	background-position: -549px -188px;
//   }


//   .cbg-backtotop a {
// 	display: block;
// 	width: 40px;
// 	height: 40px;
// 	margin: 5px 0;
// 	text-indent: -9999px;
// 	opacity: 0.6;
// 	background: url('https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/img/sprites_cbg_icon.png') no-repeat;
// 	filter: alpha(opacity=80);
// 	transition: all linear 0.2s;
// 	-webkit-transition: all linear 0.2s;
// 	-moz-transition: all linear 0.2s;
// 	-ms-transition: all linear 0.2s;
// 	-o-transition: all linear 0.2s;
// 	-webkit-filter: alpha(opacity=80);
//   }

//   /* totop end*/
// back to top
$('.cbg-icon-backtotop').attr('href', 'javascript:');
$(window).scroll(function () {
	var htop = $(this).scrollTop();
	if (htop < 10) {
		$('.cbg-backtotop').find('a').eq(0).addClass('hidden');
	} else {
		$('.cbg-backtotop').css('display', 'block');
		$('.cbg-backtotop').find('a').removeClass('hidden');
	}
});
$('.cbg-icon-backtotop').off().click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 800);
});
// 华为 EN Back to Top
// 角标跳转不准的解决方案 JQ 使用回调函数，在上一个跳转动画结束之后再进行判断再跳转，无缝衔接
// 点击本页跳转动画参照上面的 McGlean
function scrollSteps() {
	if (Math.abs($('.disclaimer').offset().top - $(window).scrollTop()) > 10) {
		theTop = $('.disclaimer').offset().top;
		$('html, body').animate({
			scrollTop: theTop,
		}, 17, function () {
			scrollSteps();
		});
	}
}
let theTop = $('.disclaimer').offset().top;
$('html, body').animate({
	scrollTop: theTop,
}, 300, function () {
	scrollSteps();
});
// 或
$('.disclaimer-link').each(function () {
	let sTop;
	$(this).on('click', function (e) {
		e.preventDefault();
		let el = $($(this).attr('href'));
		$('.disclaimer-item').removeClass('active');
		el.addClass('active');
		sTop = el.offset().top - navH - 100;
		$('html, body').animate({
			scrollTop: sTop,
		}, 500, function () {
			sTop = el.offset().top - navH - 100;
			$('html, body').animate({
				scrollTop: sTop,
			}, 50.1);
		});
	});
});
// 角标跳转不准的解决方案 JQ 使用回调函数，在上一个跳转动画结束之后再进行判断再跳转，无缝衔接
// GA
window.dataLayer = window.dataLayer || [];
$('.product-container').on('click', '.hw-cmn-ga-21', function (e) {
	let _this = $(this),
		filterObj = {},
		_obj = {
			'event': _this.attr('data-event'),
			'pageCategory': _this.attr('data-pagecategory'),
			'pageName': _this.attr('data-pagename'),
			'buttonName': _this.attr('data-buttonname'),
			'buttonPosition': _this.attr('data-buttonposition'),
			'bannerName': _this.attr('data-bannername'),
			'bannerPosition': _this.attr('data-bannerposition'),
			'pop_upName': _this.attr('data-popupname'),
			'percentage': _this.attr('data-percentage'),
			'nextBannerName': _this.attr('data-nextbannername'),
			'previousBannerName': _this.attr('data-previousbannerName'),
			'swipeDirection': _this.attr('data-swipedirection'),
			'linkName': _this.attr('data-linkname'),
			'linkPosition': _this.attr('data-linkposition'),
			'videoStep': _this.attr('data-videostep'),
			'videoName': _this.attr('data-videoname'),
			'productMktName': _this.attr('data-productmktname'),
			'productCategory': _this.attr('data-productcategory'),
			'productPosition': _this.attr('data-productposition'),
			'ecPlatform': _this.attr('data-ecplatform'),
			'countryCode': _this.attr('data-countrycode'),
			'lastpagename': _this.attr('data-lastpagename'),
			'moduelname': _this.attr('data-moduelname'),
		};
	Object.keys(_obj).map(function (k) {
		_obj[k] !== undefined ? filterObj[k] = _obj[k] : null;
	});
	window.dataLayer.push(filterObj);
	_this = null;
	_obj = null;
	filterObj = null;
});
// 或者之龙的
$('.hw-cmn-ga-21').on('click', function () {
	let attrs = this.attributes,
		data = {};
	for (let i = 0; i < attrs.length; i++) {
		if (attrs[i].name.substring(0, 8) === 'data-ga-') {
			let key = attrs[i].name.substring(8).replace(/\-(\w)/g, function (a, b) {
				return b.toUpperCase();
			});
			data[key] = attrs[i].value;
		}
	}
	window.dataLayer.push(data);
});
// GA
// 判断华为是否登录
$.cookie('_ext_u_e_');
// 判断华为是否登录
// 表单请求模板
let tempData = {};
$.ajax({
	url: 'https://kwesit.huawei.com/isrp/lms/online/appointment/create',
	type: 'POST',
	dataType: 'json',
	contentType: 'application/json; charset=utf-8',
	crossDomain: true,
	xhrFields: {
		withCredentials: true
	},
	data: JSON.stringify(tempData),
	beforeSend: function (request) {
		request.setRequestHeader('Authorization', 'token1');
	},
	success: function (result) {
		console.info(result);
	}
});
// 表单请求模板
// JSONP 只支持 GET 请求，利用动态添加的 script 的 src 来请求服务器，后面拼接要执行的方法
function callbackD(response) {
	var oUl = document.getElementById('ulList');
	var html = '';
	if (response.s.length != 0) {
		oUl.style.display = 'block';
		for (var i = 0; i < response.s.length; i++) {
			html += '<li>' + response.s[i] + '</li>'
		}
	}
	oUl.innerHTML = html;
}
window.onload = function () {
	var oData = document.getElementById('inputSearch');
	var oUl = document.getElementById('ulList');
	oData.onkeyup = function () {
		if (oData.value != '') {
			let script = document.createElement("script");
			script.src = 'http://unionsug.baidu.com/su?wd=' + this.value + '&p=3&cb=callbackD';
			document.body.appendChild(script);
		} else {
			oUl.style.display = 'none';
		}
	}
};
// JSONP 跨域请求
// 正则验证
// 特殊字符
let nameReg = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
// 正则验证
// https://consumer.huawei.com/cn/support/service-center/ 页面 LBS 百度地图定位
// 利用 h5 获取当前定位，也就是获取经纬度，然后再用经纬度来调用接口
function h5LocationForServiceCenter() {
	if (navigator.geolocation) {
		try {
			navigator.geolocation.getCurrentPosition(function (g) {
				if (aoutlocation == 0) {
					return false
				}
				var b = g.coords.longitude;
				var h = g.coords.latitude;
				var f = new BMap.Point(b, h);
				var c = new BMap.Convertor();
				var d = [];
				d.push(f);
				var e = new BMap.Geocoder();
				translateCallback = function (j) {
					if (aoutlocation == 0) {
						return false
					}
					if (j.status === 0) {
						getAutoLocationAddress(new BMap.Point(j.points[0].lng, j.points[0].lat))
					}
				};
				c.translate(d, 1, 5, translateCallback)
			}, function (b) {
				locationError()
			})
		} catch (a) {}
	} else {
		locationError()
	}
}
// https://consumer.huawei.com/cn/support/service-center/ 页面 LBS 百度地图定位
// video 的 timeupdate 事件可以实时监听播放进度来做对应的动画，4-66次/s 的触发频率
const video = document.querySelector('video');
video.addEventListener('timeupdate', (event) => {
	console.log('The currentTime attribute has been updated. Again.');
});
// 快速遍历的方法， forEach 兼容 IE
['aaa', 'bbb'].forEach(function (e, i) {
	console.info(e);
});
// 快速遍历很多遍
new Array(1000).fill(0).map(function (d, i) {
	console.info(i)
});
// 使用数组遍历的方法应用到 DOM 类数组上
[].slice.call(document.querySelectorAll('.selector')).forEach(function (e) {});
// Array.from 第二个参数 省去再接 .map ，直接遍历
Array.from(['a', 'b', 'c'], e => console.info(e));
// 遍历对象批量生成对应的 li 设置属性 并添加到指定位置
function traversalAjax(a, t) {
	let tempFrag = document.createDocumentFragment();
	Array.from(a, function (o) {
		let li = document.createElement('li');
		li.innerText = o.name || o.storeName;
		Object.keys(o).map(function (i, k) {
			li.setAttribute('data-' + i, o[i]);
		})
		tempFrag.appendChild(li);
	});
	t.appendChild(tempFrag);
}
// 立即执行一次的定时器 setinterval 封装函数：直接执行函数然后再在定时器里调用
function setIntervalNow(func, interval) {
	func();
	return setInterval(func, interval);
}
let intervalNow = setIntervalNow(someFun(), 1000);

// 立即执行一次的定时器 setinterval 函数返回自身，然后定时器的参数中调用此函数
function someFun() {
	console.info('someFun');
	return someFun;
}
let intervalNow = setInterval(someFun(), 1000);

// 立即执行一次的定时器 setinterval 立即执行函数是解决方案之一
let intervalNow = setInterval((function () {
	someFun();
	return someFun;
})(), 1000);

// 只执行一次的函数，特别在定时器中效果会很好，执行过一次后 fn 就变成 null 了
function onceF(fn, context) {
	let result;
	return function () {
		if (fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}
		return result;
	};
}
let canOnlyFireOnce = onceF(function () {
	console.log('Fired!');
});
// 本地存储原生 js 兼容写法
let ssStorage = window.sessionStorage || (window.UserDataStorage && new UserDataStorage()) || new cookieStorage();
ssStorage.clear();
// canvas 图片模糊解决方法
// 获取设备的像素比 然后将图片 * 像素比之后再画到 canvas 上
var getPixelRatio = function (context) {
	var backingStore = context.backingStorePixelRatio ||
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		context.backingStorePixelRatio || 1;

	return (window.devicePixelRatio || 1) / backingStore;
};
// canvas 图片模糊解决方法
// canvas 扩展 清除圆形区域
function clearArcFun(x, y, r, cxt) {
	let stepClear = 1;
	clearArc(x, y, r);

	function clearArc(x, y, radius) {
		let calcWidth = radius - stepClear;
		let calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);
		let posX = x - calcWidth;
		let posY = y - calcHeight;
		let widthX = 2 * calcWidth;
		let heightY = 2 * calcHeight;
		if (stepClear <= radius) {
			cxt.clearRect(posX, posY, widthX, heightY);
			stepClear += 1;
			clearArc(x, y, radius);
		}
	}
}
// canvas 画图 不切图片 contain 行为 需要知道图片和 canvas 的宽高
function canDrawContainImg() {
	imgW / imgH > canW / canH ?
		ctx.drawImage(tempImg, 0, 0, imgW, imgH, 0, (canH - imgH * canW / imgW) / 2, canW, imgH * canW / imgW) :
		ctx.drawImage(tempImg, 0, 0, imgW, imgH, (canW - imgW * canH / imgH) / 2, 0, imgW * canH / imgH, canH);
}

// canvas 画图 平均的切图片 cover 行为 需要知道图片和 canvas 的宽高
function canDrawCoverImg() {
	imgW / imgH > canW / canH ?
		ctx.drawImage(tempImg, 0, (imgH - canH / canW * imgW) / 2, imgW, canH / canW * imgW, 0, 0, canW, canH) :
		ctx.drawImage(tempImg, (imgW - imgH / canH * canW) / 2, 0, imgH / canH * canW, imgH, 0, 0, canW, canH);
}
// canvas 实现音频可视化可直接用 Web Audio API 来获取对应的音频数据
// https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
var context = new window.AudioContext();;

// 相关变量声明的高级写法，面向对象的写法
let smObj = {
	init: function () {
		let a = this;
		a.someFun(true);
	},
	someFun: function (f) {
		if (f) {}
	},
	_proA: 1,
	_proB: 2
};

// typeof 判断类型，集合了基本类型和复杂类型的判断（除了 object 和 array 的判断）
function getTypeOf(e) {
	return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
	})(e)
}
// 判断类型，包含所有的类型种类，返回类型的小写字符串
function complexTypeOf(obj) {
	return Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}
// 前端性能监控之 performance
let performance = window.performance || window.msPerformance || window.webkitPerformance;
// 返回当前的时间戳
performance.now();
// 是一系列关键时间点
performance.timing;

// 时间函数 缓动函数 贝塞尔曲线 bezier
function oneBezier() {
	return function (t) {
		let y = t;
		return y;
	}
}

function TwoBezier(cp) {
	const [cx, cy] = cp;
	return function (t) {
		let y = 2 * t * (1 - t) * cy + t * t;
		return y;
	}
}

function ThreeBezier(cp1, cp2) {
	const [cx1, cy1] = cp1;
	const [cx2, cy2] = cp2;
	return function (t) {
		let y = 3 * cy1 * t * (1 - t) * (1 - t) + 3 * cy2 * t * t * (1 - t) + t * t * t;
		return y;
	}
}


// 节流 throttle 函数，可以在高并发的时候包装调用，提高性能
// wait: 数字类型，延迟的时间，默认 1000 ms
// options.leading: Boolean ，false 表示禁用第一次执行
// trailing.leading: Boolean ，false 表示禁用停止触发的回调
function throttle(fn, wait = 1000, options = {}) {
	let timer;
	let previous = 0;
	let throttled = function () {
		let now = +new Date();
		// remaining 不触发下一次函数的剩余时间
		if (!previous && options.leading === false) previous = now;
		let remaining = wait - (now - previous);
		if (remaining < 0) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			previous = now;
			fn.apply(this, arguments)
		} else if (!timer && options.trailing !== false) {
			timer = setTimeout(() => {
				previous = options.leading === false ? 0 : new Date().getTime();
				timer = null;
				fn.apply(this, arguments);
			}, remaining);
		}
	}
	return throttled;
}

// 检查一个对象数组中，每一个对象的某一 name 项是否都是存在并为 true
function truthCheck(collection, name) {
	return collection.every((d, i) => {
		return name in d ? Boolean(d[name]) : false;
	});
}

// deepClone 深度克隆函数
function deepCloneJSON(old, newO) {
	let i, copystr;
	copystr = JSON.stringify(old);
	copystr = JSON.parse(copystr);
	newO = newO || {};
	for (i in copystr) {
		if (copystr.hasOwnProperty(i)) {
			newO[i] = copystr[i];
		}
	}
	copystr = null;
	return newO;
}

// 去重函数 unique value array 数组去重
function getUniqueValue(arr) {
	let tempObj = {};
	return arr.filter(function (item) {
		return tempObj.hasOwnProperty(item) ? false : (tempObj[item]) = true;
	})
}

function getUniqueValueES6(arr) {
	return arr.filter((v, i, s) => s.indexOf(v) === i);
}

function getUniqueSet(arr) {
	return [...new Set(arr)];
}
// 数组扁平化 多层数组变成一层 .flat
[1, 2, [3, 4]].flat(); // [1,2,3,4]
function flattenES5(arr) {
	let result = [];
	for (let i = 0, len = arr.length; i < len; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flattenES5(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}

function flattenES6(arr) {
	while (arr.some(item => Array.isArray(item))) {
		arr = [].concat(...arr);
	}
	return arr;
}
// 二进制转换字符串
function binaryAgent(str) {
	let r = '';
	str.split(' ').map(i => {
		r += String.fromCharCode(parseInt(i, 2));
	})
	return r;
}
// 箭头函数 this 的指向是上上一层
() => {};
// 结构
[a, b] = [b, a];
// async 关键字声明的函数是异步函数，比 Promise 更加简洁， await 关键字必须在 async 函数里面
function after2s() {
	console.info('after2s run')
	// 2s 之后才调用完成并打印文字
	// 需要使用 Promise
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
			console.info('after2s end')
		}, 2000);
	});
}
async function asyncCall() {
	console.info('--asyncCall run');
	// 等待 after2s 执行完了之后再继续
	await after2s();
	console.info('--asyncCall end');
}
asyncCall();
// js 判断是否支持 async 关键字声明函数
function isAsyncAwaitSupport() {
	let func;
	try {
		eval("func = async function(){};");
	} catch (e) {
		return false;
	}
	return Object.getPrototypeOf(func).constructor != null;
}
// js 判断浏览器是否支持 promise
hasPromise = typeof Promise !== "undefined" && Promise.toString().indexOf("[native code]") !== -1;
// 逗号操作符返回的是后者，前面只是计算而已，为了 'get a value not a reference'
// https://stackoverflow.com/questions/5161502/indirect-function-call-in-javascript/5161574#5161574
(0, 1); // 1
('foo', 'bar'); // 'bar'
var foo = 'global.foo';
var obj = {
	foo: 'obj.foo',
	method: function () {
		return this.foo;
	}
};
obj.method(); // "obj.foo"
(1, obj.method)(); // "global.foo"

// (0, eval)('this') 可以在 es5 中的严格 strict 模式把 this 重新指定给 window
'use strict';
_global = (function () {
	return this || (0, eval)('this');
}());


