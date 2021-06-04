class Form {
    constructor() {

    }
    display() {
        var title = createElement('h1');
        title.html("Car Racing");
        title.position(300, 100);
        var input = createInput('Name:');
        var button = createButton('Play');
        input.position(300,150);
        button.position(300,120);
        var greeting = createElement('h2');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello" +name);
            gretting.position(400,30)
        })
        }
}