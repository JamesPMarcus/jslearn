//Comparisons

a > b
a < b
a==b //equality check double equation, single means assignment

a != b //not equals

//Boolean is the result

true
false

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4;
alert(result); // true

//string comparison

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

/*Compare first characters of both strings.
If the first one is greater(or less), then the first string is greater(or less) than the second. We’re done.
Otherwise if first characters are equal, compare the second characters the same way.
Repeat until the end of any string.
If both strings ended simultaneously, then they are equal. Otherwise the longer string is greater.*/

//comparison of different types

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true


alert( 0 === false ); // false, because the types are different using strict operator ===


//comparison with null and undefined

alert(null === undefined); //false
aleert(null==undefined); //true

//when using comparisons, null coverted to number therefore null>=0 is true

//undefined should not participate in comparisons at all.

//takeaway - don't use comparisons with a variable which may be null/undefined

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


//tasks

//What will be the result for expressions?

5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n"//false
