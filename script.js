$(function() {
  setTimeout(() => {
    $('#modal').fadeIn();
  }, 5000);
  $('.closeModalButton').click(() => {
    $('#modal').fadeOut();
  });

  $('#addTodoButton').click((e) => {
    e.preventDefault();
    let todoTitle = $('#todoTitleInput').val();
    let todoContent = $('#todoContentTextarea').val();
    $('#todoTitleInput').val('');
    $('#todoContentTextarea').val('');

    let todoList = $('#todoList');
    let newTodo = `<li class="text-muted pt-3 d-flex align-items-center justify-content-between"><p class="pb-3 mb-0 small lh-125 border-bottom border-gray"><strong class="d-block text-gray-dark pb-1">${todoTitle}</strong>${todoContent}</p><div class="complete-button btn btn-primary btn-raised">完了</div></li>`;
    todoList.prepend(newTodo);
  });

  $('#clearFormButton').click((e) => {
    e.preventDefault();
    $('#todoTitleInput').val('');
    $('#todoContentTextarea').val('');
  });

  $(document).on('click', '.complete-button', (e) => {
    if(!confirm('このタスクを完了してよろしいですか？')){
      /* キャンセルの時の処理 */
      return false;
    } else {
      /*　OKの時の処理 */
      $(e.currentTarget).parent().remove();
    }
  });
});