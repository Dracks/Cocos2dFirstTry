var HelloWorldLayer = cc.Layer.extend({
	sprite: null,
	ctor: function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		/////////////////////////////
		// 2. add a menu item with "X" image, which is clicked to quit the program
		//    you may modify it.
		// ask the window size
		var size = cc.winSize;

		var mainscene = ccs.load(res.MainScene_json);
		this.addChild(mainscene.node);

		return true;
	}
});

var HelloWorldScene = cc.Scene.extend({
	onEnter: function () {
		this._super();
		var layer = new HelloWorldLayer();
		this.addChild(layer);

		setTimeout(function (){
			var scene = new cc.Scene();
			scene.addChild(new MainMenuLayer());
			cc.Director.sharedDirector.runScene(new cc.TransitionFade(1.2, scene));
		}, 1000);
	}
});

var MainMenuLayer = cc.Layer.extend({
	sripte: null,
	ctor: function () {
		this._super();

		var mainscene = ccs.load(res.MainBackground_json);
		this.addChild(mainscene.node);

		var child = mainscene.node.getChildByName("Pedra");
		child.zIndex = 10;

		child.runAction(new cc.MoveBy(3, cc.p(500, 10)));

		return true
	}
});

