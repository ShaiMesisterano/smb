import React from 'react';

function Template({children}) {
    return children;
}

Template.Header = function({children}) {
    return (
        <header>
        {children}
      </header>
    )
}

Template.Content = function({children}) {
    return (
        <>
        {children}
        </>
    )
}

Template.Footer = function({children}) {
return (<footer>
        {children}
      </footer>)
}

export default Template;