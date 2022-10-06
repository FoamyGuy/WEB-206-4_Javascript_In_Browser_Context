let currentlyShowing = 0;

function asTabs(node) {
    let $tabContents = Array.from(node.children);
    let $btnContainer = document.createElement("div");

    for (let i = 0; i < $tabContents.length; i++) {
        console.log($tabContents[i]);

        if (i > 0) {
            $tabContents[i].style.display = "none";
        }


        let $newBtn = document.createElement("button");
        if (i === 0) {
            $newBtn.classList.add("active");
        }

        $newBtn.innerText = $tabContents[i].getAttribute("data-tabname");

        $newBtn.addEventListener("click", function () {
            console.log("clicked", i);
            $btnContainer.children[currentlyShowing].classList.remove("active");
            $tabContents[currentlyShowing].style.display = "none";
            $btnContainer.children[i].classList.add("active");
            $tabContents[i].style.display = "block";
            currentlyShowing = i;
        });

        $btnContainer.append($newBtn);

    }

    node.prepend($btnContainer);

}

asTabs(document.querySelector("tab-panel"));