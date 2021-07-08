import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import Modal from './Modal.jsx';

const ModalSwitch = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path='/:id/form' component={Modal} />
      </Switch>

      {background && <Route exact path='/:page/form' component={Modal} />}
    </>
  );

};

export default ModalSwitch;