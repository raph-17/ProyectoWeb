
    window._currentDevice = 'desktop';
    window.Parameters = window.Parameters || {
        HomeUrl: 'https://www.restaurantraicesperuanas.com/',
        AccountUUID: '1de1b4f559844c958bceae1a74bd2197',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: 'ae9ec90c',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Sat Jun 08 01:49:15 UTC 2024',
        ExternalUid: '52708',
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialPostPageUuid: '',
        InitialDynamicItem: '',
        DynamicPageInfo: {
            isDynamicPage: false,
            base64JsonRowData: 'null',
        },
        InitialPageAlias: 'home',
        InitialPageUuid: '2a8785dc5ca74ef8b148a93595a48df8',
        InitialPageId: '1126508837',
        InitialEncodedPageAlias: 'aG9tZQ==',
        InitialHeaderUuid: '47637ec422824f28a66e1f5f391ac76f',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '44810',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        IsStoreSuspended: false,
        HasCustomDomain: true,
        SimpleSite: false,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'es',
        currentLocale: 'es-ar',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: -1,
            NavbarLiveHomePage: 'https://www.restaurantraicesperuanas.com/',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: true,
        planID: '1123',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        isInEditor: false,
        hasNativeStore: false,
        defaultLang: 'es',
        hamburgerMigration: null,
        isFlexSite : false
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 6;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;



    try {
    if (
        navigator.serviceWorker &&
        navigator.serviceWorker.getRegistrations &&
        location.protocol === 'https:'
    ) {
        // remove all service workers
        navigator.serviceWorker
            .getRegistrations()
            .then(function (registrations) {
                if (registrations && registrations.length) {
                    console.log('unregistering service workers');
                    registrations.forEach(function (registration) {
                        registration.unregister();
                    });
                }
            });
        // clear caches
        if (caches) {
            caches.keys().then(function (keyList) {
                if (keyList && keyList.length) {
                    console.log('deleting caches');
                    keyList.forEach(function (key) {
                        if (key && key.indexOf('druntime') === 0) {
                            caches.delete(key);
                        }
                    });
                }
            });
        }
    }
} catch (err) {
    // not a secured location
}



    window.SystemID = 'US_DIRECT_PRODUCTION';

    if (!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function () {
            },
            getCurrentDeviceType: function () {
                return window._currentDevice;
            },
            runOnReady: (ns, fn) => {
                const safeFn = dmAPI.toSafeFn(fn);
                ns = ns || 'global_' + Math.random().toString(36).slice(2, 11);
                const eventName = 'afterAjax.' + ns;

                if (document.readyState === 'complete') {
                    $.DM.events.off(eventName).on(eventName, safeFn);
                    setTimeout(function () {
                        safeFn({
                            isAjax: false,
                        });
                    }, 0);
                } else {
                    window?.waitForDeferred?.('dmAjax', () => {
                        $.DM.events.off(eventName).on(eventName, safeFn);
                        safeFn({
                            isAjax: false,
                        });
                    });
                }
            },
            toSafeFn: (fn) => {
                if (fn?.safe) {
                    return fn;
                }
                const safeFn = function (...args) {
                    try {
                        return fn?.apply(null, args);
                    } catch (e) {
                        console.log('function failed ' + e.message);
                    }
                };
                safeFn.safe = true;
                return safeFn;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }



/**
 * There are a few <link> tags with CSS resource in them that are preloaded in the page
 * in each of those there is a "onload" handler which invokes the loadCSS callback
 * defined here.
 * We are monitoring 3 main CSS files - the runtime, the global and the page.
 * When each load we check to see if we can append them all in a batch. If threre
 * is no page css (which may happen on inner pages) then we do not wait for it
 */
(function () {
  let cssLinks = {};
  function loadCssLink(link) {
    link.onload = null;
    link.rel = "stylesheet";
    link.type = "text/css";
  }
  
    function checkCss() {
      const pageCssLink = document.querySelector("[id*='CssLink']");
      const widgetCssLink = document.querySelector("[id*='widgetCSS']");

        if (cssLinks && cssLinks.runtime && cssLinks.global && (!pageCssLink || cssLinks.page) && (!widgetCssLink || cssLinks.widget)) {
            const storedRuntimeCssLink = cssLinks.runtime;
            const storedPageCssLink = cssLinks.page;
            const storedGlobalCssLink = cssLinks.global;
            const storedWidgetCssLink = cssLinks.widget;

            storedGlobalCssLink.disabled = true;
            loadCssLink(storedGlobalCssLink);

            if (storedPageCssLink) {
                storedPageCssLink.disabled = true;
                loadCssLink(storedPageCssLink);
            }

            if(storedWidgetCssLink) {
                storedWidgetCssLink.disabled = true;
                loadCssLink(storedWidgetCssLink);
            }

            storedRuntimeCssLink.disabled = true;
            loadCssLink(storedRuntimeCssLink);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    storedRuntimeCssLink.disabled = false;
                    storedGlobalCssLink.disabled = false;
                    if (storedPageCssLink) {
                      storedPageCssLink.disabled = false;
                    }
                    if (storedWidgetCssLink) {
                      storedWidgetCssLink.disabled = false;
                    }
                    // (SUP-4179) Clear the accumulated cssLinks only when we're
                    // sure that the document has finished loading and the document 
                    // has been parsed.
                    if(document.readyState === 'interactive') {
                      cssLinks = null;
                    }
                }, 0);
            });
        }
    }
  

  function loadCSS(link) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var noCSS = !!urlParams.get("nocss");
      var cssTimeout = urlParams.get("cssTimeout") || 0;

      if (noCSS) {
        return;
      }
      if (link.href && link.href.includes("d-css-runtime")) {
        cssLinks.runtime = link;
        checkCss();
      } else if (link.id === "siteGlobalCss") {
        cssLinks.global = link;
        checkCss();
      } 
      
      else if (link.id && link.id.includes("CssLink")) {
        cssLinks.page = link;
        checkCss();
      } else if (link.id && link.id.includes("widgetCSS")) {
        cssLinks.widget = link;
        checkCss();
      }
      
      else {
        requestIdleCallback(function () {
          window.setTimeout(function () {
            loadCssLink(link);
          }, parseInt(cssTimeout, 10));
        });
      }
    } catch (e) {
      throw e
    }
  }
  window.loadCSS = window.loadCSS || loadCSS;
})();



    /* usage: window.getDeferred(<deferred name>).resolve() or window.getDeferred(<deferred name>).promise.then(...)*/
    function Def() {
        this.promise = new Promise((function (a, b) {
            this.resolve = a, this.reject = b
        }).bind(this))
    }

    const defs = {};
    window.getDeferred = function (a) {
        return null == defs[a] && (defs[a] = new Def), defs[a]
    }
    window.waitForDeferred = function (b, a, c) {
        let d = window?.getDeferred?.(b);
        d
            ? d.promise.then(a)
            : c && ["complete", "interactive"].includes(document.readyState)
                ? setTimeout(a, 1)
                : c
                    ? document.addEventListener("DOMContentLoaded", a)
                    : console.error(`Deferred  does not exist`);
    };



    var isWLR = true;

    window.customWidgetsFunctions = {};
    window.customWidgetsStrings = {};
    window.collections = {};
    window.currentLanguage = "SPANISH_ARGENTINA"
    window.isSitePreview = false;




    var d_version = "production_5386";
    var build = "2025-04-15T12_48_53";
    window['v' + 'ersion'] = d_version;

    function buildEditorParent() {
        window.isMultiScreen = true;
        window.editorParent = {};
        window.previewParent = {};
        window.assetsCacheQueryParam = "?version=2025-04-15T12_48_53";
        try {
            var _p = window.parent;
            if (_p && _p.document && _p.$ && _p.$.dmfw) {
                window.editorParent = _p;
            } else if (_p.isSitePreview) {
                window.previewParent = _p;
            }
        } catch (e) {

        }
    }

    buildEditorParent();



    var _jquery = window.$;

    var jqueryAliases = ['$', 'jquery', 'jQuery'];

    jqueryAliases.forEach((alias) => {
        Object.defineProperty(window, alias, {
            get() {
                return _jquery;
            },
            set() {
                console.warn("Trying to over-write the global jquery object!");
            }
        });
    });
    window.jQuery.migrateMute = true;



    window.cookiesNotificationMarkupPreview = 'null';



    window.INSITE = window.INSITE || {};
    window.INSITE.device = "desktop";

    window.rtCommonProps = {};
    rtCommonProps["rt.ajax.ajaxScriptsFix"] =true;
    rtCommonProps["rt.pushnotifs.sslframe.encoded"] = 'aHR0cHM6Ly97c3ViZG9tYWlufS5wdXNoLW5vdGlmcy5jb20=';
    rtCommonProps["runtimecollector.url"] = 'https://rtc.multiscreensite.com';
    rtCommonProps["performance.tabletPreview.removeScroll"] = 'false';
    rtCommonProps["inlineEditGrid.snap"] =true;
    rtCommonProps["popup.insite.cookie.ttl"] = '0.5';
    rtCommonProps["rt.pushnotifs.force.button"] =true;
    rtCommonProps["common.mapbox.token"] = 'pk.eyJ1IjoiZGFubnliMTIzIiwiYSI6ImNqMGljZ256dzAwMDAycXBkdWxwbDgzeXYifQ.Ck5P-0NKPVKAZ6SH98gxxw';
    rtCommonProps["common.mapbox.js.override"] =false;
    rtCommonProps["common.here.appId"] = 'iYvDjIQ2quyEu0rg0hLo';
    rtCommonProps["common.here.appCode"] = '1hcIxLJcbybmtBYTD9Z1UA';
    rtCommonProps["isCoverage.test"] =false;
    rtCommonProps["ecommerce.ecwid.script"] = 'https://app.multiscreenstore.com/script.js';
    rtCommonProps["feature.flag.mappy.kml"] =false;
    rtCommonProps["common.resources.dist.cdn"] =true;
    rtCommonProps["common.build.dist.folder"] = 'production/5386';
    rtCommonProps["common.resources.cdn.host"] = 'https://static.cdn-website.com';
    rtCommonProps["common.resources.folder"] = 'https://static.cdn-website.com/mnlt/production/5386';
    rtCommonProps["feature.flag.runtime.backgroundSlider.preload.slowly"] =true;
    rtCommonProps["feature.flag.runtime.newAnimation.enabled"] =true;
    rtCommonProps["feature.flag.runtime.newAnimation.respectCssAnimationProps.enabled"] =true;
    rtCommonProps["feature.flag.runtime.newAnimation.jitAnimation.enabled"] =true;
    rtCommonProps["feature.flag.sites.google.analytics.gtag"] =true;
    rtCommonProps["feature.flag.runOnReadyNewTask"] =true;
    rtCommonProps["isAutomation.test"] =false;

    
    rtCommonProps['common.mapsProvider'] = 'mapbox';
    
    rtCommonProps['common.mapsProvider.version'] = '0.52.0';
    rtCommonProps['common.geocodeProvider'] = 'mapbox';
    rtCommonProps['common.map.defaults.radiusSize'] = '1500';
    rtCommonProps['common.map.defaults.radiusBg'] = 'rgba(255, 255, 255, 0.4)';
    rtCommonProps['common.map.defaults.strokeColor'] = 'rgba(255, 255, 255, 1)';
    rtCommonProps['common.map.defaults.strokeSize'] = '2';
    rtCommonProps['server.for.resources'] = '';
    rtCommonProps['feature.flag.lazy.widgets'] = true;
    rtCommonProps['feature.flag.single.wow'] = false;
    rtCommonProps['feature.flag.disallowPopupsInEditor'] = true;
    rtCommonProps['feature.flag.mark.anchors'] = true;
    rtCommonProps['captcha.public.key'] = '6LffcBsUAAAAAMU-MYacU-6QHY4iDtUEYv_Ppwlz';
    rtCommonProps['captcha.invisible.public.key'] = '6LeiWB8UAAAAAHYnVJM7_-7ap6bXCUNGiv7bBPME';
    rtCommonProps["images.sizes.small"] =160;
    rtCommonProps["images.sizes.mobile"] =640;
    rtCommonProps["images.sizes.tablet"] =1280;
    rtCommonProps["images.sizes.desktop"] =1920;
    rtCommonProps["modules.resources.cdn"] =true;
    rtCommonProps["import.images.storage.imageCDN"] = 'https://lirp.cdn-website.com/';
    rtCommonProps["feature.flag.runtime.inp.threshold"] =150;
    rtCommonProps["feature.flag.performance.logs"] =true;
    rtCommonProps["site.widget.form.captcha.type"] = 'g_recaptcha';
    rtCommonProps["friendly.captcha.site.key"] = 'FCMGSQG9GVNMFS8K';
    rtCommonProps["cookiebot.mapbox.consent.category"] = 'marketing';
    // feature flags that's used out of runtime module (in  legacy files)
    rtCommonProps["platform.monolith.personalization.dateTimeCondition.popupMsgAction.moveToclient.enabled"] =true;

    window.rtFlags = {};
    rtFlags["unsuspendEcwidStoreOnRuntime.enabled"] =true;
    rtFlags["scripts.widgetCount.enabled"] =true;
    rtFlags["ecom.ecwidNewUrlStructure.enabled"] = false;
    rtFlags["ecom.ecwid.storefrontV3.enabled"] = false;
    rtFlags["ecom.ecwid.old.store.fix.facebook.share"] = true;
    rtFlags["feature.flag.photo.gallery.exact.size"] =true;
    rtFlags["geocode.search.localize"] =false;
    rtFlags["feature.flag.runtime.newAnimation.asyncInit.setTimeout.enabled"] =false;
    rtFlags["twitter.heightLimit.enabled"] = true;
    rtFlags["editor.classicHybrid.photogallery.fix"] =true;
    rtFlags["runtime.lottieOverflow"] =false;
    rtFlags["runtime.monitoring.sentry.ignoreErrors"] = "";
    rtFlags["contact.form.browserValidation.enabled"] =true;
    rtFlags["feature.flag.notifications.push.from.top"] =true;
    rtFlags["streamline.monolith.personalization.supportMultipleConditions.enabled"] =false;
    rtFlags["runtime.cwv.report.cls.enabled"] =true;
    rtFlags["editor.link.on.container"] =false;
    rtFlags["flex.runtime.popup.with.show"] =true;
    rtFlags["contact.form.useActiveForm"] =true;
    rtFlags["runtime.ssr.productStore.internal.observer"] =true;
    rtFlags["runtime.ssr.productCustomizations"] =true;



    
    $(window).bind("orientationchange", function (e) {
        $.layoutManager.initLayout();
        
    });
    $(document).resize(function () {
        
    });



(function() {
    if (!window.location.search) {
        return;
    }
	const cleanParams = window.location.search.substring(1); // Strip ?
	const queryParams = cleanParams.split('&');

	const expires = 'expires=' + new Date().getTime() + 24 * 60 * 60 * 1000;
	const domain = 'domain=' + window.location.hostname;
	const path = "path=/";

	queryParams.forEach((param) => {
		const [key, value = ''] = param.split('=');
		if (key.startsWith('utm_')) {
			const cookieName = "_dm_rt_" + key.substring(4);
			const cookie = cookieName + "=" + value;
			const joined = [cookie, expires, domain, path].join(";");
			document.cookie = joined;
		}
	});
}());



;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//d32hwlnfiv2gyn.cloudfront.net/sp-2.0.0-dm-0.1.min.js","snowplow"));
window.dmsnowplow  = window.snowplow;

dmsnowplow('newTracker', 'cf', 'd32hwlnfiv2gyn.cloudfront.net', { // Initialise a tracker
  appId: 'ae9ec90c'
});

// snowplow queries element styles so we wait until CSS calculations are done.
requestAnimationFrame(() => {
	dmsnowplow('trackPageView');
	_dm_insite.forEach((rule) => {
		// Specifically in popup only the client knows if it is shown or not so we don't always want to track its impression here
		// the tracking is in popup.js
		if (rule.actionName !== "popup") {
			dmsnowplow('trackStructEvent', 'insite', 'impression', rule.ruleType, rule.ruleId);
		}
		window?.waitForDeferred?.('dmAjax', () => {
			$.DM.events.trigger('event-ruleTriggered', {value: rule});
		});
	});
});



	window?.waitForDeferred?.('dmAjax', () => {
		// Collects client data and updates cookies used by smart sites
		window.expireDays = 365;
		window.visitLength = 30 * 60000;
		$.setCookie("dm_timezone_offset", (new Date()).getTimezoneOffset(), window.expireDays);
			setSmartSiteCookiesInternal("dm_this_page_view","dm_last_page_view","dm_total_visits","dm_last_visit");
	});


 window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-PTS2D4QTDD'); 

 var _publicarDate = new Date().getFullYear();document.getElementById('_publicarCurYear').innerHTML=_publicarDate;