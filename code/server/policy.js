BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

var trusted = [
  '*.google-analytics.com',
  '*.mxpnl.com',
  '*.zendesk.com',
  '*.gstatic.com',
  '*.googleapis.com',
  '*.google.com',
  '*.stamen.com',
  '*.placehold.it'
];

_.each(trusted, function(origin) {
  origin = origin;
  BrowserPolicy.content.allowOriginForAll(origin);});