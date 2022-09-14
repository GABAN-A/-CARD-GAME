first = [], second = [], thired = [], fourth = [];
hart = "♥".fontcolor("red"), diamond = "♦".fontcolor("gold"), tree = "♣".fontcolor("green"), v = "♠".fontcolor("blue"), cards = {};

//CREATING 4 SETS OF RANDOM 13 CARDS OF EACH SET WITH DIFFERNT SYMBLES//
function firstarray() {
    while (first.length < 13) {
        e = Math.floor(Math.random() * 13) + 2;
        let b = e;
        cheak = [];
        if (cheak.indexOf(b) !== -1) {} else {
            cheak.push(e);
            cards = {
                v: v,
                e: (e)
            }
            first.push(cards);
        }
    }
}
firstarray();
function secondarray() {
    while (second.length < 13) {
        e = Math.floor(Math.random() * 13) + 2;
        let b = e;
        cheak = [];
        if (cheak.indexOf(b) !== -1) {} else {
            cheak.push(e);
            cards = {
                v: hart,
                e: (e)
            }
            second.push(cards);
        }
    }
}
secondarray();
function thiredarray() {
    while (thired.length < 13) {
        e = Math.floor(Math.random() * 13) + 2;
        let b = e;
        cheak = [];
        if (cheak.indexOf(b) !== -1) {} else {
            cheak.push(e);
            cards = {
                v: diamond,
                e: (e)
            }
            thired.push(cards);
        }
    }
}
thiredarray();
function fourtharray() {
    while (fourth.length < 13) {
        e = Math.floor(Math.random() * 13) + 2;
        let b = e;
        cheak = [];
        if (cheak.indexOf(b) !== -1) {} else {
            cheak.push(e);
            cards = {
                v: tree,
                e: (e)
            }
            fourth.push(cards);
        }
    }
}
fourtharray();
//COMPINING THE FOUR SETS IN ONE RANDOM ARRAY OF CARDS AND SHUFLLING THEM//
let combinedNums = first.concat(second, thired, fourth);
function shuffle() {
    let currentIndex = combinedNums.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [combinedNums[currentIndex], combinedNums[randomIndex]] = [
            combinedNums[randomIndex], combinedNums[currentIndex]
        ];
    }

}
shuffle();
let newara = [...combinedNums];
let player1won = document.getElementById("player1won");
let player2won = document.getElementById("player2won");
let n = 0;
let t = 0;
let i = 0;
let x, y, c, z, win, winer, m = [],
    removedarray1, removedarray2,
    removed1, removed2;
let r = document.getElementById("show");
let s = document.getElementById("show1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
const player1 = Math.ceil(newara.length / 2);//SPLITTING THE CARDS IN EQUAL 26 CARD FOR EACH PLAYER//
let firstHalf = newara.splice(0, player1);
let secondHalf = newara.splice(-player1);
let count1 = document.getElementById("counter1");
let count2 = document.getElementById("counter2");
let f = 0;
console.log(firstHalf, secondHalf);
function gameover() {
    f++
    console.log(f);
    if ((firstHalf.length == 0) || (secondHalf.length == 0)) {
        r.innerHTML = "GAME OVER START AGAIN";
        s.innerHTML = "GAME OVER START AGAIN";
        return;
    }
}
btn1.onclick = function () {
    gameover();
    switch (firstHalf[0].e) {
        case 11:
            r.innerHTML = "Jack" + firstHalf[0].v
            break;
        case 12:
            r.innerHTML = "Queen" + firstHalf[0].v
            break;
        case 13:
            r.innerHTML = "King" + firstHalf[0].v
            break;
        case 14:
            r.innerHTML = "ACE" + firstHalf[0].v
            break;
        default:
            r.innerHTML = firstHalf[0].e + firstHalf[0].v;
    }
    btn2.disabled = false;
    btn1.disabled = true;
    s.innerHTML = "";
}
btn2.disabled = true;
btn2.onclick = function () {
    gameover();
    switch (secondHalf[0].e) {
        case 11:
            s.innerHTML = "Jack" + secondHalf[0].v
            break;
        case 12:
            s.innerHTML = "Queen" + secondHalf[0].v
            break;
        case 13:
            s.innerHTML = "King" + secondHalf[0].v
            break;
        case 14:
            s.innerHTML = "ACE" + secondHalf[0].v
            break;
        default:
            s.innerHTML = secondHalf[0].e + secondHalf[0].v;
    }
    btn2.disabled = true;
    btn1.disabled = false;
    game();
}
function game() {
    removedarray1 = firstHalf.shift();
    removed1 = removedarray1.e;
    removedarray2 = secondHalf.shift();
    removed2 = removedarray2.e;
    console.log(removed1, removed2);
    console.log(firstHalf, secondHalf);
    //CHEAKING HOW WINS//
    if (removed1 > removed2) {
        firstHalf.push(removedarray2, removedarray1);
        i++;
        count1.innerHTML = "Player one" + "<br />" + "WINS=" + i + "<br />" + "cards=" + firstHalf.length;
        count2.innerHTML = "Player Tow" + "<br />" + "WINS=" + n + "<br />" + "cards=" + secondHalf.length;
        player1won.innerHTML = "player1won";
        player1won.style.display = "block";
        player2won.style.display = "none";
        console.log(firstHalf.length);
        return;
    } else if (removed1 < removed2) {
        secondHalf.push(removedarray1, removedarray2);
        n++;
        count2.innerHTML = "Player Tow" + "<br />" + "WINS=" + n + "<br />" + "cards=" + secondHalf.length
        count1.innerHTML = "Player one" + "<br />" + "WINS=" + i + "<br />" + "cards=" + firstHalf.length;
        player2won.innerHTML = "player2won"
        player1won.style.display = "none";
        player2won.style.display = "block";
        console.log(secondHalf.length);
        return;
    } else if (removed1 == removed2) {
        let cardsthre = document.getElementById("threcards");//IF CARDS ARE EVEN ONE CLCIK WILL WITHDRAW THREE CARDS AND THE WINNER WILL WIN THEM ALL//
        cardsthre.style.display = "block";
        btn3.onclick = function () {
            gameover();
            function aref2() {
                //CARDS ARE TAKEN FROM THE ARAYS AND ADDED TO THE WINNER//
                cardsthre.style.display = "none";
                console.log(removed1, removed2, );
                x = firstHalf.splice(0, 3);
                console.log(x);
                y = secondHalf.splice(0, 3);
                console.log(firstHalf, secondHalf);
                z = [...x];
                c = [...y];
                console.log(z, c);
                x.unshift(removedarray1);
                y.unshift(removedarray2);
                x.pop();
                y.pop();
                win = [...x];
                winer = [...y];
                m = m.concat(win, winer);
                removed1 = (x = z[2].e);
                removed2 = (y = c[2].e);
                removedarray1 = z[2];
                removedarray2 = c[2];
                console.log(x, y);
                console.log(removed1, removed2);
                r.innerHTML = removed1 + z[2].v;
                s.innerHTML = removed2 + c[2].v;
            }
            aref2();
            //CHEACKING THE THIRED CARD WINNER//
            function aref3() {
                if (x > y) {
                    console.log(removed1, removed2, )
                    firstHalf = firstHalf.concat(m);
                    firstHalf.push(removedarray1, removedarray2);
                    i++;
                    m = [];
                    count1.innerHTML = "Player one" + "<br />" + "WINS=" + i + "<br />" + "cards=" + firstHalf.length;
                    count2.innerHTML = "Player Tow" + "<br />" + "WINS=" + n + "<br />" + "cards=" + secondHalf.length
                    player1won.innerHTML = "player1won";
                    console.log(firstHalf, secondHalf);
                    player1won.style.display = "block";
                    player2won.style.display = "none";
                    return
                } else if (y > x) {
                    secondHalf = secondHalf.concat(m);
                    secondHalf.push(removedarray1, removedarray2);
                    m = [];
                    n++;
                    count2.innerHTML = "Player Tow" + "<br />" + "WINS=" + n + "<br />" + "cards=" + secondHalf.length
                    count1.innerHTML = "Player one" + "<br />" + "WINS=" + i + "<br />" + "cards=" + firstHalf.length;
                    player2won.innerHTML = "player2won";
                    console.log(firstHalf, secondHalf);
                    player1won.style.display = "none";
                    player2won.style.display = "block";
                    return;
                } else if (x == y) {
                    console.log("bad", y, x);
                    cardswin();
                }
                //IN CASE THE THIRED CARD THAT WAS WITHDRAWN IS ALSO EVEN //
                function cardswin() {
                    gameover();
                    aref2();
                    if (removed1 > removed2) {
                        firstHalf = firstHalf.concat(m);
                        firstHalf.push(removedarray1, removedarray2);
                        i++;
                        m = [];
                        count1.innerHTML = "Player one" + "<br />" + "WINS=" + i + "<br />" + "cards=" + firstHalf.length;
                        count2.innerHTML = "Player Tow" + "<br />" + "WINS=" + n + "<br />" + "cards=" + secondHalf.length
                        player1won.style.display = "block";
                        player2won.style.display = "none";
                        console.log(firstHalf, secondHalf);
                        return;
                    } else if (removed1 < removed2) {
                        secondHalf = secondHalf.concat(m);
                        secondHalf.push(removedarray1, removedarray2);
                        i++;
                        m = [];
                        count2.innerHTML = "Player Tow" + "<br />" + "WINS=" + n + "<br />" + "cards=" + secondHalf.length
                        count1.innerHTML = "Player one" + "<br />" + "WINS=" + i + "<br />" + "cards=" + firstHalf.length;
                        player1won.style.display = "none";
                        player2won.style.display = "block";
                        return;
                    } else(removed1 == removed2)
                    aref2();
                    aref3();
                }
            }
            aref3();
        }
    }
}
// console.log(i);
//  console.log(n);
// console.log(firstHalf, secondHalf);