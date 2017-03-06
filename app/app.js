require.config({
    baseUrl: "../app",
    paths: {
        //Libraries
        jquery: "lib/jquery-3.1.1",
        pixi: "lib/pixi.min",
        underscore: "lib/underscore",

        // Locally required classes
        engine: "GameEngine",
        minigame: "Minigame",

        //***** GAME LIST - Put game here *****
        ExampleGame: "Minigames/example"
    }
});

requirejs(['main']);