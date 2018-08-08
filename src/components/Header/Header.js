import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button } from '@material-ui/core';
import Link from 'next/link';

const Header = () =>
  <header>
    <AppBar position="static">
      <nav>
        <Toolbar>
          <Link href="/">
            <Button color="inherit">
              Home
            </Button>
          </Link>
          <Link href="/contacts">
            <Button color="inherit">
              Contacts
            </Button>
          </Link>
          <Link href="/search">
            <Button color="inherit">
              Search
            </Button>
          </Link>
          <Link href="/help">
            <Button color="inherit">
              Help
            </Button>
          </Link>
        </Toolbar>
      </nav>
    </AppBar>
  </header>;

export default Header;
