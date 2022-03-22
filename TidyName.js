var origName = '@{name}';
var trimName = origName.replace(".", " ");
var trimName = trimName.trim();
//Title Cases the name
var trimName = trimName.replace(/([^\W_]+[^\s-]*) */g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
var noSpecialChars = trimName.replace(/[^a-zA-Z0-9 ]/g, '');

console.log("noSpecialChars is - " + noSpecialChars);
this.setCustomData({ name: noSpecialChars });

///([^\W_]+[^\s-]*) */g
///\w\S*/g