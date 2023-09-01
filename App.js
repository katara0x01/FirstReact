
import './App.css';
import PageHeader from './components/PageHeader';
import Post from './components/Post';
import Button from './components/Button';
import React from 'react';

function App() {
  return (
    <div className="App">
      <PageHeader />

      <div className="content-container">
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />


        <div className="button-container">
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />
          <Button label="Tag Button" />

        </div>
      </div>
    </div>
  );
}

export default App;

