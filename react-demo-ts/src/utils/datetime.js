const parseMinutes = ({minutes}) => (minutes >= 0 && minutes <= 9)
? 
`0${minutes}`
: 
minutes;

export {
    parseMinutes
}