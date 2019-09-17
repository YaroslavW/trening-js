// In the original version of this article, I shared a tip to cache array length in for loops.
//  However, if it is a read-only loop, modern JavaScript engines deal with this at the point of 
//  compilation. It is no longer necessary unless the length of the array changes (and, if that is the case, you’ll probably want it to be recalculated with every iteration anyway).


// Thanks to several commenters who pointed this out. If you’d like to find more, check out this
//  question on StackOverflow.

// For those who are interested, there used to be some performance incentive to writing 

for (let i = 0, len = array.length; i < len; i++) rather than for (let i = 0; i < array.length; i++)  
// This is no longer the case!