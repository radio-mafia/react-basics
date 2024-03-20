import { useState } from 'react';

import Alert from '../components/Alert';
import Button from '../components/Button';
import ExpandableText from '../components/ExpandableText';
import ListGroup from '../components/ListGroup';

const Basics = () => {
  const items = ['New York', 'San Fracisco', 'Tokyo', 'London', 'Paris'];
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {/* Alert component that accepts children dynamically */}
      <Alert>
        Hello <span className="fw-bold">World</span>!
      </Alert>

      {/* Button component */}
      <Button onClick={() => console.log('Clicked')}>My Primary Button</Button>
      <Button color="secondary" onClick={() => console.log('Clicked')}>
        My Secondary Button
      </Button>
      {/* Gives compilation error by typescript for passing invalid color
      <Button color="anirudh" onClick={() => console.log('Clicked')}>
        My Invalid Color Button
      </Button> */}

      {/* List group with rendering lists, conditional rendering, state, props and child-to-parent communication */}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {/* Dismissable alerts */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>

      {/* Expand-able text */}
      <ExpandableText maxChars={90}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
        obcaecati quibusdam suscipit. Nostrum iure ratione provident, architecto
        autem aliquam vero in ipsam voluptatem nisi exercitationem quos labore
        voluptates impedit veniam. Quia officia fugit porro iure earum nostrum,
        odio molestiae saepe aspernatur laboriosam consequuntur odit unde sit
        quidem sint, vitae neque temporibus dolorem reprehenderit placeat
        assumenda incidunt ipsum quos! Voluptas totam ipsam quae possimus
        tenetur enim unde ratione nam ex facere dolore doloremque, dicta nostrum
        repellendus molestiae ipsum. Repellat est natus eum inventore quisquam,
        rerum explicabo exercitationem quis dolores officia! Ipsa odit veritatis
        ducimus debitis! Possimus quo sapiente cupiditate accusamus facere?
      </ExpandableText>
    </>
  );
};

export default Basics;
