window.search = {"doc_urls":["Primitive(값)%20vs%20Object(참조).html#basic","01-PrimitivevsObject.html#primitive값-vs-object참조","01-PrimitivevsObject.html#primitive-type","01-PrimitivevsObject.html#primitive-type의-생성-방법","01-PrimitivevsObject.html#literal-vs-wrapper","01-PrimitivevsObject.html#값-타입","01-PrimitivevsObject.html#object-type"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":4,"title":3},"2":{"body":16,"breadcrumbs":3,"title":2},"3":{"body":39,"breadcrumbs":3,"title":2},"4":{"body":50,"breadcrumbs":4,"title":3},"5":{"body":18,"breadcrumbs":1,"title":0},"6":{"body":79,"breadcrumbs":3,"title":2}},"docs":{"0":{"body":"","breadcrumbs":"Basic","id":"0","title":"Basic"},"1":{"body":"","breadcrumbs":"Basic » Primitive(값) vs Object(참조)","id":"1","title":"Primitive(값) vs Object(참조)"},"2":{"body":"String : 텍스트를 셋팅하는데 사용하는 타입. Number : 숫자를 셋팅하는데 사용하는 타입. 기본적으로 소수점도 가능하다.(infinity, -inifinity, NaN 표현이 가능하다.) Null : null타입은 정확히는 1개의 값은 가지고 있지만 비어있다는 뜻이다. Undefined : 값이 할당되지 않는 것을 나타내는 타입. Boolean : true 또는 false 로 나타내는 타입. Symbol : 새로 추가된 타입으로 unique하고 immutable한 원시값 으로 사용된다.(ES6)","breadcrumbs":"Basic » Primitive Type","id":"2","title":"Primitive Type"},"3":{"body":"Literal Literal로 생성한다고 하면 우리가 가장 많이 사용하는 방법 var bol = true;\nvar str = \"hello\";\nvar num = 3.14;\nvar nullType = null;\nvar undef = undefined; var bol2;\nvar str2;\nbo2 = false\nstr2 = \"world\" Wrapper Object Wrapper Object를 사용해서 만든다고 하면 Constructor를 사용해서 만드는 것 즉, new 를 사용하여 생성 new Boolean(false);\nnew String(\"world\");\nnew Number(42); Symbol(\"foo\"); //Symbol 타입의 생성방법","breadcrumbs":"Basic » Primitive Type의 생성 방법","id":"3","title":"Primitive Type의 생성 방법"},"4":{"body":"typeof true; //\"boolean\"\ntypeof Boolean(true); //\"boolean\"\ntypeof new Boolean(true); //\"object\"\ntypeof (new Boolean(true)).valueOf(); //\"boolean\" typeof \"abc\"; //\"string\"\ntypeof String(\"abc\"); //\"string\"\ntypeof new String(\"abc\"); //\"object\"\ntypeof (new String(\"abc\")).valueOf(); //\"string\" typeof 123; //\"number\"\ntypeof Number(123); //\"number\"\ntypeof new Number(123); //\"object\"\ntypeof (new Number(123)).valueOf(); //\"number\" Literal로 생성한 것의 타입은 6가지 중 하나로 나오게 된다. 그런데 new를 사용하여 Wrapper Object로 만들게 되면 Object타입이 나오게 된다. 사용을 하려면 valueOf라는 Function을 사용해야만 입력한 값이 나오게 된다.","breadcrumbs":"Basic » Literal vs Wrapper","id":"4","title":"Literal vs Wrapper"},"5":{"body":"var a = 13 // assign `13` to `a`\nvar b = a // copy the value of `a` to `b` b = 37 // assign `37` to `b` console.log(a) // => 13 b의 값을 변경을 했지만 a에는 영향이 가지 않았다. 이유는 2개의 값이 저장된 공간이 다르기 때문이다.","breadcrumbs":"Basic » 값 타입","id":"5","title":"값 타입"},"6":{"body":"Array : 우리가 알고 있는 배열, 리스트의 형태를 가지고 있다. Function : Javascript에서는 Function Object가 존재하지만 결국 Function도 Object. Object : Map처럼 사용하는 즉, key : value의 형태로 사용하고 있는 Object. var a = { c: 13 } // assign the reference of a new object to `a`\nvar b = a // copy the reference of the object inside `a` to new variable `b`\nb.c = 37 // modify the contents of the object `b` refers to\nconsole.log(a) // => { c: 37 } var a = [];\nvar b = a; a.push(1); console.log(a); // [1]\nconsole.log(b); // [1]\nconsole.log(a === b); // true function changeAgeImpure(person) { person.age = 25; return person;\n}\nvar alex = { name: 'Alex', age: 30\n};\nvar changedAlex = changeAgeImpure(alex); console.log(alex); // -> { name: 'Alex', age: 25 }\nconsole.log(changedAlex); // -> { name: 'Alex', age: 25 } 원시타입과는 다르게 복사한 것을 변경을 했더니 기존 객체에도 영향이 간다. 이유는 같은 값의 주소 를 복사했기 때문이다. 🙏 Reference ImD/Dev-Docs - javascript Type","breadcrumbs":"Basic » Object Type","id":"6","title":"Object Type"}},"length":7,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"2":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"3":{"df":2,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}},"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"2":{"5":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":1,"docs":{"5":{"tf":1.0}}},"3":{".":{"1":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"df":1,"docs":{"6":{"tf":1.0}}},"7":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"4":{"tf":1.0}}},"a":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"(":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"b":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":2.0}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}}}},"b":{".":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":2,"docs":{"5":{"tf":2.23606797749979},"6":{"tf":2.23606797749979}},"o":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"l":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"(":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{")":{")":{".":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}},"c":{"df":1,"docs":{"6":{"tf":1.4142135623730951}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"(":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}}}}}},"d":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"(":{"a":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"b":{"df":1,"docs":{"6":{"tf":1.0}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"d":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"6":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":2.0}}}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"m":{"d":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"6":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":3,"docs":{"3":{"tf":2.0},"4":{"tf":2.6457513110645907},"6":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"(":{"1":{"2":{"3":{")":{")":{".":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":2.23606797749979},"6":{"tf":2.8284271247461903}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":2.0}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"2":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"(":{"\"":{"a":{"b":{"c":{"\"":{")":{")":{".":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772}}}}}}},"y":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"(":{"\"":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":3.4641016151377544}}}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"r":{"df":3,"docs":{"3":{"tf":2.6457513110645907},"5":{"tf":1.4142135623730951},"6":{"tf":2.449489742783178}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"s":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"1":{"2":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"3":{"df":2,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}},"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"2":{"5":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":1,"docs":{"5":{"tf":1.0}}},"3":{".":{"1":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"df":1,"docs":{"6":{"tf":1.0}}},"7":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"4":{"tf":1.0}}},"a":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"(":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"b":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":2.0}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}}}},"b":{".":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":7,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":2,"docs":{"5":{"tf":2.23606797749979},"6":{"tf":2.23606797749979}},"o":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"l":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"(":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{")":{")":{".":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}},"c":{"df":1,"docs":{"6":{"tf":1.4142135623730951}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"(":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}}}}}},"d":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"(":{"a":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"b":{"df":1,"docs":{"6":{"tf":1.0}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"d":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"6":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":2.0}}}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"m":{"d":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"6":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772}}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":3,"docs":{"3":{"tf":2.0},"4":{"tf":2.6457513110645907},"6":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"(":{"1":{"2":{"3":{")":{")":{".":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":2.23606797749979},"6":{"tf":3.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":2.0}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"2":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"(":{"\"":{"a":{"b":{"c":{"\"":{")":{")":{".":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772}}}}}}},"y":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"(":{"\"":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"6":{"tf":1.7320508075688772}},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":3.4641016151377544}}}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"r":{"df":3,"docs":{"3":{"tf":2.6457513110645907},"5":{"tf":1.4142135623730951},"6":{"tf":2.449489742783178}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"s":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}}},"title":{"root":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"s":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}};