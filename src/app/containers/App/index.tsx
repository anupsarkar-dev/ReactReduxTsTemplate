import React from 'react';
 
import { Button } from 'antd';
import { RouteComponentProps } from 'react-router';
// import HeaderSideBar from 'app/components/HeaderSideBar';
import { HeaderTopBar } from 'app/components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = () => {

  return (
    <div >
   
      <HeaderTopBar>
        <Button type="primary" >Button </Button>
        <Button type="default" >Button </Button>
      </HeaderTopBar>
    </div>
  );
};
 
export default App;