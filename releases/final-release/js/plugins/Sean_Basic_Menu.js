/*:
 * @param Text Variable
 * @desc Which game variable test will be stored in. When text is drawn on the window, it'll use the text stored in this variable.
 * @type variable
 * @default 17
 * 
 * @param Window X
 * @desc X coordinate of the top left corner of the window. (in percentage of the window width. possible values: 0-1)
 * @type number
 * @max 1
 * @min 0
 * @decimals 2
 * @default 0
 * 
 * @param Window Y
 * @desc Y coordinate of the top left corner of the window. (in percentage of the window height. possible values: 0-1)
 * @type number
 * @max 1
 * @min 0
 * @decimals 2
 * @default 0
*/

var params = PluginManager.parameters('Sean_Basic_Menu');
var t_var = parseInt(params['Text Variable']);
var win_x_scale = parseFloat(params['Window X']);
var win_y_scale = parseFloat(params['Window Y']);

//-----------------------------------------------------------------------------
// CREATE MENU
//-----------------------------------------------------------------------------
function BasicMenu()
{
    this.initialize.apply(this, arguments);
}
BasicMenu.prototype = Object.create(Scene_MenuBase.prototype);      //inherit?
BasicMenu.prototype.constructor = BasicMenu;
BasicMenu.prototype.initialize = function ()
{
    Scene_MenuBase.prototype.initialize.call(this);                //super?
};

// Make Window
BasicMenu.prototype.create = function ()
{
    win_x = 0 + Graphics.width * win_x_scale;
    win_y = 0 + Graphics.height * win_y_scale;
    Scene_MenuBase.prototype.create.call(this);
    this._customWindow = new BasicWindow(win_x, win_y, 320, 240);
    this.addWindow(this._customWindow);
}

// Draw Stuff on Window
BasicMenu.prototype.update = function()
{
    if (!this.drawn_windows)
    {
        this._customWindow.draw_all();
        this.drawn_windows = true;
    }

    if (Input.isTriggered("shift"))
    {
        SceneManager.pop()
    }
}

//-----------------------------------------------------------------------------
// CREATE WINDOWS
//-----------------------------------------------------------------------------
function BasicWindow()
{
    this.initialize.apply(this, arguments);
}
BasicWindow.prototype = Object.create(Window_Base.prototype);
BasicWindow.prototype.constructor = BasicWindow;
BasicWindow.prototype.initialize = function (x, y, width, height)
{
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.draw_all();
}

// Stuff to Draw
BasicWindow.prototype.draw_all = function ()
{
    this.contents.clear();
    //this.drawText($gameVariables.value(t_var), 0, 0, this.width - this.padding * 2);
    this.drawTextEx($gameVariables.value(t_var), 0, 0);
    //this.drawFace("Spirit", 0, this.padding, this.padding + 96);
    // Look into ImageManager in rpg_managers.js to figure out how to draw images and animations and stuff.
}

//-----------------------------------------------------------------------------
// PLUGIN COMMAND INTERFACE
//-----------------------------------------------------------------------------
/*
var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	_Game_Interpreter_pluginCommand.apply(this, arguments);
	if(command.trim().toLowerCase() === 'menu')
    {
        for (let i = 0; i < args.length; i++)
        {
            if(args[i].trim().toLowerCase() === 'window')
            {
                // Get Coordinates and Dimensions From Input
                // Convert Input (percent window dimensions) into pixels
                var window_x = 0 + Graphics.width * args[i + 1].parseFloat();
                var window_y = 0 + Graphics.height * args[i + 2].parseFloat();
                var window_width = (
                        Graphics.width - window_x) * args[i + 3].parseFloat();
                var window_height_scale = (
                        Graphics.height - window_y) * args[i + 4].parseFloat();

            }
        }
        
        // Create Menu
    }
}
*/