import styled, { keyframes } from "styled-components";

const dieAnimation = randomY => keyframes`
    0% {
        top: 110%;
        left: 50%;
    }
    50% {
        top: 0%;
        left: ${ randomY / 2 }%;
        transform: rotate( 360deg );
    }
    100% { transform: rotate( 0deg ); }
`;

const DieSvg = styled.svg`
    position: absolute;
    top: ${ props => props.randomX }%;
    left: ${ props => props.randomY }%;
    animation: ${ dieAnimation( props => props.randomY ) } 0.5s linear;
`;

export default function Die( { number, randomX, randomY } ) {

    const one = <g>
        <circle cx="50" cy="50" r="15" fill="red" />
    </g>;

    const two = <g>
        <circle cx="25" cy="25" r="10" fill="black" />
        <circle cx="75" cy="75" r="10" fill="black" />
    </g>;

    const three = <g>
        <circle cx="25" cy="25" r="10" fill="black" />
        <circle cx="75" cy="75" r="10" fill="black" />
        <circle cx="50" cy="50" r="10" fill="black" />
    </g>;

    const four = <g>
        <circle cx="25" cy="25" r="10" fill="black" />
        <circle cx="75" cy="75" r="10" fill="black" />
        <circle cx="25" cy="75" r="10" fill="black" />
        <circle cx="75" cy="25" r="10" fill="black" />
    </g>;

    const five = <g>
        <circle cx="25" cy="25" r="10" fill="black" />
        <circle cx="75" cy="75" r="10" fill="black" />
        <circle cx="50" cy="50" r="10" fill="black" />
        <circle cx="25" cy="75" r="10" fill="black" />
        <circle cx="75" cy="25" r="10" fill="black" />
    </g>;

    const six = <g>
        <circle cx="25" cy="25" r="10" fill="black" />
        <circle cx="25" cy="50" r="10" fill="black" />
        <circle cx="25" cy="75" r="10" fill="black" />
        <circle cx="75" cy="25" r="10" fill="black" />
        <circle cx="75" cy="50" r="10" fill="black" />
        <circle cx="75" cy="75" r="10" fill="black" />
    </g>;

    const dieFaces = [ null, one, two, three, four, five, six ];

    return <DieSvg
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        className="die"
        randomX={ randomX }
        randomY={ randomY }
    >
        <rect rx="20" ry="20" width="100" height="100" style={ { fill: "#FFFDF5" } } />
        { dieFaces[ number ] }
    </DieSvg>;

}