function speak(){
    //const ln = document.getElementsByName("lan");
    let form = document.querySelector("form");
            let sr = window.webkitSpeechRecognition || window.SpeechRecognition;
            let spRec = new sr();
            spRec.lang = "en";
            spRec.continuous = true;
            spRec.interimResults = true;
            // console.log(spRec);
            form[2].addEventListener("click", e => {
                e.preventDefault();
                spRec.start();
            })
            spRec.onresult = res => {
                let text = Array.from(res.results)
                    .map(r => r[0])
                    .map(txt => txt.transcript)
                    .join("");
                form[1].value = text;
                // console.log(text);
            }
            form[3].addEventListener("click", () => {
                spRec.stop()
            })
    }