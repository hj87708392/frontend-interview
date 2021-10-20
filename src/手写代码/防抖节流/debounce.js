function debounce(fn,delay){
    let time=null;
    return function(){
        if(time){
            clearTimeout(time)
        }
        time=setTimeout(()=>{
            fn.apply(this,arguments)
            time=null
        },delay)
    }
}

function throttle(fn,delay){
    let time=null;
    return function(){
        if(time){
           return
        }
        time=setTimeout(()=>{
            fn.apply(this,arguments)
            time=null
        },delay)
    }
}