let input = document.querySelector("input");
input.addEventListener("change", () => {
    if (input.files.length > 0) {
        let file = input.files[0];
        console.log("You chose", file.name);
        if (file.type) console.log("It has type", file.type);

        if (file.type === "text/plain") {
            let reader = new FileReader();
            reader.addEventListener("load", () => {
                console.log("File", file.name, "starts with",
                    reader.result.slice(0, 20));

                $txtArea = document.createElement("textarea");
                $txtArea.value = reader.result;
                document.body.append($txtArea);
            });
            reader.readAsText(file);
        }

    }
});



