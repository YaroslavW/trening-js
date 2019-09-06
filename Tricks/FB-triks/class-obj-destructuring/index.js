class Person {
  constructor(name) {
    this.name = name;
  }
}

const { name: hima } = new Person("Hima Kano");
console.log(name);

// undefined in browser
// Error in console
// ReferenceError: name is not defined
// https://www.facebook.com/justjavascript/photos/a.290556548518031/353749302198755/?type=3&__xts__%5B0%5D=68.ARAPdcWgrIcxMo2zoxEqkb8RJCiEofLinP9ncZjRdf5k5tkBDhiee4UqFs9ScxhY6UXTrgetx4hNCoVNLAwgNi1pRmEU6okl38AqYbFaFkW9RUsmFJLd3CUvzgIW6RpbHe45jvXF_Jbvxn0cKDadVi2hK7LtLrDSaPXZYpIKSaxLSkHPffjsl-tQ3SXgY9cfzUuBAZc9ChMES8RVrR356n2U9lE6t_c_iS98eE7ZyXefZvz8vnxuhup1jfBcxp7AdPC358aNvBlWHCWvEqNX78u_49tZ9_2qWCj6Hec7K2JzLuf_0IANopO3tzwRRcVYCQFG_DXJQXDJGnUyD8lsnfOmrcSG6oWrEkCWGBuFHEoZeE1-1SdrgA&__tn__=-R
