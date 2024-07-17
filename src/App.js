import React from 'react';
import './App.css';
import EventForm from './Componentes/StudentForm';
import EventList from './Componentes/StudentList';
import VistaCalendario from './Componentes/vistaCalendario';

const App = () => {
  return (
    <div className='container'>
      <h1>Agenda</h1>
      <EventForm />
      <br /><br />
      <div className='vista-eventos'>
        <div className='lista-eventos'>
          <EventList />
        </div>
        <div className='vista-calendario'>
          <VistaCalendario />
        </div>
      </div>
    </div>
  );
};

export default App;
