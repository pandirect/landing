import $ from 'jquery'
import Scrollspy from './scrollspy'
import Tab from './tab'
import Util from './util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(($) => {
    if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
    }

    const version = $.fn.jquery.split(' ')[0].split('.')
    const minMajor = 1
    const ltMajor = 2
    const minMinor = 9
    const minPatch = 1
    const maxMajor = 4

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
    }
})($)

export {
    Util,
    Scrollspy,
    Tab,
}

/*! lozad.js - v1.9.0 - 2019-02-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.lozad = factory());
}(this, (function () { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  /**
   * Detect IE browser
   * @const {boolean}
   * @private
   */
  var isIE = typeof document !== 'undefined' && document.documentMode;

  var defaultConfig = {
    rootMargin: '0px',
    threshold: 0,
    load: function load(element) {
      if (element.nodeName.toLowerCase() === 'picture') {
        var img = document.createElement('img');
        if (isIE && element.getAttribute('data-iesrc')) {
          img.src = element.getAttribute('data-iesrc');
        }
        if (element.getAttribute('data-alt')) {
          img.alt = element.getAttribute('data-alt');
        }
        element.appendChild(img);
      }
      if (element.nodeName.toLowerCase() === 'video' && !element.getAttribute('data-src')) {
        if (element.children) {
          var childs = element.children;
          var childSrc = void 0;
          for (var i = 0; i <= childs.length - 1; i++) {
            childSrc = childs[i].getAttribute('data-src');
            if (childSrc) {
              childs[i].src = childSrc;
            }
          }
          element.load();
        }
      }
      if (element.getAttribute('data-src')) {
        element.src = element.getAttribute('data-src');
      }
      if (element.getAttribute('data-srcset')) {
        element.setAttribute('srcset', element.getAttribute('data-srcset'));
      }
      if (element.getAttribute('data-background-image')) {
        element.style.backgroundImage = 'url(\'' + element.getAttribute('data-background-image') + '\')';
      }
      if (element.getAttribute('data-toggle-class')) {
        element.classList.toggle(element.getAttribute('data-toggle-class'));
      }
    },
    loaded: function loaded() {}
  };

  function markAsLoaded(element) {
    element.setAttribute('data-loaded', true);
  }

  var isLoaded = function isLoaded(element) {
    return element.getAttribute('data-loaded') === 'true';
  };

  var onIntersection = function onIntersection(load, loaded) {
    return function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0 || entry.isIntersecting) {
          observer.unobserve(entry.target);

          if (!isLoaded(entry.target)) {
            load(entry.target);
            markAsLoaded(entry.target);
            loaded(entry.target);
          }
        }
      });
    };
  };

  var getElements = function getElements(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (selector instanceof Element) {
      return [selector];
    }
    if (selector instanceof NodeList) {
      return selector;
    }
    return root.querySelectorAll(selector);
  };

  function lozad () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.lozad';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _defaultConfig$option = _extends({}, defaultConfig, options),
        root = _defaultConfig$option.root,
        rootMargin = _defaultConfig$option.rootMargin,
        threshold = _defaultConfig$option.threshold,
        load = _defaultConfig$option.load,
        loaded = _defaultConfig$option.loaded;

    var observer = void 0;

    if (window.IntersectionObserver) {
      observer = new IntersectionObserver(onIntersection(load, loaded), {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      });
    }

    return {
      observe: function observe() {
        var elements = getElements(selector, root);

        for (var i = 0; i < elements.length; i++) {
          if (isLoaded(elements[i])) {
            continue;
          }
          if (observer) {
            observer.observe(elements[i]);
            continue;
          }
          load(elements[i]);
          markAsLoaded(elements[i]);
          loaded(elements[i]);
        }
      },
      triggerLoad: function triggerLoad(element) {
        if (isLoaded(element)) {
          return;
        }

        load(element);
        markAsLoaded(element);
        loaded(element);
      },

      observer: observer
    };
  }

  return lozad;

})));

import $ from 'jquery'
import Util from './util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ScrollSpy = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'scrollspy'
  const VERSION            = '4.0.0'
  const DATA_KEY           = 'bs.scrollspy'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Default = {
    offset : 10,
    method : 'auto',
    target : ''
  }

  const DefaultType = {
    offset : 'number',
    method : 'string',
    target : '(string|element)'
  }

  const Event = {
    ACTIVATE      : `activate${EVENT_KEY}`,
    SCROLL        : `scroll${EVENT_KEY}`,
    LOAD_DATA_API : `load${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_ITEM : 'dropdown-item',
    DROPDOWN_MENU : 'dropdown-menu',
    ACTIVE        : 'active'
  }

  const Selector = {
    DATA_SPY        : '[data-spy="scroll"]',
    ACTIVE          : '.active',
    NAV_LIST_GROUP  : '.nav, .list-group',
    NAV_LINKS       : '.nav-link',
    NAV_ITEMS       : '.nav-item',
    LIST_ITEMS      : '.list-group-item',
    DROPDOWN        : '.dropdown',
    DROPDOWN_ITEMS  : '.dropdown-item',
    DROPDOWN_TOGGLE : '.dropdown-toggle'
  }

  const OffsetMethod = {
    OFFSET   : 'offset',
    POSITION : 'position'
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy {
    constructor(element, config) {
      this._element       = element
      this._scrollElement = element.tagName === 'BODY' ? window : element
      this._config        = this._getConfig(config)
      this._selector      = `${this._config.target} ${Selector.NAV_LINKS},` +
                            `${this._config.target} ${Selector.LIST_ITEMS},` +
                            `${this._config.target} ${Selector.DROPDOWN_ITEMS}`
      this._offsets       = []
      this._targets       = []
      this._activeTarget  = null
      this._scrollHeight  = 0

      $(this._scrollElement).on(Event.SCROLL, (event) => this._process(event))

      this.refresh()
      this._process()
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    // Public

    refresh() {
      const autoMethod = this._scrollElement === this._scrollElement.window
        ? OffsetMethod.OFFSET : OffsetMethod.POSITION

      const offsetMethod = this._config.method === 'auto'
        ? autoMethod : this._config.method

      const offsetBase = offsetMethod === OffsetMethod.POSITION
        ? this._getScrollTop() : 0

      this._offsets = []
      this._targets = []

      this._scrollHeight = this._getScrollHeight()

      const targets = $.makeArray($(this._selector))

      targets
        .map((element) => {
          let target
          const targetSelector = Util.getSelectorFromElement(element)

          if (targetSelector) {
            target = $(targetSelector)[0]
          }

          if (target) {
            const targetBCR = target.getBoundingClientRect()
            if (targetBCR.width || targetBCR.height) {
              // TODO (fat): remove sketch reliance on jQuery position/offset
              return [
                $(target)[offsetMethod]().top + offsetBase,
                targetSelector
              ]
            }
          }
          return null
        })
        .filter((item) => item)
        .sort((a, b) => a[0] - b[0])
        .forEach((item) => {
          this._offsets.push(item[0])
          this._targets.push(item[1])
        })
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._scrollElement).off(EVENT_KEY)

      this._element       = null
      this._scrollElement = null
      this._config        = null
      this._selector      = null
      this._offsets       = null
      this._targets       = null
      this._activeTarget  = null
      this._scrollHeight  = null
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default,
        ...config
      }

      if (typeof config.target !== 'string') {
        let id = $(config.target).attr('id')
        if (!id) {
          id = Util.getUID(NAME)
          $(config.target).attr('id', id)
        }
        config.target = `#${id}`
      }

      Util.typeCheckConfig(NAME, config, DefaultType)

      return config
    }

    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    }

    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }

    _process() {
      const scrollTop    = this._getScrollTop() + this._config.offset
      const scrollHeight = this._getScrollHeight()
      const maxScroll    = this._config.offset +
        scrollHeight -
        this._getOffsetHeight()

      if (this._scrollHeight !== scrollHeight) {
        this.refresh()
      }

      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1]

        if (this._activeTarget !== target) {
          this._activate(target)
        }
        return
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null
        this._clear()
        return
      }

      for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] &&
            scrollTop >= this._offsets[i] &&
            (typeof this._offsets[i + 1] === 'undefined' ||
                scrollTop < this._offsets[i + 1])

        if (isActiveTarget) {
          this._activate(this._targets[i])
        }
      }
    }

    _activate(target) {
      this._activeTarget = target

      this._clear()

      let queries = this._selector.split(',')
      // eslint-disable-next-line arrow-body-style
      queries = queries.map((selector) => {
        return `${selector}[data-target="${target}"],` +
               `${selector}[href="${target}"]`
      })

      const $link = $(queries.join(','))

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        $link.addClass(ClassName.ACTIVE)
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE)
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $link.parents(Selector.NAV_LIST_GROUP).prev(`${Selector.NAV_LINKS}, ${Selector.LIST_ITEMS}`).addClass(ClassName.ACTIVE)
        // Handle special case when .nav-link is inside .nav-item
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE)
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      })
    }

    _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE)
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)
        const _config = typeof config === 'object' && config

        if (!data) {
          data = new ScrollSpy(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, () => {
    const scrollSpys = $.makeArray($(Selector.DATA_SPY))

    for (let i = scrollSpys.length; i--;) {
      const $spy = $(scrollSpys[i])
      ScrollSpy._jQueryInterface.call($spy, $spy.data())
    }
  })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface
  $.fn[NAME].Constructor = ScrollSpy
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ScrollSpy._jQueryInterface
  }

  return ScrollSpy
})($)

export default ScrollSpy

import $ from 'jquery'
import Util from './util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tab = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'tab'
  const VERSION             = '4.0.0'
  const DATA_KEY            = 'bs.tab'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Event = {
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_MENU : 'dropdown-menu',
    ACTIVE        : 'active',
    DISABLED      : 'disabled',
    FADE          : 'fade',
    SHOW          : 'show'
  }

  const Selector = {
    DROPDOWN              : '.dropdown',
    NAV_LIST_GROUP        : '.nav, .list-group',
    ACTIVE                : '.active',
    ACTIVE_UL             : '> li > .active',
    DATA_TOGGLE           : '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE       : '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .active'
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab {
    constructor(element) {
      this._element = element
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // Public

    show() {
      if (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          $(this._element).hasClass(ClassName.ACTIVE) ||
          $(this._element).hasClass(ClassName.DISABLED)) {
        return
      }

      let target
      let previous
      const listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0]
      const selector = Util.getSelectorFromElement(this._element)

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE
        previous = $.makeArray($(listElement).find(itemSelector))
        previous = previous[previous.length - 1]
      }

      const hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      })

      const showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      })

      if (previous) {
        $(previous).trigger(hideEvent)
      }

      $(this._element).trigger(showEvent)

      if (showEvent.isDefaultPrevented() ||
         hideEvent.isDefaultPrevented()) {
        return
      }

      if (selector) {
        target = $(selector)[0]
      }

      this._activate(
        this._element,
        listElement
      )

      const complete = () => {
        const hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: this._element
        })

        const shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        })

        $(previous).trigger(hiddenEvent)
        $(this._element).trigger(shownEvent)
      }

      if (target) {
        this._activate(target, target.parentNode, complete)
      } else {
        complete()
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }

    // Private

    _activate(element, container, callback) {
      let activeElements
      if (container.nodeName === 'UL') {
        activeElements = $(container).find(Selector.ACTIVE_UL)
      } else {
        activeElements = $(container).children(Selector.ACTIVE)
      }

      const active = activeElements[0]
      const isTransitioning = callback &&
        Util.supportsTransitionEnd() &&
        (active && $(active).hasClass(ClassName.FADE))

      const complete = () => this._transitionComplete(
        element,
        active,
        callback
      )

      if (active && isTransitioning) {
        $(active)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)
      } else {
        complete()
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(`${ClassName.SHOW} ${ClassName.ACTIVE}`)

        const dropdownChild = $(active.parentNode).find(
          Selector.DROPDOWN_ACTIVE_CHILD
        )[0]

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE)
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false)
        }
      }

      $(element).addClass(ClassName.ACTIVE)
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true)
      }

      Util.reflow(element)
      $(element).addClass(ClassName.SHOW)

      if (element.parentNode &&
          $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        const dropdownElement = $(element).closest(Selector.DROPDOWN)[0]
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        }

        element.setAttribute('aria-expanded', true)
      }

      if (callback) {
        callback()
      }
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $this = $(this)
        let data = $this.data(DATA_KEY)

        if (!data) {
          data = new Tab(this)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault()
      Tab._jQueryInterface.call($(this), 'show')
    })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface
  $.fn[NAME].Constructor = Tab
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tab._jQueryInterface
  }

  return Tab
})($)

export default Tab



/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Util = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  let transition = false

  const MAX_UID = 1000000

  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
        }
        return undefined // eslint-disable-line no-undefined
      }
    }
  }

  function transitionEndTest() {
    if (typeof window !== 'undefined' && window.QUnit) {
      return false
    }

    return {
      end: 'transitionend'
    }
  }

  function transitionEndEmulator(duration) {
    let called = false

    $(this).one(Util.TRANSITION_END, () => {
      called = true
    })

    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this)
      }
    }, duration)

    return this
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest()

    $.fn.emulateTransitionEnd = transitionEndEmulator

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
    }
  }

  function escapeId(selector) {
    // We escape IDs in case of special selectors (selector = '#myId:something')
    // $.escapeSelector does not exist in jQuery < 3
    selector = typeof $.escapeSelector === 'function' ? $.escapeSelector(selector).substr(1)
      : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1')

    return selector
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  const Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID) // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix))
      return prefix
    },

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')
      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || ''
      }

      // If it's an ID
      if (selector.charAt(0) === '#') {
        selector = escapeId(selector)
      }

      try {
        const $selector = $(document).find(selector)
        return $selector.length > 0 ? selector : null
      } catch (err) {
        return null
      }
    },

    reflow(element) {
      return element.offsetHeight
    },

    triggerTransitionEnd(element) {
      $(element).trigger(transition.end)
    },

    supportsTransitionEnd() {
      return Boolean(transition)
    },

    isElement(obj) {
      return (obj[0] || obj).nodeType
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (const property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          const expectedTypes = configTypes[property]
          const value         = config[property]
          const valueType     = value && Util.isElement(value)
            ? 'element' : toType(value)

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  setTransitionEndSupport()

  return Util
})($)

export default Util

const observer = lozad();
observer.observe();