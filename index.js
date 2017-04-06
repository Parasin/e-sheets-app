const PORT    = process.env.PORT || '3000';
const express = require( 'express' );
let   app     = express(),
      path    = require( 'path' );


app.use( '/bower_components', express.static( __dirname + '/bower_components' ) );
app.use( '/images', express.static( path.join( __dirname, 'images' ) ) );
app.use( '/src', express.static( path.join( __dirname, 'src' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );

app.use( ( req, res ) => {
    res.sendStatus( 404 );
} );

app.listen( PORT, () => {
    console.log( 'Listening on port %s', PORT );
} );
