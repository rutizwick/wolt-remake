import React from 'react';
import s from './Navbar.scss';
import { Dropdown } from 'wix-style-react';

export default function Navbar() {
  return (
    <div className={s.header}>
      <div className={s.navbar}>
        <div className={s.name}>Wolt</div>
        <div className="search">
          <input placeholder="Search" />
        </div>
        <div className={s.actionButtons}>
          <button>Log in</button>
          <button>Sign up</button>
          <div style={{width: '100px'}}>
          <Dropdown
          dropdownWidth="10px"
            placeholder="English"
            options={[
              { id: 'Azerbaijani', value: 'Azerbaijani' },
              { id: 'Dansk', value: 'Dansk' },
              { id: 'Deutsch', value: 'Deutsch' },
              { id: 'Eesti', value: 'Eesti' },
              { id: 'English', value: 'English' },
              { id: 'Hrvatski', value: 'Hrvatski' },
            ]}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
