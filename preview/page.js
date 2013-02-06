$(function () {
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  
  $('blockquote').text(content.body);
  $('#manager > span').text(content.manager);
  $('#department > span').text(content.department);
  $('#employee > span').text(content.employee);
  
  BL.previewReady();
});