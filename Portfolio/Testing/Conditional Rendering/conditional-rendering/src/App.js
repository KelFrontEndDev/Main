import './App.css';

export default function Button() {
  function handleClick() {
    alert('You Clicked me!')
  }
  return (
    <button onClick={handleClick}>
      I don't do anything
    </button>
  );
}