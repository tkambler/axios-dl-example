import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { axios } from './axios';

function App(): React.ReactElement {

  const dl = React.useCallback(() => {
    axios({
      responseType: 'blob',
      url: '/dl',
    })
      .then(res => {
        console.log(res);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'stuff.tar.gz');
        document.body.appendChild(link);
        link.click();
      });
  }, []);

  return (
    <div onClick={dl}>Click Me</div>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
