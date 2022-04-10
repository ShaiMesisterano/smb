import StyledWrapper from './StyledWrapper';

function Template({children}) {
    return children;
}

Template.Header = function({children}) {
    return (
        <header>
        {children}
        <ul>
          <li>list 1</li>
          <li>list 2</li>
        </ul>
      </header>
    )
}

Template.Content = function({children}) {
    return (
        <StyledWrapper>
        {children}
        </StyledWrapper>
    )
}

Template.Footer = function({children}) {
return (<footer>
        {children}
      </footer>)
}

export default Template;