const sheetsURL = 'https://docs.google.com/spreadsheets/d/1q9YZIl1YUqhMrcwPzgeVKkoVWZKz1odplr54rP2TUVE'
let sheetsName = 'CALC'
const query = encodeURIComponent('Select *  ')
const url = sheetsURL + '/gviz/tq?'+'tqx=out:txt&sheet=' + sheetsName + '&tq=' + query;
let coundownSeconds = 150
let scoreRed = 1
let scoreBlue = 1

function sleep(ms)
{
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(ms);
      }, ms);
  })
}

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 1000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}
function getCol(data, col)
{
    return data?.table.cols[col].label
}

function getRow(data, row, col)
{
    return data?.table.rows[row].c[col]? data?.table.rows[row].c[col].v : ""
}

function toggleClass(querySelector, className)
{
    return this.document.querySelector(querySelector).classList.toggle(className)
}

function addClass(querySelector, className)
{
    return this.document.querySelector(querySelector).classList.add(className)
}
function removeClass(querySelector, className)
{
    return this.document.querySelector(querySelector).classList.remove(className)
}
function div(querySelector,index=0)
{
    return this.document.querySelectorAll(querySelector)[index]
}

async function getData() {
    try {
        let data
        const response = await fetchWithTimeout(url, {
            timeout: 6000
        })
            .then(res => res.text())
            .then(rep => {
                data = JSON.parse(rep.substr(47).slice(0, -2));
            });
        // console.log(data.table.rows[0].c[2].v)
        // console.log(getRow(data,5,11))
        // console.log(getRow(data,16,2))
        console.log(getRow(data,2,8))
        console.log(new Date().getTime())
        console.log(getRow(data,14,6))
        console.log((new Date().getTime() - getRow(data,14,6))/1000)
        console.log(data.table)
        console.log(Number(getRow(data,13,3)))
        console.log(Math.round(Number(getRow(data,13,3))*100)/100)
        // document.querySelector('.nleft').innerHTML = data.table.rows[1].c[2].v
        
        
        
        document.querySelector('.resultInfo').innerHTML = "RESULTS   <span>" + getRow(data,17,6) + "</span>";
        document.querySelector('.info1').innerHTML = getRow(data,15 ,6)



        document.querySelector('.srTeam1').innerText = getRow(data,2,1)
        document.querySelector('.srTeam2').innerHTML = getRow(data,3,1)
        document.querySelector('.srTeam3').innerHTML = getRow(data,4,1)
        // document.querySelector('.srTeam4').innerText = getRow(data,5,1)
        document.querySelector('.rTeam1').innerText = getRow(data,2,1)
        document.querySelector('.rTeam2').innerHTML = getRow(data,3,1)
        document.querySelector('.rTeam3').innerHTML = getRow(data,4,1)
        // document.querySelector('.rTeam4').innerText = getRow(data,5,1)

        document.querySelector('.sbTeam1').innerHTML = getRow(data,2,8)
        document.querySelector('.sbTeam2').innerHTML = getRow(data,3,8)
        document.querySelector('.sbTeam3').innerHTML = getRow(data,4,8)
        // document.querySelector('.sbTeam4').innerHTML = getRow(data,5,8)
        document.querySelector('.bTeam1').innerHTML = getRow(data,2,8)
        document.querySelector('.bTeam2').innerHTML = getRow(data,3,8)
        document.querySelector('.bTeam3').innerHTML = getRow(data,4,8)
        // document.querySelector('.bTeam4').innerHTML = getRow(data,5,8)

        document.querySelector('.red.pointRow1').innerHTML =  getRow(data,6,1)+"<span>"+getRow(data,6,3)+"</span>"
        document.querySelector('.red.pointRow2').innerHTML =  getRow(data,7,1)+"<span>"+getRow(data,7,3)+"</span>"
        document.querySelector('.red.pointRow3').innerHTML =  getRow(data,8,1)+"<span>"+getRow(data,8,3)+"</span>"
        document.querySelector('.red.pointRow4').innerHTML =  getRow(data,9,1)+"<span>"+getRow(data,9,3)+"</span>"
        document.querySelector('.red.pointRow5').innerHTML =  getRow(data,10,1)+"<span>"+getRow(data,10,3)+"</span>"
        document.querySelector('.red.pointRow6').innerHTML =  getRow(data,11,1)+"<span>"+getRow(data,11,3)+"</span>"
        document.querySelector('.red.pointRow7').innerHTML =  getRow(data,12,1)+"<span>"+getRow(data,12,3)+"</span>"
        document.querySelector('.red.pointRow8').innerHTML =  getRow(data,13,1)+"<span>"+getRow(data,13,3)+"</span>"
        document.querySelector('.red.pointRow9').innerHTML =  getRow(data,14,1)+"<span>"+getRow(data,14,3)+"</span>"
        document.querySelector('.red.pointRow10').innerHTML =  getRow(data,15,1)+"<span>"+getRow(data,15,3)+"</span>"
        
        document.querySelector('.rTeamScore').innerHTML =  getRow(data,16,1)+"<span>"+getRow(data,16,2)+"</span>"
        document.querySelector('.sleft').innerHTML =  getRow(data,16,2)
        scoreRed = getRow(data,16,2)
        
        
        document.querySelector('.blue.pointRow1').innerHTML =  getRow(data,6,8)+"<span>"+getRow(data,6,10)+"</span>"
        document.querySelector('.blue.pointRow2').innerHTML =  getRow(data,7,8)+"<span>"+getRow(data,7,10)+"</span>"
        document.querySelector('.blue.pointRow3').innerHTML =  getRow(data,8,8)+"<span>"+getRow(data,8,10)+"</span>"
        document.querySelector('.blue.pointRow4').innerHTML =  getRow(data,9,8)+"<span>"+getRow(data,9,10)+"</span>"
        document.querySelector('.blue.pointRow5').innerHTML =  getRow(data,10,8)+"<span>"+getRow(data,10,10)+"</span>"
        document.querySelector('.blue.pointRow6').innerHTML =  getRow(data,11,8)+"<span>"+getRow(data,11,10)+"</span>"
        document.querySelector('.blue.pointRow7').innerHTML =  getRow(data,12,8)+"<span>"+getRow(data,12,10)+"</span>"
        document.querySelector('.blue.pointRow8').innerHTML =  getRow(data,13,8)+"<span>"+getRow(data,13,10)+"</span>"
        document.querySelector('.blue.pointRow9').innerHTML =  getRow(data,14,8)+"<span>"+getRow(data,14,10)+"</span>"
        document.querySelector('.blue.pointRow10').innerHTML =  getRow(data,15,8)+"<span>"+getRow(data,15,10)+"</span>"
        document.querySelector('.bTeamScore').innerHTML =  getRow(data,16,8)+"<span>"+getRow(data,16,9)+"</span>"
        document.querySelector('.sright').innerHTML = getRow(data,16,9)
        scoreBlue = getRow(data,16,9)
        
        // let redWins = 
        if(scoreRed > scoreBlue)
        {
            removeClass('.red.win','invisible')
            div('.blue span',0).innerHTML = "WIN"
            addClass('.blue.win','invisible')
        }
        else if(scoreRed == scoreBlue)
        {
            removeClass('.blue.win','invisible')
            removeClass('.red.win','invisible')
            div('.red span',0).innerHTML = "DRAW"
            div('.blue span',0).innerHTML = "DRAW"
        }
        else
        {
            div('.red span',0).innerHTML = "WIN"
            addClass('.red.win','invisible')
            removeClass('.blue.win','invisible')
        }

        

        await sleep(5000);
        getData()
    } catch (error) {
        // Timeouts if the request takes
        // longer than 6 seconds
        console.log(error.name === 'AbortError');
    }

}

getData()

function start(element) {
    let minute = 0;
    let second = 3;
    let operation = 1
    element.style.fontSize = `4vw`
    countdown(element, minute, second, operation)

    // countdown(minute, second)


}
function countdown(element, minute, second, operation) {
    var total = minute * 60 + second;

    var timer = setInterval(function () {

        var tmin = Math.floor(total / 60);
        var tsec = Math.floor(total % 60);
        if (tmin < 10) {
            tmin = "0" + tmin
        }
        if (tsec < 10) {
            tsec = "0" + tsec
        }
        element.innerHTML = tmin + ":" + tsec;
        if (total <= 0) {
            if (operation === 2) {
                element.style.fontSize = `2vw`
                var mend = new Audio('match_end.mp3')
                mend.play()
                element.innerHTML = "GAME OVER";
                clearInterval(timer)
            }
            if (operation === 1) {
                element.innerHTML = ""
                element.style.fontSize = `0.3vw`
                var mstart = new Audio('match_start.wav')
                mstart.play()
                element.innerHTML = "START"
                element.style.fontSize = `4vw`

                minute = coundownSeconds/60
                second = 0
                operation = 2
                countdown(element, minute, second, operation)
                clearInterval(timer)
            }



        }
        if (tsec === 30 && tmin === 0) {
            var horn = new Audio('horn.wav')
            horn.play()
        }
        total--;
        if (tsec == 00) {
            tmin--;
            tsec = 60;
            if (tmin == 0) {
                tmin = 2;
            }
        }
    }, 1000);
}
const delay = ms => new Promise(res => setTimeout(res, ms));

window.addEventListener('keypress', function (e) {

    if (e.code === 'KeyR') 
    {
        toggleClass('.camera', 'invisible')
        // Shows/Removes RESULTS
        div(':root').style.setProperty('--blue',1)
        div(':root').style.setProperty('--red',1)
        toggleClass('.popup','invisible')
        toggleClass('.container','invisible')
        animateResults()
        yourFunction()
        

    }
    if (e.code === 'KeyN')
    {
        // Shows/Removes score
        document.querySelector(".container").classList.toggle("dNone")
    }
    if(e.code === "KeyQ")
    {
        // Shows/Removes qr
        document.querySelector('.qr').classList.toggle("dNone")
    }

    if (e.key === 'Enter') 
    {
        // Starts Timer
        start(document.querySelector(".timer"))
    }

    
    if (e.code === 'KeyS') {
        // Shows/Removes score indicator
        this.document.querySelector('.logo').classList.toggle('score_anima')
        this.document.querySelector('.timer').classList.toggle('score_anima')
    }

    // if (e.code === 'KeyO') {
    //     // Shows/Removes parallel score indicator
    //     this.document.querySelector('.plogo').classList.toggle('score_anima')
    //     this.document.querySelector('.ptimer').classList.toggle('score_anima')
    // }
    
    // if (e.code === 'Space') {
        // Starts Parallel Timer
    //     start(document.querySelector(".ptimer"))
    // }
    // if (e.code === "KeyP")
    // {
    //  // Shows parallel score
    //     parallel = !parallel;
    //     document.querySelector('.parallel').classList.toggle("dNone")
    // }
    if (e.code === 'KeyU') 
    {
        // Uzbekistan gymn video
        document.querySelector(".uzb").classList.toggle("dNone")
        mus = new  Audio('Uzbekistan.mp3')
        mus.play()
        

    }
    if (e.code === 'KeyG') 
    {

        var mediaVideo = document.querySelector(".gen");
        mediaVideo.play()
        // if (mediaVideo.paused)
        // {
        //     mediaVideo.play()
        // }
        // else{
        //     mediaVideo.pause()
        // }
        document.querySelector(".gen").classList.toggle("dNone")
        
    }
    if (e.code === 'KeyK') 
    {
        // Kazakhstan gymn video
        document.querySelector(".kaz").classList.toggle("dNone")
        mus = new  Audio('Kazakhstan.mp3')
        mus.play()
    }
    if (e.code === 'KeyC') 
    {
        // Shows camera (if plugged)           
        
        /*
        *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
        *
        *  Use of this source code is governed by a BSD-style license
        *  that can be found in the LICENSE file in the root of the source
        *  tree.
        */
        'use strict';

        // Put variables in global scope to make them available to the browser console.
        const constraints = window.constraints = {
        audio: false,
        video: true
        };

        function handleSuccess(stream) {
        const video = document.querySelector('.camera');
        const videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log(`Using video device: ${videoTracks[0].label}`);
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
        }

        function handleError(error) {
        if (error.name === 'OverconstrainedError') {
            const v = constraints.video;
            errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
        } else if (error.name === 'NotAllowedError') {
            errorMsg('Permissions have not been granted to use your camera and ' +
            'microphone, you need to allow the page access to your devices in ' +
            'order for the demo to work.');
        }
        errorMsg(`getUserMedia error: ${error.name}`, error);
        }

        function errorMsg(msg, error) {
        const errorElement = document.querySelector('#errorMsg');
        errorElement.innerHTML += `<p>${msg}</p>`;
        if (typeof error !== 'undefined') {
            console.error(error);
        }
        }

        async function init(e) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            handleSuccess(stream);
            e.target.disabled = true;
        } catch (e) {
            handleError(e);
        }
        }
        init();
        document.querySelector('#showVideo').addEventListener('click', e => init(e));

    }

})
initAnimation()
function initAnimation() 
{
    animateResults()
    animateResults()
}
const yourFunction = async () => {
    await delay(2500)
    let rate = 0.01;
    for (let index = 1; index < 10; index++) {
        await delay(index * 1);
        if(scoreRed > scoreBlue)
        {
            console.log("jj")
            
            div(':root').style.setProperty('--red',1+rate*index)
            div(':root').style.setProperty('--blue',1)
        }
        else if(scoreRed == scoreBlue)
        {
            console.log(scoreBlue+scoreRed)
            div(':root').style.setProperty('--blue',1)
            div(':root').style.setProperty('--red',1)
        }
        else{
            console.log("kj")
            div(':root').style.setProperty('--red',1)
            div(':root').style.setProperty('--blue',1+rate*index)
        }
    }
    
  };
function animateResults()
{
     animate(".resultRed", "flip-left",0)
     animate(".rTeam1", "fade-right",300)
     animate(".rTeam2", "fade-right",400)
     animate(".rTeam3", "fade-right",500)
     animate(".rTeamScore", "fade-down",1000)
     animate(".resultBlue", "flip-right",1100)
     animate(".bTeam1", "fade-left",1200)
     animate(".bTeam2", "fade-left",1300)
     animate(".bTeam3", "fade-left",1400)
     animate(".bTeamScore", "fade-down",2000)
     animate(".red span", "fade-up",2500)
     animate(".blue span", "fade-up",2500)
     animate(".red img", "zoom-in",3000)
     animate(".blue img", "zoom-in",3000)
     


     

}
function animate(querySelector, type, offset, index=0)
{
    toggleClass(querySelector,"aos-animate")
    div(querySelector,index).removeAttribute("data-aos", type)
    div(querySelector,index).setAttribute("data-aos", type)
    div(querySelector,index).setAttribute("data-aos-delay", offset)
}
