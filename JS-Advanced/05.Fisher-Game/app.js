function attachEvents() {

    let anglerInp = document.getElementById("anglerVal");
    let weightInp = document.getElementById("weightVal");
    let speciesInp = document.getElementById("speciesVal");
    let locationInp = document.getElementById("locationVal");
    let baitInp = document.getElementById("baitVal");
    let captureTimeInp = document.getElementById("captureTimeVal");
    let catchesDiv = document.getElementById("catches");

    let addBtn = document.getElementsByClassName("add")[0];
    addBtn.addEventListener("click", function () {
        let angler = anglerInp.value;
        let weight = weightInp.value;
        let species = speciesInp.value;
        let location = locationInp.value;
        let bait = baitInp.value;
        let captureTime = captureTimeInp.value;
        let newCatch = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        }

        fetch("http://localhost:3030/data/catches", {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCatch)
        });
    })


    let loadBtn = document.getElementsByClassName("load")[0];
    loadBtn.addEventListener("click", function () {
        loadContent();
    })

    function loadContent() {
        catchesDiv.innerHTML = "";
        fetch("http://localhost:3030/data/catches")
            .then(result => result.json())
            .then(data => {
                let dataArr = Object.entries(data);
                dataArr.forEach(c => {
                    //create div for the catch
                    let newDiv = document.createElement("div");
                    newDiv.setAttribute("id", `${c[0]}`);
                    newDiv.className = "catch";
                    //angler
                    let anglLab = document.createElement("label");
                    anglLab.textContent = "Angler";
                    newDiv.appendChild(anglLab);
                    let anglInp = document.createElement("input");
                    anglInp.value = `${c[1].angler}`;
                    anglInp.className = "input";
                    newDiv.appendChild(anglInp);
                    newDiv.appendChild(document.createElement("hr"));
                    //  weight
                    let wLab = document.createElement("label");
                    wLab.textContent = "Weight";
                    newDiv.appendChild(wLab);
                    let wInp = document.createElement("input");
                    wInp.value = `${c[1].weight}`;
                    wInp.className = "input";
                    wInp.setAttribute("type", "number");
                    newDiv.appendChild(wInp);
                    newDiv.appendChild(document.createElement("hr"));
                    //species
                    let sLab = document.createElement("label");
                    sLab.textContent = "Species";
                    newDiv.appendChild(sLab);
                    let sInp = document.createElement("input");
                    sInp.value = `${c[1].species}`;
                    sInp.className = "input";
                    newDiv.appendChild(sInp);
                    newDiv.appendChild(document.createElement("hr"));
                    //location
                    let lLab = document.createElement("label");
                    lLab.textContent = "Location";
                    newDiv.appendChild(lLab);
                    let lInp = document.createElement("input");
                    lInp.value = `${c[1].location}`;
                    lInp.className = "input";
                    newDiv.appendChild(lInp);
                    newDiv.appendChild(document.createElement("hr"));
                    //bait
                    let bLab = document.createElement("label");
                    bLab.textContent = "Bait";
                    newDiv.appendChild(bLab);
                    let bInp = document.createElement("input");
                    bInp.value = `${c[1].bait}`;
                    bInp.className = "input";
                    newDiv.appendChild(bInp);
                    newDiv.appendChild(document.createElement("hr"));
                    //capture time
                    let cLab = document.createElement("label");
                    cLab.textContent = "Capture time";
                    newDiv.appendChild(cLab);
                    let cInp = document.createElement("input");
                    cInp.value = `${c[1].captureTime}`;
                    cInp.className = "input";
                    cInp.setAttribute("type", "number");
                    newDiv.appendChild(cInp);
                    newDiv.appendChild(document.createElement("hr"));
                    //update
                    let updateBtn = document.createElement("button");
                    updateBtn.className = "button";
                    updateBtn.textContent = "UPDATE";
                    updateBtn.addEventListener("click", function () {
                        upd(newDiv.id);
                    });
                    newDiv.appendChild(updateBtn);
                    let deleteBtn = document.createElement("button");
                    deleteBtn.className = "button";
                    deleteBtn.textContent = "DELETE";
                    deleteBtn.addEventListener("click", function () {
                        del(newDiv.id);
                    });
                    newDiv.appendChild(deleteBtn);
                    catchesDiv.appendChild(newDiv);
                });
            });
    }


    function del(id) {
        fetch(`http://localhost:3030/data/catches/` + id, {
                method: 'DELETE'
            })
            .then(() => {
                let divToDelete = document.getElementById(id);
                divToDelete.remove();
            })
            .catch(err => {
                console.error(err)
            });
    }
}

function upd(id) {
    let inputs = document.getElementById(id).getElementsByTagName('input');
    let newContent = {
        angler: inputs[0].value,
        weight: inputs[1].value,
        species: inputs[2].value,
        location: inputs[3].value,
        bait: inputs[4].value,
        captureTime: inputs[5].value
    };

    fetch(`http://localhost:3030/data/catches/` + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newContent)
        })
        .then(() =>
            console.log("figure this out"))
        .catch(err=>
            console.log(err))
}

attachEvents();

