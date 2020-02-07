$(function() {
  // 有料登録ポップアップの表示
  setTimeout(function() {
    $('#modal').fadeIn();
  }, 5000);
  $('.closeModalButton').click(function() {
    $('#modal').fadeOut();
  });

  // ToDoの追加
  $('#addTodoButton').click(function() {
    const todoTitle = $('#todoTitleInput').val();
    const todoContent = $('#todoContentTextarea').val();
    clearForm();

    const todoList = $('#todoList');
    const newTodo = `<li class="text-muted pt-3 d-flex align-items-center justify-content-between">`
                  + `<p class="pb-3 mb-0 small lh-125 border-bottom border-gray">`
                  + `<strong class="d-block text-gray-dark pb-1">${todoTitle}</strong>`
                  + `${todoContent}</p>`
                  + `<div class="complete-button btn btn-primary btn-raised">完了</div>`
                  + `</li>`;
    todoList.prepend(newTodo);
    return false;
  });

  // ToDo追加フォームの内容のクリア
  $('#clearFormButton').click(function() {
    clearForm();
    return false;
  });

  // ToDoの完了
  $(document).on('click', '.complete-button', function() {
    if(confirm('このタスクを完了してよろしいですか？')){
      $(this).parent().remove();
    } else {
      return false;
    }
  });

  function clearForm() {
    $('#todoTitleInput').val('');
    $('#todoContentTextarea').val('');
  }
});
