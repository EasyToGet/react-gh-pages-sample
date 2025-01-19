import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap' //  引入 bootstrap 裡 modal 功能

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const modalRef = useRef(null);  //  宣告 modal 參考
  const customModal = useRef(null); //  宣告客製化 modal

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://randomuser.me/api/');
      console.log(res);
      
      openModal();  //  讀取資料後自動開啟 modal

      setTimeout(() => {  //  讀取資料完 2 秒，自動關掉 modal
        closeModal();
      }, 2000);
    })()
  }, []);

  useEffect(() => {
    // console.log(modalRef.current);
    customModal.current = new Modal(modalRef.current);  //  設定 modal 功能
    // customModal.current.show();
  }, [])

  const openModal = () => {
    //  開啟 modal
    customModal.current.show();
  }
  
  const closeModal = () => {
    //  關閉 modal
    customModal.current.hide();
  }

  return (
    <>
      {/* 使用 JS 操作 Modal  start */}
      <button type="button" className="btn btn-primary" onClick={() => openModal()}>
        Launch demo modal
      </button>

      <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* 使用 JS 操作 Modal end */}

      {/*  使用 bootstrap css 的 modal
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
