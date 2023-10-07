class Main extends App
    {
        onStart()
        {
            // Creates a fullscreen layout with objects vertically centered.
            this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

            // source for the image file
            var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

            // Adds an image component to the layout.
            this.img = ui.addImage( this.main, image, "Avatar" )
        }
    }
    
    