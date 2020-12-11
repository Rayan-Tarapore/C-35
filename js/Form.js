class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2','Random Generic Racing Game -- Dont play and waste your time')
        title.position(130,0);
        var input = createInput("Name")
        var button = createButton('PLAY');
        var greeting = createElement('h3')
        input.position(300,260);
        button.position(300,300);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value()
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello: "+ name);
            greeting.position(1000,350);

        })
    }
}