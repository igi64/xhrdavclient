/**
 * domparse.js - Dom parse static functions for xhrdavclient(Mix-in)
 *
 * @license Copyright 2011 The xhrdavclient library authors. All rights reserved.
 */

goog.provide('xhrdav.lib.functions.domparse');
goog.require('xhrdav.lib.Config');
goog.require('xhrdav.lib.DomParser');
goog.require('xhrdav.lib.DomHandler');

/**
 * Parse WebDAV Multi-Status to row structure by Dom parser
 *
 * @param {Object} xml WebDAV Multi-Status collections
 * @return {Object} converted multistatus object(Associate array)
 */
xhrdav.lib.functions.domparse.parseXml = function(xml) {
  var handler = new xhrdav.lib.DomHandler();
  var parser, obj;
  try {
    parser = new xhrdav.lib.DomParser().initialize(xml, handler).parse();
  } catch(e) {
    // TODO: [Replace goog.debug.Logger]
    console.log("Error: " + e.message);
  } finally {
    obj = handler.getObject() || {};
    handler.dispose();
  }

  return obj;
};

/* Entry Point for closure compiler */
goog.exportSymbol('xhrdav.lib.functions.domparse', xhrdav.lib.functions.domparse);
goog.exportSymbol('xhrdav.lib.functions.domparse.parseXml',
  xhrdav.lib.functions.domparse.parseXml);

