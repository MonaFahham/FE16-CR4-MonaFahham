// Change string to Obj
const taskList = JSON.parse(tasks);
// console.log(taskList);

const content_box = document.querySelector(".content_box");
// console.log(content_box);

const myTask = (priorityTask) => {
    // Empty the HTML
    content_box.innerHTML = "";

    taskList.forEach((task) => {
        if (task.priority <= 1) {
            priorityColor = "bg-success";
        } else if (task.priority <= 3) {
            priorityColor = "bg-warning";
        } else {
            priorityColor = "bg-danger";
        }

        // Make a new card for each task of JSON file
        content_box.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center my-3">
        <div class="card" style="width: 18rem">
            <div class=" row justify-content-center top-card">
                <div class="col-12 my-2 row d-flex justify-content-between ">
                    <div class="col-3 text-center">
                        <h6 class="bg_task">Task</h6>
                    </div>
                    <div class="col-5 d-flex justify-content-end top-card-right">
                        <img class="bookmark" src="../IMG/bookmark.jpg" >
                        <img class="three_dots" src="../IMG/three_dots.png">
                    </div>
                </div>
                <div class="col-12">
                    <div class="card center_card_image">
                      <img src="${task.image}" class="img_card" alt="..." />
                    </div>
                </div>
            </div>
            <div class="card-body trying">
                <h5 class="card-title text-center"><b>${task.taskName}</b></h5>
                <h6 class="card-title text-center">${task.description}</h6>
                <hr>
                <div class="d-flex prio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill priority_icon" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    <p>Priority level:</p>
                     <a class="btn_like">
                      <p class="mx-1 px-2 rounded num_prio count_btn ${priorityColor}">${task.priority}</p>
                      </a>
                </div>
                <div class="d-flex deadline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-day deadline_icon" viewBox="0 0 16 16">
                        <path d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V8.418h-.672v4.105z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                      </svg>
                    <p>Deadline: ${task.deadline}</p>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                    <div class="col-4 mx-2 d-flex align-items-center">
                        <a class="btn btn-danger d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>Delete
                        </a>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <a class="btn btn-success d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                              </svg> Done
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    });
    increaseLikeNumber();
};

// Increase the number of likes
const increaseLikeNumber = () => {
    let btnLike = document.getElementsByClassName("btn_like");
    // console.log(btnLike);

    // 9 btn => 9 i
    for (let i = 0; i < btnLike.length; i++) {
        btnLike[i].addEventListener("click", function() {
            const likes = taskList[i].priority++;
            document.getElementsByClassName("count_btn")[i].innerHTML = likes;

            var sortedArray = taskList.sort((a, b) => b.likes - a.likes);
            myTask(sortedArray);
        });
    }
};

myTask(taskList);
increaseLikeNumber();

// // Sort the like numbers
function sortLike() {
    taskList.sort(function(min, max) {
        return max.priority - min.priority;
    });
}

document.querySelector(".link_sort").addEventListener("click", function() {
    sortLike();
    myTask(taskList);
});