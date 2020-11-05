# NodeLifxOSC
## Uses [Node.js](https://nodejs.org/) to Convert [OSC](http://opensoundcontrol.org/introduction-osc) Commands into RGB Values for [LIFX API](https://api.developer.lifx.com/)
#
### Requires:

### [Node.js](https://nodejs.org/), [lifxjs](https://www.npmjs.com/package/lifxjs), [osc-min](https://www.npmjs.com/package/osc-min), [OSC Software](https://www.google.com/search?q=osc+compatible+software&rlz=1C5CHFA_enUS851US851&oq=osc+compatible+software&aqs=chrome..69i57.5504j0j4&sourceid=chrome&ie=UTF-8), and a [LIFX Color Lightbulb](https://www.lifx.com/collections/lamps-and-pendants/products/lifx-color-a19)
#
### Example Video using Art-Net from Qlab to Node.js relaying commands to LIFX API:


<a href="https://youtu.be/LuCbWI5LW_o
" target="_blank"><img src="http://img.youtube.com/vi/LuCbWI5LW_o/0.jpg" 
alt="NodeLifxOSC DEMO" width="300" height="180" border="10" /></a>
#
## LIFX Setup:
- Add all LIFX Lightbulbs to 1 Account
- This also works in Multiple Locations on Different WiFi Networks
#
## OSC Software Setup:
- Set OSC Software to match the 'main.js' file or vice versa 

     *'main.js' is defaulted to:* ***IP: 127.0.0.1, Port: 3333***
#
## OSC Commands:
| String:    | Argument 1:<br>String or Red Value                                                      | Argument 2:<br>Green Value | Argument 3:<br>Blue Value | Description:                                                                       |
|------------|-----------------------------------------------------------------------------------------|----------------------------|---------------------------|------------------------------------------------------------------------------------|
| /lightsall | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts all lights in a group <br>(targets all lights in the group of light1) |
| /light1    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 1                                                           |
| /light2    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 2                                                           |
| /light3    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 3                                                           |
| /light4    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 4                                                           |
| /light5    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 5                                                           |
| /light6    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 6                                                           |
| /light7    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 7                                                           |
| /light8    | red, green, blue,<br>cyan, magenta, yellow,<br>orange, pink, purple,<br>white, or 0-255 | 0-255                      | 0-255                     | This adjusts lightbulb 8                                                           |
| /scene     | [LIFX Scene Name]                                                                       |                            |                           |                                                                                    |
#
## Example OSC Commands:
`/lightsall purple` -- This command will turn all lightbulbs Purple in a group (whatever group light 1 is in) 

`/lightsall 0 255 255`  -- This command will turn all lightbulbs Cyan (0 Red, 255 Green, 255 Blue) in a group. (whatever group light 1 is in)

`/light4 255 0 0`  -- This command will only turn lightbulb 4 to Red (255 Red, 0 Green, 0 Blue)

`/light8 orange`  -- This command will only turn lightbulb 8 to Orange

`/scene Spooky`  -- This command will activate scene "Spooky".

`/scene Long Scene Title`  -- This command will activate scene "Long Scene Title" (This will still work if there are spaces. This basically makes a space for each argument then joins them together)
#
## Node Installation and Setup:
- Download or Clone this repository
- Open in preferred source code editor (ex. [Visual Studio Code](https://code.visualstudio.com/download) or Terminal/Command Prompt)
  - If you use Visual Studio Code...
  - Go to "View > Command Palette..."
  -  Type "Git: Clone" [Enter]
  -  Paste the Github Clone HTTPS URL. This is the same as the URL just with ".git" added to the end (https://github.com/jshea2/NodeLifxArt-Net.git)
- Open code editor's Terminal
- Install 'lifxjs' & 'dmxnet': `npm install` (installs dependencies from 'package.json')

    (Prepend `sudo` if on Mac)
  
  or install seperately
  - `npm install lifxjs`
  - `npm install osc-min`

- In file 'main.js' change config info..
        
 - Input your LIFX Token:
    ```javascript
    //Authenticate Lifx Token
    lifx.init({ appToken: 'ENTER TOKEN HERE' });
    ```
    To find LIFX Token:

   - Login to your [LIFX Cloud Account](https://cloud.lifx.com/settings)
   - Generate New Token
  
  - Input Each Lightbulb's Name:
    ```javascript
    //ENTER NAME OF LIGHTS HERE
    let light1name = 'Wall Light'//Example
    let light2name = ''
    let light3name = ''
    let light4name = ''
    let light5name = ''
    let light6name = ''
    let light7name = ''
    let light8name = ''
    ```
    -***Name Must Match in LIFX App!***-

  - Configure OSC IP and Port to recieve data on: 

    ```javascript
     //OSC Server (IN) Config
      const oscServerIp = "127.0.0.1";
      const oscPortIn = 3333;
    ```
- If you have more than 1 Lightbulb; Un-Comment all the ones you need. This can be found in three sections:
  ```javascript
    // //Fixture 2
    // const bulb2 = await lights.find(function (light) {
    //   return light.label === light2name;
    // });
  ```
  ```javascript
    // fixture2 = bulb2;
  ```
-***This Is Currently Only Setup for **8** Lightbulbs***-

- Save 'main.js' & Run node file in Terminal:  `npm start` [Enter]
- 
#
## Notes:

- If you un-comment light fixtures that aren't available, the code will still work, but you will get errors  
- This Node file only works with LIFX Color Bulbs
- When you first run the Node file expect an initial longer latency, because Node has to 'get' and 'find' each lightbulb's 'id'. It should be faster after that, because the 'id' values are stored from then on
- Since these lightbulbs are connected via WiFi expect a little latency. It's about the same as controlling it from the LIFX App (my experience has been 1.5 seconds)
- This has only been tested on a [LIFX Color A19](https://www.lifx.com/collections/lamps-and-pendants/products/lifx-color-a19) bulb
- The name's of each available lightbulb on the account will be logged to the console when you first run the Node file. This can be used for inputting strings to '***light1name***' variables
- See QLab file "QLabLifxOSCdemo" for a DEMO 

    (Only up to **16 channels** (5 Lightbulbs) on Free, Pro Audio, and Pro Video License's)

#

For Questions, Bugs, or Feature Requests


Send me an email: joe.daniel.shea@gmail.com
