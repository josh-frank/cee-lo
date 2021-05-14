import Die from "./Die";

function shuffle( array ) {
    for ( let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
    }
}

export default function Dice( { roll } ) {

    const randomX = [ Math.floor( ( Math.random() * 25 ) + 5 ) ];
    randomX.push( Math.floor( ( Math.random() * 25 ) + randomX[ 0 ] + 5 ) )
    randomX.push( Math.floor( ( Math.random() * 25 ) + randomX[ 1 ] + 5 ) )
    shuffle( randomX );

    const randomY = [ Math.floor( ( Math.random() * 25 ) + 5 ) ];
    randomY.push( Math.floor( ( Math.random() * 25 ) + randomY[ 0 ] + 10 ) )
    randomY.push( Math.floor( ( Math.random() * 25 ) + randomY[ 1 ] ) )
    shuffle( randomY );
    
    return <div>
        <Die number={ roll[ 0 ] } randomX={ randomX[ 0 ] } randomY={ randomY[ 0 ] } />
        <Die number={ roll[ 1 ] } randomX={ randomX[ 1 ] } randomY={ randomY[ 1 ] } />
        <Die number={ roll[ 2 ] } randomX={ randomX[ 2 ] } randomY={ randomY[ 2 ] } />
    </div>;

}