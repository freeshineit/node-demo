window.onload = function(){

    function minOfArray(arr) {
        let min = Infinity;
        const QUANTUM = 32768;

        for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
            let submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
            min = Math.min(submin, min);
        }

        return min;
    }

    let min = minOfArray([5, 6, 2, 3, 7]);

    console.log(min);

}