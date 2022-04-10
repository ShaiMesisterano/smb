import React from 'react';

function Template({children}: {children:  React.ReactNode}) {
    return children;
}

Template.Header = function({children}: {children:  React.ReactNode}) {
    return (
        <header>
        {children}
      </header>
    )
}

Template.Content = function({children}: {children:  React.ReactNode}) {
    return (
        <>
        {children}
        </>
    )
}

Template.Footer = function({children}: {children:  React.ReactNode}) {
return (<footer>
        {children}
      </footer>)
}

export default Template;