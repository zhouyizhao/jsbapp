var font = {
  fontFamliy:'Agency FB',
  fontStyle:'',
  fontWeight:'',
  fontSize:'8px'
}
$(function() {
  var menu = new $menubar();
  menu.show(menuData);
  var ed = new $editor();
  ed.show('body');
});