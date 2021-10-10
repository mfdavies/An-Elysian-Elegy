// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SRD_FullscreenToggleOption","status":true,"description":"Adds a Fullscreen Toggle to the Options Window","parameters":{"Option Name":"Fullscreen","Position":"Middle","Default Value":"false","Persist Default?":"false"}},
{"name":"FixPixel","status":true,"description":"","parameters":{}},
{"name":"More Character Frames (MV)","status":true,"description":"Allows more than 3 Frames","parameters":{}},
{"name":"GALV_CamControl","status":true,"description":"Allows greater control over where the game camera is focused. View HELP for plugin commands.","parameters":{"Tile Size":"48"}},
{"name":"GALV_MapProjectiles","status":true,"description":"(v.1.8) Create projectiles that can interact with the map and map characters","parameters":{"Tile Size":"48","Fade Speed":"40","Disable Mouse Move":"false","Premade 1":"0,-1,10,16,'sentry-laser',0,'c(5)|s(D:on)',[],[],3,666","Premade 2":"","Premade 3":"","Premade 4":"","Premade 5":"","Premade 6":"","Premade 7":"","Premade 8":"","Premade 9":"","Premade 10":"","Premade 11":"","Premade 12":"","Premade 13":"","Premade 14":"","Premade 15":"","Premade 16":"","Premade 17":"","Premade 18":"","Premade 19":"","Premade 20":""}},
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"true","Default Enabled Switches":"[]","Ignore Mouse when inactive":"false"}},
{"name":"QMovement","status":true,"description":"<QMovement>\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"false","Move on click":"true","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[]","Debug Settings":"","Show Colliders":"true"}},
{"name":"QSight","status":true,"description":"<QSight>\r\nReal time line of sight","parameters":{"See Through Terrain":"[]","Show":"true"}},
{"name":"QM+Followers","status":true,"description":"<QMFollowers>\nQMovement Addon: Adds follower support","parameters":{}},
{"name":"QInput","status":true,"description":"<QInput>\r\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\", \"#space\", \"#z\", \"$A\"]","Escape / Cancel":"[\"#esc\", \"#insert\", \"#x\", \"#num0\", \"$B\"]","Menu":"[\"#esc\", \"$Y\"]","Shift":"[\"#shift\", \"#cancel\", \"$X\"]","Control":"[\"#ctrl\", \"#alt\"]","Tab":"[\"#tab\"]","Pageup":"[\"#pageup\",\"$L1\",\"#q\",\"#g\"]","Pagedown":"[\"#pagedown\", \"#w\", \"$R1\"]","Left":"[\"#left\", \"#num4\", \"$LEFT\"]","Right":"[\"#right\", \"#num6\", \"$RIGHT\"]","Up":"[\"#up\", \"#num8\", \"$UP\"]","Down":"[\"#down\", \"#num2\", \"$DOWN\"]","Debug":"[\"#f9\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f4","Restart":"f5","Console":"f8"}},
{"name":"QInput+Remap","status":true,"description":"<QInputRemap>\r\nQInput Addon: Adds Key remapping to Options menu","parameters":{"Hide Keys":"[]","Disable Keys":"[\"ok\", \"escape\"]","Vocab":"","Vocab: Ok":"Action","Vocab: Escape":"Cancel","Vocab: Shift":"Run","Vocab: Control":"Control","Vocab: Tab":"Tab","Vocab: Pageup":"Next","Vocab: Pagedown":"Prev","Vocab: Up":"Up","Vocab: Down":"Down","Vocab: Left":"Left","Vocab: Right":"Right"}},
{"name":"KhasCore","status":true,"description":"[2.0] Required by Khas plugins.","parameters":{}},
{"name":"KhasGraphics","status":true,"description":"[1.1] Required by Khas graphics plugins.","parameters":{}},
{"name":"KhasUltraLighting","status":true,"description":"[4.2] Adds lighting and real-time shadows to your game.","parameters":{"Custom Blending":"ON","Transfer Reset":"OFF","Auto Battle Lighting":"ON"}},
{"name":"SRD_WaitOptions","status":true,"description":"Adds more options for waiting in your events.","parameters":{"SE Wait Buffer":"4"}},
{"name":"OcRam_Audio_EX","status":true,"description":"v2.11 This plugin provides dynamic sound positioning and adds 2 'generic' BGS channels which will also play in battle. PLUGIN NAME MUST BE OcRam_Audio_EX.js","parameters":{"Default Distance (BGS/SE)":"20","Default Radius (BGS/SE)":"0","Default create new (BGS)":"false","Default fade (BGS)":"2","Default forced play (BGS)":"true","Default autopan (BGS/SE)":"true","Default fade (BGM)":"2","BGS2/3 volume control":"true","BGS2 option caption":"BGS2 Volume","BGS3 option caption":"BGS3 Volume","Use linear curve":"true","Debug mode":"false"}},
{"name":"Galv_CollideSE","status":true,"description":"(v.1.0) Play a SE when player collides with impassable tile or event","parameters":{"Sound Effect":"Blow1,70,120","Repeat Wait":"30"}},
{"name":"DhoomMessageSE","status":true,"description":"Dhoom MessageSE v1.0a - 18/07/2019","parameters":{"Enable Switch":"0","Preset Settings":"[\"{\\\"name\\\":\\\"Default\\\",\\\"characterSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"00 - Written_Stroke\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"50\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"10\\\\\\\"}\\\",\\\"wordSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"70\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"sentenceSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"00 - Written_NewLine_Sweep\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"50\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"pageSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"2\\\\\\\"}\\\",\\\"characterDelay\\\":\\\"3\\\",\\\"wordDelay\\\":\\\"6\\\",\\\"sentenceDelay\\\":\\\"15\\\",\\\"ignoredCharacters\\\":\\\"[]\\\",\\\"ignoredWords\\\":\\\"[]\\\",\\\"ignoredSentences\\\":\\\"[]\\\"}\",\"{\\\"name\\\":\\\"Typewriter\\\",\\\"characterSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor1\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"wordSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor1\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"110\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"5\\\\\\\"}\\\",\\\"sentenceSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor1\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"120\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"pageSe\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Hammer\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"variance\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"characterDelay\\\":\\\"1\\\",\\\"wordDelay\\\":\\\"12\\\",\\\"sentenceDelay\\\":\\\"24\\\"}\"]"}},
{"name":"GALV_MessageSoundEffects","status":false,"description":"Play sound effects when during Show Text event commands.","parameters":{"Delay Time":"2520","Default Talk SE":"00 - Writting,80,150","Default Confirm SE":"Cursor2,80,150","-----------":"","Quick SE 1":"","Quick SE 2":"","Quick SE 3":"","Quick SE 4":""}},
{"name":"GALV_CharacterAnimations","status":false,"description":"(v.1.8) Make the player and follower characters use different\r\ngraphics for idle, walk and run. View HELP for more info.","parameters":{"Use Jump Graphic":"true","Common Event ID":"0","Common Event Time":"0","Repeat Common Event":"0"}},
{"name":"GALV_MessageBusts","status":true,"description":"(v.2.8) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"1","Bust Position":"1","Text X Offset":"240","Fade Out Speed":"32","Filename Append":""}},
{"name":"Looping Animations (MV)","status":true,"description":"Allows animations on the map to loop\r\nAlso allows animations (normal or looping) to play below/behind characters","parameters":{}},
{"name":"Iavra_Self_Variables","status":true,"description":"Adds self variables to the game, that work similar to self switches.\r\n<Iavra Self Variables>","parameters":{"Container Name":"$gameSelfVariables","Plugin Command":"SelfVariable"}},
{"name":"RS_MessageAlign","status":true,"description":"(v1.0.16) This plugin allows you to align the text in the message system.","parameters":{}},
{"name":"TRQ_LoadGameOnGO","status":true,"description":"v1.01 Load last saved game after gameover.","parameters":{}}
];
