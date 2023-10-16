function read_local(){
    if (localStorage) {
        const savedurls = localStorage.getItem('url_obj');
        if(savedurls){
            urls = JSON.parse(savedurls);
            return urls
        }
    }
    else{
        console.log('localstorage is not supported');
        return 0
    }
    
};

function open_window(urls){
    for (let i = 0; i < urls.length; i++){
        if(i == 0){
            chrome.windows.create({url: urls[i], type: "normal"})
        }
        else{
            var link = document.createElement("a")
            link.href = urls[i]
            link.target = "_blank"
            link.click()
        }
    }
};

function delete_save(url_obj, pos, val){

    var ul = document.getElementById(val);
    ul.innerHTML = "";
    ul.style.visibility = 'hidden';

    url_obj.splice(pos, pos);
    localStorage.setItem('url_obj', JSON.stringify(url_obj));
    
};

function vis(i){
    if (i == 1){
        node = document.getElementById('toggle_window1');
        node.style.visibility = 'visible';
    }
    else if (i == 2){
        node = document.getElementById('toggle_window2');
        node.style.visibility = 'visible';
    }
    else if (i == 3){
        node = document.getElementById('toggle_window3');
        node.style.visibility = 'visible';
    }
    else if (i == 4){
        node = document.getElementById('toggle_window4');
        node.style.visibility = 'visible';
    }
    else if (i == 5){
        node = document.getElementById('toggle_window5');
        node.style.visibility = 'visible';
    }
    else if (i == 6){
        node = document.getElementById('toggle_window6');
        node.style.visibility = 'visible';
    }
    else if (i == 7){
        node = document.getElementById('toggle_window7');
        node.style.visibility = 'visible';
    }
    else if (i == 8){
        node = document.getElementById('toggle_window8');
        node.style.visibility = 'visible';
    }
    else if (i == 9){
        node = document.getElementById('toggle_window9');
        node.style.visibility = 'visible';
    }
};


window.addEventListener("DOMContentLoaded", function () {
    url_obj = read_local()

    document.getElementById("refresh").addEventListener("click", function() {
        location.reload();
    });

    //Clear Button
    document.getElementById("btn1").addEventListener("click", function() {
        localStorage.clear();
    });

    //Open Buttons
    document.getElementById("openbtn1").addEventListener("click", function() {
        open_window(url_obj[1].urls)
    });
    document.getElementById("openbtn2").addEventListener("click", function() {
        open_window(url_obj[2].urls)
    });

    document.getElementById("openbtn3").addEventListener("click", function() {
        open_window(url_obj[3].urls)
    });

    document.getElementById("openbtn4").addEventListener("click", function() {
        open_window(url_obj[4].urls)
    });

    document.getElementById("openbtn5").addEventListener("click", function() {
        open_window(url_obj[5].urls)
    });

    document.getElementById("openbtn6").addEventListener("click", function() {
        open_window(url_obj[6].urls)
    });

    document.getElementById("openbtn7").addEventListener("click", function() {
        open_window(url_obj[7].urls)
    });

    document.getElementById("openbtn8").addEventListener("click", function() {
        open_window(url_obj[8].urls)
    });

    document.getElementById("openbtn9").addEventListener("click", function() {
        open_window(url_obj[9].urls)
    });
    //Delete Buttons

    document.getElementById("delbtn1").addEventListener("click", function() {
        delete_save(url_obj, 1, "saved_1")
    });

    document.getElementById("delbtn2").addEventListener("click", function() {
        delete_save(url_obj, 2, "saved_2")
    });

    document.getElementById("delbtn3").addEventListener("click", function() {
        delete_save(url_obj, 3, "saved_3")
    });

    document.getElementById("delbtn4").addEventListener("click", function() {
        delete_save(url_obj, 4, "saved_4")
    });

    document.getElementById("delbtn5").addEventListener("click", function() {
        delete_save(url_obj, 5, "saved_5")
    });

    document.getElementById("delbtn6").addEventListener("click", function() {
        delete_save(url_obj, 6, "saved_6")
    });

    document.getElementById("delbtn7").addEventListener("click", function() {
        delete_save(url_obj, 7, "saved_7")
    });

    document.getElementById("delbtn8").addEventListener("click", function() {
        delete_save(url_obj, 8, "saved_8")
    });

    document.getElementById("delbtn9").addEventListener("click", function() {
        delete_save(url_obj, 9, "saved_9")
    });
    

    for(let i = 1; i < Object.keys(url_obj).length; i++){
        vis(i);
        for(let j = 0; j< url_obj[i].urls.length; j++) {
            const tabElement = document.createElement("li");
            tabElement.innerText = url_obj[i].urls[j]
            if(i == 1){
                document.getElementById("saved_1").appendChild(tabElement);
            }
            else if(i == 2){
                document.getElementById("saved_2").appendChild(tabElement);
            }
            else if(i == 3){
                document.getElementById("saved_3").appendChild(tabElement);
            }
            else if(i == 4){
                document.getElementById("saved_4").appendChild(tabElement);
            }
            else if(i == 5){
                document.getElementById("saved_5").appendChild(tabElement);
            }
            else if(i == 6){
                document.getElementById("saved_6").appendChild(tabElement);
            }
            else if(i == 7){
                document.getElementById("saved_7").appendChild(tabElement);
            }
            else if(i == 8){
                document.getElementById("saved_8").appendChild(tabElement);
            }
            else if(i == 9){
                document.getElementById("saved_9").appendChild(tabElement);
            }

        }
    }
});