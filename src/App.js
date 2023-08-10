import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import ItemSearch from './components/ItemSearch';
import ItemValue from './components/ItemValue';

function App() {
  return (
    <div className='container is-fluid'>
      <ItemForm />
      <ItemSearch />
      <ItemList />
      <ItemValue />
    </div>
  );
}

export default App;
