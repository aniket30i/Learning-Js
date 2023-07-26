// let js='amazing';
//       if(js==='amazing') alert('Javascript is fun!');

      // 40+8+23-10;
      // console.log(40+8+23-10);
      // console.log("Aniket");
      // console.log(23);

      let firstName = "Aniket";
      // console.log(firstName);

      // console.log(2**3);
      // //** is ^ (power) in javascript */

      const lastName = "Saha";
      // console.log(firstName+' '+lastName);

      // const Aniket = `I'm ${firstName}, a ${2022-1999} year old ${lastName}`;
      // console.log(Aniket);

      const age=19;
      const isOldEnough=age>=18;

      if(isOldEnough)
      {
            console.log('Sarah can start driving license 😉');
      }

      console.log(`javascript learning in progress4`);


      //type conversion
      const inputYear='1991';
      console.log(Number(inputYear) , inputYear);
      console.log(Number(inputYear)+18);


      //type coercion

      console.log('I am '+ 23 + ' Years old');

      //5 falsy values : 0, '', underfined , null , NaN

      const ageb=18;
      if(ageb===18) console.log('You just became an adult');

      // == performs type coercion

      if('18'== ageb) console.log('You just became an adult (loose)');

      //loose equality operator // avoid as much possible

      const fav= prompt("Whats your number?"); //string type
      console.log(fav);