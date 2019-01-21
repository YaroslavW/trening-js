const str1 = `It is one line
and
it is third line`;

console.log(str1);
// It is one line
// and
// it is third line

const a = 3;
const b = 6;
console.log(`Summ ${a} + ${b} = ${a + b}`); //Summ 3 + 6 = 9

console.log(`Larger number ${a < b ?  b : a}`); //Larger number 6

const condition = function(){
    return false;
}

console.log(`some ${condition() ? 'true': `box-${a<b ? '3<6':'3>6'}`}`); 
// if condition = true ->some true
// if condition = false ->some box-3<6