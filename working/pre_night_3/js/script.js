const filesData = [
    {"owner": "timc", "filename": "helloworld.js"},
    {"owner": "timc", "filename": "towersofhanoi.js"},
]

const $fileList = document.querySelector("#file-list");
const $confirmationPrompt = document.querySelector("#confirmation-prompt");
const $confirmationText = document.querySelector("#confirmation-text");

let $currentlyDeletingFile;


for (let i = 0; i < filesData.length; i++) {
    const $newLi = document.createElement("li");
    $newLi.innerText = `${filesData[i]["owner"]} - ${filesData[i]["filename"]}`;

    const $newDelIcon = document.createElement("span");
    $newDelIcon.classList.add("delete-icon");
    $newDelIcon.innerText = "🗑️";
    $newDelIcon.setAttribute("data-file-owner", filesData[i]["owner"]);
    $newDelIcon.setAttribute("data-file-name", filesData[i]["filename"]);

    $newLi.append($newDelIcon);
    $fileList.append($newLi);
}

function showConfirmation(filename, owner) {
    const confirmationMessage = "Are you sure you want to delete the file " +
        filename + " owned by " + owner + "?";
    $confirmationText.innerText = confirmationMessage;
    $confirmationPrompt.classList.remove("hidden");

}

function hideConfirmation(){
    $confirmationPrompt.classList.add("hidden");
}

document.querySelectorAll(".delete-icon").forEach(function (curIcon) {
    console.log(curIcon);
    curIcon.addEventListener("click", function () {
        console.log(this);
        $currentlyDeletingFile = this.parentElement;
        console.log($currentlyDeletingFile);
        console.log(`Are you sure you want to delete the file ${curIcon.getAttribute("data-file-name")} owned by ${curIcon.getAttribute("data-file-owner")}?`);
        showConfirmation(
            curIcon.getAttribute("data-file-name"),
            curIcon.getAttribute("data-file-owner")
        );

    });
});

function deleteFile(){
    const filename = $currentlyDeletingFile.querySelector(".delete-icon")
        .getAttribute("data-file-name");

    $currentlyDeletingFile.remove();
    $currentlyDeletingFile = null;
    console.log("DELETING: " + filename);
    hideConfirmation();
}
