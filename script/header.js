const playerOvereating = {};

const BLOCK_COAL = Block.createSpecialType({
	solid: true,
	renderlayer: EBlockRenderLayer.BLEND,
	destroytime: 5,
	explosionres: 6.0,
	lightopacity: 15,
	translucency: 0.0
});

const translate = function(str, args) {
	try {
		str = Translation.translate(str);
		if (args !== undefined) {
			Array.isArray(args) || (args = [args]);
			str = java.lang.String.format(str, args);
		}
		return "" + str;
	} catch (e) {
		Logger.Log("Aboba#translate: " + e, "ERROR");
		return "" + str;
	}
};

const negativeEffect = [
    { effect: EPotionEffect.BLINDNESS},
    { effect: EPotionEffect.CONFUSION},
    { effect: EPotionEffect.DIG_SLOWDOWN},
    { effect: EPotionEffect.HUNGER},
    { effect: EPotionEffect.MOVEMENT_SLOWDOWN},
    { effect: EPotionEffect.POISON},
    { effect: EPotionEffect.WEAKNESS},
    { effect: EPotionEffect.WITHER}
];