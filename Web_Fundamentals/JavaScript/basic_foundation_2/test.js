// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggy(x){
    var i = 0;
    var j = x.length;
    while(i<j){
        if(x[i] > 0){
            x[i]= "big";
        }
        i++;
    }
    console.log(x);
}

biggy([-1,3,5,-5]);


// Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function minMaxAvg(x){
    var i = 0;
    var m = x[0];
    var n = x[0];
    var j = x.length;
    while(i<j){
        if(x[i] > m){
            m = x[i];
        }
        if(x[i] < n){
            n = x[i];
        }
        i++;
    }
    console.log(n)
    return m;
}

console.log(minMaxAvg([1,2,3,4,5]));


// Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function p1r2(x){
    console.log(x[x.length-2]);
    var q = x[0];
    var i = 0;
    var j = x.length;
    while(i<j){
        if(x[i] % 2 !==0){
            return x[i];
        }
        i++;
    }
}

console.log(p1r2([2,2,3,6,4,8,5]));

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubVz(arr){
    var newarr = []
    for(var i = 0; i < arr.length; i++){
        newarr[i] = arr[i] + arr[i];
    }
    console.log(newarr);
}
doubVz([1,2,3]);

// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPos(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum+=1;
        }
    }
    arr.pop();
    arr.push(sum);
    console.log(arr);
}

countPos([-1,1,1,1]);


// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function eveOdds(arr){
    var evensnrow = 0;
    var oddsnrow = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evensnrow++;
            if(evensnrow > 2){
                console.log("Even more so!")
                evensnrow = 0;
            }
        }
        if(arr[i] % 2 !== 0){
            oddsnrow++;
            if(oddsnrow > 2){
                console.log("That's Odd!");
                oddsnrow = 0;
            }
        }  
    }
}

eveOdds([1,2,2,1,1,1,2,3,2,2,2,4]);


// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function incTheSeconds(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i] = arr[i]+1;
        }
    }
    console.log(arr);
}

incTheSeconds([1,1,1,1,1,1]);


// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.

function prevLengths(arr){
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    arr[0] = 0;
    console.log(arr);
}

prevLengths(["this","is","a","test"]);

// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function sevenToMost(arr){
    var newarr = [];
    arr.shift();
    for(var i = 0; i < arr.length;i++){
        newarr[i] = arr[i]+7;
    }
    return newarr;
}

console.log(sevenToMost([0,1,2,3,4,5]));


// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function revArr(arr){
    for(var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;

    }
    console.log(arr);
}
revArr([3,1,6,4,2,9]);

// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function makeNegatives(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            newarr[i] = arr[i] * -1;
        }
        if(arr[i] < 0){
            newarr[i] = arr[i];
        }
    }
    console.log(newarr);
}

makeNegatives([1,-3,5]);


// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            arr[i] = "yummy";
            sum+=1;
        }
    }
    if(sum == 0){
        console.log("I'm hungry");
        return;
    };
    console.log(arr);
}

alwaysHungry([3,"food",5,8,"food","food"]);
alwaysHungry([3,"foyhd",5,8,"frod",8]);


// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapCenter(arr){
    for(var i = 0; i < arr.length/2; i++){
        if(i % 2 ===0){
            temp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
    }
    console.log(arr);
}
swapCenter([true,42,"Ada",2,"pizza"]);


// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].

function scaleArr(arr,x){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*x;
    }
    console.log(arr);
}

scaleArr([1,2,3],3);

