$(function () {
  let toDoApp = $("#toDoApp");
  let appLoader = $("#appLoader");

  toDoApp.hide();

  let openModalBtn = $("#openModalBtn");
  openModalBtn.hide();

  let startBtn = $("#startBtn");
  startBtn.on("click", function () {
    appLoader.hide();
    openModalBtn.fadeIn();
    toDoApp.fadeIn();
  });

  let addTaskModal = $("#addTaskModal");
  addTaskModal.hide();

  openModalBtn.on("click", function () {
    addTaskModal.fadeIn();
  });

  let closeModal = $("#closeModal");
  closeModal.on("click", function () {
    addTaskModal.fadeOut();
  });
});
