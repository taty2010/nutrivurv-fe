import InlineSVG from 'svg-inline-react';

const svgSource = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.7286 14.7954L16.4083 3.48091L15.6495 2.72212C15.4766 2.55037 15.2428 2.45398 14.9991 2.45398C14.7554 2.45398 14.5216 2.55037 14.3488 2.72212L2.26965 14.7954C2.0925 14.9718 1.95249 15.182 1.85789 15.4135C1.76329 15.6449 1.71602 15.893 1.71887 16.143C1.73059 17.1743 2.58899 17.9975 3.62024 17.9975H4.86536V27.5395H25.1329V17.9975H26.4044C26.9054 17.9975 27.3771 17.8012 27.7316 17.4467C27.9061 17.2727 28.0444 17.0659 28.1385 16.838C28.2325 16.6102 28.2804 16.366 28.2794 16.1196C28.2794 15.6215 28.0831 15.1499 27.7286 14.7954ZM16.6398 25.4301H13.3585V19.4536H16.6398V25.4301ZM23.0236 15.8881V25.4301H18.5148V18.7504C18.5148 18.103 17.9904 17.5786 17.3429 17.5786H12.6554C12.0079 17.5786 11.4835 18.103 11.4835 18.7504V25.4301H6.97473V15.8881H4.16223L15.0021 5.05708L15.6788 5.73384L25.839 15.8881H23.0236Z" fill="#5A5A5A"/>
</svg>`

const HomeSVG = () => <InlineSVG src={svgSource} />

export default HomeSVG