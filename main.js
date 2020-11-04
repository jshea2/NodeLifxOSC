//NodeLifxOSC
//by Joe Shea

//Load lifx as library
const Lifx = require('lifxjs');
//Load osc as library and create instance
const { Client, Server } = require('node-osc');

//Create new lifx instance
const lifx = new Lifx();
//Authenticate Lifx Token
lifx.init({ appToken: 'ENTER TOKEN HERE' });

//OSC Server (IN) Config
const oscServerIp = "127.0.0.1";
const oscPortIn = 3333;
//OSC Client (OUT) Config
const oscClientIp = "127.0.0.1";
const oscPortOut = 53000;
//Connect to OSC
const client = new Client(oscClientIp, oscPortOut);
var server = new Server(oscPortIn, oscServerIp);

let light1name = 'Wall Light'//Example
let light2name = ''
let light3name = ''
let light4name = ''
let light5name = ''
let light6name = ''
let light7name = ''
let light8name = ''
let lastRequest;
let fixture1;
let fixture2;
let fixture3;
let fixture4;
let fixture5;
let fixture6;
let fixture7;
let fixture8;

function red(fix){
  lifx.color.light(fix.id, {
    rgb: `255,0,0`
  });
}
function green(fix){
  lifx.color.light(fix.id, {
    rgb: `0,255,0`
  });
}
function blue(fix){
  lifx.color.light(fix.id, {
    rgb: `0,0,255`
  });
}
function cyan(fix){
  lifx.color.light(fix.id, {
    rgb: `0,255,255`
  });
}
function magenta(fix){
  lifx.color.light(fix.id, {
    rgb: `255,0,255`
  });
}
function yellow(fix){
  lifx.color.light(fix.id, {
    rgb: `255,255,0`
  });
}
function orange(fix){
  lifx.color.light(fix.id, {
    rgb: `255,127,0`
  });
}
function purple(fix){
  lifx.color.light(fix.id, {
    rgb: `127,0,255`
  });
}
function pink(fix){
  lifx.color.light(fix.id, {
    rgb: `255,0,127`
  });
}
function white(fix){
  lifx.color.light(fix.id, {
    rgb: `255,255,255`
  });
}

server.on('message', async (msg) => {
  
  //Arguments to RGB
  var arg1 = msg[1]
  var arg2 = msg[2]
  var arg3 = msg[3]

  if (!fixture1) {
    //Get All Lights
    const lights = await lifx.get.all();
    lights.forEach(i => console.log(i.label))

    //Find the Lights (UN-COMMENT WHEN YOU ADD MORE LIGHTS)
    //Fixture 1
    const bulb1 = await lights.find(function (light) {
      return light.label === light1name;
    });

    //Fixture 2
    const bulb2 = await lights.find(function (light) {
      return light.label === light2name;
    });

    // //Fixture 3
    // const bulb3 = await lights.find(function (light) {
    //   return light.label === light3name;
    // });

    // //Fixture 4
    // const bulb4 = await lights.find(function (light) {
    //   return light.label === light4name;
    // });

    // //Fixture 5
    // const bulb5 = await lights.find(function (light) {
    //   return light.label === light5name;
    // });

    // //Fixture 6
    // const bulb6 = await lights.find(function (light) {
    //   return light.label === light6name;
    // });

    // //Fixture 7
    // const bulb7 = await lights.find(function (light) {
    //   return light.label === light7name;
    // });

    // //Fixture 8
    // const bulb8 = await lights.find(function (light) {
    //   return light.label === light8name;
    // });

    fixture1 = bulb1;
    fixture2 = bulb2;
    // fixture3 = bulb3;
    // fixture4 = bulb4;
    // fixture5 = bulb5;
    // fixture6 = bulb6;
    // fixture7 = bulb7;
    // fixture8 = bulb8;
  }
  
  
    if (msg[0] === "/light1"){
      if(Number.isInteger(msg[1])){
        //Fixture 1
         lifx.color.light(fixture1.id, {
          rgb: `${arg1},${arg2},${arg3}`
        });  
    } else if(msg[1] === 'red'){
      red(fixture1);
    } else if(msg[1] === 'green'){
      green(fixture1);
    } else if(msg[1] === 'blue'){
      blue(fixture1);
    } else if(msg[1] === 'cyan'){
      cyan(fixture1);
    } else if(msg[1] === 'magenta'){
      magenta(fixture1);
    } else if(msg[1] === 'yellow'){
      yellow(fixture1);
    } else if(msg[1] === 'orange'){
      orange(fixture1);
    } else if(msg[1] === 'purple'){
      purple(fixture1);
    } else if(msg[1] === 'pink'){
      pink(fixture1);
    } else if(msg[1] === 'white'){
      white(fixture1);
    }
  } 
    
  else if (msg[0] === "/light2"){
    if(Number.isInteger(msg[1])){
      //Fixture 2
       lifx.color.light(fixture2.id, {
        rgb: `${arg1},${arg2},${arg3}`
      });  
  } else if(msg[1] === 'red'){
    red(fixture2);
  } else if(msg[1] === 'green'){
    green(fixture2);
  } else if(msg[1] === 'blue'){
    blue(fixture2);
  } else if(msg[1] === 'cyan'){
    cyan(fixture2);
  } else if(msg[1] === 'magenta' || msg[1] === 'pink'){
    magenta(fixture2);
  } else if(msg[1] === 'yellow'){
    yellow(fixture2);
  } else if(msg[1] === 'orange'){
    orange(fixture2);
  } else if(msg[1] === 'purple'){
    purple(fixture2);
  } else if(msg[1] === 'pink'){
    pink(fixture2);
  } else if(msg[1] === 'white'){
    white(fixture2);
  }
} 
  
else if (msg[0] === "/light3"){
  if(Number.isInteger(msg[1])){
    //Fixture 3
     lifx.color.light(fixture3.id, {
      rgb: `${arg1},${arg2},${arg3}`
    });  
  } else if(msg[1] === 'red'){
    red(fixture3);
  } else if(msg[1] === 'green'){
    green(fixture3);
  } else if(msg[1] === 'blue'){
    blue(fixture3);
  } else if(msg[1] === 'cyan'){
    cyan(fixture3);
  } else if(msg[1] === 'magenta' || msg[1] === 'pink'){
    magenta(fixture3);
  } else if(msg[1] === 'yellow'){
    yellow(fixture3);
  } else if(msg[1] === 'orange'){
    orange(fixture3);
  } else if(msg[1] === 'purple'){
    purple(fixture3);
  } else if(msg[1] === 'pink'){
    pink(fixture3);
  } else if(msg[1] === 'white'){
    white(fixture2);
  }
}  

else if (msg[0] === "/light4"){
  if(Number.isInteger(msg[1])){
    //Fixture 4
     lifx.color.light(fixture4.id, {
      rgb: `${arg1},${arg2},${arg3}`
    });  
  } else if(msg[1] === 'red'){
    red(fixture4);
  } else if(msg[1] === 'green'){
    green(fixture4);
  } else if(msg[1] === 'blue'){
    blue(fixture4);
  } else if(msg[1] === 'cyan'){
    cyan(fixture4);
  } else if(msg[1] === 'magenta' || msg[1] === 'pink'){
    magenta(fixture4);
  } else if(msg[1] === 'yellow'){
    yellow(fixture4);
  } else if(msg[1] === 'orange'){
    orange(fixture4);
  } else if(msg[1] === 'purple'){
    purple(fixture4);
  } else if(msg[1] === 'pink'){
    pink(fixture4);
  } else if(msg[1] === 'white'){
    white(fixture4);
  }
} 

else if (msg[0] === "/light5"){
  if(Number.isInteger(msg[1])){
    //Fixture 5
     lifx.color.light(fixture5.id, {
      rgb: `${arg1},${arg2},${arg3}`
    });  
  } else if(msg[1] === 'red'){
    red(fixture5);
  } else if(msg[1] === 'green'){
    green(fixture5);
  } else if(msg[1] === 'blue'){
    blue(fixture5);
  } else if(msg[1] === 'cyan'){
    cyan(fixture5);
  } else if(msg[1] === 'magenta' || msg[1] === 'pink'){
    magenta(fixture5);
  } else if(msg[1] === 'yellow'){
    yellow(fixture5);
  } else if(msg[1] === 'orange'){
    orange(fixture5);
  } else if(msg[1] === 'purple'){
    purple(fixture5);
  } else if(msg[1] === 'pink'){
    pink(fixture5);
  } else if(msg[1] === 'white'){
    white(fixture5);
  }
} 

else if (msg[0] === "/light6"){
  if(Number.isInteger(msg[1])){
    //Fixture 6
     lifx.color.light(fixture6.id, {
      rgb: `${arg1},${arg2},${arg3}`
    });  
  } else if(msg[1] === 'red'){
    red(fixture6);
  } else if(msg[1] === 'green'){
    green(fixture6);
  } else if(msg[1] === 'blue'){
    blue(fixture6);
  } else if(msg[1] === 'cyan'){
    cyan(fixture6);
  } else if(msg[1] === 'magenta' || msg[1] === 'pink'){
    magenta(fixture6);
  } else if(msg[1] === 'yellow'){
    yellow(fixture6);
  } else if(msg[1] === 'orange'){
    orange(fixture6);
  } else if(msg[1] === 'purple'){
    purple(fixture6);
  } else if(msg[1] === 'pink'){
    pink(fixture6);
  } else if(msg[1] === 'white'){
    white(fixture6);
  }
} 

else if (msg[0] === "/light7"){
  if(Number.isInteger(msg[1])){
    //Fixture 7
     lifx.color.light(fixture7.id, {
      rgb: `${arg1},${arg2},${arg3}`
    });  
  } else if(msg[1] === 'red'){
    red(fixture7);
  } else if(msg[1] === 'green'){
    green(fixture7);
  } else if(msg[1] === 'blue'){
    blue(fixture7);
  } else if(msg[1] === 'cyan'){
    cyan(fixture7);
  } else if(msg[1] === 'magenta' || msg[1] === 'pink'){
    magenta(fixture7);
  } else if(msg[1] === 'yellow'){
    yellow(fixture7);
  } else if(msg[1] === 'orange'){
    orange(fixture7);
  } else if(msg[1] === 'purple'){
    purple(fixture7);
  } else if(msg[1] === 'pink'){
    pink(fixture7);
  } else if(msg[1] === 'white'){
    white(fixture7);
  }
} 

else if (msg[0] === "/light8"){
  if(Number.isInteger(msg[1])){
    //Fixture 8
     lifx.color.light(fixture8.id, {
      rgb: `${arg1},${arg2},${arg3}`
    });  
  } else if(msg[1] === 'red'){
    red(fixture8);
  } else if(msg[1] === 'green'){
    green(fixture8);
  } else if(msg[1] === 'blue'){
    blue(fixture8);
  } else if(msg[1] === 'cyan'){
    cyan(fixture8);
  } else if(msg[1] === 'magenta' || msg[1] === 'pink'){
    magenta(fixture8);
  } else if(msg[1] === 'yellow'){
    yellow(fixture8);
  } else if(msg[1] === 'orange'){
    orange(fixture8);
  } else if(msg[1] === 'purple'){
    purple(fixture8);
  } else if(msg[1] === 'pink'){
    pink(fixture8);
  } else if(msg[1] === 'white'){
    white(fixture8);
  }
} 

else if (msg[0] === "/lightsall"){  

    if(msg[1] === 'on'){
      // turn the light on
      lifx.power.group(fixture1.group.id, 'on');
      console.log("All Lights On")
    }
    else if (msg[1] === 'off'){
    // turn the light Off
    lifx.power.group(fixture1.group.id, 'off');
    console.log("All Lights Off")
    }
    else if (Number.isInteger(msg[1])){
    lifx.color.group(fixture1.group.id, {
    rgb: `${arg1},${arg2},${arg3}`
    });
    } 
    else if (msg[1] === 'red'){
    lifx.color.group(fixture1.group.id, {
     rgb: `255,0,0`
     });
    }
    else if (msg[1] === 'green'){
    lifx.color.group(fixture1.group.id, {
      rgb: `0,255,0`
      });
    }
    else if (msg[1] === 'blue'){
      lifx.color.group(fixture1.group.id, {
       rgb: `0,0,255`
       });
      }
    else if (msg[1] === 'cyan'){
      lifx.color.group(fixture1.group.id, {
        rgb: `0,255,255`
        });
      }
    else if (msg[1] === 'magenta' || msg[1] === 'pink'){
      lifx.color.group(fixture1.group.id, {
        rgb: `255,0,255`
        });
      }
    else if (msg[1] === 'yellow'){
      lifx.color.group(fixture1.group.id, {
        rgb: `255,255,0`
        });
      }
    else if (msg[1] === 'orange'){
      lifx.color.group(fixture1.group.id, {
        rgb: `255,127,0`
        });
      }
    else if (msg[1] === 'purple'){
      lifx.color.group(fixture1.group.id, {
        rgb: `127,0,255`
        });
      }
    else if (msg[1] === 'pink'){
      lifx.color.group(fixture1.group.id, {
        rgb: `255,0,127`
        });
      }
    else if (msg[1] === 'white'){
      lifx.color.group(fixture1.group.id, {
        rgb: `255,255,255`
        });
      }
}
})
