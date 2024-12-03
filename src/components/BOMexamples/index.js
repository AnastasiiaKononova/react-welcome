import React, { Component } from 'react';

class BOM extends Component {
    render() {
        return (
            <div>
               <p>ви зробили запит за адресою: {window.location.pathname}</p>
               <p>в запиті була вказана додаткова інформація:
                {window.location.search}
               </p>
            </div>
        )
       }
    }

    export default BOM;