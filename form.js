class Form {

    constructor(){


    }


    display(){
        var title = createElement("h2")
        title.html("Car Racing!")
        title.position(130, 0)
        var input = createInput("Enter Name:")
        input.position(130, 160)
        var button = createButton("play")
        button.position(250, 200)

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount++
            player.updateCount(playerCount)
            player.updateInfo(name)
            var greeting = createElement("h2")
            greeting.html("Welcome! " + name + "!")
            greeting.position(150, 160)
        })
    }

}