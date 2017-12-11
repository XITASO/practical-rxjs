const buttonEl    = document.querySelector("button");
const leftResult  = document.querySelector(".left");
const rightResult = document.querySelector(".right");

// vvv Actual code goes here vvv

const subscribeFiltered = (evtName, buttonId, outputEl) => {
    return Rx.Observable.fromEvent(buttonEl, evtName)
        .filter( (evt) => evt.button === buttonId )
        .do( (evt) => evt.preventDefault() )
        .map( () => 1 )
        .scan( (sum, next) => sum + next, 0 )
        .subscribe( (sum) => {
            outputEl.innerHTML = sum;
        });
};

subscribeFiltered('click', 0, leftResult);
subscribeFiltered('contextmenu', 2, rightResult);
