import React, { Component } from 'react';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

// class PhoneLoader extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             error: null,
//             isFetching: true
//         }
//     }

//     componentDidMount() {
//         this.props.fetchCallback()
//         .then(data => {
//             this.setState({
//                 data
//             })
//         })

//         .catch(error => {
//             this.setState({
//                 error
//             })
//         })

//         .finally(() => {
//             this.setState({
//                 isFetching: false
//             })
//         })
//     }

//     render() {
//         return this.props.children(this.state)
//     }
// }

// export default PhoneLoader;

function PhoneLoader (props) {
  const { data, error, isFetching } = useData(() => {
    return fetch('/phones.json').then(res => res.json());
  });

  return (
    <ol>
      {data.map(p => (
        <li key={p.id}>
          {p.brand} - {p.model}
        </li>
      ))}
      {error & <p>Ooops, error</p>}
      {isFetching && <Spinner />}
    </ol>
  );
}

export default PhoneLoader;
/*
переписати userLoader на використання кастомного хука useData
*/
