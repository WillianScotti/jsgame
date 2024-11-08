const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Keyboard
	];
};
self.C3_JsPropNameTable = [
	{Player: 0},
	{Chao: 0},
	{Teclado: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	Chao: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {}
}