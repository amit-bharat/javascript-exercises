const removeFromArray = function(arr, ...items) {
    if(arr.length===0 || args.length===0) return arr;
    items.map((val,arr)=>{
        let i=0;
        while(i<=arr.length-1){
            if(val===arr[i]){
                arr.splice(i,1);
            }
        }

    });
};

// Do not edit below this line
module.exports = removeFromArray;
