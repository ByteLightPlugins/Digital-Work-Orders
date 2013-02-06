 $(function () {
  $('#save-button').click(function (e) {
    var content = {
      body: $('#note-body').val(), 
      manager: $('#manager').val(),
      department: $('#department').val(),
      employee: $('#employee').val()
    };
    BL.createContent(JSON.stringify(content));
  })
});