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
    $("#addItemInput").val("");
    addTaskModal.fadeIn();
    $("#addItemInput").select();
  });

  let closeModal = $("#closeModal");
  closeModal.on("click", function () {
    addTaskModal.fadeOut();
  });

  let incompleteTasksContainer = $("#incompleteTasksContainer");

  if (!incompleteTasksContainer.val()) {
    incompleteTasksContainer.html(
      `
      <li>
        <span id="noTasks" class="p-2">No tasks added yet.</span>
      </li>
      `
    );
  }

  let addItemInput = $("#addItemInput");
  let addBtn = $("#addBtn");
  addBtn.on("click", function () {
    if (!addItemInput.val().trim()) {
      return false;
    }
    newTask = `
    <li>
    <div>
    <input id="checkbox" type="checkbox" />
    <label for="checkbox">${addItemInput.val()}</label>
    </div>
    <div>
    <button id="editBtn" class="btn editButton">
    <i class="far fa-edit"></i>
    </button>
    <button id="deleteBtn" class="btn deleteButton">
    <i class="far fa-trash-alt"></i>
    </button>
    </div>
    </li>
    `;
    incompleteTasksContainer.prepend(newTask);
    addTaskModal.fadeOut();
  });

  $(document).on("click", "#editBtn", function () {
    value = $(this).parent().parent().find("span").text();
    $(this).closest("li").remove();
    console.log(value);
    addTaskModal.fadeIn();
    addItemInput.val(value);
  });

  $(document).on("click", "#deleteBtn", function () {
    $(this).closest("li").remove();
  });

  if ($("#PROBA").prop(":checked")) {
    alert("Check box is checked");
  }

  // Treba array of objects za complete tasks
});
