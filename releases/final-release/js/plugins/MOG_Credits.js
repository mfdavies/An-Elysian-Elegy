//=============================================================================
// MOG_Credits.js
//=============================================================================

/*:
 * @plugindesc (v1.1) Adds credits to the title screen.
 * @author Moghunter
 *
 * @param Command Name
 * @desc Definição do nome do comando na tela de título.
 * @default Credits
 *
 * @param Scrolling Speed
 * @desc Velocidade de Scroll.
 * @default 1
 *
 * @help  
 * =============================================================================
 * +++ MOG - Credits (v1.1) +++
 * By Moghunter 
 * Heavily Modified by Matthew Davies
 * https://mogplugins.wordpress.com
 * =============================================================================
 * Adds credits to the title screen.
 *
 * =============================================================================
 * History
 * ============================================================================= 
 * (v1.1) - Correção no efeito Background nas outras cenas.
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_Credits = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_Credits');
	Moghunter.credits_commandName = String(Moghunter.parameters['Command Name'] || "Credits");
	
//=============================================================================
// ** Window Title Command
//=============================================================================	

//==============================
// * make Command List
//==============================
var _mog_credits_wtc_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    _mog_credits_wtc_makeCommandList.call(this);
	this.addCommand(String(Moghunter.credits_commandName),   'mcredits');
};	
	
//=============================================================================
// ** Scene Tittle
//=============================================================================	

//==============================
// * create Command Window
//==============================
var _mog_credits_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    _mog_credits_createCommandWindow.call(this);
	this._commandWindow.setHandler('mcredits',  this.commandMCredits.bind(this));
};

//==============================
// * command MCredits
//==============================
Scene_Title.prototype.commandMCredits = function() {
    this._commandWindow.close();
    DataManager.setupNewGame();
	SceneManager.goto(Scene_Map);
	$gamePlayer.reserveTransfer(5, 0, 0);
};