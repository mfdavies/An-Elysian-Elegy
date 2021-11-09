// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Galv_PixelMove","status":true,"description":"(v.1.3) Gives the illusion of pixel movement for the player.","parameters":{"Diagonal Speed":"90","Diagonal Charset":"false","Tile Delay":"30"}},
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"true","Default Enabled Switches":"[]","Ignore Mouse when inactive":"false"}},
{"name":"QInput","status":true,"description":"<QInput>\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\", \"#space\", \"#z\", \"$A\"]","Escape / Cancel":"[\"#esc\", \"#insert\", \"#x\", \"#num0\", \"$B\"]","Menu":"[\"#esc\", \"$Y\"]","Shift":"[\"#shift\", \"#cancel\", \"$X\"]","Control":"[\"#ctrl\", \"#alt\"]","Tab":"[\"#tab\"]","Pageup":"[\"#pageup\",\"$L1\",\"#q\",\"#g\"]","Pagedown":"[\"#pagedown\",\"$R1\",\"#r\"]","Left":"[\"#left\",\"#num4\",\"$LEFT\",\"#a\"]","Right":"[\"#right\",\"#num6\",\"$RIGHT\",\"#d\"]","Up":"[\"#up\",\"#num8\",\"$UP\",\"#w\"]","Down":"[\"#down\",\"#num2\",\"$DOWN\",\"#s\"]","Debug":"[\"#f9\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f4","Restart":"f5","Console":"f8"}},
{"name":"QInput+Remap","status":true,"description":"<QInputRemap>\r\nQInput Addon: Adds Key remapping to Options menu","parameters":{"Hide Keys":"[]","Disable Keys":"[\"ok\", \"escape\"]","Vocab":"","Vocab: Ok":"Action","Vocab: Escape":"Cancel","Vocab: Shift":"Run","Vocab: Control":"Control","Vocab: Tab":"Tab","Vocab: Pageup":"Next","Vocab: Pagedown":"Prev","Vocab: Up":"Up","Vocab: Down":"Down","Vocab: Left":"Left","Vocab: Right":"Right"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"show","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"AudioStreaming","status":true,"description":"Load audio faster and use only ogg files.","parameters":{"mode":"00","deleteM4a":"false"}},
{"name":"QSight","status":true,"description":"<QSight>\r\nReal time line of sight","parameters":{"See Through Terrain":"[]","Show":"false"}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"KhasCore","status":true,"description":"[2.0] Required by Khas plugins.","parameters":{}},
{"name":"KhasGraphics","status":true,"description":"[1.1] Required by Khas graphics plugins.","parameters":{}},
{"name":"KhasUltraLighting","status":true,"description":"[4.2] Adds lighting and real-time shadows to your game.","parameters":{"Custom Blending":"ON","Transfer Reset":"OFF","Auto Battle Lighting":"ON"}},
{"name":"GALV_CharacterFrames","status":true,"description":"Enables map character sheets to have more frames per character.","parameters":{"Frame Speed Modifier":"f * 0.8"}},
{"name":"GALV_CharacterAnimations","status":true,"description":"(v.1.8) Make the player and follower characters use different\r\ngraphics for idle, walk and run. View HELP for more info.","parameters":{"Use Jump Graphic":"true","Common Event ID":"0","Common Event Time":"0","Repeat Common Event":"0"}},
{"name":"GALV_CFStepSE","status":true,"description":"(v.1.2) Adds step sound effects to Galv's Character Frames plugin","parameters":{"Step Frames":"1,4","Events":"true","-- Terrain Step SE --":"","Terrain 1":"00 - Soft_Footsteps1,100,100","Terrain 2":"00 - Soft_Footsteps2,100,100","Terrain 3":"00 - Hard_Footsteps,100,100","Terrain 4":"00 - Soft_Hard_Footsteps,100,100","Terrain 5":"","Terrain 6":"","Terrain 7":""}},
{"name":"SRD_WaitOptions","status":true,"description":"Adds more options for waiting in your events.","parameters":{"SE Wait Buffer":"4"}},
{"name":"OcRam_Audio_EX","status":true,"description":"v2.11 This plugin provides dynamic sound positioning and adds 2 'generic' BGS channels which will also play in battle. PLUGIN NAME MUST BE OcRam_Audio_EX.js","parameters":{"Default Distance (BGS/SE)":"20","Default Radius (BGS/SE)":"0","Default create new (BGS)":"false","Default fade (BGS)":"2","Default forced play (BGS)":"true","Default autopan (BGS/SE)":"true","Default fade (BGM)":"2","BGS2/3 volume control":"true","BGS2 option caption":"BGS2 Volume","BGS3 option caption":"BGS3 Volume","Use linear curve":"true","Debug mode":"false"}},
{"name":"Galv_CollideSE","status":true,"description":"(v.1.0) Play a SE when player collides with impassable tile or event","parameters":{"Sound Effect":"Blow1,70,120","Repeat Wait":"30"}},
{"name":"DhoomMessageSE","status":true,"description":"Dhoom MessageSE v1.0a - 18/07/2019","parameters":{"Enable Switch":"0","Preset Settings":"[\"{\\\"name\\\":\\\"Default\\\",\\\"characterSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"00 - Written_Stroke\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"15\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"10\\\\\\\"}\\\",\\\"wordSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"2\\\\\\\"}\\\",\\\"sentenceSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"00 - Written_NewLine_Sweep\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"15\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"2\\\\\\\"}\\\",\\\"pageSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"00 - Written_NewLine_Sweep\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"15\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"2\\\\\\\"}\\\",\\\"characterDelay\\\":\\\"2\\\",\\\"wordDelay\\\":\\\"4\\\",\\\"sentenceDelay\\\":\\\"12\\\",\\\"ignoredCharacters\\\":\\\"[]\\\",\\\"ignoredWords\\\":\\\"[]\\\",\\\"ignoredSentences\\\":\\\"[]\\\"}\",\"{\\\"name\\\":\\\"Typewriter\\\",\\\"characterSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor1\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"wordSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor1\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"110\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"5\\\\\\\"}\\\",\\\"sentenceSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor2\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"120\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"pageSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Hammer\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"characterDelay\\\":\\\"1\\\",\\\"wordDelay\\\":\\\"12\\\",\\\"sentenceDelay\\\":\\\"24\\\",\\\"ignoredCharacters\\\":\\\"[]\\\",\\\"ignoredWords\\\":\\\"[]\\\",\\\"ignoredSentences\\\":\\\"[]\\\"}\"]"}},
{"name":"GALV_MessageBusts","status":true,"description":"(v.2.8) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"1","Bust Position":"1","Text X Offset":"240","Fade Out Speed":"32","Filename Append":""}},
{"name":"Iavra_Self_Variables","status":true,"description":"Adds self variables to the game, that work similar to self switches.\r\n<Iavra Self Variables>","parameters":{"Container Name":"$gameSelfVariables","Plugin Command":"SelfVariable"}},
{"name":"RS_MessageAlign","status":true,"description":"(v1.0.16) This plugin allows you to align the text in the message system.","parameters":{}},
{"name":"TRQ_LoadGameOnGO","status":true,"description":"v1.01 Load last saved game after gameover.","parameters":{}},
{"name":"DMY_SkipVideo","status":true,"description":"Skip video on key press","parameters":{"Disabler switch":"0"}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"GALV_DisableDash","status":true,"description":"Disable dash in your game.","parameters":{"Disable Option":"true"}},
{"name":"GALV_PuzzleFunctions","status":true,"description":"(v.1.1) A bunch of functions to use to make eventing puzzles easier","parameters":{}},
{"name":"GALV_MapProjectiles","status":true,"description":"(v.1.8) Create projectiles that can interact with the map and map characters","parameters":{"Tile Size":"48","Fade Speed":"40","Disable Mouse Move":"false","Premade 1":"0,-1,10,16,'sentry-laser',0,'c(5)|s(D:on)',[10,20],[],3,3","Premade 2":"0,6,10,16,'sentry-laser',0,'c(5)|s(D:on)',[10,20],[],3,2","Premade 3":"0,2,10,16,'sentry-laser',0,'c(5)|s(D:on)',[10,20],[],3,2","Premade 4":"0,4,10,16,'sentry-laser',0,'c(5)|s(D:on)',[10,20],[],3,2","Premade 5":"0,8,10,16,'sentry-laser',0,'c(5)|s(D:on)',[10,20],[],3,2","Premade 6":"","Premade 7":"","Premade 8":"","Premade 9":"","Premade 10":"","Premade 11":"","Premade 12":"","Premade 13":"","Premade 14":"","Premade 15":"","Premade 16":"","Premade 17":"","Premade 18":"","Premade 19":"","Premade 20":""}},
{"name":"OuterSelfSwitch","status":true,"description":"Changes a self switch for other events.","parameters":{}},
{"name":"Multi Timers (MV)","status":true,"description":"Allows more than one timer running at once, with custom commands","parameters":{}},
{"name":"GALV_MapAnimEffects","status":true,"description":"Enhance the usability of animations and use them to create effects when characters stand on regions.","parameters":{"Region Effects":"7,10,a-fly | 2,9,a+fly | 5,11,a","Followers":"true"}},
{"name":"Sean_Basic_Menu","status":true,"description":"","parameters":{"Text Variable":"18","Window X":"0","Window Y":"0"}},
{"name":"YEP_MoveRouteCore","status":true,"description":"v1.04 Expand the number of movement options for the move\nroute events using this plugin.","parameters":{}}
];
