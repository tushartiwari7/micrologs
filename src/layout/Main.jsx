import React from 'react'
import Header from './Header'
import EventsWidget from '../components/EventsWidget';
import NotesWidget from '../components/NotesWidget';
import Scratchpad from '../components/Scratchpad';
import {useModal} from '../context/modal-context';
const Main = () => {
  const {open} = useModal();

  return (
    <main className={`main grid ${open && 'blur'}`}>
      <Header/>
      <section className='grid grid-widgets p-md'>
        <NotesWidget />
        <Scratchpad />
        <EventsWidget />
      </section>
    </main>
  )
}

export default Main;