const Arrow = (color, deg) => {
    return `<svg width="17" height="14" viewBox="0 0 17 14" fill="none"  style="transform: rotate(${deg}deg);" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 6.7749H0.75" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.7002 0.75L15.7502 6.774L9.7002 12.799" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`

}

export default Arrow;

// <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
//      style="transform: rotate(180deg);">
//   <path d="M6 9l6 6 6-6" stroke="black" stroke-width="2"/>
// </svg>
