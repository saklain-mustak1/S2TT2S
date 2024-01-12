let voices;
        let form = document.forms[0];
        if ("speechSynthesis" in window) {
            speechSynthesis.onvoiceschanged = () => {

                voices = speechSynthesis.getVoices();
                voices.map(voice => {
                    form[0].innerHTML += `
                    <option>${voice.name}</option>
                    `;
                })

                //console.log(voices);
            }
            form[4].addEventListener("click", e => {
                e.preventDefault()
                let selected = form[0].querySelector("option:checked").value;
                let t2s = new SpeechSynthesisUtterance();
                t2s.text = form[1].value;
                let voice = voices.filter(v => {
                    return v.name == selected;
                })
                t2s.voice = voice[0];
                speechSynthesis.cancel();
                speechSynthesis.speak(t2s)
            })

        } else {
            alert("unsupported")
        }
        form[5].addEventListener("click", e => {
            speechSynthesis.pause()
        })
        form[6].addEventListener("click", e => {
            speechSynthesis.resume()
        })
        form[3].addEventListener("click", e => {
            speechSynthesis.cancel();
        })