

import Button from 'react-bootstrap/Button';

function Buttons() {
  return (
    <div style={{display:"flex",gap:"20px"}}>
      <Button href="#">Link</Button> <Button type="submit">Button</Button>
      <Button as="input" type="button" value="Input" />
      <Button as="input" type="submit" value="Submit" />
      <Button as="input" type="reset" value="Reset" />
    </div>
  );
}

export default Buttons;