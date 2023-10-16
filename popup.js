function create_lists(index, num, ids){
    if(myfunction){
        return ids;
    }
};


function var_sort(dict, id, url){
    dict[url] = id;
    return true;
};


function myfunction(num, ids){
    if(ids.includes(num)){
        return true;
    }
    else{
        ids.push(num);
        return false;
    }
};



function save_local(){
    if(localStorage){
        localStorage.setItem('url_obj', JSON.stringify(ls_urls));
    }
};

function read_local(){
    if (localStorage) {
        const savedurls = localStorage.getItem('url_obj');
        if(savedurls){
            let ls_urls = JSON.parse(savedurls);
            return ls_urls
        }
        else{
            let ls_urls = [
                {
                    name : "test",
                    urls : ["bruh"]
                }
            ]
            return ls_urls
        }
    }
    else{
        console.log('localstorage is not supported');
        return 0
    }
    
};


function vis(ids){
    if(ids.length == 1){
        node = document.getElementById('toggle_window1');
        node.style.visibility = 'visible';
    }
    else if(ids.length == 2){
        node = document.getElementById('toggle_window2');
        node.style.visibility = 'visible';
    }

    else if(ids.length == 3){
        node = document.getElementById('toggle_window3');
        node.style.visibility = 'visible';
    }
    else if(ids.length == 4){
        node = document.getElementById('toggle_window4');
        node.style.visibility = 'visible';
    }
    else if(ids.length == 5){
        node = document.getElementById('toggle_window5');
        node.style.visibility = 'visible';
    }
    else if(ids.length == 6){
        node = document.getElementById('toggle_window6');
        node.style.visibility = 'visible';
    }
    else if(ids.length == 7){
        node = document.getElementById('toggle_window7');
        node.style.visibility = 'visible';
    }
    else if(ids.length == 8){
        node = document.getElementById('toggle_window8');
        node.style.visibility = 'visible';
    }
    else if(ids.length == 9){
        node = document.getElementById('toggle_window9');
        node.style.visibility = 'visible';
    }

};


ls_urls = read_local()
//-------------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", function () {
    const a_keys = []
    var dict = {}
    const alltabs = []
    const ids = []
    const urls = []
    chrome.runtime.sendMessage({ type: "getTabs" }, function (response) {


        allTabs = response;
        console.log(allTabs);
        response.forEach((tab, index) => {
            const tabElement = document.createElement("li");
            const tabInfo = document.createElement("li");
            const tabIds = document.createElement("li");
            tabElement.innerText = tab.title;
            //test2 = tab.title
            //test =  tab.windowId;

            //console.log(tabIds);
            //tabInfo.textContent = tab.url;
            if (tab.active) {
                tabElement.classList.add("active");
            }
            
            tabElement.addEventListener("click", function () {
                chrome.tabs.update(tab.id, { active: true });
                chrome.tabs.query({'windowId': chrome.windows.WINDOW_ID_CURRENT})
                window.close();
            });

            myfunction(tab.windowId, ids);
            var_sort(dict, tab.windowId, tab.url);
            vis(ids);

            //---------------------------------------------------------------------------
            if (tab.windowId == ids[0]){
                document.getElementById("window_1").appendChild(tabElement);
            }
            else if(tab.windowId == ids[1]){
                document.getElementById("window_2").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
            else if(tab.windowId == ids[2]){
                document.getElementById("window_3").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
            else if(tab.windowId == ids[3]){
                document.getElementById("window_4").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
            else if(tab.windowId == ids[4]){
                document.getElementById("window_5").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
            else if(tab.windowId == ids[5]){
                document.getElementById("window_5").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
            else if(tab.windowId == ids[6]){
                document.getElementById("window_5").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
            else if(tab.windowId == ids[7]){
                document.getElementById("window_5").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
            else if(tab.windowId == ids[8]){
                document.getElementById("window_5").appendChild(tabElement);
                //document.getElementById("window_1").appendChild(tabIds);
            }
        });

//----------------------------BUTTONS---------------------------------------------------------------------------------------------------
            document.getElementById("refresh").addEventListener("click", function() {
                location.reload();
            });

            //---------------window1------------------------------------------
            document.getElementById("myBtn").addEventListener("click", function() {
                count = 0;
                const pos = 0
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }

                ls_urls.push({
                        name :'window1',
                        urls : urls
                })
                save_local()

;
              });


              //---------------window2------------------------------------------------
              document.getElementById("myBtn2").addEventListener("click", function() {
                count = 0;
                const pos = 1
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window2',
                    urls : urls
                })
                save_local()
              });
            

              //---------------window3-------------------------------------------------
              document.getElementById("myBtn3").addEventListener("click", function() {
                count = 0;
                const pos = 2
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window3',
                    urls : urls
                })
                save_local()
              });

              //---------------window4-------------------------------------------------
              document.getElementById("myBtn4").addEventListener("click", function() {
                count = 0;
                const pos = 3
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window4',
                    urls : urls
                })
                save_local()
              });

              //---------------window5-------------------------------------------------
              document.getElementById("myBtn5").addEventListener("click", function() {
                count = 0;
                const pos = 4
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window5',
                    urls : urls
                })
                save_local()
              });

              //---------------window6-------------------------------------------------
              document.getElementById("myBtn6").addEventListener("click", function() {
                count = 0;
                const pos = 5
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window6',
                    urls : urls
                })
                save_local()
              });

              //---------------window7-------------------------------------------------
              document.getElementById("myBtn7").addEventListener("click", function() {
                count = 0;
                const pos = 6
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window7',
                    urls : urls
                })
                save_local()
              });

              //---------------window8-------------------------------------------------
              document.getElementById("myBtn8").addEventListener("click", function() {
                count = 0;
                const pos = 7
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window8',
                    urls : urls
                })
                save_local()
              });

              //---------------window9-------------------------------------------------
              document.getElementById("myBtn9").addEventListener("click", function() {
                count = 0;
                const pos = 8
                for(var key in dict) {
                    count = count + 1;
                    if(ids[pos] == dict[key]){
                        urls.push(key);
                    }
                }
                ls_urls.push({
                    name :'window9',
                    urls : urls
                })
                save_local()
              });

    });
});

