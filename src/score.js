export default function score( roll ) {
    roll.sort()
    if ( roll[ 0 ] === roll[ 1 ] && roll[ 1 ] === roll[ 2 ] ) return 10;
    if ( roll.join() === "4,5,6" ) return 10;
    if ( roll[ 0 ] !== roll[ 1 ] && roll[ 1 ] !== roll[ 2 ] && roll[ 1 ] !== roll[ 3 ] ) return 0;
    if ( roll.join() === "1,2,3" ) return -1;
    if ( roll[ 0 ] === roll[ 1 ] || roll[ 1 ] === roll[ 2 ] || roll[ 1 ] === roll[ 3 ] ) {
      const pointDie = roll[ 0 ] === roll[ 1 ] ? roll[ 2 ] : roll[ 0 ];
      return pointDie === 1 ? -1 : pointDie === 6 ? 10 : pointDie;
    }
}