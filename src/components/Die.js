export default function Die( { number } ) {

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

    return <svg
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        className="die"
    >
        <rect rx="20" ry="20" width="100" height="100" style={ { fill: "#FFFDF5" } } />
        { dieFaces[ number ] }
    </svg>;

}